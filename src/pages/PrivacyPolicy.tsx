import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-yellow-200 selection:text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="PikTag Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-xl tracking-tight">Pikt.ag</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">隱私權政策</h1>
          <p className="text-neutral-500 mb-12">
            最後更新日期：2026 年 4 月 2 日
          </p>

          <div className="prose prose-neutral max-w-none space-y-10">
            {/* Intro */}
            <p className="text-lg text-neutral-600 leading-relaxed">
              歡迎使用 PikTag（Pikt.ag）。我們非常重視您的隱私權。本隱私權政策說明我們如何收集、使用、儲存及保護您在使用 PikTag 行動應用程式及相關服務時所提供的個人資料。使用本服務即表示您同意本政策所述之資料處理方式。
            </p>

            {/* 資料收集 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">一、資料收集</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                為了提供及改善我們的服務，我們可能收集以下類型的資料：
              </p>
              <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                <li>
                  <strong>個人資料：</strong>您在註冊或編輯個人檔案時提供的資訊，包括姓名、電子郵件地址、頭像照片、個人簡介等。
                </li>
                <li>
                  <strong>語意標籤：</strong>您建立或使用的六大類語意標籤（身份、技能、興趣、社交、元標籤、關係），包括標籤名稱、分類及排序偏好。
                </li>
                <li>
                  <strong>社群連結：</strong>您自行輸入的社群媒體帳號連結（如 Instagram、LinkedIn、Facebook 等），以及您設定的隱私分級（公開、好友、摯友、僅自己）。
                </li>
                <li>
                  <strong>通訊錄資料：</strong>當您選擇同步通訊錄時，我們會存取您的手機通訊錄以配對已註冊 PikTag 的用戶。我們不會儲存未註冊用戶的聯絡資訊。
                </li>
                <li>
                  <strong>位置資訊：</strong>當您使用「附近用戶探索」功能時，我們會收集您的 GPS 位置資料。此資料僅在您主動啟用該功能時收集，您可隨時關閉。
                </li>
                <li>
                  <strong>使用行為資料：</strong>包括 App 使用頻率、功能互動紀錄、搜尋查詢及裝置資訊（裝置型號、作業系統版本、語言設定等）。
                </li>
              </ul>
            </section>

            {/* 資料使用方式 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">二、資料使用方式</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                我們收集的資料將用於以下目的：
              </p>
              <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                <li>提供、維護及改善 PikTag 的核心功能與服務體驗。</li>
                <li>建立並展示您的 Link Bio 個人頁面及 QR Code 名片。</li>
                <li>執行標籤搜尋、用戶探索及智慧推薦演算法。</li>
                <li>發送生日 CRM 提醒、好友邀請通知及其他相關推播。</li>
                <li>產生社交統計報表（總人脈數、標籤使用統計等）。</li>
                <li>偵測、防止及處理安全問題、欺詐或技術問題。</li>
                <li>遵守適用法律法規之要求。</li>
              </ul>
            </section>

            {/* 資料儲存與安全 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">三、資料儲存與安全</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                您的資料儲存於 <strong>Supabase</strong> 提供的雲端基礎設施上，該服務採用業界標準的安全措施，包括：
              </p>
              <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                <li>傳輸層安全性（TLS）加密所有資料傳輸。</li>
                <li>資料庫層級的加密儲存（encryption at rest）。</li>
                <li>Row Level Security（RLS）確保用戶僅能存取自己的資料。</li>
                <li>定期安全稽核與漏洞修補。</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                儘管我們採取合理的安全措施，但沒有任何網路傳輸或電子儲存方式能夠保證 100% 安全。我們將持續努力保護您的個人資料。
              </p>
            </section>

            {/* 第三方服務 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">四、第三方服務</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                PikTag 整合以下第三方服務，這些服務各有其獨立的隱私權政策：
              </p>
              <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                <li>
                  <strong>Apple Sign-In：</strong>用於 iOS 裝置的帳號登入與身份驗證。Apple 可能會提供您的姓名及電子郵件地址（或 Apple 私人轉寄地址）。詳情請參閱{' '}
                  <a
                    href="https://www.apple.com/legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 underline hover:text-yellow-700"
                  >
                    Apple 隱私權政策
                  </a>
                  。
                </li>
                <li>
                  <strong>Google Sign-In：</strong>用於 Android 裝置及 Web 端的帳號登入與身份驗證。Google 可能會提供您的姓名、電子郵件地址及頭像照片。詳情請參閱{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 underline hover:text-yellow-700"
                  >
                    Google 隱私權政策
                  </a>
                  。
                </li>
                <li>
                  <strong>Supabase：</strong>用於資料庫、身份驗證及檔案儲存服務。詳情請參閱{' '}
                  <a
                    href="https://supabase.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-600 underline hover:text-yellow-700"
                  >
                    Supabase 隱私權政策
                  </a>
                  。
                </li>
              </ul>
            </section>

            {/* Cookie 與追蹤 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">五、Cookie 與追蹤</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                PikTag 作為行動應用程式，不直接使用瀏覽器 Cookie。但我們可能使用以下技術來改善服務：
              </p>
              <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                <li>裝置識別碼用於推播通知服務。</li>
                <li>分析工具收集匿名的使用行為數據，以改善產品體驗。</li>
                <li>本地儲存（Local Storage）用於快取應用程式設定及偏好。</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                您可以透過裝置設定管理通知權限及資料共享偏好。
              </p>
            </section>

            {/* 用戶權利 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">六、用戶權利</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                依據適用的資料保護法律，您享有以下權利：
              </p>
              <ul className="list-disc pl-6 space-y-3 text-neutral-600">
                <li>
                  <strong>存取權：</strong>您可以隨時在 App 內查看您的個人資料、標籤、社群連結及好友列表。
                </li>
                <li>
                  <strong>修改權：</strong>您可以隨時編輯或更新您的個人檔案、標籤、社群連結及隱私設定。
                </li>
                <li>
                  <strong>刪除權：</strong>您可以刪除個別標籤、社群連結，或透過「帳號設定」申請完全刪除帳號。帳號刪除後，您的所有個人資料、標籤、好友關係及相關數據將被永久移除，此操作無法復原。
                </li>
                <li>
                  <strong>資料可攜權：</strong>您可以申請匯出您的個人資料副本。
                </li>
                <li>
                  <strong>撤回同意權：</strong>您可以隨時撤回對特定資料處理的同意（如通訊錄存取、位置資訊等），但這可能影響部分功能的使用。
                </li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                如需行使上述權利，請透過下方聯絡方式與我們聯繫。
              </p>
            </section>

            {/* 兒童隱私 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">七、兒童隱私</h2>
              <p className="text-neutral-600 leading-relaxed">
                PikTag 的服務對象為年滿 13 歲（或您所在司法管轄區規定之最低年齡）以上的用戶。我們不會故意收集 13 歲以下兒童的個人資料。若我們發現已收集到未滿 13 歲兒童的資料，將會立即刪除該資料。若您認為我們可能持有未成年人的資料，請立即與我們聯繫。
              </p>
            </section>

            {/* 隱私政策更新 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">八、隱私權政策更新</h2>
              <p className="text-neutral-600 leading-relaxed">
                我們可能會不定期更新本隱私權政策，以反映服務變更或法律要求。更新時，我們將透過 App 內通知或電子郵件告知您重大變更，並更新本頁面頂部的「最後更新日期」。建議您定期查閱本政策，以了解我們如何保護您的資訊。
              </p>
            </section>

            {/* 聯絡方式 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">九、聯絡方式</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                如您對本隱私權政策有任何疑問、意見或要求，請透過以下方式與我們聯繫：
              </p>
              <div className="bg-white rounded-2xl border border-neutral-200 p-6">
                <ul className="space-y-2 text-neutral-600">
                  <li>
                    <strong>應用程式名稱：</strong>PikTag（Pikt.ag）
                  </li>
                  <li>
                    <strong>電子郵件：</strong>{' '}
                    <a
                      href="mailto:privacy@pikt.ag"
                      className="text-yellow-600 underline hover:text-yellow-700"
                    >
                      privacy@pikt.ag
                    </a>
                  </li>
                  <li>
                    <strong>網站：</strong>{' '}
                    <a
                      href="https://pikt.ag"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-600 underline hover:text-yellow-700"
                    >
                      https://pikt.ag
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="PikTag Logo" className="w-6 h-6 rounded-md" />
            <span className="font-bold text-lg tracking-tight">Pikt.ag</span>
          </Link>
          <div className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Pikt.ag. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-neutral-600">
            <Link to="/privacy" className="hover:text-neutral-900 transition-colors">
              隱私權政策
            </Link>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              服務條款
            </a>
            <a href="mailto:privacy@pikt.ag" className="hover:text-neutral-900 transition-colors">
              聯絡我們
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
