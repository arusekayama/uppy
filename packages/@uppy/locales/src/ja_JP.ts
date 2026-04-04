import type { Locale } from '@uppy/utils'

const ja_JP: Locale<0 | 1> = {
  strings: {},
  pluralize(n) {
    if (n === 1) {
      return 0
    }
    return 1
  },
}

ja_JP.strings = {
  addBulkFilesFailed: {
    '0': '内部エラーのため %{smart_count} ファイルを追加できませんでした',
    '1': '内部エラーのため %{smart_count} ファイルを追加できませんでした',
  },
  addedNumFiles: '%{numFiles} ファイルを追加しました',
  addingMoreFiles: 'ファイルを追加しています',
  additionalRestrictionsFailed:
    '%{count} 件の追加制限が満たされませんでした',
  addMore: 'さらに追加',
  addMoreFiles: 'ファイルを追加',
  aggregateExceedsSize:
    '選択したファイルの合計サイズ %{size} が、最大サイズ %{sizeAllowed} を超えています',
  allFilesFromFolderNamed: 'フォルダ %{name} のすべてのファイル',
  allowAccessDescription:
    'カメラやビデオの機能を使用するには、カメラへのアクセスを許可してください。',
  allowAccessTitle: 'カメラへのアクセスを許可してください',
  allowAudioAccessDescription:
    '録音するには、マイクへのアクセスを許可してください。',
  allowAudioAccessTitle: 'マイクへのアクセスを許可してください',
  aspectRatioLandscape: '横長にトリミング (16:9)',
  aspectRatioPortrait: '縦長にトリミング (9:16)',
  aspectRatioSquare: '正方形にトリミング',
  authAborted: '認証が中断されました',
  authenticate: '接続',
  authenticateWith: '%{pluginName}に接続します',
  authenticateWithTitle:
    'ファイルを選択するには%{pluginName}で認証してください',
  back: '戻る',
  browse: '参照',
  browseFiles: 'ファイルを参照',
  browseFolders: 'フォルダを参照',
  cancel: 'キャンセル',
  cancelUpload: 'アップロードをキャンセル',
  closeModal: 'モーダルを閉じる',
  companionError: 'Companionとの接続に失敗しました',
  companionUnauthorizeHint:
    '%{provider} アカウントの認証解除は %{url} で行ってください',
  complete: '完了しました',
  compressedX: '画像圧縮により%{size}を節約しました',
  compressingImages: '画像を圧縮中...',
  connectedToInternet: 'インターネットに接続しました',
  copyLink: 'リンクをコピー',
  copyLinkToClipboardFallback: '以下のURLをコピー',
  copyLinkToClipboardSuccess: 'リンクをクリップボードにコピーしました',
  creatingAssembly: 'アップロードの準備をしています...',
  creatingAssemblyFailed: 'Transloadit: アセンブリを作成できませんでした',
  dashboardTitle: 'ファイルアップローダー',
  dashboardWindowTitle:
    'ファイルアップローダーウィンドウ（閉じるにはEscapeキーを押してください）',
  dataUploadedOfTotal: '%{complete} / %{total}',
  dataUploadedOfUnknown: '%{complete} / 不明',
  discardMediaFile: 'メディアを破棄',
  discardRecordedFile: '記録ファイルを破棄',
  done: '完了しました',
  dropHereOr: 'ここにドロップするか、%{browse}してください',
  dropHint: 'ここにファイルをドロップしてください',
  dropPasteBoth:
    'ここにファイルをドロップするか、%{browseFiles}するか、%{browseFolders}してください',
  dropPasteFiles:
    'ここにファイルをドロップするか、%{browseFiles}してください',
  dropPasteFolders:
    'ここにファイルをドロップするか、%{browseFolders}してください',
  dropPasteImportBoth:
    'ここにファイルをドロップするか、%{browseFiles}するか、%{browseFolders}するか、以下からインポートしてください',
  dropPasteImportFiles:
    'ここにファイルをドロップするか、%{browseFiles}するか、以下からインポートしてください',
  dropPasteImportFolders:
    'ここにファイルをドロップするか、%{browseFolders}するか、以下からインポートしてください',
  editFile: 'ファイルを編集',
  editFileWithFilename: 'ファイル %{file} を編集',
  editImage: '画像を編集',
  editing: '%{file}を編集しています',
  emptyFolderAdded: 'フォルダが空なためファイルが追加されませんでした',
  encoding: 'エンコードしています...',
  enterCorrectUrl:
    '不正なURL: ファイルへの直接リンクが入力されていることを確認してください',
  enterTextToSearch: '画像を検索するテキストを入力してください',
  enterUrlToImport: 'ファイルをインポートするためのURLを入力してください',
  error: 'エラー',
  exceedsSize: '%{file} が最大サイズ %{size} を超えています',
  failedToAddFiles: 'ファイルを追加できませんでした',
  failedToFetch:
    'CompanionがURLを取得できませんでした。URLが正しいか確認してください',
  failedToUpload: '%{file}のアップロードに失敗しました',
  filesUploadedOfTotal: {
    '0': '%{complete} / %{smart_count} アップロード完了',
    '1': '%{complete} / %{smart_count} アップロード完了',
  },
  filter: 'フィルタ',
  finishEditingFile: 'ファイルの編集を終了',
  flipHorizontal: '水平反転',
  folderAdded: {
    '0': '%{folder} から% {smart_count} 個のファイルを追加しました',
    '1': '%{folder} から% {smart_count} 個のファイルを追加しました',
  },
  folderAlreadyAdded: 'フォルダ「%{folder}」は既に追加されています',
  generateImage: '画像を生成',
  generateImagePlaceholder:
    '山の湖に沈む穏やかな夕日、水面に松の木が映る',
  generating1: 'AIが考え中...',
  generating2: 'ピクセルを処理中...',
  generating3: '画像を召喚中...',
  generating4: 'AIが作業中...',
  generating5: '魔法を作成中...',
  generatingThumbnails: 'サムネイルを生成中...',
  import: 'インポート',
  importFiles: 'ファイルのインポート元:',
  importFrom: '%{name}からインポート',
  inferiorSize: 'このファイルは最小サイズ %{size} よりも小さいです',
  loadedXFiles: '%{numFiles} 個のファイルを読み込みました',
  loading: 'ロード中...',
  logIn: 'ログイン',
  logOut: 'ログアウト',
  micDisabled: 'ユーザーによってマイクへのアクセスが拒否されました',
  missingRequiredMetaField: '必須のメタフィールドがありません',
  missingRequiredMetaFieldOnFile: '%{fileName} に必須のメタフィールドがありません',
  missingRequiredMetaFields: {
    '0': '必須のメタフィールドがありません: %{fields}。',
    '1': '必須のメタフィールドがありません: %{fields}。',
  },
  myDevice: 'マイデバイス',
  noAudioDescription:
    '録音するには、マイクまたは他の音声入力デバイスを接続してください',
  noAudioTitle: 'マイクが利用できません',
  noCameraDescription:
    'カメラやビデオの機能を使用するには、カメラデバイスを接続してください',
  noCameraTitle: 'カメラが利用できません',
  noDuplicates:
    'ファイル「%{fileName}」は既に存在するため追加できません',
  noFilesFound: 'ファイルやフォルダがありません',
  noInternetConnection: 'インターネット接続がありません',
  noMoreFilesAllowed: 'これ以上ファイルを追加できません',
  noSearchResults: '検索結果はありません',
  openFolderNamed: 'フォルダ %{name} を開く',
  pause: '一時停止',
  paused: '一時停止中',
  pauseUpload: 'アップロードを一時停止',
  pickFiles: 'ファイルを選択',
  pickPhotos: '写真を選択',
  pleaseWait: 'お待ちください',
  pluginNameAudio: 'オーディオ',
  pluginNameBox: 'Box',
  pluginNameCamera: 'カメラ',
  pluginNameDropbox: 'Dropbox',
  pluginNameFacebook: 'Facebook',
  pluginNameGoogleDrive: 'Google ドライブ',
  pluginNameGoogleDrivePicker: 'Google ドライブ',
  pluginNameGooglePhotosPicker: 'Google フォト',
  pluginNameInstagram: 'Instagram',
  pluginNameOneDrive: 'OneDrive',
  pluginNameScreenCapture: 'スクリーンキャプチャ',
  pluginNameUnsplash: 'Unsplash',
  pluginNameUrl: 'リンク',
  pluginNameWebdav: 'WebDAV',
  pluginNameZoom: 'Zoom',
  pluginWebdavInputLabel:
    'ファイルのWebDAV URL',
  poweredBy: 'Powered by %{uppy}',
  processingXFiles: {
    '0': '%{smart_count} ファイル処理中',
    '1': '%{smart_count} ファイル処理中',
  },
  recording: '録画中',
  recordingLength: '録画時間 %{recording_length}',
  recordingStoppedMaxSize:
    'ファイルサイズが制限を超えるため、録画を停止しました',
  recordVideoBtn: 'ビデオを録画',
  recoveredAllFiles: 'すべてのファイルを復元しました。アップロードを再開できます。',
  recoveredXFiles: {
    '0': '1 ファイルを完全に復元できませんでした。再選択してアップロードを再開してください。',
    '1': '%{smart_count} ファイルを完全に復元できませんでした。再選択してアップロードを再開してください。',
  },
  removeFile: 'ファイルを削除',
  reSelect: '再選択',
  resetFilter: 'フィルタをリセット',
  resetSearch: '検索をリセット',
  resume: '再開',
  resumeUpload: 'アップロードを再開',
  retry: 'リトライ',
  retryUpload: 'アップロードをリトライ',
  revert: 'リセット',
  rotate: '90°回転',
  save: '保存',
  saveChanges: '変更を保存',
  search: '検索',
  searchImages: '画像を検索',
  selectX: {
    '0': '%{smart_count} を選択',
    '1': '%{smart_count} を選択',
  },
  sessionRestored: 'セッションを復元しました',
  showErrorDetails: 'エラーの詳細を表示',
  signInWithGoogle: 'Googleでログイン',
  smile: 'スマイル〜！',
  startAudioRecording: '録音開始',
  startCapturing: 'スクリーンキャプチャ開始',
  startRecording: '録画開始',
  stopAudioRecording: '録音停止',
  stopCapturing: 'スクリーンキャプチャ停止',
  stopRecording: '録画停止',
  streamActive: 'ストリーム有効',
  streamPassive: 'ストリーム無効',
  submitRecordedFile: '記録ファイルを送信',
  takePicture: '写真を撮る',
  takePictureBtn: '写真を撮る',
  takeScreenshot: 'スクリーンショットを撮る',
  unnamed: '無題',
  upload: 'アップロード',
  uploadComplete: 'アップロード完了',
  uploadFailed: 'アップロード失敗',
  uploading: 'アップロード中',
  uploadingXFiles: {
    '0': '%{smart_count} ファイルアップロード中',
    '1': '%{smart_count} ファイルアップロード中',
  },
  uploadPaused: 'アップロード一時停止',
  uploadStalled:
    'アップロードが %{seconds} 秒間進んでいません。再試行することをおすすめします。',
  uploadXFiles: {
    '0': '%{smart_count} ファイルをアップロード',
    '1': '%{smart_count} ファイルをアップロード',
  },
  uploadXNewFiles: {
    '0': '+%{smart_count} ファイルをアップロード',
    '1': '+%{smart_count} ファイルをアップロード',
  },
  xFilesSelected: {
    '0': '%{smart_count} ファイルを選択',
    '1': '%{smart_count} ファイルを選択',
  },
  xMoreFilesAdded: {
    '0': '%{smart_count} ファイルを追加',
    '1': '%{smart_count} ファイルを追加',
  },
  xTimeLeft: '残り %{time}',
  youCanOnlyUploadFileTypes: '許可されているファイル形式は次の物です: %{types}',
  youCanOnlyUploadX: {
    '0': '%{smart_count} ファイル数のみアップロード可能です',
    '1': '%{smart_count} ファイル数のみアップロード可能です',
  },
  youHaveToAtLeastSelectX: {
    '0': '最低でも %{smart_count} ファイル選択してください',
    '1': '最低でも %{smart_count} ファイル選択してください',
  },
  zoomIn: 'ズームイン',
  zoomOut: 'ズームアウト',
}

// @ts-ignore untyped
if (typeof Uppy !== 'undefined') {
  // @ts-ignore untyped
  globalThis.Uppy.locales.ja_JP = ja_JP
}

export default ja_JP
