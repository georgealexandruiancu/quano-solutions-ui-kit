export type IconsId =
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "audio-mute"
  | "audio"
  | "backspace"
  | "bell"
  | "book"
  | "bookmark"
  | "bulb"
  | "calculator"
  | "calendar-alt"
  | "calendar"
  | "camera-alt"
  | "camera"
  | "card"
  | "case"
  | "check"
  | "close"
  | "copy"
  | "database"
  | "decrease"
  | "denied"
  | "desktop"
  | "document-add"
  | "document-chart"
  | "document-copy"
  | "document-download"
  | "document-remove"
  | "document-text"
  | "document"
  | "dots-alt"
  | "dots"
  | "download"
  | "enlarge"
  | "external"
  | "filter"
  | "finger-print"
  | "flag"
  | "flash"
  | "folder-add"
  | "folder-open"
  | "folder-remove"
  | "folder"
  | "gift"
  | "house"
  | "library"
  | "lock"
  | "login"
  | "logout"
  | "mail-open"
  | "mail"
  | "menu"
  | "mic-mute"
  | "mic"
  | "mobile"
  | "money"
  | "pause"
  | "pen-alt"
  | "pen"
  | "pin"
  | "pipe"
  | "play"
  | "search"
  | "stop"
  | "tablet"
  | "target"
  | "unlock"
  | "video"
  | "view-alt"
  | "view"
  | "warning";

export type IconsKey =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "AudioMute"
  | "Audio"
  | "Backspace"
  | "Bell"
  | "Book"
  | "Bookmark"
  | "Bulb"
  | "Calculator"
  | "CalendarAlt"
  | "Calendar"
  | "CameraAlt"
  | "Camera"
  | "Card"
  | "Case"
  | "Check"
  | "Close"
  | "Copy"
  | "Database"
  | "Decrease"
  | "Denied"
  | "Desktop"
  | "DocumentAdd"
  | "DocumentChart"
  | "DocumentCopy"
  | "DocumentDownload"
  | "DocumentRemove"
  | "DocumentText"
  | "Document"
  | "DotsAlt"
  | "Dots"
  | "Download"
  | "Enlarge"
  | "External"
  | "Filter"
  | "FingerPrint"
  | "Flag"
  | "Flash"
  | "FolderAdd"
  | "FolderOpen"
  | "FolderRemove"
  | "Folder"
  | "Gift"
  | "House"
  | "Library"
  | "Lock"
  | "Login"
  | "Logout"
  | "MailOpen"
  | "Mail"
  | "Menu"
  | "MicMute"
  | "Mic"
  | "Mobile"
  | "Money"
  | "Pause"
  | "PenAlt"
  | "Pen"
  | "Pin"
  | "Pipe"
  | "Play"
  | "Search"
  | "Stop"
  | "Tablet"
  | "Target"
  | "Unlock"
  | "Video"
  | "ViewAlt"
  | "View"
  | "Warning";

export enum Icons {
  ArrowDown = "arrow-down",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  ArrowUp = "arrow-up",
  AudioMute = "audio-mute",
  Audio = "audio",
  Backspace = "backspace",
  Bell = "bell",
  Book = "book",
  Bookmark = "bookmark",
  Bulb = "bulb",
  Calculator = "calculator",
  CalendarAlt = "calendar-alt",
  Calendar = "calendar",
  CameraAlt = "camera-alt",
  Camera = "camera",
  Card = "card",
  Case = "case",
  Check = "check",
  Close = "close",
  Copy = "copy",
  Database = "database",
  Decrease = "decrease",
  Denied = "denied",
  Desktop = "desktop",
  DocumentAdd = "document-add",
  DocumentChart = "document-chart",
  DocumentCopy = "document-copy",
  DocumentDownload = "document-download",
  DocumentRemove = "document-remove",
  DocumentText = "document-text",
  Document = "document",
  DotsAlt = "dots-alt",
  Dots = "dots",
  Download = "download",
  Enlarge = "enlarge",
  External = "external",
  Filter = "filter",
  FingerPrint = "finger-print",
  Flag = "flag",
  Flash = "flash",
  FolderAdd = "folder-add",
  FolderOpen = "folder-open",
  FolderRemove = "folder-remove",
  Folder = "folder",
  Gift = "gift",
  House = "house",
  Library = "library",
  Lock = "lock",
  Login = "login",
  Logout = "logout",
  MailOpen = "mail-open",
  Mail = "mail",
  Menu = "menu",
  MicMute = "mic-mute",
  Mic = "mic",
  Mobile = "mobile",
  Money = "money",
  Pause = "pause",
  PenAlt = "pen-alt",
  Pen = "pen",
  Pin = "pin",
  Pipe = "pipe",
  Play = "play",
  Search = "search",
  Stop = "stop",
  Tablet = "tablet",
  Target = "target",
  Unlock = "unlock",
  Video = "video",
  ViewAlt = "view-alt",
  View = "view",
  Warning = "warning",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowDown]: "61697",
  [Icons.ArrowLeft]: "61698",
  [Icons.ArrowRight]: "61699",
  [Icons.ArrowUp]: "61700",
  [Icons.AudioMute]: "61701",
  [Icons.Audio]: "61702",
  [Icons.Backspace]: "61703",
  [Icons.Bell]: "61704",
  [Icons.Book]: "61705",
  [Icons.Bookmark]: "61706",
  [Icons.Bulb]: "61707",
  [Icons.Calculator]: "61708",
  [Icons.CalendarAlt]: "61709",
  [Icons.Calendar]: "61710",
  [Icons.CameraAlt]: "61711",
  [Icons.Camera]: "61712",
  [Icons.Card]: "61713",
  [Icons.Case]: "61714",
  [Icons.Check]: "61715",
  [Icons.Close]: "61716",
  [Icons.Copy]: "61717",
  [Icons.Database]: "61718",
  [Icons.Decrease]: "61719",
  [Icons.Denied]: "61720",
  [Icons.Desktop]: "61721",
  [Icons.DocumentAdd]: "61722",
  [Icons.DocumentChart]: "61723",
  [Icons.DocumentCopy]: "61724",
  [Icons.DocumentDownload]: "61725",
  [Icons.DocumentRemove]: "61726",
  [Icons.DocumentText]: "61727",
  [Icons.Document]: "61728",
  [Icons.DotsAlt]: "61729",
  [Icons.Dots]: "61730",
  [Icons.Download]: "61731",
  [Icons.Enlarge]: "61732",
  [Icons.External]: "61733",
  [Icons.Filter]: "61734",
  [Icons.FingerPrint]: "61735",
  [Icons.Flag]: "61736",
  [Icons.Flash]: "61737",
  [Icons.FolderAdd]: "61738",
  [Icons.FolderOpen]: "61739",
  [Icons.FolderRemove]: "61740",
  [Icons.Folder]: "61741",
  [Icons.Gift]: "61742",
  [Icons.House]: "61743",
  [Icons.Library]: "61744",
  [Icons.Lock]: "61745",
  [Icons.Login]: "61746",
  [Icons.Logout]: "61747",
  [Icons.MailOpen]: "61748",
  [Icons.Mail]: "61749",
  [Icons.Menu]: "61750",
  [Icons.MicMute]: "61751",
  [Icons.Mic]: "61752",
  [Icons.Mobile]: "61753",
  [Icons.Money]: "61754",
  [Icons.Pause]: "61755",
  [Icons.PenAlt]: "61756",
  [Icons.Pen]: "61757",
  [Icons.Pin]: "61758",
  [Icons.Pipe]: "61759",
  [Icons.Play]: "61760",
  [Icons.Search]: "61761",
  [Icons.Stop]: "61762",
  [Icons.Tablet]: "61763",
  [Icons.Target]: "61764",
  [Icons.Unlock]: "61765",
  [Icons.Video]: "61766",
  [Icons.ViewAlt]: "61767",
  [Icons.View]: "61768",
  [Icons.Warning]: "61769",
};
