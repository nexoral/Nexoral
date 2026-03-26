/**
 * Code block extraction utilities for parsing README files
 */

export interface CodeBlock {
  language: string;
  code: string;
}

/**
 * Extract installation commands from README
 */
export function extractInstallation(readme: string): string | null {
  if (!readme) return null;

  try {
    // Find Installation section
    const installMatch = readme.match(
      /##?\s*Install(?:ation|ing)?(?:\s+&\s+Usage)?\s*\n([\s\S]*?)(?=\n##|$)/i
    );

    if (!installMatch) return null;

    const installSection = installMatch[1];

    // Extract code block (bash, sh, shell, or no language)
    const codeMatch = installSection.match(
      /```(?:bash|sh|shell|console)?\n([\s\S]*?)```/
    );

    if (codeMatch) {
      return codeMatch[1].trim();
    }

    // Try to find npm/yarn/go install commands without code blocks
    const commandMatch = installSection.match(
      /((?:npm|yarn|pnpm|go|pip|cargo)\s+install[\s\S]*?)(?:\n\n|$)/i
    );

    if (commandMatch) {
      return commandMatch[1].trim();
    }

    return null;
  } catch (error) {
    console.error("Error extracting installation from README:", error);
    return null;
  }
}

/**
 * Extract usage example from README
 */
export function extractUsage(readme: string): CodeBlock | null {
  if (!readme) return null;

  try {
    // Find Usage or Example section
    const usageMatch = readme.match(
      /##?\s*(?:Usage|Example|Quick\s+Start|Getting\s+Started)\s*\n([\s\S]*?)(?=\n##|$)/i
    );

    if (!usageMatch) return null;

    const usageSection = usageMatch[1];

    // Extract first code block with language
    const codeMatch = usageSection.match(/```(\w+)?\n([\s\S]*?)```/);

    if (codeMatch) {
      const language = codeMatch[1] || "javascript";
      const code = codeMatch[2].trim();
      return { language, code };
    }

    return null;
  } catch (error) {
    console.error("Error extracting usage from README:", error);
    return null;
  }
}

/**
 * Extract all code blocks from README
 */
export function extractAllCodeBlocks(readme: string): CodeBlock[] {
  if (!readme) return [];

  try {
    const blocks: CodeBlock[] = [];
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let match;

    while ((match = codeBlockRegex.exec(readme)) !== null) {
      blocks.push({
        language: match[1] || "text",
        code: match[2].trim(),
      });
    }

    return blocks;
  } catch (error) {
    console.error("Error extracting code blocks from README:", error);
    return [];
  }
}

/**
 * Get fallback installation command for specific projects
 */
export function getFallbackInstallation(slug: string, language?: string): string {
  const fallbacks: Record<string, string> = {
    axiodb: `npm install axiodb\n\n# Or using Yarn\nyarn add axiodb`,
    nexoraldns: `# Pull the Docker image\ndocker pull nexoral/nexoraldns:latest\n\n# Run the DNS server\ndocker run -d \\
  --name nexoraldns \\
  -p 53:53/udp \\
  -p 53:53/tcp \\
  -p 3000:3000 \\
  nexoral/nexoraldns:latest`,
    containdb: `# Install using Go\ngo install github.com/nexoral/containdb@latest\n\n# Or download binary from releases\ncurl -L https://github.com/nexoral/containdb/releases/latest/download/containdb-linux-amd64 -o containdb\nchmod +x containdb\nsudo mv containdb /usr/local/bin/`,
    xpack: `# Install using Go\ngo install github.com/nexoral/xpack@latest\n\n# Or download from releases\nwget https://github.com/nexoral/xpack/releases/latest/download/xpack-linux-amd64\nchmod +x xpack-linux-amd64\nsudo mv xpack-linux-amd64 /usr/local/bin/xpack`,
  };

  if (fallbacks[slug]) {
    return fallbacks[slug];
  }

  // Generic fallbacks based on language
  if (language) {
    const genericFallbacks: Record<string, string> = {
      javascript: `npm install ${slug}`,
      typescript: `npm install ${slug}`,
      python: `pip install ${slug}`,
      go: `go get github.com/nexoral/${slug}`,
      rust: `cargo install ${slug}`,
      ruby: `gem install ${slug}`,
    };

    return genericFallbacks[language.toLowerCase()] || `# Check GitHub for installation instructions`;
  }

  return `# Check GitHub for installation instructions`;
}

/**
 * Get fallback usage example for specific projects
 */
export function getFallbackUsage(slug: string, language?: string): CodeBlock {
  const fallbacks: Record<string, CodeBlock> = {
    axiodb: {
      language: "javascript",
      code: `import { AxioDB } from 'axiodb';

// Initialize database
const db = new AxioDB({
  path: './data',
  encryption: true,
  encryptionKey: 'your-secret-key'
});

// Insert documents
await db.collection('users').insert({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

// Query with MongoDB-style syntax
const users = await db.collection('users').find({
  age: { $gte: 18 }
});`,
    },
  };

  if (fallbacks[slug]) {
    return fallbacks[slug];
  }

  // Generic fallback
  return {
    language: language || "javascript",
    code: `// See README for usage examples`,
  };
}
