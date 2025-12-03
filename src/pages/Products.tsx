import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Check, ChevronDown, Download, Filter, Search } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion";
import { Checkbox } from "../components/ui/checkbox";

// Mock Data
const products = [
    {
        id: 1,
        category: "Forlighting",
        name: "Luminaria Solar All in one Eco Forled 100W Forlighting",
        price: "8,338.95",
        inStock: true,
        image: "https://images.unsplash.com/photo-1723899550888-f2be8e4ea094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWQlMjBzdHJlZXQlMjBsaWdodHxlbnwxfHx8fDE3NjQ3Nzk3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        type: "solar",
        flux: 12000,
        power: 100,
        gtin: "4099854203480"
    },
    {
        id: 2,
        category: "Tecnolite",
        name: "Mini Poste Solar Sonne II 15S01LED50CCN 15W Sensor de movimiento Luz blanca ajustable IP65 IK06",
        price: "2,369.00",
        inStock: true,
        image: "https://images.unsplash.com/photo-1558693836-83d8cf52c2ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwbGlnaHR8ZW58MXx8fHwxNzY0Nzc5NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        type: "solar",
        flux: 1500,
        power: 15,
        gtin: "4099854203497"
    },
    {
        id: 3,
        category: "Forlighting",
        name: "Luminaria Solar Led Forlighting Forled 150W / All in one / Negro / 24,000 lm",
        price: "17,064.00",
        inStock: true,
        image: "https://images.unsplash.com/photo-1584259432824-3d124136ea4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbGVkJTIwbGlnaHR8ZW58MXx8fHwxNzY0Nzc5NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        type: "solar",
        flux: 24000,
        power: 150,
        gtin: "4099854203503"
    },
    {
        id: 4,
        category: "Forlighting",
        name: "Luminaria Solar All in one Forled 100W Forlighting",
        price: "13,637.00",
        inStock: true,
        image: "https://images.unsplash.com/photo-1754245357826-8ed374024df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbGlnaHRpbmclMjBmaXh0dXJlfGVufDF8fHx8MTc2NDc3OTc0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        type: "solar",
        flux: 12000,
        power: 100,
        gtin: "4099854203510"
    },
    {
        id: 5,
        category: "APM",
        name: "Luminaria Solar All in one LED ASL-00B Airlite",
        price: "4,242.20",
        inStock: true,
        image: "https://images.unsplash.com/photo-1763098844800-641758570d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHJlZXQlMjBsYW1wfGVufDF8fHx8MTc2NDc3OTc0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        type: "vial",
        flux: 4000,
        power: 40,
        gtin: "4099854203527"
    },
];

export function Products() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [fluxRange, setFluxRange] = useState([0, 30000]);
    const [powerRange, setPowerRange] = useState([0, 200]);

    const categories = Array.from(new Set(products.map((p) => p.category)));

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const filteredProducts = products.filter((product) => {
        const matchCategory =
            selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchFlux = product.flux >= fluxRange[0] && product.flux <= fluxRange[1];
        const matchPower = product.power >= powerRange[0] && product.power <= powerRange[1];
        return matchCategory && matchFlux && matchPower;
    });

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Filter className="w-5 h-5 text-[#FF8351]" />
                            <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
                        </div>

                        <Accordion type="multiple" defaultValue={["category", "flux", "power"]} className="w-full">
                            {/* Category Filter */}
                            <AccordionItem value="category" className="border-b border-gray-200">
                                <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-[#FF8351]">
                                    Categoría
                                </AccordionTrigger>
                                <AccordionContent className="pt-4 pb-6 space-y-3">
                                    {categories.map((category) => (
                                        <div key={category} className="flex items-center space-x-3">
                                            <Checkbox
                                                id={category}
                                                checked={selectedCategories.includes(category)}
                                                onCheckedChange={() => toggleCategory(category)}
                                                className="border-gray-300 data-[state=checked]:bg-[#FF8351] data-[state=checked]:border-[#FF8351]"
                                            />
                                            <label
                                                htmlFor={category}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600 cursor-pointer hover:text-gray-900"
                                            >
                                                {category} ({products.filter(p => p.category === category).length})
                                            </label>
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Luminous Flux Filter */}
                            <AccordionItem value="flux" className="border-b border-gray-200">
                                <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-[#FF8351]">
                                    Flujo Luminoso
                                </AccordionTrigger>
                                <AccordionContent className="pt-6 pb-6 px-1">
                                    <Slider.Root
                                        className="relative flex items-center select-none touch-none w-full h-5"
                                        value={fluxRange}
                                        max={30000}
                                        step={100}
                                        onValueChange={setFluxRange}
                                        minStepsBetweenThumbs={1}
                                    >
                                        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
                                            <Slider.Range className="absolute bg-[#FF8351] rounded-full h-full" />
                                        </Slider.Track>
                                        <Slider.Thumb
                                            className="block w-5 h-5 bg-white border-2 border-[#FF8351] shadow-[0_2px_10px] shadow-black/10 rounded-[10px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FF8351]/20 transition-transform hover:scale-110"
                                            aria-label="Min flux"
                                        />
                                        <Slider.Thumb
                                            className="block w-5 h-5 bg-white border-2 border-[#FF8351] shadow-[0_2px_10px] shadow-black/10 rounded-[10px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FF8351]/20 transition-transform hover:scale-110"
                                            aria-label="Max flux"
                                        />
                                    </Slider.Root>
                                    <div className="flex justify-between mt-4 text-xs font-medium text-gray-500">
                                        <span>{fluxRange[0]} lm</span>
                                        <span>{fluxRange[1]} lm</span>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Power Filter */}
                            <AccordionItem value="power" className="border-b border-gray-200">
                                <AccordionTrigger className="text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-[#FF8351]">
                                    Potencia Nominal
                                </AccordionTrigger>
                                <AccordionContent className="pt-6 pb-6 px-1">
                                    <Slider.Root
                                        className="relative flex items-center select-none touch-none w-full h-5"
                                        value={powerRange}
                                        max={200}
                                        step={5}
                                        onValueChange={setPowerRange}
                                        minStepsBetweenThumbs={1}
                                    >
                                        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
                                            <Slider.Range className="absolute bg-[#FF8351] rounded-full h-full" />
                                        </Slider.Track>
                                        <Slider.Thumb
                                            className="block w-5 h-5 bg-white border-2 border-[#FF8351] shadow-[0_2px_10px] shadow-black/10 rounded-[10px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FF8351]/20 transition-transform hover:scale-110"
                                            aria-label="Min power"
                                        />
                                        <Slider.Thumb
                                            className="block w-5 h-5 bg-white border-2 border-[#FF8351] shadow-[0_2px_10px] shadow-black/10 rounded-[10px] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#FF8351]/20 transition-transform hover:scale-110"
                                            aria-label="Max power"
                                        />
                                    </Slider.Root>
                                    <div className="flex justify-between mt-4 text-xs font-medium text-gray-500">
                                        <span>{powerRange[0]} W</span>
                                        <span>{powerRange[1]} W</span>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Nuestros Productos
                            </h1>
                            <span className="text-gray-500 text-sm font-medium">
                                {filteredProducts.length} resultados
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-[#FF8351]/30 transition-all duration-300 flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="aspect-square p-8 bg-white flex items-center justify-center relative overflow-hidden border-b border-gray-100">
                                        <ImageWithFallback
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {product.inStock && (
                                            <div className="absolute top-4 left-4 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                En existencia
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 line-clamp-2 group-hover:text-[#FF8351] transition-colors">
                                                {product.name}
                                            </h3>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                                <span className="uppercase tracking-wider">{product.category}</span>
                                                <span>•</span>
                                                <span>{product.flux.toLocaleString()} lm</span>
                                                <span>•</span>
                                                <span>{product.power}W</span>
                                            </div>
                                        </div>

                                        <div className="mt-auto space-y-4">
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-2xl font-bold text-gray-900 tracking-tight">
                                                    ${product.price}
                                                </span>
                                                <span className="text-xs text-gray-500 font-medium">MXN</span>
                                            </div>

                                            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                                    <span className="font-semibold">GTIN:</span>
                                                    <span className="font-mono">{product.gtin}</span>
                                                </div>

                                                <button className="flex items-center gap-2 text-[#FF8351] hover:text-[#e06b3d] text-sm font-bold transition-colors group/btn w-fit">
                                                    <Download className="w-4 h-4" />
                                                    <span className="border-b border-transparent group-hover/btn:border-[#FF8351] transition-all">
                                                        Descargar Hoja de Datos
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20">
                                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">No se encontraron productos</h3>
                                <p className="text-gray-500">Intenta ajustar los filtros para ver más resultados.</p>
                                <button
                                    onClick={() => {
                                        setSelectedCategories([]);
                                        setFluxRange([0, 30000]);
                                        setPowerRange([0, 200]);
                                    }}
                                    className="mt-6 text-[#FF8351] font-bold hover:underline"
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
