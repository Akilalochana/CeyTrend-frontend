import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Save, Trash2, Download, Undo, Redo, Palette } from 'lucide-react';

const DrawCard = () => {
  const canvasRef = useRef(null);
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [isSaving, setIsSaving] = useState(false);

  const colors = [
    '#000000', // Black
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
    '#FFA500', // Orange
    '#800080', // Purple
    '#A52A2A', // Brown
  ];

  const handleSave = async () => {
    if (!canvasRef.current) return;

    setIsSaving(true);
    try {
      const dataUrl = await canvasRef.current.exportImage('png');
      // Here you would typically send the dataUrl to your backend
      console.log('Drawing saved:', dataUrl);
      
      // For demo purposes, we'll create a download link
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'birthday-card.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error saving drawing:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleClear = () => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Draw Your Birthday Card</h1>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Canvas Controls */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4">
              {/* Color Picker */}
              <div className="flex items-center space-x-2">
                <Palette className="text-gray-600" size={20} />
                <div className="flex space-x-1">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setStrokeColor(color)}
                      className={`w-6 h-6 rounded-full border-2 transition-transform
                        ${strokeColor === color ? 'scale-110 border-gray-400' : 'border-transparent'}
                      `}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Stroke Width */}
              <div className="flex items-center space-x-2">
                <label htmlFor="strokeWidth" className="text-sm text-gray-600">
                  Stroke Width:
                </label>
                <input
                  type="range"
                  id="strokeWidth"
                  min="1"
                  max="20"
                  value={strokeWidth}
                  onChange={(e) => setStrokeWidth(Number(e.target.value))}
                  className="w-24"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 ml-auto">
                <button
                  onClick={() => canvasRef.current?.undo()}
                  className="p-2 text-gray-600 hover:text-purple-500 transition-colors"
                  title="Undo"
                >
                  <Undo size={20} />
                </button>
                <button
                  onClick={() => canvasRef.current?.redo()}
                  className="p-2 text-gray-600 hover:text-purple-500 transition-colors"
                  title="Redo"
                >
                  <Redo size={20} />
                </button>
                <button
                  onClick={handleClear}
                  className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                  title="Clear Canvas"
                >
                  <Trash2 size={20} />
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSaving ? (
                    'Saving...'
                  ) : (
                    <>
                      <Save className="mr-2" size={20} />
                      Save Drawing
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="relative" style={{ height: '600px' }}>
            <ReactSketchCanvas
              ref={canvasRef}
              strokeWidth={strokeWidth}
              strokeColor={strokeColor}
              backgroundImage="https://source.unsplash.com/random/800x600?birthday"
              exportWithBackgroundImage={true}
              withTimestamp={true}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-purple-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-800 mb-4">Tips for Creating Your Card</h2>
          <ul className="space-y-2 text-purple-700">
            <li>• Use different colors to make your card more vibrant</li>
            <li>• Adjust the stroke width for different effects</li>
            <li>• Use the undo/redo buttons if you make a mistake</li>
            <li>• Save your drawing when you're done</li>
            <li>• You can clear the canvas and start over at any time</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default DrawCard; 