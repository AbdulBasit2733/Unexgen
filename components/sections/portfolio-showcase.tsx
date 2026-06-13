'use client';

import React, { useState } from 'react';
import { caseStudies } from '@/lib/utils';
import Image from 'next/image';
import { Carousel } from '@/components/ui/carousel';
import { BarChart3, ImageIcon, MapPin, TrendingUp, X, Zap } from 'lucide-react';

type PortfolioProject = typeof caseStudies[0] & {
  coverImage: string;
  gallery: string[];
  summary: string;
  scope: string[];
  outcomes: string[];
};

const projectDetails: Record<string, Omit<PortfolioProject, keyof typeof caseStudies[0]>> = {
  'manufacturing-plant': {
    coverImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=85',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=85',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=85',
    ],
    summary:
      'A large manufacturing facility upgraded its energy infrastructure with solar generation, real-time monitoring, and optimized power distribution for high-load operations.',
    scope: ['Rooftop and ground-mounted solar array', 'Energy monitoring dashboard', 'Load balancing setup', 'Operations team handover'],
    outcomes: ['Reduced grid dependency during production hours', 'Improved uptime visibility', 'Lowered long-term operating costs'],
  },
  'residential-complex': {
    coverImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200&q=85',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=85',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=85',
    ],
    summary:
      'A residential complex adopted shared solar infrastructure to reduce common-area energy expenses and support net-metered generation.',
    scope: ['Common-area solar installation', 'Metering integration', 'Battery-ready electrical design', 'Resident association reporting'],
    outcomes: ['Lowered monthly utility burden', 'Improved sustainability profile', 'Clear generation and savings reporting'],
  },
  'warehouse-facility': {
    coverImage: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=85',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85',
    ],
    summary:
      'A warehouse facility modernized its power setup with renewable generation and performance tracking for lighting, storage, and logistics workloads.',
    scope: ['Warehouse solar deployment', 'Energy usage analytics', 'Electrical safety checks', 'Maintenance schedule planning'],
    outcomes: ['Reduced peak-hour energy costs', 'Better facility-level reporting', 'Prepared the site for future EV charging'],
  },
  'residential-complex-1': {
    coverImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200&q=85',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=85',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=85',
    ],
    summary:
      'A residential complex adopted shared solar infrastructure to reduce common-area energy expenses and support net-metered generation.',
    scope: ['Common-area solar installation', 'Metering integration', 'Battery-ready electrical design', 'Resident association reporting'],
    outcomes: ['Lowered monthly utility burden', 'Improved sustainability profile', 'Clear generation and savings reporting'],
  },
  'manufacturing-plant-1': {
    coverImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=85',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=85',
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=85',
    ],
    summary:
      'A large manufacturing facility upgraded its energy infrastructure with solar generation, real-time monitoring, and optimized power distribution for high-load operations.',
    scope: ['Rooftop and ground-mounted solar array', 'Energy monitoring dashboard', 'Load balancing setup', 'Operations team handover'],
    outcomes: ['Reduced grid dependency during production hours', 'Improved uptime visibility', 'Lowered long-term operating costs'],
  },
  'residential-complex-3': {
    coverImage: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200&q=85',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=85',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=85',
    ],
    summary:
      'A residential complex adopted shared solar infrastructure to reduce common-area energy expenses and support net-metered generation.',
    scope: ['Common-area solar installation', 'Metering integration', 'Battery-ready electrical design', 'Resident association reporting'],
    outcomes: ['Lowered monthly utility burden', 'Improved sustainability profile', 'Clear generation and savings reporting'],
  },
};

const projects: PortfolioProject[] = caseStudies.map((study) => ({
  ...study,
  ...projectDetails[study.id],
}));

const PortfolioCard: React.FC<{
  project: PortfolioProject;
  onViewDetails: (project: PortfolioProject) => void;
}> = ({ project, onViewDetails }) => (
  <div className="px-2 sm:px-6 h-full">
    <div className="card-elevated h-full overflow-hidden flex flex-col">
      <div className="relative h-72 sm:h-96 flex-shrink-0 overflow-hidden bg-secondary">
        <Image
          src={project.coverImage}
          alt={`${project.title} project`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute left-4 top-4 glass-light px-3 py-1 rounded-lg text-xs font-bold text-foreground">
          PROJECT
        </div>
      </div>

      <div className="p-5 sm:p-8 flex-1 flex flex-col">
        <div className="glass-light px-4 py-2 rounded-xl inline-flex items-center gap-2 mb-4 w-fit">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-foreground">Carbon: {project.carbonOffset}</span>
        </div>

        <h3 className="text-2xl font-black mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mb-6 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          {project.location}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Annual Savings</div>
            <div className="text-2xl font-black text-primary flex items-center gap-1">
              <TrendingUp className="w-6 h-6" />
              {project.annualKwhSaved}
            </div>
          </div>
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="px-6 py-3 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-xl font-bold transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ProjectModal: React.FC<{
  project: PortfolioProject;
  onClose: () => void;
  onOpenImage: (src: string) => void;
}> = ({ project, onClose, onOpenImage }) => (
  <div className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-sm px-4 py-6 sm:py-10">
    <div className="mx-auto flex max-h-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
      <div className="flex items-start justify-between gap-4 border-b border-border p-5 sm:p-6">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary">Project Details</p>
          <h3 className="text-2xl sm:text-3xl font-black text-foreground">{project.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {project.location}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:text-primary"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="overflow-y-auto p-5 sm:p-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <button
              type="button"
              onClick={() => onOpenImage(project.coverImage)}
              className="relative block h-72 w-full overflow-hidden rounded-2xl border border-border bg-secondary sm:h-96"
              aria-label={`Open ${project.title} image`}
            >
              <Image src={project.coverImage} alt={`${project.title} main project view`} fill className="object-cover" />
            </button>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => onOpenImage(image)}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-secondary"
                  aria-label={`Open project gallery image ${index + 1}`}
                >
                  <Image src={image} alt={`${project.title} gallery image ${index + 1}`} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground">{project.summary}</p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-secondary p-5">
                <BarChart3 className="mb-3 h-6 w-6 text-primary" />
                <p className="text-sm text-muted-foreground">Annual Savings</p>
                <p className="text-2xl font-black text-foreground">{project.annualKwhSaved}</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary p-5">
                <Zap className="mb-3 h-6 w-6 text-primary" />
                <p className="text-sm text-muted-foreground">Carbon Offset</p>
                <p className="text-2xl font-black text-foreground">{project.carbonOffset}</p>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-bold text-foreground">Scope of Work</h4>
              <ul className="space-y-2">
                {project.scope.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-bold text-foreground">Transformation Outcomes</h4>
              <ul className="space-y-2">
                {project.outcomes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ImageLightbox: React.FC<{
  src: string;
  onClose: () => void;
}> = ({ src, onClose }) => (
  <div className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 p-4">
    <button
      type="button"
      onClick={onClose}
      className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:text-primary"
      aria-label="Close full image"
    >
      <X className="h-5 w-5" />
    </button>
    <div className="relative h-[82vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-card">
      <Image src={src} alt="Full project view" fill className="object-contain" sizes="100vw" />
    </div>
  </div>
);

export const PortfolioShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [fullImage, setFullImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="section-container">
      <div className="mb-12 text-center">
        <h2 className="section-heading mb-4">
          Projects <span className="text-gradient-emerald">We Have Delivered</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A look at renewable energy projects we have worked on, with measurable savings and documented transformation outcomes.
        </p>
      </div>

      <Carousel autoplay autoplayDelay={6000} showDots>
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} onViewDetails={setSelectedProject} />
        ))}
      </Carousel>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenImage={setFullImage}
        />
      )}

      {fullImage && <ImageLightbox src={fullImage} onClose={() => setFullImage(null)} />}
    </section>
  );
};
