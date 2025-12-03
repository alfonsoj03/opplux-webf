export function Footer() {
  return (
    <footer className="bg-white text-black py-16 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-4 h-2 border-2 border-white rounded-full" />
                </div>
                <span className="text-xl font-bold tracking-tighter font-sans uppercase">
                  Oppus Global
                </span>
            </div>
            <p className="text-gray-500 max-w-xs">
              Líderes en soluciones de energía solar y alumbrado público sustentable. Iluminando el futuro de México.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Productos</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-black">Luminarias</a></li>
                <li><a href="#" className="hover:text-black">Reflectores</a></li>
                <li><a href="#" className="hover:text-black">Postes Solares</a></li>
                <li><a href="#" className="hover:text-black">Paneles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Empresa</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-black">Nosotros</a></li>
                <li><a href="#" className="hover:text-black">Proyectos</a></li>
                <li><a href="#" className="hover:text-black">Carreras</a></li>
                <li><a href="#" className="hover:text-black">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Soporte</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-black">Contacto</a></li>
                <li><a href="#" className="hover:text-black">Manuales</a></li>
                <li><a href="#" className="hover:text-black">Garantía</a></li>
                <li><a href="#" className="hover:text-black">FAQ</a></li>
              </ul>
            </div>
             <div>
              <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-black">Privacidad</a></li>
                <li><a href="#" className="hover:text-black">Términos</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400">© 2025 Oppus Global. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">FB</div>
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">IN</div>
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">TW</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
