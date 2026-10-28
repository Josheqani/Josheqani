import "server-only";

export interface GithubAvatarResult {
  avatarUrl: string;
  profileUrl: string;
  name: string;
}

export async function getGithubAvatar(
  username: string
): Promise<GithubAvatarResult | null> {
  const cleanUsername = username?.trim();
  if (!cleanUsername) {
    return null;
  }

  const fallbackResult: GithubAvatarResult = {
    avatarUrl: `https://github.com/${cleanUsername}.png?s=800`,
    profileUrl: `https://github.com/${cleanUsername}`,
    name: cleanUsername,
  };

  try {
    const res = await fetch(`https://api.github.com/users/${cleanUsername}`, {
      headers: {
        "User-Agent": "Josheqani-Portfolio",
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return fallbackResult;
    }

    const data = await res.json();
    const rawAvatar = data.avatar_url;

    if (!rawAvatar) {
      return fallbackResult;
    }

    const separator = rawAvatar.includes("?") ? "&" : "?";
    const avatarUrl = `${rawAvatar}${separator}s=800`;

    return {
      avatarUrl,
      profileUrl: data.html_url || fallbackResult.profileUrl,
      name: data.name || cleanUsername,
    };
  } catch {
    return fallbackResult;
  }
}
