import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-yellow-200 selection:text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="PikTag Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl tracking-tight">PikTag</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-2">服務條款</h1>
          <p className="text-neutral-500 mb-12">最後更新日期：2025 年 1 月 1 日</p>

          <div className="space-y-10 text-neutral-700 leading-relaxed">
            {/* 服務說明 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">一、服務說明</h2>
              <p>
                PikTag（以下簡稱「本服務」）是由 PikTag 團隊開發與營運的行動社交 CRM 應用程式。本服務提供語意標籤管理、QR Code 名片交換、Link Bio 個人頁面、社群連結管理、通訊錄同步、智慧 CRM 提醒等功能，旨在協助用戶有效管理與維繫人脈關係。
              </p>
              <p className="mt-3">
                當您下載、安裝、註冊或使用本服務時，即表示您已閱讀、理解並同意遵守本服務條款。若您不同意本條款之任何內容，請勿使用本服務。
              </p>
            </section>

            {/* 帳號註冊與安全 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">二、帳號註冊與安全</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>您必須年滿 16 歲方可註冊使用本服務。若您未滿法定成年年齡，應取得法定代理人之同意。</li>
                <li>註冊時須提供真實、準確且完整的個人資料，並於資料變更時及時更新。</li>
                <li>您有責任妥善保管帳號密碼，不得將帳號轉讓或授權他人使用。</li>
                <li>若發現帳號遭未經授權之使用或其他安全漏洞，應立即通知本服務團隊。</li>
                <li>因您未妥善保管帳號而導致之損失，本服務不承擔任何責任。</li>
              </ul>
            </section>

            {/* 使用規範 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">三、使用規範</h2>
              <p className="mb-3">您同意在使用本服務時不從事以下禁止行為：</p>
              <ul className="list-disc list-inside space-y-2">
                <li>違反中華民國法律或國際法律之任何行為。</li>
                <li>冒充他人身份或虛假陳述您與任何個人或組織之關聯。</li>
                <li>上傳、發布或傳送含有騷擾、誹謗、歧視、仇恨言論或色情之內容。</li>
                <li>未經他人同意蒐集、儲存或分享其個人資料。</li>
                <li>發送垃圾訊息、大量未經請求之訊息或進行詐騙行為。</li>
                <li>干擾或破壞本服務之伺服器、網路或基礎設施。</li>
                <li>利用自動化工具（包括但不限於爬蟲、機器人）存取本服務。</li>
                <li>對本服務進行反向工程、反編譯或反組譯。</li>
                <li>濫用標籤系統，包括建立不當、誤導或垃圾標籤。</li>
                <li>規避、停用或以其他方式干擾本服務之安全相關功能。</li>
              </ul>
            </section>

            {/* 智慧財產權 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">四、智慧財產權</h2>
              <p>
                本服務及其所有內容（包括但不限於軟體、設計、文字、圖形、介面、標誌及商標）之智慧財產權均歸 PikTag 團隊或其授權者所有。未經事先書面許可，您不得複製、修改、散布、銷售或出租本服務之任何部分。
              </p>
              <p className="mt-3">
                「PikTag」、「PikTag」名稱及相關標誌為本服務之商標，未經授權不得使用。
              </p>
            </section>

            {/* 用戶內容 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">五、用戶內容</h2>
              <p>
                您透過本服務建立之內容，包括但不限於個人檔案資料、語意標籤、社群連結、Link Bio 頁面內容及 QR Code 等（以下簡稱「用戶內容」），其智慧財產權歸您所有。
              </p>
              <p className="mt-3">
                您授予本服務非專屬、免權利金、全球範圍之使用許可，以供本服務營運、展示、儲存及改善服務品質所需。此授權於您刪除相關內容或終止帳號後合理期間內終止。
              </p>
              <p className="mt-3">
                您聲明並保證您所提交之用戶內容均未侵害任何第三方之智慧財產權或其他權利。
              </p>
            </section>

            {/* 隱私保護 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">六、隱私保護</h2>
              <p>
                本服務重視您的隱私權。我們如何蒐集、使用、儲存與保護您的個人資料，詳載於我們的
                <Link to="/privacy" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2 mx-1">
                  隱私權政策
                </Link>
                中。使用本服務即表示您同意我們依照隱私權政策處理您的個人資料。
              </p>
              <p className="mt-3">
                本服務提供四級隱私設定（公開、好友、摯友、僅自己），您可自行控制各項社群連結與標籤之可見範圍。
              </p>
            </section>

            {/* 服務中斷與免責 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">七、服務中斷與免責</h2>
              <p>
                本服務係以「現況」及「可用」之基礎提供。我們不保證本服務將不間斷、及時、安全或無錯誤地運作。
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>本服務可能因系統維護、升級、不可抗力或其他因素而暫時中斷，我們將盡力提前通知但不承擔因此造成之損失。</li>
                <li>在法律允許之最大範圍內，本服務對於任何間接性、附帶性、特殊性、懲罰性或衍生性損害不承擔責任。</li>
                <li>本服務對於因第三方服務（如社群平台連結）之變更或中斷所導致之影響不承擔責任。</li>
              </ul>
            </section>

            {/* 服務條款修改 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">八、服務條款修改</h2>
              <p>
                本服務保留隨時修改本條款之權利。條款修改後，我們將透過應用程式內通知、電子郵件或於本頁面公告等方式通知您。若您於修改後繼續使用本服務，即視為您同意修改後之條款。
              </p>
              <p className="mt-3">
                重大變更將於生效前至少 30 天通知用戶。建議您定期查閱本條款以了解最新內容。
              </p>
            </section>

            {/* 終止服務 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">九、終止服務</h2>
              <p>
                您可隨時透過應用程式內之帳號設定刪除帳號並終止使用本服務。帳號刪除後，您的個人資料將依隱私權政策之規定處理。
              </p>
              <p className="mt-3">
                若您違反本條款之任何規定，本服務有權暫停或終止您的帳號，且無需事先通知。終止後，您使用本服務之權利將立即失效。
              </p>
            </section>

            {/* 準據法 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">十、準據法與管轄</h2>
              <p>
                本條款之解釋與適用，以及因本條款所生之爭議，均以中華民國法律為準據法。因本條款所生之訴訟，雙方同意以臺灣臺北地方法院為第一審管轄法院。
              </p>
            </section>

            {/* 聯絡方式 */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">十一、聯絡方式</h2>
              <p>
                若您對本服務條款有任何疑問或建議，歡迎透過以下方式與我們聯繫：
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>電子郵件：<a href="mailto:support@pikt.ag" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">support@pikt.ag</a></li>
                <li>官方網站：<a href="https://pikt.ag" className="text-yellow-600 hover:text-yellow-700 underline underline-offset-2">https://pikt.ag</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="PikTag Logo" className="w-6 h-6 rounded-md" />
            <span className="font-bold text-lg tracking-tight">PikTag</span>
          </Link>
          <div className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} PikTag. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-neutral-600">
            <Link to="/privacy" className="hover:text-neutral-900 transition-colors">隱私權政策</Link>
            <Link to="/terms" className="hover:text-neutral-900 transition-colors">服務條款</Link>
            <a href="mailto:support@pikt.ag" className="hover:text-neutral-900 transition-colors">聯絡我們</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
