// Performance monitoring utilities

export interface PerformanceMetrics {
  fps: number;
  memoryUsage?: number;
  cpuUsage?: number;
  frameTime: number;
  isLowPerformance: boolean;
}

export class PerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;
  private frameTime = 16.67;
  private isLowPerformance = false;

  constructor() {
    this.checkDeviceCapabilities();
    this.startMonitoring();
  }

  private checkDeviceCapabilities() {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 4;
    const hasReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    this.isLowPerformance = isMobile || isLowEnd || hasReducedMotion;
  }

  private startMonitoring() {
    const measurePerformance = () => {
      const currentTime = performance.now();
      const deltaTime = currentTime - this.lastTime;

      this.frameCount++;

      if (deltaTime >= 1000) {
        this.fps = Math.round((this.frameCount * 1000) / deltaTime);
        this.frameTime = deltaTime / this.frameCount;

        this.frameCount = 0;
        this.lastTime = currentTime;

        // Log performance warnings
        if (this.fps < 30) {
          console.warn(`Low FPS detected: ${this.fps}fps`);
        }

        if (this.frameTime > 33) {
          console.warn(
            `High frame time detected: ${this.frameTime.toFixed(2)}ms`
          );
        }
      }

      requestAnimationFrame(measurePerformance);
    };

    requestAnimationFrame(measurePerformance);
  }

  public getMetrics(): PerformanceMetrics {
    return {
      fps: this.fps,
      frameTime: this.frameTime,
      isLowPerformance: this.isLowPerformance,
      memoryUsage: (performance as { memory?: { usedJSHeapSize: number } })
        .memory?.usedJSHeapSize,
      cpuUsage: navigator.hardwareConcurrency,
    };
  }

  public shouldReduceAnimations(): boolean {
    return this.isLowPerformance || this.fps < 30;
  }
}

// Throttle function for performance optimization
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Debounce function for performance optimization
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return function (this: unknown, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Check if device supports reduced motion
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Check device performance capabilities
export function getDeviceCapabilities() {
  return {
    isMobile: window.innerWidth < 768,
    isLowEnd: navigator.hardwareConcurrency <= 4,
    hasReducedMotion: prefersReducedMotion(),
    hardwareConcurrency: navigator.hardwareConcurrency,
    userAgent: navigator.userAgent,
  };
}

// Performance optimization helpers
export const performanceHelpers = {
  // Reduce animation complexity based on device capabilities
  shouldReduceAnimations: () => {
    const capabilities = getDeviceCapabilities();
    return (
      capabilities.isMobile ||
      capabilities.isLowEnd ||
      capabilities.hasReducedMotion
    );
  },

  // Optimize 3D rendering settings
  get3DSettings: () => {
    const capabilities = getDeviceCapabilities();
    return {
      antialias: !capabilities.isLowEnd,
      dpr: capabilities.isLowEnd ? 1 : [1, 2],
      powerPreference: "high-performance" as const,
      stencil: false,
      depth: true,
    };
  },

  // Optimize animation frame rate
  getOptimalFrameRate: () => {
    const capabilities = getDeviceCapabilities();
    return capabilities.isLowEnd ? 30 : 60;
  },
};

// Debug performance issues
export function debugPerformance() {
  const monitor = new PerformanceMonitor();

  setInterval(() => {
    const metrics = monitor.getMetrics();
    console.log("Performance Metrics:", metrics);

    if (metrics.fps < 30) {
      console.warn("Performance Issue: Low FPS detected");
    }

    if (metrics.frameTime > 33) {
      console.warn("Performance Issue: High frame time detected");
    }
  }, 2000);
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();
