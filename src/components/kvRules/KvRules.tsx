import React from "react";

interface Props {
  className?: string;
}

const KvRules: React.FC<Props> = (props) => {
  return (
    <div className="text-left font-bold p-4 text-blue-900 bg-white rounded-3xl border-NeonCarrot border-4">
      <p>Cách mở tàng thư học viện bằng bộ huy hiệu</p>
      <p>
        Bước 1: Xem livestreams trên học viện và thu nhập đủ 5 mã huy hiệu hàng
        tuần.
      </p>
      <p>
        Bước 2: Quay lại đây vào đúng 10:00 ngày thứ 2, nhập đầy đủ thông tin
        NBH.
      </p>
      <p>
        Bước 3: Nhập chính xác 5 mã huy hiệu và chờ kết quả công bó ngày hôm sau
        tại:{" "}
        <a
          className="text-cyan-500"
          href="https://university.lazada.vn/cms/nynm"
          target="_blank"
          rel="noreferrer"
        >
          https://university.lazada.vn/cms/nynm
        </a> 6 nhà bán hàng nhanh tay nhất sẽ có cơ hội nhận được
      </p>

      <img src="/gift-list.png" alt="gift" className="w-3/4 mt-2 mb-2 mr-auto ml-auto"/>

      <p>Lưu ý:</p>
      <p>
        # NBH nào mở được tàng thư sớm nhất thì sẽ nhận được quà, các NBH hãy
        ghi nhớ giờ mở tàng thử để không bị trễ nhé
      </p>
      <p># 1 NBH chỉ có thể nhận 1 phần quà từ tàng thư trong 1 tháng</p>
      <p></p>
    </div>
  );
};

export default KvRules;
