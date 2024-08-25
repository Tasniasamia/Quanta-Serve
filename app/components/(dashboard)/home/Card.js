import { Progress } from 'antd';
import React from 'react';

const DashboardCard = ({title,}) => {
    return (
        <Card>
        <div className="flex flex-wrap justify-between gap-[20px]">
          <div className="flex flex-col justify-end">
            <div className="flex gap-2 items-start">
              <SiBitcoinsv className="text-[42px] text-[#f69219]" />
              <div>
                <h3 className="font-bold text-textcolor1">BITCOIN</h3>
                <p className="!text-xs text-textcolor2">BTC</p>
              </div>
            </div>
            <h3 className="font-bold text-textcolor1 text-xs pt-[16px]">
              1 BTC = 8270.00 USD
            </h3>
          </div>
          <Progress
          type="dashboard"
          steps={8}
          percent={50}
          trailColor="rgba(0, 0, 0, 0.06)"
          strokeWidth={20}
        />
          </div>
      </Card>
    );
};

export default DashboardCard;