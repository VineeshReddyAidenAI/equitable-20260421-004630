import { useNavigate } from 'react-router-dom';

export default function Ribbon() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#002677] flex flex-col items-center justify-start p-[16px] md:p-[32px]">
      {/* Ribbon banner */}
      <div
        className="relative w-full max-w-[1310px] overflow-hidden bg-[#002677] rounded-[14px]"
        style={{ minHeight: '160px' }}
      >
        {/* Background image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/eced/f516/056af3796cc90c22bf6815403cd82146?Expires=1777852800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SfSThcJnQBpejaaCcNASElXNARYuIFpwkvMDeIW0d~HvcTDGSU-EFSJfIl0muxGETXUpF9-Wprr-r6UE-bAXtqamKznqZjVjRpMdGAdJQPhuDRcQnFLRUhRZM164XJquI0pTCUaU55vB4jVz0bbSzQ76UexwTsx4AH-MigULCsY5oL41hk25MmeKtyte-0Igbuvifhyetk8tS92T-bVd3bv0N1sQzO8LVYMskBHsTE7AaZuyK~l8in2MGR0YXJzpaTsYEO~IRYKcHkCl7bczdtHSx7AXL7-EZwhbpuEHMfCr3Phs37vrdR28xWi1DnmSiDKhfHFKvmlvPJe5MdqeFg__"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Geometric overlay pattern on right side */}
        <div
          className="absolute right-0 top-0 h-full w-[200px] md:w-[300px] opacity-[0.06]"
          style={{
            background: 'repeating-linear-gradient(135deg, #ffffff 0px, #ffffff 20px, transparent 20px, transparent 40px)',
          }}
        />

        {/* Text content */}
        <div className="relative z-10 flex flex-col gap-[18px] px-[24px] md:px-[32px] py-[32px] md:py-[42px] max-w-[960px]">
          <p
            className="text-[22px] md:text-[40px] font-bold leading-[1.2] capitalize"
            style={{ fontFamily: 'Times New Roman, Times, serif', color: '#ffffff', lineHeight: '28.2px' }}
          >
            Welcome, Vaishno to{' '}
            <span style={{ color: '#00d9a6' }}>Employer Onboarding</span>
          </p>
          <p
            className="text-[14px] md:text-[18px] italic leading-[28.2px] capitalize text-white font-[Roboto]"
          >
            Onboarding made easier
          </p>
        </div>
      </div>

      {/* Navigation back */}
      <div className="mt-[32px]">
        <button
          onClick={() => navigate('/')}
          className="px-[24px] py-[12px] bg-[#00d9a6] text-[#002677] font-semibold rounded-[8px] hover:opacity-90 transition-opacity font-[Roboto]"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
