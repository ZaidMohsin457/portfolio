export type Section = "hero" | "about" | "skills" | "experience" | "projects" | "contact";

export const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.20, y: 0.20, z: 0.20 },
      position: { x: 225, y: -100, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    tablet: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 150, y: -80, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.15, y: 0.15, z: 0.15 },
      position: { x: 0, y: 120, z: 0 },
      rotation: { x: -0.3, y: 0.2, z: 0 },
    },
  },
  about: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    tablet: {
      scale: { x: 0.35, y: 0.35, z: 0.35 },
      position: { x: 0, y: -30, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 10,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: 0, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 8,
        z: 0,
      },
    },
  },
  experience: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: Math.PI / 12,
        y: -Math.PI / 4,
        z: 0,
      },
    },
    tablet: {
      scale: { x: 0.22, y: 0.22, z: 0.22 },
      position: { x: 0, y: -30, z: 0 },
      rotation: {
        x: Math.PI / 14,
        y: -Math.PI / 5,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 50, z: 0 },
      rotation: {
        x: Math.PI / 8,
        y: -Math.PI / 6,
        z: 0,
      },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    tablet: {
      scale: { x: 0.22, y: 0.22, z: 0.22 },
      position: { x: 0, y: -20, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 10,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 50, z: 0 },
      rotation: {
        x: -0.2,
        y: Math.PI / 8,
        z: 0,
      },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
    tablet: {
      scale: { x: 0.20, y: 0.20, z: 0.20 },
      position: { x: 0, y: 80, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
    mobile: {
      scale: { x: 0.15, y: 0.15, z: 0.15 },
      position: { x: 0, y: 120, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 4,
        z: Math.PI,
      },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 350, y: -250, z: 0 },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    tablet: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 200, y: -180, z: 0 },
      rotation: {
        x: 0,
        y: 0.1,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.12, y: 0.12, z: 0.12 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI * 0.8,
        y: Math.PI / 4,
        z: Math.PI * 0.9,
      },
    },
  },
};

export const getKeyboardState = ({
  section,
  isMobile,
  isTablet = false,
}: {
  section: Section;
  isMobile: boolean;
  isTablet?: boolean;
}) => {
  const getDeviceType = (): "mobile" | "tablet" | "desktop" => {
    if (isMobile) return "mobile";
    if (isTablet) return "tablet";
    return "desktop";
  };
  
  const deviceType = getDeviceType();
  const baseTransform = STATES[section][deviceType];

  const getScaleOffset = () => {
    if (typeof window === 'undefined') return 1;
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Reference dimensions for each device type
    const refs = {
      mobile: { width: 390, height: 844 },
      tablet: { width: 834, height: 1194 },
      desktop: { width: 1280, height: 800 },
    };
    
    const ref = refs[deviceType];
    
    // Use the smaller ratio to ensure keyboard fits
    const widthRatio = width / ref.width;
    const heightRatio = height / ref.height;
    const targetScale = Math.min(widthRatio, heightRatio);

    // Clamp values to prevent extremes based on device
    const clamps = {
      mobile: { min: 0.6, max: 1.2 },
      tablet: { min: 0.7, max: 1.1 },
      desktop: { min: 0.5, max: 1.15 },
    };
    
    const { min, max } = clamps[deviceType];
    return Math.min(Math.max(targetScale, min), max);
  };

  const getPositionOffset = () => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Adjust position based on viewport for mobile
    if (isMobile) {
      const xOffset = 0;
      // Adjust Y position based on viewport height
      const yOffset = height < 700 ? -30 : height > 900 ? 30 : 0;
      return { x: xOffset, y: yOffset };
    }
    
    if (isTablet) {
      const xOffset = width < 900 ? -20 : 0;
      return { x: xOffset, y: 0 };
    }
    
    return { x: 0, y: 0 };
  };

  const scaleOffset = getScaleOffset();
  const posOffset = getPositionOffset();

  return {
    ...baseTransform,
    scale: {
      x: Math.abs(baseTransform.scale.x * scaleOffset),
      y: Math.abs(baseTransform.scale.y * scaleOffset),
      z: Math.abs(baseTransform.scale.z * scaleOffset),
    },
    position: {
      x: baseTransform.position.x + posOffset.x,
      y: baseTransform.position.y + posOffset.y,
      z: baseTransform.position.z,
    },
  };
};
