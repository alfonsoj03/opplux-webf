import { Download, Check } from "lucide-react";

interface ProductDetailProps {
    category: string;
    title: string;
    seriesTitle: string;
    seriesSubtitle: string;
    description: string;
    previousModel?: string;
    image: string;
    versions: { id: string; name: string; gtin: string }[];
    specifications: { label: string; value: string }[];
    technicalDescription: string[];
    technicalImages: { title: string; image: string }[];
}

export function ProductDetail({
    category,
    title,
    seriesTitle,
    seriesSubtitle,
    description,
    previousModel,
    image,
    specifications,
    technicalDescription,
    technicalImages,
}: ProductDetailProps) {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Imagen del producto */}
                    <div className="bg-gray-50 rounded-lg p-12 flex items-center justify-center">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto max-h-[600px] object-contain"
                        />
                    </div>

                    {/* Información del producto */}
                    <div className="flex flex-col">
                        {/* Categoría */}
                        <p className="text-sm tracking-wider text-gray-600 mb-4">
                            {category}
                        </p>

                        {/* Título del producto */}
                        <h1 className="text-4xl font-bold text-[#FF8351] mb-8">
                            {title}
                        </h1>

                        {/* Descripción del producto */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-3">
                                {seriesTitle}
                            </h2>
                            <p className="text-sm text-gray-500 mb-6">
                                {seriesSubtitle}
                            </p>
                            <p className="text-gray-700 leading-relaxed text-base mb-6">
                                {description}
                            </p>
                            {previousModel && (
                                <p className="text-sm">
                                    <span className="text-[#1e3a8a]">Anteriormente:</span>{" "}
                                    <span className="text-gray-700">{previousModel}</span>
                                </p>
                            )}
                        </div>

                        {/* Botón Descargar hoja de datos */}
                        <button className="w-full mb-4 px-6 py-3 border-2 border-[#FF8351] text-[#FF8351] rounded-lg hover:bg-[#FF8351] hover:text-white transition-colors flex items-center justify-center gap-2">
                            <span>DESCARGAR HOJA DE DATOS</span>
                            <Download className="w-5 h-5" />
                        </button>

                        {/* Botón Contactar ventas */}
                        <button className="w-full px-6 py-4 bg-[#FF8351] text-white rounded-lg hover:bg-[#e6744a] transition-colors">
                            CONTACTAR VENTAS
                        </button>
                    </div>
                </div>

                {/* Sección de Especificaciones */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Especificaciones</h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                        {specifications.map((spec, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="mt-1 flex-shrink-0">
                                    <Check className="w-5 h-5 text-[#FF8351]" />
                                </div>
                                <p className="text-gray-700">
                                    <span>{spec.label}:</span> {spec.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sección de Información técnica */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Información técnica</h2>
                    <div className="space-y-4 mb-12">
                        {technicalDescription.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Grid de 4 imágenes técnicas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {technicalImages.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg p-6 flex flex-col items-center"
                            >
                                <div className="w-full aspect-square mb-6 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-center">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}