import React from 'react';

interface PhoneFrameProps {
  /** real app screenshot (WebP) from /public/screens */
  src: string;
  /** accessible description of the screen */
  alt: string;
  /** wrapper classes: size, position, transforms */
  className?: string;
  /** crop window mode: shows a region of the screenshot instead of the full screen */
  crop?: { aspect: string; position?: string };
  /** eager-load (hero) vs lazy (below the fold) */
  priority?: boolean;
}

/**
 * Real JAC screenshots inside a premium Android phone frame.
 * The screenshot is never redrawn or altered — only framed.
 */
export const PhoneFrame: React.FC<PhoneFrameProps> = ({ src, alt, className = '', crop, priority = false }) => {
  return (
    <div className={'jac-phone ' + className}>
      <div className="jac-phone-bezel">
        <span className="jac-phone-speaker" aria-hidden="true" />
        {crop ? (
          <div className="jac-phone-viewport" style={{ aspectRatio: crop.aspect }}>
            <img
              src={src}
              alt={alt}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              style={{ objectPosition: crop.position ?? '50% 50%', top: crop.position ? 'auto' : 0, bottom: 0, height: 'auto', width: '100%' }}
            />
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="jac-phone-screen"
          />
        )}
        <span className="jac-phone-gloss" aria-hidden="true" />
      </div>
    </div>
  );
};
