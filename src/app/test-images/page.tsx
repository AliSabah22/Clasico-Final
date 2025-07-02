export default function TestImagesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Photo 1</h2>
          <img 
            src="/images/gallary_photos/photo1.jpg" 
            alt="Test 1" 
            className="w-full h-64 object-cover rounded"
            onError={(e) => console.error('Failed to load photo1.jpg')}
            onLoad={() => console.log('Successfully loaded photo1.jpg')}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Photo 2</h2>
          <img 
            src="/images/gallary_photos/photo2.jpg" 
            alt="Test 2" 
            className="w-full h-64 object-cover rounded"
            onError={(e) => console.error('Failed to load photo2.jpg')}
            onLoad={() => console.log('Successfully loaded photo2.jpg')}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Logo</h2>
          <img 
            src="/images/logo.jpg" 
            alt="Logo" 
            className="w-full h-64 object-cover rounded"
            onError={(e) => console.error('Failed to load logo.jpg')}
            onLoad={() => console.log('Successfully loaded logo.jpg')}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Hero BG</h2>
          <img 
            src="/images/hero/hero-bg.jpeg" 
            alt="Hero BG" 
            className="w-full h-64 object-cover rounded"
            onError={(e) => console.error('Failed to load hero-bg.jpeg')}
            onLoad={() => console.log('Successfully loaded hero-bg.jpeg')}
          />
        </div>
      </div>
    </div>
  );
} 