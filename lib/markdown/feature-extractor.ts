/**
 * Feature extraction utilities for parsing README files
 */

export interface Feature {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

/**
 * Extract features from README markdown content
 * Looks for "Features", "Key Features", or "Highlights" sections
 */
export function extractFeaturesFromReadme(readme: string): Feature[] {
  if (!readme) return [];

  try {
    // Find features section (case insensitive)
    const featuresMatch = readme.match(
      /##?\s*(?:Key\s+)?(?:Features?|Highlights?|What'?s?\s+Included)\s*\n([\s\S]*?)(?=\n##|$)/i
    );

    if (!featuresMatch) return [];

    const featuresSection = featuresMatch[1];

    // Parse bullet points (-, *, or emoji prefixes)
    const bulletPattern = /^[\s]*[-*•]\s+(.+?)(?:\n|$)/gm;
    const bullets: string[] = [];
    let match;

    while ((match = bulletPattern.exec(featuresSection)) !== null) {
      bullets.push(match[1].trim());
    }

    // Transform to Feature objects
    const features = bullets.slice(0, 6).map((bullet) => {
      // Remove emoji if present
      const cleanBullet = bullet.replace(/^[^\w\s]+\s*/, "");

      // Split by colon, dash, or em-dash
      const parts = cleanBullet.split(/[:–-]/);
      const title = parts[0].trim();
      const description = parts.slice(1).join(":").trim() || title;

      return {
        title,
        description,
        icon: mapKeywordToIcon(title + " " + description),
      };
    });

    return features;
  } catch (error) {
    console.error("Error extracting features from README:", error);
    return [];
  }
}

/**
 * Map keywords in text to Lucide React icon names
 */
function mapKeywordToIcon(text: string): string {
  const lowerText = text.toLowerCase();

  const iconMappings: Record<string, string> = {
    // Data & Analytics
    "monitor|tracking|analytics|metrics|observ": "LineChart",
    "chart|graph|visual": "BarChart3",
    "dashboard|panel": "LayoutDashboard",

    // Security
    "security|secure|auth|encryption|protect|safe": "Shield",
    "lock|password|credential": "Lock",
    "key|token": "Key",

    // Development
    "api|rest|graphql|endpoint": "Code",
    "database|storage|data|sql|nosql": "Database",
    "server|backend|infrastructure": "Server",
    "docker|container|pod": "Container",
    "cloud|aws|azure|gcp|deploy": "Cloud",
    "git|version|repo": "GitBranch",

    // Performance
    "fast|performance|speed|quick|optimi": "Zap",
    "cache|memory|redis": "Cpu",
    "scale|scalab": "TrendingUp",

    // Interface
    "ui|interface|dashboard|frontend": "Layout",
    "mobile|responsive": "Smartphone",
    "desktop|app": "Monitor",

    // Files & Documents
    "file|document": "FileText",
    "folder|directory": "Folder",
    "download|export": "Download",
    "upload|import": "Upload",

    // Network
    "network|http|tcp|udp": "Network",
    "dns|domain": "Globe",
    "webhook|event": "Webhook",

    // Tools
    "tool|utility|helper": "Wrench",
    "plugin|extension|addon": "Puzzle",
    "config|setting": "Settings",
    "automation|automat": "Cog",

    // Quality
    "test|testing|qa": "CheckCircle",
    "error|bug|debug": "Bug",
    "log|logging": "FileText",

    // Collaboration
    "team|collaboration|share": "Users",
    "notification|alert|notify": "Bell",
    "message|chat|communication": "MessageSquare",

    // Time & Management
    "time|schedule|cron": "Clock",
    "task|job|queue": "ListTodo",
    "workflow|pipeline": "GitBranch",

    // Misc
    "search|find|query": "Search",
    "filter|sort": "Filter",
    "open source|oss|free": "Heart",
    "documentation|docs|guide": "BookOpen",
  };

  // Find matching icon
  for (const [pattern, icon] of Object.entries(iconMappings)) {
    const regex = new RegExp(pattern, "i");
    if (regex.test(lowerText)) {
      return icon;
    }
  }

  // Default icon
  return "Star";
}

/**
 * Get fallback features for specific projects
 * Used when README parsing fails
 */
export function getFallbackFeatures(slug: string): Feature[] {
  const fallbacks: Record<string, Feature[]> = {
    nexoraldns: [
      {
        title: "Custom Domain Management",
        description: "Configure and manage custom domains for your local network",
        icon: "Globe",
      },
      {
        title: "Real-time Monitoring",
        description: "Track DNS queries and response times in real-time",
        icon: "LineChart",
      },
      {
        title: "Security Filtering",
        description: "Built-in ad-blocking and malware protection",
        icon: "Shield",
      },
      {
        title: "Web Interface",
        description: "Modern dashboard for DNS server management",
        icon: "LayoutDashboard",
      },
    ],
    axiodb: [
      {
        title: "MongoDB-Style Queries",
        description: "Familiar query syntax with complex operations",
        icon: "Database",
      },
      {
        title: "AES-256 Encryption",
        description: "Built-in encryption for sensitive data",
        icon: "Lock",
      },
      {
        title: "Zero Dependencies",
        description: "Pure JavaScript with no native modules",
        icon: "CheckCircle",
      },
      {
        title: "Worker Threads",
        description: "Async operations for high performance",
        icon: "Zap",
      },
    ],
  };

  return fallbacks[slug] || [];
}
