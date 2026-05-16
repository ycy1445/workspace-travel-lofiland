// ══════════════════════════════════════════════════
//  Lofi Land Camping — Google Apps Script
//
//  設定步驟：
//  1. 開啟你的 Google Sheet
//  2. 建立一個名為「FAQ」的工作表（sheet）
//  3. 第一列填入欄位標題：
//     A1: id  B1: question  C1: answer  D1: status  E1: timestamp
//  4. 點選「擴充功能」→「Apps Script」，貼入此程式碼
//  5. 點選「部署」→「新增部署作業」
//     - 類型：網頁應用程式
//     - 執行身分：我
//     - 存取權：任何人
//  6. 複製部署後的 Web App URL
//  7. 貼到 src/config.js 的 APPS_SCRIPT_URL
// ══════════════════════════════════════════════════

// 讀取所有已審核的 FAQ（status = 'approved'）
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('FAQ')
  const rows  = sheet.getDataRange().getValues()

  const faqs = rows
    .slice(1) // 跳過標題列
    .filter(row => row[3] === 'approved')
    .map(row => ({
      id:       String(row[0]),
      question: row[1],
      answer:   row[2],
    }))

  return ContentService
    .createTextOutput(JSON.stringify(faqs))
    .setMimeType(ContentService.MimeType.JSON)
}

// 接收使用者送出的新問題（status 預設為 'pending'）
// 主辦人在 Sheet 填入答案並將 status 改為 'approved' 後才會顯示
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('FAQ')
  const data  = JSON.parse(e.postData.contents)

  sheet.appendRow([
    Date.now(),                                // id
    data.question,                             // question
    '',                                        // answer（待主辦人填寫）
    'pending',                                 // status
    new Date().toLocaleString('zh-TW'),        // timestamp
  ])

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON)
}
