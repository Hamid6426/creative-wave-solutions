const PartnerPage = () => {
    return (
      <div className="bg-gray-50 py-12 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 sm:p-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Trusted Partners
            </h1>
            <p className="text-center text-gray-600 mb-10">
              We collaborate with some of the best companies and professionals in the industry to bring our clients cutting-edge solutions.
            </p>
  
            {/* Partner 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Designing & Branding Partners</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-black text-white rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        DF
                  </div>
                  <p className="font-medium text-gray-800">DesignFlow Studio</p>
                  <p className="text-gray-600">Branding and Design Experts</p>
                </div>
  
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-blue-400 rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        CM
                  </div>
                  <p className="font-medium text-gray-800">CreativeMind Agency</p>
                  <p className="text-gray-600">Creative Design and Digital Branding</p>
                </div>
  
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-slate-600 text-white rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        PC
                  </div>
                  <p className="font-medium text-gray-800">Pixel Craft</p>
                  <p className="text-gray-600">Innovative Web & Graphic Designers</p>
                </div>
  
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-violet-400 rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        SP
                  </div>
                  <p className="font-medium text-gray-800">StudioPro</p>
                  <p className="text-gray-600">UI/UX Design Professionals</p>
                </div>
              </div>
            </div>
  
            {/* Partner 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Development & Technology Partners</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-green-400 rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        TS
                  </div>
                  <p className="font-medium text-gray-800">TechSolutions</p>
                  <p className="text-gray-600">Advanced Web & Mobile Development</p>
                </div>
  
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-amber-400 text-white rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        CC
                  </div>
                  <p className="font-medium text-gray-800">CodeCrafters</p>
                  <p className="text-gray-600">Full-Stack Development Experts</p>
                </div>
  
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-teal-400 rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        DP
                  </div>
                  <p className="font-medium text-gray-800">DevPlus</p>
                  <p className="text-gray-600">Mobile App & Software Development</p>
                </div>

                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-orange-400 rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        CT
                  </div>
                  <p className="font-medium text-gray-800">CloudTech</p>
                  <p className="text-gray-600">Cloud Solutions and DevOps</p>
                </div>
              
              </div>
            </div>
  
            {/* Partner 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Marketing & Strategy Partners</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-red-400 rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        SB
                  </div>
                  <p className="font-medium text-gray-800">SocialBoost</p>
                  <p className="text-gray-600">Social Media Experts</p>
                </div>
  
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-sky-400 rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        GM
                  </div>
                  <p className="font-medium text-gray-800">GrowthMark</p>
                  <p className="text-gray-600">Digital Marketing Solutions</p>
                </div>
  
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        AC
                  </div>
                  <p className="font-medium text-gray-800">AdCrafters</p>
                  <p className="text-gray-600">PPC Campaign Management</p>
                </div>
  
                <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-purple-400 rounded-full overflow-hidden mb-4 text-4xl font-black flex items-center justify-center">
                        BM
                  </div>
                  <p className="font-medium text-gray-800">BrandMasters</p>
                  <p className="text-gray-600">Brand Strategy and Analytics</p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default PartnerPage;
  