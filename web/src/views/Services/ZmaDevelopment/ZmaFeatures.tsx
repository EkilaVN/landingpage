import TitleSection from "@/components/common/TitleSection";
import { GiTicket } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { MdLoyalty } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { PiGameControllerFill } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";

const ZmaFeatures = () => {
  return (
    <div className="relative my-12 flex w-full flex-col items-center md:my-24 xl:px-10">
      <TitleSection
        title="Đa dạng"
        subtitle={"Tính Năng Nổi Bật"}
        description="Danh sách tính năng đa dạng đáp như nhu cầu của từng doanh nghiệp"
      />
      <div className="relative flex w-full flex-col gap-6 px-4 xl:px-0">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-1 flex-col gap-6">
            <div className="mt-10 rounded-xl bg-gradient-to-t from-[#f4f4f4] to-white p-9 transition-all hover:-translate-y-2 dark:from-[#4b4f5c] dark:to-black">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-green-200/30">
                <GiTicket className="text-5xl text-green-500" />
              </div>
              <h3 className="mb-4 mt-6 text-3xl font-semibold leading-9">Flash Sales & Vouchers</h3>
              <p className="text-textSecondary">
                Tạo Flash Sales & Vouchers thu hút khách hàng, tăng tỷ lệ chốt đơn
              </p>
            </div>
            <div className="mt-10 rounded-xl bg-gradient-to-t from-[#f4f4f4] to-white p-9 transition-all hover:-translate-y-2 dark:from-[#4b4f5c] dark:to-black">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-violet-200/30">
                <FaHandshake className="text-5xl text-violet-500" />
              </div>
              <h3 className="mb-4 mt-6 text-3xl font-semibold leading-9">Cộng tác viên</h3>
              <p className="text-textSecondary">
                Biến khách hàng thành cộng tác viên cho doanh nghiệp
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <div className="mt-6 rounded-xl bg-gradient-to-t from-[#f4f4f4] to-white p-9 transition-all hover:-translate-y-2 dark:from-[#4b4f5c] dark:to-black">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-yellow-200/30">
                <MdLoyalty className="text-5xl text-yellow-500" />
              </div>
              <h3 className="mb-4 mt-6 text-3xl font-semibold leading-9">Chương trình Loyalty</h3>
              <p className="text-textSecondary">
                Chương trình giúp giữ chân và khuyến khích khách hàng quay trở lại
              </p>
            </div>
            <div className="mt-10 rounded-xl bg-gradient-to-t from-[#f4f4f4] to-white p-9 transition-all hover:-translate-y-2 dark:from-[#4b4f5c] dark:to-black">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-pink-200/30">
                <RiCustomerService2Line className="text-5xl text-pink-500" />
              </div>
              <h3 className="mb-4 mt-6 text-3xl font-semibold leading-9">Chăm sóc khách hàng</h3>
              <p className="text-textSecondary">
                Kịch bản cho các chiến dịch chăm sóc khách hàng tự động và hiệu quả
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <div className="mt-2 rounded-xl bg-gradient-to-t from-[#f4f4f4] to-white p-9 transition-all hover:-translate-y-2 dark:from-[#4b4f5c] dark:to-black">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-red-200/30">
                <FaChartLine className="text-5xl text-red-500" />
              </div>
              <h3 className="mb-4 mt-6 text-3xl font-semibold leading-9">Automation Marketing</h3>
              <p className="text-textSecondary">Tự động hóa quá trình Marketing cho doanh nghiệp</p>
            </div>
            <div className="mt-20 rounded-xl bg-gradient-to-t from-[#f4f4f4] to-white p-9 transition-all hover:-translate-y-2 dark:from-[#4b4f5c] dark:to-black">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-cyan-200/30">
                <MdPayments className="text-5xl text-cyan-500" />
              </div>
              <h3 className="mb-4 mt-6 text-3xl font-semibold leading-9">
                Đa dạng các phương thức thanh toán
              </h3>
              <p className="text-textSecondary">
                Tích hợp nhiều hình thức thanh toán giúp tăng khả năng chốt đơn của khách hàng
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <div className="rounded-xl bg-gradient-to-t from-[#f4f4f4] to-white p-9 transition-all hover:-translate-y-2 dark:from-[#4b4f5c] dark:to-black">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-purple-200/30">
                <PiGameControllerFill className="text-5xl text-purple-500" />
              </div>
              <h3 className="mb-4 mt-6 text-3xl font-semibold leading-9">Mini Game</h3>
              <p className="text-textSecondary">
                Tạo ra trải nghiệm tương tác thú vị giữa doanh nghiệp với khách hàng
              </p>
            </div>
            <div className="mt-16 rounded-xl bg-gradient-to-t from-[#f4f4f4] to-white p-9 transition-all hover:-translate-y-2 dark:from-[#4b4f5c] dark:to-black">
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-orange-200/30">
                <TbTruckDelivery className="text-5xl text-orange-500" />
              </div>
              <h3 className="mb-4 mt-6 text-3xl font-semibold leading-9">
                Kệnh vận chuyển nhanh chóng
              </h3>
              <p className="text-textSecondary">
                Đưa sản phẩm đến tay khách hàng trong thời gian ngắn nhất và an toàn nhất
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZmaFeatures;
