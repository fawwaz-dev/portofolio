-- Enable RLS (Row Level Security)
ALTER TABLE IF EXISTS projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS contacts ENABLE ROW LEVEL SECURITY;

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  project_url TEXT,
  github_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  level INTEGER CHECK (level >= 1 AND level <= 100),
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create policies for public read access
CREATE POLICY "Allow public read access on projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access on skills" ON skills FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contacts" ON contacts FOR INSERT WITH CHECK (true);

-- Insert sample projects
INSERT INTO projects (title, description, image_url, project_url, github_url, technologies) VALUES
('E-Commerce Platform', 'Platform e-commerce modern dengan Next.js dan integrasi Stripe untuk pembayaran', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop', 'https://example.com', 'https://github.com', ARRAY['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS']),
('Task Management App', 'Aplikasi manajemen tugas kolaboratif dengan update real-time', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop', 'https://example.com', 'https://github.com', ARRAY['React', 'Node.js', 'Socket.io', 'MongoDB']),
('Weather Dashboard', 'Dashboard cuaca yang indah dengan forecast berdasarkan lokasi', 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop', 'https://example.com', 'https://github.com', ARRAY['Vue.js', 'Chart.js', 'OpenWeather API']),
('Social Media App', 'Aplikasi media sosial dengan fitur real-time chat dan stories', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop', 'https://example.com', 'https://github.com', ARRAY['React Native', 'Firebase', 'Redux']),
('Portfolio Website', 'Website portfolio modern dengan animasi dan dark mode', 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop', 'https://example.com', 'https://github.com', ARRAY['Next.js', 'Framer Motion', 'Tailwind CSS']),
('Learning Management System', 'Platform pembelajaran online dengan video streaming dan quiz', 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop', 'https://example.com', 'https://github.com', ARRAY['Next.js', 'Prisma', 'PostgreSQL', 'Stripe']);

-- Insert sample skills
INSERT INTO skills (name, level, category) VALUES
('JavaScript', 95, 'Frontend'),
('TypeScript', 90, 'Frontend'),
('React', 92, 'Frontend'),
('Next.js', 88, 'Frontend'),
('Vue.js', 85, 'Frontend'),
('Tailwind CSS', 90, 'Frontend'),
('Node.js', 85, 'Backend'),
('Python', 80, 'Backend'),
('PostgreSQL', 75, 'Database'),
('MongoDB', 70, 'Database'),
('Docker', 65, 'DevOps'),
('AWS', 60, 'DevOps');
