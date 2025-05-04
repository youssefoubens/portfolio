import { useContext, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectGallery = () => {
  const { selectedProject } = useContext(SingleProjectContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  if (!selectedProject || !selectedProject.ProjectImages?.length) {
    return <p className="text-center p-4">No project images available</p>;
  }

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const navigate = (direction) => {
    setCurrentIndex(prev => {
      if (direction === 'prev') {
        return prev === 0 ? selectedProject.ProjectImages.length - 1 : prev - 1;
      } else {
        return prev === selectedProject.ProjectImages.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <div className="p-4">
      {/* Main Image Display */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
        <img
          src={selectedProject.ProjectImages[currentIndex].img}
          alt={selectedProject.ProjectImages[currentIndex].title || `Project image ${currentIndex + 1}`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => openModal(currentIndex)}
        />
        
        {/* Navigation Arrows */}
        <button 
          onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          aria-label="Previous image"
        >
          &lt;
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); navigate('next'); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          aria-label="Next image"
        >
          &gt;
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {selectedProject.ProjectImages.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-2 mt-4 overflow-x-auto py-2">
        {selectedProject.ProjectImages.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex-shrink-0 w-20 h-16 cursor-pointer border-2 rounded transition-all ${index === currentIndex ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={project.img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full">
            <img
              src={selectedProject.ProjectImages[currentIndex].img}
              alt={selectedProject.ProjectImages[currentIndex].title || 'Project preview'}
              className="max-w-full max-h-[90vh] object-contain mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
              aria-label="Close"
            >
              ✕
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 p-2"
              aria-label="Previous image"
            >
              &lt;
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 p-2"
              aria-label="Next image"
            >
              &gt;
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-full">
              {selectedProject.ProjectImages[currentIndex].title || `Image ${currentIndex + 1}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;