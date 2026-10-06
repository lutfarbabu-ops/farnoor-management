window.DEPARTMENTS = [
  {
    "id": "admin",
    "name": "Admin",
    "icon": "♛",
    "color": "#305f70",
    "pages": [
      {
        "id": "admin-notices",
        "name": "Notices",
        "icon": "⚑",
        "shade": "#e9edfa"
      },
      {
        "id": "admin-documents",
        "name": "Documents",
        "icon": "▤",
        "shade": "#fff0df"
      }
    ]
  },
  {
    "id": "hr",
    "name": "HR",
    "icon": "♙",
    "color": "#ae526c",
    "pages": [
      {
        "id": "payroll",
        "name": "Payroll",
        "icon": "৳",
        "shade": "#e1f1fa",
        "fields": [
          [
            "reference",
            "Payroll reference"
          ],
          [
            "name",
            "Employee / salary period"
          ],
          [
            "quantity",
            "Salary amount (BDT)",
            "number"
          ],
          [
            "date",
            "Payment date",
            "date"
          ],
          [
            "status",
            "Status",
            "status"
          ]
        ]
      },
      {
        "id": "employees",
        "name": "Personal File",
        "icon": "♧",
        "shade": "#f8efcd",
        "fields": [
          [
            "reference",
            "Employee ID"
          ],
          [
            "name",
            "Employee name / designation"
          ],
          [
            "quantity",
            "Record quantity",
            "number"
          ],
          [
            "date",
            "Joining date",
            "date"
          ],
          [
            "status",
            "Status",
            "status"
          ]
        ]
      },
      {
        "id": "increment",
        "name": "Increment",
        "icon": "↗",
        "shade": "#eee6fb",
        "fields": [
          [
            "reference",
            "Increment reference"
          ],
          [
            "name",
            "Employee ID / name"
          ],
          [
            "quantity",
            "Increment amount (BDT)",
            "number"
          ],
          [
            "date",
            "Effective date",
            "date"
          ],
          [
            "status",
            "Status",
            "status"
          ]
        ]
      },
      {
        "id": "maternity-benefits",
        "name": "Maternity Benefits",
        "icon": "♡",
        "shade": "#e5f0ff",
        "fields": [
          [
            "reference",
            "Benefit reference"
          ],
          [
            "name",
            "Employee ID / name"
          ],
          [
            "quantity",
            "Benefit amount (BDT)",
            "number"
          ],
          [
            "date",
            "Payment date",
            "date"
          ],
          [
            "status",
            "Status",
            "status"
          ]
        ]
      },
      {
        "id": "service-benefits",
        "name": "Service Benefits",
        "icon": "♢",
        "shade": "#ffe8de",
        "fields": [
          [
            "reference",
            "Benefit reference"
          ],
          [
            "name",
            "Employee ID / name"
          ],
          [
            "quantity",
            "Benefit amount (BDT)",
            "number"
          ],
          [
            "date",
            "Settlement date",
            "date"
          ],
          [
            "status",
            "Status",
            "status"
          ]
        ]
      },
      {
        "id": "attendance",
        "name": "Attendance",
        "icon": "✓",
        "shade": "#e5f2ea"
      }
    ]
  },
  {
    "id": "accounts",
    "name": "Account",
    "icon": "৳",
    "color": "#427a47",
    "pages": [
      {
        "id": "credit-entry",
        "name": "CREDIT ENTRY",
        "parent": "CREDIT",
        "icon": "⊕",
        "shade": "#e5edff"
      },
      {
        "id": "cash-report",
        "name": "CASH REPORT",
        "parent": "CREDIT",
        "icon": "▤",
        "shade": "#fff1da"
      },
      {
        "id": "debit-entry",
        "name": "DEBIT ENTRY",
        "parent": "DEBIT",
        "icon": "⊖",
        "shade": "#f4e5fa"
      },
      {
        "id": "debit-report",
        "name": "DEBIT REPORT",
        "parent": "DEBIT",
        "icon": "▥",
        "shade": "#e1f1fa"
      },
      {
        "id": "balance-report",
        "name": "BALANCE REPORT",
        "icon": "⇄",
        "shade": "#f8efcd"
      },
      {
        "id": "tax",
        "name": "TAX",
        "icon": "▱",
        "shade": "#ece5fa"
      },
      {
        "id": "vat",
        "name": "VAT",
        "icon": "%",
        "shade": "#ffe8de"
      },
      {
        "id": "budget",
        "name": "BUDGET",
        "icon": "▦",
        "shade": "#e5effc"
      },
      {
        "id": "payments",
        "name": "Payment register",
        "icon": "৳",
        "shade": "#ece5fa"
      },
      {
        "id": "expenses",
        "name": "Expense register",
        "icon": "⊕",
        "shade": "#ffe8de"
      }
    ]
  },
  {
    "id": "commercial",
    "name": "Commercial",
    "icon": "▰",
    "color": "#385fa1",
    "pages": [
      {
        "id": "exports",
        "name": "Export register",
        "icon": "↗",
        "shade": "#fff0dc"
      },
      {
        "id": "imports",
        "name": "Import register",
        "icon": "↙",
        "shade": "#f2e6fa"
      }
    ]
  },
  {
    "id": "merch",
    "name": "Merchandising",
    "icon": "◈",
    "color": "#6553aa",
    "pages": [
      {
        "id": "order-entry",
        "name": "ORDER ENTRY",
        "parent": "NEW ORDER",
        "icon": "▤",
        "shade": "#e1f1fc"
      },
      {
        "id": "order-report",
        "name": "ORDER REPORT",
        "parent": "NEW ORDER",
        "icon": "▥",
        "shade": "#fff1da"
      },
      {
        "id": "booking",
        "name": "BOOKING",
        "icon": "▦",
        "shade": "#fbe5df"
      },
      {
        "id": "merch-sample",
        "name": "Sample",
        "icon": "◇",
        "shade": "#e4edf9"
      },
      {
        "id": "orders",
        "name": "Buyer orders (legacy)",
        "icon": "▤",
        "shade": "#e1f1fc",
        "hidden": true,
        "fields": [
          [
            "reference",
            "Order reference"
          ],
          [
            "name",
            "Buyer / style"
          ],
          [
            "quantity",
            "Quantity (pcs)",
            "number"
          ],
          [
            "date",
            "Delivery date",
            "date"
          ],
          [
            "status",
            "Status",
            "status"
          ]
        ]
      },
      {
        "id": "styles",
        "name": "Style register",
        "icon": "◇",
        "shade": "#fff1da",
        "hidden": true
      }
    ]
  },
  {
    "id": "knitting",
    "name": "Knitting and Dyeing",
    "icon": "▨",
    "color": "#087e83",
    "pages": [
      {
        "id": "knitting-jobs",
        "name": "Knitting jobs",
        "icon": "▥",
        "shade": "#f5e5ef"
      },
      {
        "id": "dyeing-batches",
        "name": "Dyeing batches",
        "icon": "◉",
        "shade": "#f9eecf"
      }
    ]
  },
  {
    "id": "inventory",
    "name": "Store",
    "icon": "▣",
    "color": "#b07624",
    "pages": [
      {
        "id": "stock",
        "name": "Fabric & trims",
        "icon": "▧",
        "shade": "#e4eaff"
      },
      {
        "id": "movement",
        "name": "Stock movement",
        "icon": "⇄",
        "shade": "#fae5ed"
      }
    ]
  },
  {
    "id": "production",
    "name": "Production",
    "icon": "⚙",
    "color": "#277a93",
    "pages": [
      {
        "id": "schedule-line-1",
        "name": "Line-1",
        "section": "Line-1",
        "navPath": [
          "Schedule",
          "Sewing",
          "Line-1"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-report-1",
        "name": "Schedule Report",
        "section": "Line-1",
        "navPath": [
          "Schedule",
          "Sewing",
          "Line-1"
        ],
        "icon": "▤",
        "shade": "#fff0d4"
      },
      {
        "id": "schedule-line-2",
        "name": "Line-2",
        "section": "Line-2",
        "navPath": [
          "Schedule",
          "Sewing",
          "Line-2"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-report-2",
        "name": "Schedule Report",
        "section": "Line-2",
        "navPath": [
          "Schedule",
          "Sewing",
          "Line-2"
        ],
        "icon": "▤",
        "shade": "#fff0d4"
      },
      {
        "id": "schedule-line-3",
        "name": "Line-3",
        "section": "Line-3",
        "navPath": [
          "Schedule",
          "Sewing",
          "Line-3"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-report-3",
        "name": "Schedule Report",
        "section": "Line-3",
        "navPath": [
          "Schedule",
          "Sewing",
          "Line-3"
        ],
        "icon": "▤",
        "shade": "#fff0d4"
      },
      {
        "id": "schedule-line-4",
        "name": "Line-4",
        "section": "Line-4",
        "navPath": [
          "Schedule",
          "Sewing",
          "Line-4"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-report-4",
        "name": "Schedule Report",
        "section": "Line-4",
        "navPath": [
          "Schedule",
          "Sewing",
          "Line-4"
        ],
        "icon": "▤",
        "shade": "#fff0d4"
      },
      {
        "id": "schedule-line-5",
        "name": "Unit-2 Line-1",
        "section": "Unit-2 Line-1",
        "navPath": [
          "Schedule",
          "Sewing",
          "Unit-2 Line-1"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-report-5",
        "name": "Schedule Report",
        "section": "Unit-2 Line-1",
        "navPath": [
          "Schedule",
          "Sewing",
          "Unit-2 Line-1"
        ],
        "icon": "▤",
        "shade": "#fff0d4"
      },
      {
        "id": "schedule-line-6",
        "name": "Unit-2 Line-2",
        "section": "Unit-2 Line-2",
        "navPath": [
          "Schedule",
          "Sewing",
          "Unit-2 Line-2"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-report-6",
        "name": "Schedule Report",
        "section": "Unit-2 Line-2",
        "navPath": [
          "Schedule",
          "Sewing",
          "Unit-2 Line-2"
        ],
        "icon": "▤",
        "shade": "#fff0d4"
      },
      {
        "id": "schedule-line-7",
        "name": "Unit-2 Line-3",
        "section": "Unit-2 Line-3",
        "navPath": [
          "Schedule",
          "Sewing",
          "Unit-2 Line-3"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-report-7",
        "name": "Schedule Report",
        "section": "Unit-2 Line-3",
        "navPath": [
          "Schedule",
          "Sewing",
          "Unit-2 Line-3"
        ],
        "icon": "▤",
        "shade": "#fff0d4"
      },
      {
        "id": "schedule-line-8",
        "name": "Unit-2 Line-4",
        "section": "Unit-2 Line-4",
        "navPath": [
          "Schedule",
          "Sewing",
          "Unit-2 Line-4"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-report-8",
        "name": "Schedule Report",
        "section": "Unit-2 Line-4",
        "navPath": [
          "Schedule",
          "Sewing",
          "Unit-2 Line-4"
        ],
        "icon": "▤",
        "shade": "#fff0d4"
      },
      {
        "id": "schedule-cutting",
        "name": "Cutting",
        "navPath": [
          "Schedule"
        ],
        "icon": "✂",
        "shade": "#fce4dd"
      },
      {
        "id": "schedule-finishing",
        "name": "Finishing",
        "navPath": [
          "Schedule"
        ],
        "icon": "✧",
        "shade": "#eee4fa"
      },
      {
        "id": "schedule-quality",
        "name": "Quality",
        "navPath": [
          "Schedule"
        ],
        "icon": "◎",
        "shade": "#e1effb"
      },
      {
        "id": "planning",
        "name": "Production planning",
        "icon": "▦",
        "shade": "#f5e5ef"
      },
      {
        "id": "output",
        "name": "Daily output",
        "icon": "▥",
        "shade": "#f9eecf"
      }
    ]
  },
  {
    "id": "cutting",
    "name": "Cutting",
    "icon": "✂",
    "color": "#8f5b33",
    "pages": [
      {
        "id": "cutting-plan",
        "name": "Cutting plan",
        "icon": "▤",
        "shade": "#e1f1fc"
      },
      {
        "id": "cutting-output",
        "name": "Cutting output",
        "icon": "▥",
        "shade": "#eee6fb"
      }
    ]
  },
  {
    "id": "finishing",
    "name": "Finishing",
    "icon": "✧",
    "color": "#8c4596",
    "pages": [
      {
        "id": "finishing-output",
        "name": "Finishing output",
        "icon": "✓",
        "shade": "#e1f1fa"
      }
    ]
  },
  {
    "id": "packing",
    "name": "Packing",
    "icon": "▣",
    "color": "#547a37",
    "pages": [
      {
        "id": "packing",
        "name": "Packing register",
        "icon": "▣",
        "shade": "#fff1da"
      }
    ]
  },
  {
    "id": "quality",
    "name": "Quality",
    "icon": "◎",
    "color": "#ab653e",
    "pages": [
      {
        "id": "inspection",
        "name": "Inspection log",
        "icon": "⌕",
        "shade": "#dfeeff"
      },
      {
        "id": "issues",
        "name": "Issue tracker",
        "icon": "⚑",
        "shade": "#eee6fb"
      }
    ]
  },
  {
    "id": "sample",
    "name": "Sample",
    "icon": "◇",
    "color": "#aa3f55",
    "pages": [
      {
        "id": "samples",
        "name": "Sample tracker",
        "icon": "◈",
        "shade": "#e1f1fc"
      },
      {
        "id": "sample-approvals",
        "name": "Sample approvals",
        "icon": "✓",
        "shade": "#f8efcd"
      }
    ]
  },
  {
    "id": "maintenance",
    "name": "Maintenance",
    "icon": "⚒",
    "color": "#526775",
    "pages": [
      {
        "id": "maintenance-jobs",
        "name": "Maintenance jobs",
        "icon": "⚙",
        "shade": "#ffe8de"
      },
      {
        "id": "machines",
        "name": "Machine register",
        "icon": "▦",
        "shade": "#ece5fa"
      }
    ]
  },
  {
    "id": "electrical",
    "name": "Electrical",
    "icon": "ϟ",
    "color": "#777323",
    "pages": [
      {
        "id": "electrical-jobs",
        "name": "Electrical jobs",
        "icon": "⊕",
        "shade": "#e1f1fc"
      },
      {
        "id": "power-log",
        "name": "Power log",
        "icon": "▥",
        "shade": "#fae5ed"
      }
    ]
  },
  {
    "id": "sewing",
    "name": "Sewing",
    "icon": "⚙",
    "color": "#b24b78",
    "pages": [
      {
        "id": "sewing-plan",
        "name": "Sewing Plan",
        "icon": "▦",
        "shade": "#e8f3fc"
      },
      {
        "id": "sewing-output",
        "name": "Sewing Output",
        "icon": "▥",
        "shade": "#fff0df"
      }
    ]
  }
];
window.FARNOOR_DEPARTMENT_GROUPS = [{"name":"Admin","departments":["Admin","AdminA","AdminB"]},{"name":"HR","departments":["HR","HRA","HRB"]},{"name":"Account","departments":["Account","AccountA","AccountB"]},{"name":"Commercial","departments":["Commercial","CommercialA","CommercialB","CommercialC"]},{"name":"Merchandising","departments":["Merchandising","MerchandisingA","MerchandisingB","MerchandisingC"]},{"name":"Knitting and Dyeing","departments":["Knitting and Dyeing"]},{"name":"Store","departments":["Store","StoreA","StoreB","StoreC"]},{"name":"Production","departments":["Production"]},{"name":"Cutting","departments":["Cutting","CuttingA","CuttingB"]},{"name":"Finishing","departments":["Finishing","FinishingA","FinishingB"]},{"name":"Packing","departments":["Packing","PackingA","PackingB"]},{"name":"Quality","departments":["Quality","QualityA","QualityB","QualityC","QualityD","QualityE"]},{"name":"Sample","departments":["Sample","SampleA","SampleB","SampleC"]},{"name":"Maintenance","departments":["Maintenance","MaintenanceA","MaintenanceB","MaintenanceC","MaintenanceD"]},{"name":"Electrical","departments":["Electrical","ElectricalA","ElectricalB"]},{"name":"Sewing","departments":["Sewing","SewingA"]},{"name":"Line-1","departments":["Line-1","Line-1A","Line-1B"]},{"name":"Line-2","departments":["Line-2","Line-2A","Line-2B"]},{"name":"Line-3","departments":["Line-3","Line-3A","Line-3B"]},{"name":"Line-4","departments":["Line-4","Line-4A","Line-4B"]},{"name":"Unit-2 Line-1","departments":["Unit-2 Line-1","Unit-2 Line-1A","Unit-2 Line-1B"]},{"name":"Unit-2 Line-2","departments":["Unit-2 Line-2","Unit-2 Line-2A","Unit-2 Line-2B"]},{"name":"Unit-2 Line-3","departments":["Unit-2 Line-3","Unit-2 Line-3A","Unit-2 Line-3B"]},{"name":"Unit-2 Line-4","departments":["Unit-2 Line-4","Unit-2 Line-4A","Unit-2 Line-4B"]}];
window.FARNOOR_PAGE_CATALOG = [{"id":"admin-notices","name":"Notices","module":"Admin","moduleId":"admin","parent":"","hidden":false,"resources":["record:admin-notices"]},{"id":"admin-documents","name":"Documents","module":"Admin","moduleId":"admin","parent":"","hidden":false,"resources":["record:admin-documents"]},{"id":"payroll","name":"Payroll","module":"HR","moduleId":"hr","parent":"","hidden":false,"resources":["record:payroll"]},{"id":"employees","name":"Personal File","module":"HR","moduleId":"hr","parent":"","hidden":false,"resources":["record:employees"]},{"id":"increment","name":"Increment","module":"HR","moduleId":"hr","parent":"","hidden":false,"resources":["record:increment"]},{"id":"maternity-benefits","name":"Maternity Benefits","module":"HR","moduleId":"hr","parent":"","hidden":false,"resources":["record:maternity-benefits"]},{"id":"service-benefits","name":"Service Benefits","module":"HR","moduleId":"hr","parent":"","hidden":false,"resources":["record:service-benefits"]},{"id":"attendance","name":"Attendance","module":"HR","moduleId":"hr","parent":"","hidden":false,"resources":["record:attendance"]},{"id":"credit-entry","name":"CREDIT ENTRY","module":"Account","moduleId":"accounts","parent":"CREDIT","hidden":false,"resources":["record:credit-entry","ledger:credit"]},{"id":"cash-report","name":"CASH REPORT","module":"Account","moduleId":"accounts","parent":"CREDIT","hidden":false,"resources":["record:cash-report","ledger:credit"]},{"id":"debit-entry","name":"DEBIT ENTRY","module":"Account","moduleId":"accounts","parent":"DEBIT","hidden":false,"resources":["record:debit-entry","ledger:debit"]},{"id":"debit-report","name":"DEBIT REPORT","module":"Account","moduleId":"accounts","parent":"DEBIT","hidden":false,"resources":["record:debit-report","ledger:debit"]},{"id":"balance-report","name":"BALANCE REPORT","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:balance-report","ledger:credit","ledger:debit"]},{"id":"tax","name":"TAX","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:tax"]},{"id":"vat","name":"VAT","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:vat"]},{"id":"budget","name":"BUDGET","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:budget"]},{"id":"payments","name":"Payment register","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:payments"]},{"id":"expenses","name":"Expense register","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:expenses"]},{"id":"exports","name":"Export register","module":"Commercial","moduleId":"commercial","parent":"","hidden":false,"resources":["record:exports"]},{"id":"imports","name":"Import register","module":"Commercial","moduleId":"commercial","parent":"","hidden":false,"resources":["record:imports"]},{"id":"order-entry","name":"ORDER ENTRY","module":"Merchandising","moduleId":"merch","parent":"NEW ORDER","hidden":false,"resources":["record:order-entry","orders"]},{"id":"order-report","name":"ORDER REPORT","module":"Merchandising","moduleId":"merch","parent":"NEW ORDER","hidden":false,"resources":["record:order-report","orders"]},{"id":"booking","name":"BOOKING","module":"Merchandising","moduleId":"merch","parent":"","hidden":false,"resources":["record:booking"]},{"id":"merch-sample","name":"Sample","module":"Merchandising","moduleId":"merch","parent":"","hidden":false,"resources":["record:merch-sample"]},{"id":"orders","name":"Buyer orders (legacy)","module":"Merchandising","moduleId":"merch","parent":"","hidden":true,"resources":["record:orders","orders"]},{"id":"styles","name":"Style register","module":"Merchandising","moduleId":"merch","parent":"","hidden":true,"resources":["record:styles"]},{"id":"knitting-jobs","name":"Knitting jobs","module":"Knitting and Dyeing","moduleId":"knitting","parent":"","hidden":false,"resources":["record:knitting-jobs"]},{"id":"dyeing-batches","name":"Dyeing batches","module":"Knitting and Dyeing","moduleId":"knitting","parent":"","hidden":false,"resources":["record:dyeing-batches"]},{"id":"stock","name":"Fabric & trims","module":"Store","moduleId":"inventory","parent":"","hidden":false,"resources":["record:stock"]},{"id":"movement","name":"Stock movement","module":"Store","moduleId":"inventory","parent":"","hidden":false,"resources":["record:movement"]},{"id":"schedule-line-1","name":"Line-1","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Line-1","hidden":false,"resources":["record:schedule-line-1","schedule:Line-1"]},{"id":"schedule-report-1","name":"Schedule Report","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Line-1","hidden":false,"resources":["record:schedule-report-1","schedule:Line-1"]},{"id":"schedule-line-2","name":"Line-2","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Line-2","hidden":false,"resources":["record:schedule-line-2","schedule:Line-2"]},{"id":"schedule-report-2","name":"Schedule Report","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Line-2","hidden":false,"resources":["record:schedule-report-2","schedule:Line-2"]},{"id":"schedule-line-3","name":"Line-3","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Line-3","hidden":false,"resources":["record:schedule-line-3","schedule:Line-3"]},{"id":"schedule-report-3","name":"Schedule Report","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Line-3","hidden":false,"resources":["record:schedule-report-3","schedule:Line-3"]},{"id":"schedule-line-4","name":"Line-4","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Line-4","hidden":false,"resources":["record:schedule-line-4","schedule:Line-4"]},{"id":"schedule-report-4","name":"Schedule Report","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Line-4","hidden":false,"resources":["record:schedule-report-4","schedule:Line-4"]},{"id":"schedule-line-5","name":"Unit-2 Line-1","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Unit-2 Line-1","hidden":false,"resources":["record:schedule-line-5","schedule:Unit-2 Line-1"]},{"id":"schedule-report-5","name":"Schedule Report","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Unit-2 Line-1","hidden":false,"resources":["record:schedule-report-5","schedule:Unit-2 Line-1"]},{"id":"schedule-line-6","name":"Unit-2 Line-2","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Unit-2 Line-2","hidden":false,"resources":["record:schedule-line-6","schedule:Unit-2 Line-2"]},{"id":"schedule-report-6","name":"Schedule Report","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Unit-2 Line-2","hidden":false,"resources":["record:schedule-report-6","schedule:Unit-2 Line-2"]},{"id":"schedule-line-7","name":"Unit-2 Line-3","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Unit-2 Line-3","hidden":false,"resources":["record:schedule-line-7","schedule:Unit-2 Line-3"]},{"id":"schedule-report-7","name":"Schedule Report","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Unit-2 Line-3","hidden":false,"resources":["record:schedule-report-7","schedule:Unit-2 Line-3"]},{"id":"schedule-line-8","name":"Unit-2 Line-4","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Unit-2 Line-4","hidden":false,"resources":["record:schedule-line-8","schedule:Unit-2 Line-4"]},{"id":"schedule-report-8","name":"Schedule Report","module":"Production","moduleId":"production","parent":"Schedule / Sewing / Unit-2 Line-4","hidden":false,"resources":["record:schedule-report-8","schedule:Unit-2 Line-4"]},{"id":"schedule-cutting","name":"Cutting","module":"Production","moduleId":"production","parent":"Schedule","hidden":false,"resources":["record:schedule-cutting"]},{"id":"schedule-finishing","name":"Finishing","module":"Production","moduleId":"production","parent":"Schedule","hidden":false,"resources":["record:schedule-finishing"]},{"id":"schedule-quality","name":"Quality","module":"Production","moduleId":"production","parent":"Schedule","hidden":false,"resources":["record:schedule-quality"]},{"id":"planning","name":"Production planning","module":"Production","moduleId":"production","parent":"","hidden":false,"resources":["record:planning"]},{"id":"output","name":"Daily output","module":"Production","moduleId":"production","parent":"","hidden":false,"resources":["record:output"]},{"id":"cutting-plan","name":"Cutting plan","module":"Cutting","moduleId":"cutting","parent":"","hidden":false,"resources":["record:cutting-plan"]},{"id":"cutting-output","name":"Cutting output","module":"Cutting","moduleId":"cutting","parent":"","hidden":false,"resources":["record:cutting-output"]},{"id":"finishing-output","name":"Finishing output","module":"Finishing","moduleId":"finishing","parent":"","hidden":false,"resources":["record:finishing-output"]},{"id":"packing","name":"Packing register","module":"Packing","moduleId":"packing","parent":"","hidden":false,"resources":["record:packing"]},{"id":"inspection","name":"Inspection log","module":"Quality","moduleId":"quality","parent":"","hidden":false,"resources":["record:inspection"]},{"id":"issues","name":"Issue tracker","module":"Quality","moduleId":"quality","parent":"","hidden":false,"resources":["record:issues"]},{"id":"samples","name":"Sample tracker","module":"Sample","moduleId":"sample","parent":"","hidden":false,"resources":["record:samples"]},{"id":"sample-approvals","name":"Sample approvals","module":"Sample","moduleId":"sample","parent":"","hidden":false,"resources":["record:sample-approvals"]},{"id":"maintenance-jobs","name":"Maintenance jobs","module":"Maintenance","moduleId":"maintenance","parent":"","hidden":false,"resources":["record:maintenance-jobs"]},{"id":"machines","name":"Machine register","module":"Maintenance","moduleId":"maintenance","parent":"","hidden":false,"resources":["record:machines"]},{"id":"electrical-jobs","name":"Electrical jobs","module":"Electrical","moduleId":"electrical","parent":"","hidden":false,"resources":["record:electrical-jobs"]},{"id":"power-log","name":"Power log","module":"Electrical","moduleId":"electrical","parent":"","hidden":false,"resources":["record:power-log"]},{"id":"sewing-plan","name":"Sewing Plan","module":"Sewing","moduleId":"sewing","parent":"","hidden":false,"resources":["record:sewing-plan"]},{"id":"sewing-output","name":"Sewing Output","module":"Sewing","moduleId":"sewing","parent":"","hidden":false,"resources":["record:sewing-output"]}];
