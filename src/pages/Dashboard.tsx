import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ChevronUp } from 'lucide-react';

type BrandVariant = 'equitable' | 'andor';

export default function Dashboard() {
  const [brand] = useState<BrandVariant>('equitable');
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-[#002677] overflow-hidden flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://s3-alpha-sig.figma.com/img/eced/f516/056af3796cc90c22bf6815403cd82146?Expires=1777852800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SfSThcJnQBpejaaCcNASElXNARYuIFpwkvMDeIW0d~HvcTDGSU-EFSJfIl0muxGETXUpF9-Wprr-r6UE-bAXtqamKznqZjVjRpMdGAdJQPhuDRcQnFLRUhRZM164XJquI0pTCUaU55vB4jVz0bbSzQ76UexwTsx4AH-MigULCsY5oL41hk25MmeKtyte-0Igbuvifhyetk8tS92T-bVd3bv0N1sQzO8LVYMskBHsTE7AaZuyK~l8in2MGR0YXJzpaTsYEO~IRYKcHkCl7bczdtHSx7AXL7-EZwhbpuEHMfCr3Phs37vrdR28xWi1DnmSiDKhfHFKvmlvPJe5MdqeFg__"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen px-[16px] md:px-0">
        {/* Logo area */}
        <div className="flex flex-col items-center mt-[40px] md:mt-[80px]">
          {brand === 'equitable' ? (
            <div className="flex flex-col items-center gap-[8px]">
              {/* Equitable circular logo placeholder */}
              <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full border-[2px] border-white flex items-center justify-center bg-transparent">
                <svg viewBox="0 0 130 130" className="w-[90px] h-[90px] md:w-[120px] md:h-[120px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="65" cy="65" r="62" stroke="white" strokeWidth="2" fill="none"/>
                  {/* Stylized figure */}
                  <ellipse cx="65" cy="38" rx="12" ry="14" fill="white"/>
                  <path d="M40 90 Q50 60 65 55 Q80 60 90 90" fill="white"/>
                  <path d="M35 95 Q50 75 65 70 Q80 75 95 95" fill="white" opacity="0.7"/>
                  <path d="M55 90 Q60 80 65 78 Q70 80 75 90" fill="white"/>
                  <path d="M30 100 Q65 85 100 100" stroke="white" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <p
                className="text-white font-times tracking-[8px] md:tracking-[12px] text-[28px] md:text-[48px] font-bold mt-[8px]"
                style={{ fontFamily: 'Times New Roman, Times, serif', letterSpacing: '0.15em' }}
              >
                EQUITABLE
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/eced/f516/056af3796cc90c22bf6815403cd82146?Expires=1777852800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SfSThcJnQBpejaaCcNASElXNARYuIFpwkvMDeIW0d~HvcTDGSU-EFSJfIl0muxGETXUpF9-Wprr-r6UE-bAXtqamKznqZjVjRpMdGAdJQPhuDRcQnFLRUhRZM164XJquI0pTCUaU55vB4jVz0bbSzQ76UexwTsx4AH-MigULCsY5oL41hk25MmeKtyte-0Igbuvifhyetk8tS92T-bVd3bv0N1sQzO8LVYMskBHsTE7AaZuyK~l8in2MGR0YXJzpaTsYEO~IRYKcHkCl7bczdtHSx7AXL7-EZwhbpuEHMfCr3Phs37vrdR28xWi1DnmSiDKhfHFKvmlvPJe5MdqeFg__"
                alt="Andor - A Financial Services Company"
                className="w-[200px] md:w-[338px] h-auto object-contain"
              />
            </div>
          )}
        </div>

        {/* Welcome text */}
        <div className="mt-[60px] md:mt-[120px] text-center">
          <p
            className="text-[28px] md:text-[48px] leading-[1.15]"
            style={{ fontFamily: 'Times New Roman, Times, serif', color: '#00d9a6' }}
          >
            Welcome,{' '}
            <span className="font-bold" style={{ color: '#00d9a6' }}>John Doe</span>
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[32px] md:mt-[40px] flex flex-col md:flex-row gap-[16px] md:gap-[32px] w-full max-w-[1024px] justify-center">
          {/* Employer Onboarding */}
          <div
            className="flex flex-row items-end gap-[14px] p-[14px] bg-white border-[3px] border-[#00d9a6] w-full md:w-[320px] cursor-pointer hover:shadow-lg transition-shadow"
            style={{ borderRadius: '0px' }}
            onClick={() => navigate('/ribbon')}
          >
            <div className="flex flex-col gap-[14px] flex-1">
              <div className="flex flex-col gap-[3px]">
                <Check className="w-[24px] h-[24px] text-[#00d9a6]" />
                <div className="py-[4px]">
                  <p className="font-[Open_Sans] text-[14px] font-semibold leading-[19.5px] text-[#000000]">Employer Onboarding</p>
                </div>
                <div className="py-[4px]">
                  <p className="font-[Open_Sans] text-[9px] leading-[12.4px] text-[#000000]">Sign up your entire company for insurance in one simple process.</p>
                </div>
              </div>
            </div>
            <ChevronUp className="w-[17px] h-[17px] text-[#00d9a6] shrink-0" />
          </div>

          {/* Employee Enrollment */}
          <div
            className="flex flex-row items-end gap-[14px] p-[14px] bg-white border-[3px] border-[#00d9a6] w-full md:w-[320px] cursor-pointer hover:shadow-lg transition-shadow"
            style={{ borderRadius: '0px' }}
            onClick={() => navigate('/')}
          >
            <div className="flex flex-col gap-[14px] flex-1">
              <div className="flex flex-col gap-[3px]">
                <Check className="w-[24px] h-[24px] text-[#00d9a6]" />
                <div className="py-[4px]">
                  <p className="font-[Open_Sans] text-[14px] font-semibold leading-[19.5px] text-[#000000]">Employee Enrollment</p>
                </div>
                <div className="py-[4px]">
                  <p className="font-[Open_Sans] text-[9px] leading-[12.4px] text-[#000000]">Enroll seamlessly in the insurance plans selected by your employer.</p>
                </div>
              </div>
            </div>
            <ChevronUp className="w-[17px] h-[17px] text-[#00d9a6] shrink-0" />
          </div>

          {/* Evidence of Insurability */}
          <div
            className="flex flex-row items-end gap-[14px] p-[14px] bg-white border-[3px] border-[#00d9a6] w-full md:w-[320px] min-h-[118px] cursor-pointer hover:shadow-lg transition-shadow"
            style={{ borderRadius: '0px' }}
            onClick={() => navigate('/')}
          >
            <div className="flex flex-col gap-[14px] flex-1">
              <div className="flex flex-col gap-[3px]">
                <Check className="w-[24px] h-[24px] text-[#00d9a6]" />
                <div className="py-[4px]">
                  <p className="font-[Open_Sans] text-[14px] font-semibold leading-[19.5px] text-[#000000]">Evidence of Insurability</p>
                </div>
                <div className="py-[4px]">
                  <p className="font-[Open_Sans] text-[9px] leading-[12.4px] text-[#000000]">Provide health details to apply for coverage beyond the standard limit.</p>
                </div>
              </div>
            </div>
            <ChevronUp className="w-[17px] h-[17px] text-[#00d9a6] shrink-0" />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto py-[24px] md:py-[32px] w-full flex justify-center">
          <p
            className="font-[Open_Sans] text-[12px] md:text-[17px] leading-[17.6px] tracking-[0.2px] text-center text-[#959cb5]"
          >
            © 2025. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
}
