const BackgroundEstatico = () => {
  return (
    <div 
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000',
            opacity: 0.45,
            // filter: 'blur(4px)'
        }}
        >
        <img src="IMG_0244.JPG" style={{height: '100%', width: '100%'}}/>
    </div>
  );
};

export default BackgroundEstatico;