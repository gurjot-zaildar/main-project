

const Footer = () => {
  return (
    <div className="bg-gray-800 absolute flex flex-col text-white w-screen text-center gap-3 -bottom-12 lg:-bottom-16  p-2">
            <div>
             <p>
                      Made with ❤️ for food lovers   
                </p>
            </div>
            <div className=" flex gap-10 lg:gap-30 justify-center">

            <a href="https://instagram.com/gurjot_zaildar_pb12"
              ><img className="h-10 hover:scale-110" 
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              alt="instagram"
              /></a>
            <a href="https://github.com/gurjot-zaildar"
              ><img className="h-10 hover:scale-110 rounded-xl"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="github"
              /></a>
            <a
              href="https://www.linkedin.com/in/gurjot-singh-9332b6281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              ><img className="h-10 hover:scale-110 transition"
              src="https://cdn-icons-png.flaticon.com/512/1384/1384062.png"
              alt="linkedin"
              /></a>
    
              </div>
               <div>
             <p>
                    © 2025 Recipe Manager. All Rights Reserved.  
                </p>
            </div>
    </div>
  )
}

export default Footer
