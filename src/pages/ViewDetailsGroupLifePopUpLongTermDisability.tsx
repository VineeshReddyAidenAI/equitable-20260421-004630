import { useNavigate } from 'react-router-dom';

export default function ViewDetailsGroupLifePopUpLongTermDisability() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#002677] flex items-start justify-center p-[16px] md:p-[32px]">
      {/* Modal card */}
      <div
        className="relative w-full md:w-[1137px] bg-white rounded-[14px] border border-[#8dabec] shadow-[0px_3px_6px_0px_rgba(73,84,110,0.03)] overflow-y-auto"
        style={{ maxHeight: '90vh' }}
      >
        {/* Custom scrollbar indicator */}
        <div className="absolute right-0 top-[82px] w-[11px] h-full bg-[#f0f0f0] rounded-full z-20 pointer-events-none">
          <div className="w-[11px] h-[66px] bg-[#284684] rounded-full" />
        </div>

        {/* Header */}
        <div
          className="w-full bg-white rounded-tl-[14px] rounded-tr-[14px] border-b border-[#eaf1ff] overflow-hidden"
          style={{ height: '77px' }}
        >
          <div className="flex flex-row items-center px-[32px] py-[16px] bg-white rounded-tl-[12px] rounded-tr-[12px]" style={{ height: '50px' }}>
            <p className="font-[Roboto] text-[22px] font-semibold leading-[23.3px] text-[#000000]">Long-Term Disability</p>
          </div>
        </div>

        {/* Plan Overview heading */}
        <div className="flex items-center px-[32px] py-[0px] mt-[24px]">
          <p className="font-[Roboto] text-[18px] font-medium leading-[23.3px] text-[#000000]">Plan Overview</p>
        </div>

        {/* Plan Overview table */}
        <div className="px-[32px] mt-[24px]">
          {/* Header row */}
          <div className="flex flex-row bg-[#eaf1ff] rounded-tl-[12px] rounded-tr-[12px]">
            <div className="flex-1 flex items-center px-[20px] py-[15px] border-b border-[#dadada]">
              <p className="font-[Roboto] text-[16px] font-medium leading-[27px] text-[#02071b]">Feature</p>
            </div>
            <div className="flex-1 flex items-center px-[20px] py-[15px] border-b border-[#dadada]">
              <p className="font-[Roboto] text-[16px] font-medium leading-[27px] text-[#02071b]">Description</p>
            </div>
          </div>
          {/* Data rows */}
          {[
            { feature: 'Maximum Monthly Benefit', description: '$6,000 – $8,400' },
            { feature: 'Maximum Benefit Period', description: 'To age 65' },
            { feature: 'Elimination Period', description: '90 days' },
            { feature: 'Partial Disability Benefit', description: 'Included' },
            { feature: 'Deductible', description: 'Not applicable' },
            { feature: 'Definition of Disability', description: 'Own occupation (first 2 years), then any occupation' },
            { feature: 'Cost-of-Living Adjustment', description: 'Optional' },
          ].map((row, i) => (
            <div key={i} className="flex flex-row" style={{ height: '60px' }}>
              <div className="flex-1 flex items-center px-[20px] py-[15px] border-b border-[#e2e8f0]">
                <p className="font-[Roboto] text-[16px] leading-[21px] text-[#000000]">{row.feature}</p>
              </div>
              <div className="flex-1 flex items-center px-[20px] py-[15px] border-b border-[#e2e8f0]">
                <p className="font-[Roboto] text-[16px] leading-[18.8px] text-[#2d3748]">{row.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="px-[32px] py-[10px] mt-[24px]">
          <div className="w-full border border-[#e0e0e0]" />
        </div>

        {/* Eligibility & Enrollment */}
        <div className="px-[32px] mt-[0px]">
          <p className="font-[Roboto] text-[18px] font-medium leading-[23.3px] text-[#000000]">Eligibility &amp; Enrollment</p>
        </div>
        <div className="px-[32px] mt-[24px] flex flex-col gap-[24px]">
          <p className="font-[Roboto] text-[18px] font-semibold leading-[23.3px] text-[#000000]">Eligible Employees: Full-time ≥30 hrs/week</p>
          <p className="font-[Roboto] text-[18px] font-semibold leading-[23.3px] text-[#000000]">Enrollment Window: Automatic after probation / optional during open enrollment</p>
          <p className="font-[Roboto] text-[18px] font-semibold leading-[23.3px] text-[#000000]">Evidence of Insurability: Required for coverage above standard limits</p>
          <p className="font-[Roboto] text-[18px] font-semibold leading-[23.3px] text-[#000000]">Pre-existing Condition Limitations: Limited coverage for pre-existing conditions</p>
        </div>

        {/* Divider */}
        <div className="px-[32px] py-[10px] mt-[24px]">
          <div className="w-full border border-[#e0e0e0]" />
        </div>

        {/* Coverage Breakdowns */}
        <div className="px-[32px]">
          <p className="font-[Roboto] text-[18px] font-medium leading-[23.3px] text-[#000000]">Coverage Breakdowns </p>
        </div>
        <div className="px-[32px] mt-[24px] overflow-x-auto">
          {/* Multi-column header */}
          <div className="flex flex-row bg-[#eaf1ff] rounded-tl-[12px] rounded-tr-[12px] min-w-[800px]">
            {['Coverage Type', 'Monthly Benefit', 'Maximum Benefit Period', 'Elimination Period', 'Partial Disability', 'COLA', 'Notes'].map((h, i) => (
              <div key={i} className={`flex items-center px-[20px] py-[15px] border-b border-[#dadada] ${i === 6 ? 'flex-1' : 'w-[130px] shrink-0'}`}>
                <p className="font-[Roboto] text-[16px] font-medium leading-[27px] text-[#02071b]">{h}</p>
              </div>
            ))}
          </div>
          {/* Coverage rows */}
          {[
            { type: 'Base STD Coverage', benefit: '$6,000 – $8,400', period: 'To age 65', elim: '90 days', partial: 'Included', cola: 'Optional', notes: '60–70% of pre-disability income' },
            { type: 'Own Occupation Coverage', benefit: 'Same as base', period: 'First 24 months', elim: '90 days', partial: 'Included', cola: 'Optional', notes: 'Pays if unable to perform current job' },
            { type: 'Any Occupation Coverage', benefit: 'Same as base', period: 'Remaining period', elim: '90 days', partial: 'Included', cola: 'Optional', notes: 'Pays if unable to work any job matching skills/education' },
            { type: 'Partial Disability', benefit: 'Pro-rated benefit', period: 'Up to age 65', elim: 'N/A', partial: 'Yes', cola: 'Optional', notes: 'Paid if partially able to work' },
            { type: 'Rehabilitation / Retraining Support', benefit: 'N/A', period: 'N/A', elim: 'N/A', partial: 'N/A', cola: 'N/A', notes: 'Helps employee return to work' },
            { type: 'Survivor Benefit', benefit: '% of benefit', period: 'N/A', elim: 'N/A', partial: 'N/A', cola: 'N/A', notes: 'Partial payout to family if employee dies during disability' },
          ].map((row, i) => (
            <div key={i} className="flex flex-row min-w-[800px]" style={{ height: '60px' }}>
              <div className="w-[130px] shrink-0 flex items-center px-[20px] py-[15px] border-b border-[#e2e8f0]"><p className="font-[Roboto] text-[16px] leading-[21px] text-[#000000] text-[13px]">{row.type}</p></div>
              <div className="w-[130px] shrink-0 flex items-center px-[20px] py-[15px] border-b border-[#e2e8f0]"><p className="font-[Roboto] text-[16px] leading-[21px] text-[#000000] text-[13px]">{row.benefit}</p></div>
              <div className="w-[130px] shrink-0 flex items-center px-[20px] py-[15px] border-b border-[#e2e8f0]"><p className="font-[Roboto] text-[16px] leading-[21px] text-[#000000] text-[13px]">{row.period}</p></div>
              <div className="w-[130px] shrink-0 flex items-center px-[20px] py-[15px] border-b border-[#e2e8f0]"><p className="font-[Roboto] text-[16px] leading-[18.8px] text-[#2d3748] text-[13px]">{row.elim}</p></div>
              <div className="w-[130px] shrink-0 flex items-center px-[20px] py-[15px] border-b border-[#e2e8f0]"><p className="font-[Roboto] text-[16px] leading-[18.8px] text-[#2d3748] text-[13px]">{row.partial}</p></div>
              <div className="w-[100px] shrink-0 flex items-center px-[20px] py-[15px] border-b border-[#e2e8f0]"><p className="font-[Roboto] text-[16px] leading-[18.8px] text-[#2d3748] text-[13px]">{row.cola}</p></div>
              <div className="flex-1 flex items-center px-[20px] py-[15px] border-b border-[#e2e8f0]"><p className="font-[Roboto] text-[16px] leading-[18.8px] text-[#2d3748] text-[13px]">{row.notes}</p></div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="px-[32px] py-[10px] mt-[24px]">
          <div className="w-full border border-[#e0e0e0]" />
        </div>

        {/* Additional Benefits */}
        <div className="px-[32px]">
          <p className="font-[Roboto] text-[18px] font-medium leading-[23.3px] text-[#000000]">Additional Benefits</p>
        </div>
        <div className="px-[32px] mt-[24px] pb-[32px] flex flex-col gap-[10px]">
          <div className="inline-flex items-center px-[24px] py-[12px] rounded-[57px] border border-[#002677]">
            <p className="font-[Roboto] text-[14px] leading-[16px] tracking-[1px] capitalize text-[#002677]">Rehabilitation and retraining programs</p>
          </div>
          <div className="inline-flex items-center px-[24px] py-[12px] rounded-[57px] border border-[#002677]">
            <p className="font-[Roboto] text-[14px] leading-[16px] tracking-[1px] capitalize text-[#002677]">Return-to-work support</p>
          </div>
          <div className="inline-flex items-center px-[24px] py-[12px] rounded-[57px] border border-[#002677]">
            <p className="font-[Roboto] text-[14px] leading-[16px] tracking-[1px] capitalize text-[#002677]">Coordination with Social Security Disability benefits</p>
          </div>
          <div className="inline-flex items-center px-[24px] py-[12px] rounded-[57px] border border-[#ffffff]">
            <p className="font-[Roboto] text-[14px] leading-[16px] tracking-[1px] capitalize text-[#ffffff]">Optional riders: Cost of Living Adjustment (COLA), Own Occupation coverage</p>
          </div>
        </div>

        {/* Back button */}
        <div className="px-[32px] pb-[32px]">
          <button
            onClick={() => navigate('/')}
            className="px-[24px] py-[12px] bg-[#002677] text-white font-semibold rounded-[8px] hover:opacity-90 transition-opacity font-[Roboto]"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
