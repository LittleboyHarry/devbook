import React from 'react';

export default function BPlayer({
  id,
  page,
  lowQuality,
}: {
  id: string;
  page?: number;
  lowQuality?: boolean;
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <iframe
          src={`https://player.bilibili.com/player.html?bvid=${id}&page=${
            page || 1
          }&high_quality=${lowQuality ? 0 : 1}`}
          style={{
            width: '100%',
            height: '100%',
          }}
          scrolling="no"
          frameBorder="no"
          allowFullScreen
        />
      </div>
    </div>
  );
}
