import svgPaths from "./svg-2hh2gptuxq";
import imgImage from "figma:asset/b8a91e37535c97b2a46b61d1c4a0af53f4396592.png";
import imgImage1 from "figma:asset/44db080fc2ba71cc9ce3ac4d20dc0c5c5923890c.png";

function Figma() {
  return (
    <div className="absolute inset-[7.81%_21.88%]" data-name="figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 56">
        <g id="figma">
          <path clipRule="evenodd" d={svgPaths.p70fc600} fill="var(--fill-0, #1ABCFE)" fillRule="evenodd" id="vector" />
          <path clipRule="evenodd" d={svgPaths.p1ee056c0} fill="var(--fill-0, #0ACF83)" fillRule="evenodd" id="vector_2" />
          <path clipRule="evenodd" d={svgPaths.pf08fb80} fill="var(--fill-0, #FF7262)" fillRule="evenodd" id="vector_3" />
          <path clipRule="evenodd" d={svgPaths.p249e9800} fill="var(--fill-0, #F24E1E)" fillRule="evenodd" id="vector_4" />
          <path clipRule="evenodd" d={svgPaths.p8c9cd80} fill="var(--fill-0, #A259FF)" fillRule="evenodd" id="vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Figma1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[66.137px]" data-name="figma">
      <Figma />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[33.068px] items-start relative shrink-0">
      <Figma1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[12px] items-center justify-center left-[100px] px-[43.2px] py-[21.6px] rounded-[120px] shadow-[0px_76.8px_115.02px_0px_rgba(58,58,58,0.2)] top-[789.71px]">
      <Frame />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.175] not-italic relative shrink-0 text-[33.6px] text-black text-nowrap whitespace-pre">Free Download</p>
    </div>
  );
}

function Desktop() {
  return (
    <div className="absolute contents left-[calc(66.67%+1.57px)] top-[-662.58px]" data-name="Desktop">
      <div className="absolute h-[1258.98px] left-[calc(66.67%+1.57px)] top-[596.4px] w-[619.233px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[1258.98px] left-[calc(66.67%+1.57px)] top-[-662.58px] w-[619.233px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Desktop1() {
  return (
    <div className="absolute contents left-[calc(33.33%+74px)] top-[74.4px]" data-name="Desktop">
      <div className="absolute h-[1751.74px] left-[calc(33.33%+74px)] top-[1826.14px] w-[861.6px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[1751.74px] left-[calc(33.33%+74px)] top-[74.4px] w-[861.6px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Logomark() {
  return (
    <div className="h-[92.223px] relative shrink-0 w-[84.538px]" data-name="Logomark">
      <div className="absolute border-[#0a0d12] border-[9.607px] border-solid bottom-[27.08%] left-0 right-0 rounded-[92.223px] top-[27.08%]" data-name="Vector" />
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="absolute content-stretch flex gap-[19.213px] items-start left-0 top-[-1.92px]" data-name="Company logo">
      <Logomark />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[84.538px] relative shrink-0 w-[359.285px]">
      <CompanyLogo />
      <p className="absolute font-['Monument_Extended:Light',sans-serif] leading-[normal] left-[94.14px] not-italic text-[46.111px] text-black text-nowrap top-[17.29px] whitespace-pre">Elibass</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[61.482px] items-center relative shrink-0 w-[351.6px]" data-name="Content">
      <Frame2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-center left-[100px] top-[74.4px] w-[351.6px]" data-name="Container">
      <Content />
    </div>
  );
}

export default function Thumbnail() {
  return (
    <div className="bg-[#e9eaeb] overflow-clip relative rounded-[12px] size-full" data-name="Thumbnail">
      <div className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.175] left-[100px] not-italic text-[#181d27] text-[81.6px] top-[320.51px] w-[546px]">
        <p className="mb-0">eCommerce</p>
        <p>Landing Page</p>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.175] left-[100.29px] not-italic text-[#181d27] text-[54.612px] text-nowrap top-[654.11px] tracking-[-1.9114px] whitespace-pre">Free Figma Template</p>
      <Frame1 />
      <Desktop />
      <Desktop1 />
      <Container />
    </div>
  );
}