// Videobg.tsx
const Videobg = () => {
  return (
    // className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none"
    <div 
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            opacity: 0.25,
            filter: 'blur(4px)'
        }}
        >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src="/IMG_7181.MP4"
      />
    </div>
  );
};

export default Videobg;
