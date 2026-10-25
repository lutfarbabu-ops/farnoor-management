'use strict';

;/* config.js */
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
        "id": "hr-home",
        "name": "Home",
        "navPath": [
          "Admin"
        ],
        "icon": "⌂",
        "shade": "#fff1dc",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Home / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-menu-setup",
        "name": "Menu Setup",
        "navPath": [
          "Admin"
        ],
        "icon": "☷",
        "shade": "#eee7fb",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Menu Setup / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-form-builder",
        "name": "Form Builder",
        "navPath": [
          "Admin"
        ],
        "icon": "▤",
        "shade": "#e0f4ee",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Form Builder / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-user-login",
        "name": "User Login",
        "navPath": [
          "Admin"
        ],
        "icon": "♙",
        "shade": "#fae9ed",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "User Login / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-letter-archive",
        "name": "Letter Archive",
        "navPath": [
          "Utilities"
        ],
        "icon": "✉",
        "shade": "#e4f0fc",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Letter Archive / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-company-info",
        "name": "Company Info",
        "navPath": [
          "Management"
        ],
        "icon": "▦",
        "shade": "#fff1dc",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Company Info / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-branch-setup",
        "name": "Branch Setup",
        "navPath": [
          "Management"
        ],
        "icon": "◇",
        "shade": "#eee7fb",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Branch Setup / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-emp-group-list",
        "name": "Emp Group List",
        "navPath": [
          "Management"
        ],
        "icon": "♧",
        "shade": "#e0f4ee",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Emp Group / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-department-list",
        "name": "Department List",
        "navPath": [
          "Management"
        ],
        "icon": "▥",
        "shade": "#fae9ed",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Department / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-section-list",
        "name": "Section List",
        "navPath": [
          "Management"
        ],
        "icon": "◈",
        "shade": "#e4f0fc",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Section / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-section-group",
        "name": "Section Group",
        "navPath": [
          "Management"
        ],
        "icon": "⚑",
        "shade": "#fff1dc",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Section Group / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-designation-list",
        "name": "Designation List",
        "navPath": [
          "Management"
        ],
        "icon": "♜",
        "shade": "#eee7fb",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Designation / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-emp-type-list",
        "name": "Emp Type List",
        "navPath": [
          "Management"
        ],
        "icon": "◉",
        "shade": "#e0f4ee",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Emp Type / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-work-group-list",
        "name": "Work Group List",
        "navPath": [
          "Management"
        ],
        "icon": "⚙",
        "shade": "#fae9ed",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Work Group / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-work-shift-policy",
        "name": "Work Shift Policy",
        "navPath": [
          "Management"
        ],
        "icon": "◷",
        "shade": "#e4f0fc",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Work Shift Policy / description"
          ],
          [
            "quantity",
            "Value / amount",
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
        "id": "hr-attendance-policy",
        "name": "Attendance Policy",
        "navPath": [
          "Management"
        ],
        "icon": "▣",
        "shade": "#fff1dc",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Attendance Policy / description"
          ],
          [
            "quantity",
            "Value / amount",
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
        "id": "hr-leave-policy",
        "name": "Leave Policy",
        "navPath": [
          "Management"
        ],
        "icon": "✓",
        "shade": "#eee7fb",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Leave Policy / description"
          ],
          [
            "quantity",
            "Value / amount",
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
        "id": "hr-payroll-policy",
        "name": "Payroll Policy",
        "navPath": [
          "Management"
        ],
        "icon": "৳",
        "shade": "#e0f4ee",
        "fields": [
          [
            "reference",
            "Code / reference"
          ],
          [
            "name",
            "Payroll Policy / description"
          ],
          [
            "quantity",
            "Value / amount",
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
        "id": "hr-profile-search",
        "name": "Profile Search",
        "navPath": [
          "HR Info"
        ],
        "icon": "⌕",
        "shade": "#fae9ed",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Profile Search / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "name": "Emp Profile",
        "icon": "♧",
        "shade": "#e4f0fc",
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
        ],
        "navPath": [
          "HR Info"
        ]
      },
      {
        "id": "hr-emp-profile-create",
        "name": "Emp Profile Create",
        "navPath": [
          "HR Info"
        ],
        "icon": "⊕",
        "shade": "#fff1dc",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Emp Profile Create / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-card-print",
        "name": "Card Print",
        "navPath": [
          "HR Info"
        ],
        "icon": "▧",
        "shade": "#eee7fb",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Card Print / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-card-print-profile",
        "name": "Card Print Profile",
        "navPath": [
          "HR Info"
        ],
        "icon": "▨",
        "shade": "#e0f4ee",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Card Print Profile / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-job-circular",
        "name": "Job Circular",
        "navPath": [
          "HR Info"
        ],
        "icon": "⚐",
        "shade": "#fae9ed",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Job Circular / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-interview-info",
        "name": "Interview Info",
        "navPath": [
          "HR Info"
        ],
        "icon": "♙",
        "shade": "#e4f0fc",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Interview Info / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-confirmation-letter",
        "name": "Confirmation Letter",
        "navPath": [
          "HR Info"
        ],
        "icon": "✓",
        "shade": "#fff1dc",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Confirmation Letter / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-resignation-info",
        "name": "Resignation Info",
        "navPath": [
          "HR Info"
        ],
        "icon": "↪",
        "shade": "#eee7fb",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Resignation Info / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-promotion-letter",
        "name": "Promotion Letter",
        "navPath": [
          "HR Info"
        ],
        "icon": "↗",
        "shade": "#e0f4ee",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Promotion Letter / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "name": "Attendance Status",
        "icon": "◷",
        "shade": "#fae9ed",
        "navPath": [
          "Attendance"
        ],
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Attendance Status / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-leave-report-emp",
        "name": "Leave Report Emp",
        "navPath": [
          "Attendance"
        ],
        "icon": "▤",
        "shade": "#e4f0fc",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Leave Report Emp / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-leave-reports",
        "name": "Leave Reports",
        "navPath": [
          "Attendance"
        ],
        "icon": "▥",
        "shade": "#fff1dc",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Leave Reports / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-manual-punch",
        "name": "Manual Punch",
        "navPath": [
          "Attendance"
        ],
        "icon": "⊕",
        "shade": "#eee7fb",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Manual Punch / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-leave-entry",
        "name": "Leave Entry",
        "navPath": [
          "Attendance"
        ],
        "icon": "◈",
        "shade": "#e0f4ee",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Leave Entry / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-outdoor-slip",
        "name": "Outdoor Slip",
        "navPath": [
          "Attendance"
        ],
        "icon": "↗",
        "shade": "#fae9ed",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Outdoor Slip / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-profile-leave",
        "name": "Profile Leave",
        "navPath": [
          "Attendance"
        ],
        "icon": "♧",
        "shade": "#e4f0fc",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Profile Leave / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-holiday-schedule",
        "name": "Holiday Schedule",
        "navPath": [
          "Attendance"
        ],
        "icon": "▦",
        "shade": "#fff1dc",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Holiday Schedule / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        "id": "hr-duty-roster",
        "name": "Duty Roster",
        "navPath": [
          "Attendance"
        ],
        "icon": "◷",
        "shade": "#eee7fb",
        "fields": [
          [
            "reference",
            "Employee ID / reference"
          ],
          [
            "name",
            "Duty Roster / description"
          ],
          [
            "quantity",
            "Quantity / amount",
            "number"
          ],
          [
            "date",
            "Date",
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
        ],
        "navPath": [
          "HR Info"
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
        ],
        "navPath": [
          "HR Info"
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
        ],
        "navPath": [
          "HR Info"
        ]
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
        "parent": "ORDER",
        "icon": "▤",
        "shade": "#e1f1fc"
      },
      {
        "id": "order-report",
        "name": "ORDER REPORT",
        "parent": "ORDER",
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
        "name": "Schedule",
        "section": "Line-1",
        "navPath": [
          "Sewing",
          "Schedule"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-line-2",
        "name": "Schedule",
        "section": "Line-2",
        "navPath": [
          "Sewing",
          "Schedule"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-line-3",
        "name": "Schedule",
        "section": "Line-3",
        "navPath": [
          "Sewing",
          "Schedule"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-line-4",
        "name": "Schedule",
        "section": "Line-4",
        "navPath": [
          "Sewing",
          "Schedule"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-line-5",
        "name": "Schedule",
        "section": "Unit-2 Line-1",
        "navPath": [
          "Sewing",
          "Schedule"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-line-6",
        "name": "Schedule",
        "section": "Unit-2 Line-2",
        "navPath": [
          "Sewing",
          "Schedule"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-line-7",
        "name": "Schedule",
        "section": "Unit-2 Line-3",
        "navPath": [
          "Sewing",
          "Schedule"
        ],
        "groupEntry": true,
        "icon": "▦",
        "shade": "#e3edfc"
      },
      {
        "id": "schedule-line-8",
        "name": "Schedule",
        "section": "Unit-2 Line-4",
        "navPath": [
          "Sewing",
          "Schedule"
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
          "Sewing",
          "Schedule Report"
        ],
        "icon": "▤",
        "shade": "#fff0d4",
        "groupEntry": true
      },
      {
        "id": "schedule-report-2",
        "name": "Schedule Report",
        "section": "Line-2",
        "navPath": [
          "Sewing",
          "Schedule Report"
        ],
        "icon": "▤",
        "shade": "#fff0d4",
        "groupEntry": true
      },
      {
        "id": "schedule-report-3",
        "name": "Schedule Report",
        "section": "Line-3",
        "navPath": [
          "Sewing",
          "Schedule Report"
        ],
        "icon": "▤",
        "shade": "#fff0d4",
        "groupEntry": true
      },
      {
        "id": "schedule-report-4",
        "name": "Schedule Report",
        "section": "Line-4",
        "navPath": [
          "Sewing",
          "Schedule Report"
        ],
        "icon": "▤",
        "shade": "#fff0d4",
        "groupEntry": true
      },
      {
        "id": "schedule-report-5",
        "name": "Schedule Report",
        "section": "Unit-2 Line-1",
        "navPath": [
          "Sewing",
          "Schedule Report"
        ],
        "icon": "▤",
        "shade": "#fff0d4",
        "groupEntry": true
      },
      {
        "id": "schedule-report-6",
        "name": "Schedule Report",
        "section": "Unit-2 Line-2",
        "navPath": [
          "Sewing",
          "Schedule Report"
        ],
        "icon": "▤",
        "shade": "#fff0d4",
        "groupEntry": true
      },
      {
        "id": "schedule-report-7",
        "name": "Schedule Report",
        "section": "Unit-2 Line-3",
        "navPath": [
          "Sewing",
          "Schedule Report"
        ],
        "icon": "▤",
        "shade": "#fff0d4",
        "groupEntry": true
      },
      {
        "id": "schedule-report-8",
        "name": "Schedule Report",
        "section": "Unit-2 Line-4",
        "navPath": [
          "Sewing",
          "Schedule Report"
        ],
        "icon": "▤",
        "shade": "#fff0d4",
        "groupEntry": true
      },
      {
        "id": "schedule-cutting",
        "name": "Cutting",
        "navPath": [],
        "icon": "✂",
        "shade": "#fce4dd"
      },
      {
        "id": "schedule-finishing",
        "name": "Finishing",
        "navPath": [],
        "icon": "✧",
        "shade": "#eee4fa"
      },
      {
        "id": "schedule-quality",
        "name": "Quality",
        "navPath": [],
        "icon": "◎",
        "shade": "#e1effb"
      },
      {
        "id": "planning",
        "name": "Production planning",
        "icon": "▦",
        "shade": "#f5e5ef",
        "navPath": [
          "Production Records"
        ]
      },
      {
        "id": "output",
        "name": "Daily output",
        "icon": "▥",
        "shade": "#f9eecf",
        "navPath": [
          "Production Records"
        ]
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
window.FARNOOR_PAGE_CATALOG = [{"id":"admin-notices","name":"Notices","module":"Admin","moduleId":"admin","parent":"","hidden":false,"resources":["record:admin-notices"]},{"id":"admin-documents","name":"Documents","module":"Admin","moduleId":"admin","parent":"","hidden":false,"resources":["record:admin-documents"]},{"id":"hr-home","name":"Home","module":"HR","moduleId":"hr","parent":"Admin","hidden":false,"resources":["record:hr-home"]},{"id":"hr-menu-setup","name":"Menu Setup","module":"HR","moduleId":"hr","parent":"Admin","hidden":false,"resources":["record:hr-menu-setup"]},{"id":"hr-form-builder","name":"Form Builder","module":"HR","moduleId":"hr","parent":"Admin","hidden":false,"resources":["record:hr-form-builder"]},{"id":"hr-user-login","name":"User Login","module":"HR","moduleId":"hr","parent":"Admin","hidden":false,"resources":["record:hr-user-login"]},{"id":"hr-letter-archive","name":"Letter Archive","module":"HR","moduleId":"hr","parent":"Utilities","hidden":false,"resources":["record:hr-letter-archive"]},{"id":"hr-company-info","name":"Company Info","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-company-info"]},{"id":"hr-branch-setup","name":"Branch Setup","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-branch-setup"]},{"id":"hr-emp-group-list","name":"Emp Group List","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-emp-group-list"]},{"id":"hr-department-list","name":"Department List","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-department-list"]},{"id":"hr-section-list","name":"Section List","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-section-list"]},{"id":"hr-section-group","name":"Section Group","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-section-group"]},{"id":"hr-designation-list","name":"Designation List","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-designation-list"]},{"id":"hr-emp-type-list","name":"Emp Type List","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-emp-type-list"]},{"id":"hr-work-group-list","name":"Work Group List","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-work-group-list"]},{"id":"hr-work-shift-policy","name":"Work Shift Policy","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-work-shift-policy"]},{"id":"hr-attendance-policy","name":"Attendance Policy","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-attendance-policy"]},{"id":"hr-leave-policy","name":"Leave Policy","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-leave-policy"]},{"id":"hr-payroll-policy","name":"Payroll Policy","module":"HR","moduleId":"hr","parent":"Management","hidden":false,"resources":["record:hr-payroll-policy"]},{"id":"hr-profile-search","name":"Profile Search","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:hr-profile-search"]},{"id":"employees","name":"Emp Profile","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:employees"]},{"id":"hr-emp-profile-create","name":"Emp Profile Create","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:hr-emp-profile-create"]},{"id":"hr-card-print","name":"Card Print","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:hr-card-print"]},{"id":"hr-card-print-profile","name":"Card Print Profile","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:hr-card-print-profile"]},{"id":"hr-job-circular","name":"Job Circular","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:hr-job-circular"]},{"id":"hr-interview-info","name":"Interview Info","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:hr-interview-info"]},{"id":"hr-confirmation-letter","name":"Confirmation Letter","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:hr-confirmation-letter"]},{"id":"hr-resignation-info","name":"Resignation Info","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:hr-resignation-info"]},{"id":"hr-promotion-letter","name":"Promotion Letter","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:hr-promotion-letter"]},{"id":"attendance","name":"Attendance Status","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:attendance"]},{"id":"hr-leave-report-emp","name":"Leave Report Emp","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-leave-report-emp"]},{"id":"hr-leave-reports","name":"Leave Reports","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-leave-reports"]},{"id":"hr-manual-punch","name":"Manual Punch","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-manual-punch"]},{"id":"hr-leave-entry","name":"Leave Entry","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-leave-entry"]},{"id":"hr-outdoor-slip","name":"Outdoor Slip","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-outdoor-slip"]},{"id":"hr-profile-leave","name":"Profile Leave","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-profile-leave"]},{"id":"hr-holiday-schedule","name":"Holiday Schedule","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-holiday-schedule"]},{"id":"hr-duty-roster","name":"Duty Roster","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-duty-roster"]},{"id":"payroll","name":"Payroll","module":"HR","moduleId":"hr","parent":"","hidden":false,"resources":["record:payroll"]},{"id":"increment","name":"Increment","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:increment"]},{"id":"maternity-benefits","name":"Maternity Benefits","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:maternity-benefits"]},{"id":"service-benefits","name":"Service Benefits","module":"HR","moduleId":"hr","parent":"HR Info","hidden":false,"resources":["record:service-benefits"]},{"id":"credit-entry","name":"CREDIT ENTRY","module":"Account","moduleId":"accounts","parent":"CREDIT","hidden":false,"resources":["record:credit-entry","ledger:credit"]},{"id":"cash-report","name":"CASH REPORT","module":"Account","moduleId":"accounts","parent":"CREDIT","hidden":false,"resources":["record:cash-report","ledger:credit"]},{"id":"debit-entry","name":"DEBIT ENTRY","module":"Account","moduleId":"accounts","parent":"DEBIT","hidden":false,"resources":["record:debit-entry","ledger:debit"]},{"id":"debit-report","name":"DEBIT REPORT","module":"Account","moduleId":"accounts","parent":"DEBIT","hidden":false,"resources":["record:debit-report","ledger:debit"]},{"id":"balance-report","name":"BALANCE REPORT","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:balance-report","ledger:credit","ledger:debit"]},{"id":"tax","name":"TAX","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:tax"]},{"id":"vat","name":"VAT","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:vat"]},{"id":"budget","name":"BUDGET","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:budget"]},{"id":"payments","name":"Payment register","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:payments"]},{"id":"expenses","name":"Expense register","module":"Account","moduleId":"accounts","parent":"","hidden":false,"resources":["record:expenses"]},{"id":"exports","name":"Export register","module":"Commercial","moduleId":"commercial","parent":"","hidden":false,"resources":["record:exports"]},{"id":"imports","name":"Import register","module":"Commercial","moduleId":"commercial","parent":"","hidden":false,"resources":["record:imports"]},{"id":"order-entry","name":"ORDER ENTRY","module":"Merchandising","moduleId":"merch","parent":"ORDER","hidden":false,"resources":["record:order-entry","orders"]},{"id":"order-report","name":"ORDER REPORT","module":"Merchandising","moduleId":"merch","parent":"ORDER","hidden":false,"resources":["record:order-report","orders"]},{"id":"booking","name":"BOOKING","module":"Merchandising","moduleId":"merch","parent":"","hidden":false,"resources":["record:booking"]},{"id":"merch-sample","name":"Sample","module":"Merchandising","moduleId":"merch","parent":"","hidden":false,"resources":["record:merch-sample"]},{"id":"orders","name":"Buyer orders (legacy)","module":"Merchandising","moduleId":"merch","parent":"","hidden":true,"resources":["record:orders","orders"]},{"id":"styles","name":"Style register","module":"Merchandising","moduleId":"merch","parent":"","hidden":true,"resources":["record:styles"]},{"id":"knitting-jobs","name":"Knitting jobs","module":"Knitting and Dyeing","moduleId":"knitting","parent":"","hidden":false,"resources":["record:knitting-jobs"]},{"id":"dyeing-batches","name":"Dyeing batches","module":"Knitting and Dyeing","moduleId":"knitting","parent":"","hidden":false,"resources":["record:dyeing-batches"]},{"id":"stock","name":"Fabric & trims","module":"Store","moduleId":"inventory","parent":"","hidden":false,"resources":["record:stock"]},{"id":"movement","name":"Stock movement","module":"Store","moduleId":"inventory","parent":"","hidden":false,"resources":["record:movement"]},{"id":"schedule-line-1","name":"Schedule · Line-1","module":"Production","moduleId":"production","parent":"Sewing / Schedule","hidden":false,"resources":["record:schedule-line-1","schedule:Line-1"]},{"id":"schedule-line-2","name":"Schedule · Line-2","module":"Production","moduleId":"production","parent":"Sewing / Schedule","hidden":false,"resources":["record:schedule-line-2","schedule:Line-2"]},{"id":"schedule-line-3","name":"Schedule · Line-3","module":"Production","moduleId":"production","parent":"Sewing / Schedule","hidden":false,"resources":["record:schedule-line-3","schedule:Line-3"]},{"id":"schedule-line-4","name":"Schedule · Line-4","module":"Production","moduleId":"production","parent":"Sewing / Schedule","hidden":false,"resources":["record:schedule-line-4","schedule:Line-4"]},{"id":"schedule-line-5","name":"Schedule · Unit-2 Line-1","module":"Production","moduleId":"production","parent":"Sewing / Schedule","hidden":false,"resources":["record:schedule-line-5","schedule:Unit-2 Line-1"]},{"id":"schedule-line-6","name":"Schedule · Unit-2 Line-2","module":"Production","moduleId":"production","parent":"Sewing / Schedule","hidden":false,"resources":["record:schedule-line-6","schedule:Unit-2 Line-2"]},{"id":"schedule-line-7","name":"Schedule · Unit-2 Line-3","module":"Production","moduleId":"production","parent":"Sewing / Schedule","hidden":false,"resources":["record:schedule-line-7","schedule:Unit-2 Line-3"]},{"id":"schedule-line-8","name":"Schedule · Unit-2 Line-4","module":"Production","moduleId":"production","parent":"Sewing / Schedule","hidden":false,"resources":["record:schedule-line-8","schedule:Unit-2 Line-4"]},{"id":"schedule-report-1","name":"Schedule Report · Line-1","module":"Production","moduleId":"production","parent":"Sewing / Schedule Report","hidden":false,"resources":["record:schedule-report-1","schedule:Line-1"]},{"id":"schedule-report-2","name":"Schedule Report · Line-2","module":"Production","moduleId":"production","parent":"Sewing / Schedule Report","hidden":false,"resources":["record:schedule-report-2","schedule:Line-2"]},{"id":"schedule-report-3","name":"Schedule Report · Line-3","module":"Production","moduleId":"production","parent":"Sewing / Schedule Report","hidden":false,"resources":["record:schedule-report-3","schedule:Line-3"]},{"id":"schedule-report-4","name":"Schedule Report · Line-4","module":"Production","moduleId":"production","parent":"Sewing / Schedule Report","hidden":false,"resources":["record:schedule-report-4","schedule:Line-4"]},{"id":"schedule-report-5","name":"Schedule Report · Unit-2 Line-1","module":"Production","moduleId":"production","parent":"Sewing / Schedule Report","hidden":false,"resources":["record:schedule-report-5","schedule:Unit-2 Line-1"]},{"id":"schedule-report-6","name":"Schedule Report · Unit-2 Line-2","module":"Production","moduleId":"production","parent":"Sewing / Schedule Report","hidden":false,"resources":["record:schedule-report-6","schedule:Unit-2 Line-2"]},{"id":"schedule-report-7","name":"Schedule Report · Unit-2 Line-3","module":"Production","moduleId":"production","parent":"Sewing / Schedule Report","hidden":false,"resources":["record:schedule-report-7","schedule:Unit-2 Line-3"]},{"id":"schedule-report-8","name":"Schedule Report · Unit-2 Line-4","module":"Production","moduleId":"production","parent":"Sewing / Schedule Report","hidden":false,"resources":["record:schedule-report-8","schedule:Unit-2 Line-4"]},{"id":"schedule-cutting","name":"Cutting","module":"Production","moduleId":"production","parent":"","hidden":false,"resources":["record:schedule-cutting"]},{"id":"schedule-finishing","name":"Finishing","module":"Production","moduleId":"production","parent":"","hidden":false,"resources":["record:schedule-finishing"]},{"id":"schedule-quality","name":"Quality","module":"Production","moduleId":"production","parent":"","hidden":false,"resources":["record:schedule-quality"]},{"id":"planning","name":"Production planning","module":"Production","moduleId":"production","parent":"Production Records","hidden":false,"resources":["record:planning"]},{"id":"output","name":"Daily output","module":"Production","moduleId":"production","parent":"Production Records","hidden":false,"resources":["record:output"]},{"id":"cutting-plan","name":"Cutting plan","module":"Cutting","moduleId":"cutting","parent":"","hidden":false,"resources":["record:cutting-plan"]},{"id":"cutting-output","name":"Cutting output","module":"Cutting","moduleId":"cutting","parent":"","hidden":false,"resources":["record:cutting-output"]},{"id":"finishing-output","name":"Finishing output","module":"Finishing","moduleId":"finishing","parent":"","hidden":false,"resources":["record:finishing-output"]},{"id":"packing","name":"Packing register","module":"Packing","moduleId":"packing","parent":"","hidden":false,"resources":["record:packing"]},{"id":"inspection","name":"Inspection log","module":"Quality","moduleId":"quality","parent":"","hidden":false,"resources":["record:inspection"]},{"id":"issues","name":"Issue tracker","module":"Quality","moduleId":"quality","parent":"","hidden":false,"resources":["record:issues"]},{"id":"samples","name":"Sample tracker","module":"Sample","moduleId":"sample","parent":"","hidden":false,"resources":["record:samples"]},{"id":"sample-approvals","name":"Sample approvals","module":"Sample","moduleId":"sample","parent":"","hidden":false,"resources":["record:sample-approvals"]},{"id":"maintenance-jobs","name":"Maintenance jobs","module":"Maintenance","moduleId":"maintenance","parent":"","hidden":false,"resources":["record:maintenance-jobs"]},{"id":"machines","name":"Machine register","module":"Maintenance","moduleId":"maintenance","parent":"","hidden":false,"resources":["record:machines"]},{"id":"electrical-jobs","name":"Electrical jobs","module":"Electrical","moduleId":"electrical","parent":"","hidden":false,"resources":["record:electrical-jobs"]},{"id":"power-log","name":"Power log","module":"Electrical","moduleId":"electrical","parent":"","hidden":false,"resources":["record:power-log"]},{"id":"sewing-plan","name":"Sewing Plan","module":"Sewing","moduleId":"sewing","parent":"","hidden":false,"resources":["record:sewing-plan"]},{"id":"sewing-output","name":"Sewing Output","module":"Sewing","moduleId":"sewing","parent":"","hidden":false,"resources":["record:sewing-output"]}];
window.DEFAULT_FIELDS = [["reference","Reference"],["name","Description / name"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]];

window.DEPARTMENTS.splice(window.DEPARTMENTS.findIndex(department=>department.id==='production')+1,0,{id:'sewing-line',name:'Sewing Line',icon:'▤',color:'#586ab5',pages:[],navigationOnly:true});

window.DEPARTMENTS.find(department=>department.id==='sewing-line').pages=['Line-1','Line-2','Line-3','Line-4','Unit-2 Line-1','Unit-2 Line-2','Unit-2 Line-3','Unit-2 Line-4'].map((name,index)=>({id:'sewing-line-page-'+(index+1),name,icon:['①','②','③','④','❶','❷','❸','❹'][index],shade:['#e6f0ff','#fce7ed','#e7f6e9','#fff1d9','#e5f5f7','#f2e8fc','#fdebdc','#eaf2db'][index],permissionPage:'schedule-line-'+(index+1),navigationOnly:true}));

window.DEPARTMENTS.find(department=>department.id==='inventory').pages.push(...[{"id":"store-fabric-receive","name":"Recive","navPath":["Fabric"],"icon":"▧","shade":"#e5e3fa","storeCategory":"Fabric"},{"id":"store-fabric-report","name":"Delivery Report","navPath":["Fabric"],"icon":"▤","shade":"#e5e3fa","storeCategory":"Fabric"},{"id":"store-accessories-receive","name":"Recive","navPath":["Accessories"],"icon":"◇","shade":"#d9f1e5","storeCategory":"Accessories"},{"id":"store-accessories-report","name":"Delivery Report","navPath":["Accessories"],"icon":"▤","shade":"#d9f1e5","storeCategory":"Accessories"},{"id":"store-stationery-receive","name":"Recive","navPath":["Stationery"],"icon":"✎","shade":"#fff0cf","storeCategory":"Stationery"},{"id":"store-stationery-report","name":"Delivery Report","navPath":["Stationery"],"icon":"▤","shade":"#fff0cf","storeCategory":"Stationery"},{"id":"store-mechanical-receive","name":"Recive","navPath":["Mechanical"],"icon":"⚙","shade":"#dfeafa","storeCategory":"Mechanical"},{"id":"store-mechanical-report","name":"Delivery Report","navPath":["Mechanical"],"icon":"▤","shade":"#dfeafa","storeCategory":"Mechanical"},{"id":"store-electrical-receive","name":"Recive","navPath":["Electrical"],"icon":"ϟ","shade":"#fae1df","storeCategory":"Electrical"},{"id":"store-electrical-report","name":"Delivery Report","navPath":["Electrical"],"icon":"▤","shade":"#fae1df","storeCategory":"Electrical"},{"id":"store-requisition-receive","name":"New Requisition","navPath":["Requisition"],"icon":"▤","shade":"#e4f3f4","storeCategory":"Requisition"},{"id":"store-requisition-report","name":"Requisition Report","navPath":["Requisition"],"icon":"▤","shade":"#e4f3f4","storeCategory":"Requisition"}]);
window.FARNOOR_PAGE_CATALOG.push(...[{"id":"store-fabric-receive","name":"Recive","module":"Store","moduleId":"inventory","parent":"Fabric","hidden":false,"resources":["record:store-fabric-receive"]},{"id":"store-fabric-report","name":"Delivery Report","module":"Store","moduleId":"inventory","parent":"Fabric","hidden":false,"resources":["record:store-fabric-receive"]},{"id":"store-accessories-receive","name":"Recive","module":"Store","moduleId":"inventory","parent":"Accessories","hidden":false,"resources":["record:store-accessories-receive"]},{"id":"store-accessories-report","name":"Delivery Report","module":"Store","moduleId":"inventory","parent":"Accessories","hidden":false,"resources":["record:store-accessories-receive"]},{"id":"store-stationery-receive","name":"Recive","module":"Store","moduleId":"inventory","parent":"Stationery","hidden":false,"resources":["record:store-stationery-receive"]},{"id":"store-stationery-report","name":"Delivery Report","module":"Store","moduleId":"inventory","parent":"Stationery","hidden":false,"resources":["record:store-stationery-receive"]},{"id":"store-mechanical-receive","name":"Recive","module":"Store","moduleId":"inventory","parent":"Mechanical","hidden":false,"resources":["record:store-mechanical-receive"]},{"id":"store-mechanical-report","name":"Delivery Report","module":"Store","moduleId":"inventory","parent":"Mechanical","hidden":false,"resources":["record:store-mechanical-receive"]},{"id":"store-electrical-receive","name":"Recive","module":"Store","moduleId":"inventory","parent":"Electrical","hidden":false,"resources":["record:store-electrical-receive"]},{"id":"store-electrical-report","name":"Delivery Report","module":"Store","moduleId":"inventory","parent":"Electrical","hidden":false,"resources":["record:store-electrical-receive"]},{"id":"store-requisition-receive","name":"New Requisition","module":"Store","moduleId":"inventory","parent":"Requisition","hidden":false,"resources":["record:store-requisition-receive"]},{"id":"store-requisition-report","name":"Requisition Report","module":"Store","moduleId":"inventory","parent":"Requisition","hidden":false,"resources":["record:store-requisition-receive"]}]);

window.DEPARTMENTS.find(department=>department.id==='inventory').pages=window.DEPARTMENTS.find(department=>department.id==='inventory').pages.filter(page=>!['stock','movement'].includes(page.id));
window.FARNOOR_PAGE_CATALOG=window.FARNOOR_PAGE_CATALOG.filter(page=>!['stock','movement'].includes(page.id));


// Additional AutoPro HR menus, each with its own record permission.
window.DEPARTMENTS.find(d=>d.id==='hr').pages.push(...[{"id":"hr-system-settings","name":"System Settings","navPath":["Utilities"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]},{"id":"hr-alert-manager","name":"Alert Manager","navPath":["Utilities"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]},{"id":"hr-session-log","name":"Session Log","navPath":["Utilities"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]},{"id":"hr-report-list","name":"Report List","navPath":["Utilities"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]},{"id":"hr-status-settings","name":"Status Settings","navPath":["Utilities"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]},{"id":"hr-attendance-emp","name":"Attendance Emp","navPath":["Attendance"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]},{"id":"hr-earn-leave-withdraw","name":"Earn Leave Withdraw","navPath":["Attendance"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]},{"id":"hr-leave-app","name":"Leave App.","navPath":["Application Desk"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]},{"id":"hr-leave-request-status","name":"Leave Request Status","navPath":["Application Desk"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]},{"id":"hr-note-book","name":"Note Book","navPath":["Note Book"],"icon":"▤","shade":"#e4f0fc","fields":[["reference","Code / Employee ID"],["name","Description"],["quantity","Quantity / amount","number"],["date","Date","date"],["status","Status","status"]]}]);
window.FARNOOR_PAGE_CATALOG.push(...[{"id":"hr-system-settings","name":"System Settings","module":"HR","moduleId":"hr","parent":"Utilities","hidden":false,"resources":["record:hr-system-settings"]},{"id":"hr-alert-manager","name":"Alert Manager","module":"HR","moduleId":"hr","parent":"Utilities","hidden":false,"resources":["record:hr-alert-manager"]},{"id":"hr-session-log","name":"Session Log","module":"HR","moduleId":"hr","parent":"Utilities","hidden":false,"resources":["record:hr-session-log"]},{"id":"hr-report-list","name":"Report List","module":"HR","moduleId":"hr","parent":"Utilities","hidden":false,"resources":["record:hr-report-list"]},{"id":"hr-status-settings","name":"Status Settings","module":"HR","moduleId":"hr","parent":"Utilities","hidden":false,"resources":["record:hr-status-settings"]},{"id":"hr-attendance-emp","name":"Attendance Emp","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-attendance-emp"]},{"id":"hr-earn-leave-withdraw","name":"Earn Leave Withdraw","module":"HR","moduleId":"hr","parent":"Attendance","hidden":false,"resources":["record:hr-earn-leave-withdraw"]},{"id":"hr-leave-app","name":"Leave App.","module":"HR","moduleId":"hr","parent":"Application Desk","hidden":false,"resources":["record:hr-leave-app"]},{"id":"hr-leave-request-status","name":"Leave Request Status","module":"HR","moduleId":"hr","parent":"Application Desk","hidden":false,"resources":["record:hr-leave-request-status"]},{"id":"hr-note-book","name":"Note Book","module":"HR","moduleId":"hr","parent":"Note Book","hidden":false,"resources":["record:hr-note-book"]}]);

// Separate entry, receiving report and delivery views; reuse existing Store access/resources.
{const store=window.DEPARTMENTS.find(d=>d.id==='inventory');for(const category of ['Fabric','Accessories','Stationery','Mechanical','Electrical','Requisition']){const prefix='store-'+category.toLowerCase(),report=store.pages.find(p=>p.id===prefix+'-report');report.name='Recive Report';const catalog=window.FARNOOR_PAGE_CATALOG.find(p=>p.id===report.id);catalog.name='Recive Report';const delivery={id:prefix+'-delivery',name:'Delivery',navPath:[category],icon:'⇄',shade:report.shade,storeCategory:category,permissionPage:prefix+'-receive'};store.pages.splice(store.pages.indexOf(report)+1,0,delivery);}}

{const store=window.DEPARTMENTS.find(d=>d.id==='inventory');for(const category of ['Fabric','Accessories','Stationery','Mechanical','Electrical','Requisition']){const prefix='store-'+category.toLowerCase(),delivery=store.pages.find(p=>p.id===prefix+'-delivery');store.pages.splice(store.pages.indexOf(delivery)+1,0,{...delivery,id:prefix+'-delivery-report',name:'Delivery Report',icon:'▥'});}}

// Booking views share the existing Booking record and department permission.
{const merch=window.DEPARTMENTS.find(d=>d.id==='merch');const booking=merch.pages.find(p=>p.id==='booking');booking.hidden=true;merch.pages.splice(merch.pages.indexOf(booking)+1,0,{id:'booking-entry',name:'BOOKING ENTRY',navPath:['BOOKING'],icon:'▤',shade:'#e3edf9',permissionPage:'booking'},{id:'booking-report',name:'BOOKING REPORT',navPath:['BOOKING'],icon:'▥',shade:'#ede4fa',permissionPage:'booking'});}
// Order menu, preserving the existing Order reports and permission resources.
{const merch=window.DEPARTMENTS.find(d=>d.id==='merch');for(const page of merch.pages.filter(p=>['order-entry','order-report'].includes(p.id)))page.navPath=['ORDER'];merch.pages.splice(merch.pages.findIndex(p=>p.id==='order-entry'),0,{id:'order-new',name:'NEW ORDER',navPath:['ORDER'],icon:'✚',shade:'#e2f4e6',permissionPage:'order-entry'});}
window.DEPARTMENTS.find(d=>d.id==='merch').pages=window.DEPARTMENTS.find(d=>d.id==='merch').pages.filter(p=>p.id!=='order-new');

// Stock summaries use the existing category receiving permission.
{const store=window.DEPARTMENTS.find(d=>d.id==='inventory');for(const category of ['Stationery','Mechanical','Electrical']){const prefix='store-'+category.toLowerCase(),report=store.pages.find(p=>p.id===prefix+'-delivery-report');store.pages.splice(store.pages.indexOf(report)+1,0,{id:prefix+'-stock',name:'Stock',navPath:[category],icon:'▦',shade:'#e1f4df',stockCategory:category,permissionPage:prefix+'-receive',fields:[]});}}

{const store=window.DEPARTMENTS.find(d=>d.id==='inventory');const original=store.pages.filter(p=>p.storeCategory==='Stationery'||p.stockCategory==='Stationery');const copies=original.map(p=>({...p,id:p.id.replace('store-stationery-','store-accessories2-'),navPath:['Accessories2'],...(p.storeCategory?{storeCategory:'Accessories2'}:{stockCategory:'Accessories2',permissionPage:'store-accessories2-receive'})}));const last=store.pages.map(p=>p.storeCategory||p.stockCategory).lastIndexOf('Accessories');store.pages.splice(last+1,0,...copies);const catalog=window.FARNOOR_PAGE_CATALOG.filter(p=>p.id.startsWith('store-stationery-'));window.FARNOOR_PAGE_CATALOG.push(...catalog.map(p=>({...p,id:p.id.replace('store-stationery-','store-accessories2-'),parent:'Accessories2',resources:p.resources.map(r=>r.replace('store-stationery-','store-accessories2-'))})));}


// Admin file pages use the existing Documents viewing access.
window.DEPARTMENTS.find(d=>d.id==='admin').pages.push(...[{id:'admin-personal-file',name:'Personal file',icon:'▣',shade:'#dceffc'},{id:'admin-maternity-file',name:'Maternity File',icon:'♡',shade:'#fce0ed'},{id:'admin-warning-letter',name:'Warning Letter',icon:'⚠',shade:'#fff0ce'}].map(page=>({...page,navigationOnly:true,permissionPage:'admin-documents'})));

{const admin=window.DEPARTMENTS.find(d=>d.id==='admin'),personal=admin.pages.find(p=>p.id==='admin-personal-file');personal.navPath=['Personal file'];personal.groupEntry=true;admin.pages.splice(admin.pages.indexOf(personal)+1,0,{id:'admin-personal-entry-report',name:'Entry Report',navPath:['Personal file'],icon:'▤',shade:'#e0f2ea',navigationOnly:true,permissionPage:'admin-documents'});}

{const admin=window.DEPARTMENTS.find(d=>d.id==='admin'),personal=admin.pages.find(p=>p.id==='admin-personal-file');admin.pages.splice(admin.pages.indexOf(personal)+1,0,{id:'admin-personal-new-entry',name:'New Entry',navPath:['Personal file'],icon:'✚',shade:'#d9f3e6',navigationOnly:true,permissionPage:'admin-documents'});}

{const admin=window.DEPARTMENTS.find(d=>d.id==='admin'),entry=admin.pages.find(p=>p.id==='admin-personal-new-entry');admin.pages.splice(admin.pages.indexOf(entry)+1,0,{id:'admin-personal-print',name:'Print',navPath:['Personal file'],icon:'▧',shade:'#dcecff',navigationOnly:true,permissionPage:'admin-documents'});}

{const admin=window.DEPARTMENTS.find(d=>d.id==='admin');for(const [key,name] of [['file-1','File-1'],['file-2','File-2'],['file-3','File-3'],['file-4','File-4'],['file-5','File-5'],['file-6','File-6'],['file-7','File-7'],['staff-3','Staff-3'],['electrican','Electrican']])admin.pages.push({id:'admin-personal-form-'+key,name,navPath:['Personal file','Print'],navigationOnly:true,permissionPage:'admin-documents'});}

{const page=window.DEPARTMENTS.find(d=>d.id==='admin').pages.find(p=>p.id==='admin-personal-print');page.navPath=['Personal file','Print'];page.groupEntry=true;}

{const admin=window.DEPARTMENTS.find(d=>d.id==='admin');for(const p of admin.pages.filter(p=>p.id.startsWith('admin-personal-form-')))p.icon='▤';}

// Maternity file has the same three navigation entries as Personal file.
{const admin=window.DEPARTMENTS.find(d=>d.id==='admin'),maternity=admin.pages.find(p=>p.id==='admin-maternity-file');maternity.navPath=['Maternity File'];maternity.groupEntry=true;admin.pages.splice(admin.pages.indexOf(maternity)+1,0,...[{id:'admin-maternity-new-entry',name:'New Entry',icon:'✚',shade:'#d9f3e6'},{id:'admin-maternity-print',name:'Print',icon:'▧',shade:'#fce0ed'},{id:'admin-maternity-entry-report',name:'Entry Report',icon:'▤',shade:'#e0f2ea'}].map(p=>({...p,navPath:['Maternity File'],navigationOnly:true,permissionPage:'admin-documents'})));}

{const admin=window.DEPARTMENTS.find(d=>d.id==='admin'),print=admin.pages.find(p=>p.id==='admin-maternity-print');print.navPath=['Maternity File','Print'];print.groupEntry=true;for(const [key,name] of [['file-1','File-1'],['file-2','File-2'],['file-3','File-3'],['file-4','File-4'],['file-5','File-5'],['file-6','File-6'],['file-7','File-7'],['staff-3','Staff-3'],['electrican','Electrican']])admin.pages.push({id:'admin-maternity-form-'+key,name,icon:'▤',navPath:['Maternity File','Print'],navigationOnly:true,permissionPage:'admin-documents'});}

{const admin=window.DEPARTMENTS.find(d=>d.id==='admin');admin.pages=admin.pages.filter(p=>!p.id.startsWith('admin-maternity-form-'));for(const [key,name,icon,shade] of [['calculation-month','Calculatin Month','▦','#dcecff'],['first-payment','1st Payment','①','#d9f3e6'],['second-payment','2nd Payment','②','#eee2ff']])admin.pages.push({id:'admin-maternity-form-'+key,name,icon,shade,navPath:['Maternity File','Print'],navigationOnly:true,permissionPage:'admin-documents'});}

// Service Benefit keeps its own entries and uses the existing Documents permission.
{const admin=window.DEPARTMENTS.find(d=>d.id==='admin'),index=admin.pages.findIndex(p=>p.id==='admin-maternity-file');admin.pages.splice(index,0,...[{id:'admin-service-file',name:'Service Benefit',icon:'♧',shade:'#dcecff',groupEntry:true},{id:'admin-service-new-entry',name:'New Input',icon:'✎',shade:'#d9f3e6',hidden:true},{id:'admin-service-print',name:'Print',icon:'🖨',shade:'#fff0d8',hidden:true},{id:'admin-service-entry-report',name:'Input Report',icon:'▤',shade:'#eee2ff',hidden:true}].map(p=>({...p,navPath:['Service Benefit'],navigationOnly:true,permissionPage:'admin-documents'})));}

{const admin=window.DEPARTMENTS.find(d=>d.id==='admin'),parent=admin.pages.find(p=>p.id==='admin-warning-letter');parent.navPath=['Warning Letter'];parent.groupEntry=true;admin.pages.splice(admin.pages.indexOf(parent)+1,0,...[{id:'admin-warning-new-entry',name:'New Entry',icon:'✚',shade:'#d9f3e6'},{id:'admin-warning-print',name:'Print',icon:'▧',shade:'#dcecff'},{id:'admin-warning-entry-report',name:'Entry Report',icon:'▤',shade:'#eee2ff'}].map(p=>({...p,navPath:['Warning Letter'],navigationOnly:true,permissionPage:'admin-documents'})));}

window.DEPARTMENTS.find(d=>d.id==='admin').pages=window.DEPARTMENTS.find(d=>d.id==='admin').pages.filter(p=>p.id!=='admin-warning-print');

for(const page of window.DEPARTMENTS.find(d=>d.id==='admin').pages)if(['admin-maternity-new-entry','admin-maternity-print','admin-maternity-form-calculation-month','admin-maternity-form-first-payment','admin-maternity-form-second-payment'].includes(page.id))page.hidden=true;

window.DEPARTMENTS.find(d=>d.id==='admin').pages.find(p=>p.id==='admin-maternity-entry-report').hidden=true;

for(const page of window.DEPARTMENTS.find(d=>d.id==='admin').pages)if(page.id.startsWith('admin-personal-form-'))page.hidden=true;

for(const page of window.DEPARTMENTS.find(d=>d.id==='admin').pages)if(['admin-personal-new-entry','admin-personal-entry-report','admin-personal-print'].includes(page.id))page.hidden=true;

for(const page of window.DEPARTMENTS.find(d=>d.id==='admin').pages)if(['admin-warning-new-entry','admin-warning-entry-report'].includes(page.id))page.hidden=true;

window.DEPARTMENTS.find(d=>d.id==='admin').pages.push(...[['admin-warning-first-letter','1st Letter'],['admin-warning-second-letter','2nd Letter'],['admin-warning-third-letter','3rd Letter']].map(([id,name])=>({id,name,icon:'▤',navPath:['Warning Letter'],navigationOnly:true,permissionPage:'admin-documents',hidden:true})));

;
;/* payroll-core.js */
'use strict';
window.FarnoorPayrollCore=(()=>{
 const f=(key,label,type='text',options=[],value='')=>({key,label,type,options,value});
 const employee=f('empId','Emp ID'),name=f('empName','Emp Name'),amount=f('amount','Amount','number'),status=f('profileStatus','Status','select',['Active','Inactive'],'Active'),date=f('date','Date','date'),effective=f('date','Effective Date','date');
 const branch=f('branch','Branch Name'),group=f('empGroup','Emp. Group','select',['Staff','Worker']),dept=f('department','Department','department'),section=f('section','Section','section'),designation=f('designation','Designation','designation'),payment=f('paymentGroup','Payment Group','select',['Admin-2 Workers','Cutting Workers','Finishing Workers','Quality Workers','Sample & Design','Sewing (1)','Sewing(2)','Staff']);
 const baseFilters=[employee,branch,group,dept,section,designation];
 const reportDate=[f('fromDate','Date From','date'),f('toDate','Date To','date'),f('dateRange','Date Range','checkbox')];
 const printOptions=[f('printDate','Print Date','date'),f('rowsPerPage','Row/Page','number',[],'8'),f('tableGap','Table Gap','number',[],'0'),f('rowHeight','Row Height','number',[],'110')];
 const commonEntry=[status,date];
 const forms=[
 {id:'salary',name:'Employee Salary',title:'SALARY ENTRY',icon:'৳',fields:[f('index','Index'),employee,name,f('gross','Gross Salary','number'),f('medical','Medical Allowance','number',[],'750'),f('transport','Transport','number',[],'450'),f('food','Fooding','number',[],'1250'),...commonEntry]},
 {id:'bonus',name:'Employee Bonus',title:'BONUS ENTRY',icon:'◈',fields:[employee,amount,date,status]},
 {id:'increment',name:'Emp Increment',title:'INCREMENT ENTRY',icon:'↗',fields:[employee,f('empName','Name'),amount,effective,status]},
 {id:'loan',name:'Loan / Advance',title:'LOAN / ADVANCE ENTRY',icon:'▤',fields:[employee,amount,f('payType','Pay Type','select',['Advance','Loan']),f('duration','Installment Duration (Month)','number'),...commonEntry]},
 {id:'ot-policy',name:'OT Policy',title:'OVERTIME POLICY',icon:'◷',fields:[f('index','Index'),employee,designation,section,f('fixedAmount','Fixed Amount','number'),f('otRate','OT Rate','number'),f('otType','Type','select',['OT','DA'],'OT'),status,effective]},
 {id:'att-policy',name:'Attn Bonus Policy',title:'ATTENDANCE BONUS POLICY',icon:'✓',fields:[f('index','Index'),employee,f('designationCode','Designation code'),designation,group,amount,f('remarks','Remarks'),effective,status]},
 {id:'generator',name:'Salary Generator',title:'SALARY GENERATOR',icon:'⚙',report:true,fields:[employee,branch,group,dept,section,f('floor','Floor'),designation,f('desigGroup','Desig Group'),payment,status,date,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'adjustment',name:'OT Adjustment',title:'OT ADJUSTMENT GENERATOR',icon:'◴',report:true,fields:[employee,dept,designation,section,status,date,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'sheet',name:'Salary Sheet.',title:'SALARY SHEET.',icon:'▦',report:true,fields:[employee,branch,group,dept,f('floor','Floor'),section,f('sectionGroup','Section Group'),f('workingSection','Working Section'),designation,f('desigGroup','Desig Group'),payment,f('reportType','Report Type','select',['Monthly Worker Salary Min','Monthly Worker Salary Old','Monthly Staff Salary','Employee Salary List','Overtime Sheet','Night and Dinner Bill','Top Sheet Wages','Voucher Salary','Voucher Salary Min'],'Monthly Worker Salary Min'),...printOptions,f('genStatus','Gen. Status','select',['Payment','Resigned Employee'],'Payment'),...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'slip',name:'Pay Slip.',title:'PAY SLIP.',icon:'▧',report:true,fields:[...baseFilters,f('workingSection','Working Section'),f('desigGroup','Desig Group'),f('workGroup','Work Group'),f('workShift','Work Shift','select',['All Shift','Day','Night'],'All Shift'),f('floor','Floor'),...printOptions,f('reportType','Report Type','select',['Payslip'],'Payslip'),f('genStatus','Gen. Status','select',['Payment','Resigned Employee'],'Payment'),...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'increment-report',name:'Increment Reports',title:'INCREMENT REPORTS',icon:'↟',report:true,fields:[...baseFilters,f('reportType','Report Type','select',['Increment Sheet'],'Increment Sheet'),f('incrementGroup','Increment Group','text',[],'Regular from 2024'),f('percentage','Percentage','number',[],'9'),status,...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'bonus-sheet',name:'Bonus Sheet',title:'BONUS SHEET',icon:'◇',report:true,fields:[...baseFilters,f('desigGroup','Desig Group'),...printOptions,f('bonusType','Bonus Type','select',['Auto Bonus','Entry Bonus'],'Auto Bonus'),f('percentage','Percent (%)','number',[],'50'),f('bonusOn','Bonus On','select',['Basic','Gross'],'Basic'),f('reportTitle','Report Title'),...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'earned',name:'Earn Leave Report',title:'EARN LEAVE REPORT',icon:'▣',report:true,fields:[...baseFilters,f('joinMonth','Date of Join','month'),f('condition','Condition','select',['<=','=','>=']),f('percentage','Percentage','number',[],'50'),status,f('calcOn','Calc On','select',['Basic','Gross'],'Basic'),...reportDate,f('previewMode','Output','select',['Review','Print Preview'],'Print Preview')]},
 {id:'top',name:'TopSheet',title:'TOPSHEET MANAGER',icon:'Σ',fields:[f('index','Index'),f('empCount','Emp','number'),branch,payment,group,dept,section,designation,f('workShift','Work Shift'),...['Salary','Transport','Fooding','Total Payable','Attn Bonus','AIT','PF','Night','Stamp','Absent','Advance Ded Amt','Overtime Hour','Overtime Amount','Net Payable Amount'].map(label=>f(label.replace(/ /g,''),label,'number')),f('reportType','Report Type'),f('remarks','Remarks'),...commonEntry]}
 ];
 const metadata=[branch,group,dept,section,designation,payment,f('floor','Floor'),f('workingSection','Working Section'),f('sectionGroup','Section Group'),f('desigGroup','Desig Group'),f('workGroup','Work Group'),f('workShift','Work Shift'),f('joinDate','Date of Join','date')];
 const attendance=[employee,name,f('period','Salary Month','month'),f('present','Present Days','number'),f('absent','Absent Days','number'),f('leave','Leave Days','number'),f('holiday','Holiday Days','number'),f('otHours','OT Hours','number'),f('otAdjustment','OT Adjustment Hours','number'),f('night','Night Allowance','number'),f('ait','AIT','number'),f('pf','PF','number'),f('stamp','Stamp','number'),f('otherDeduction','Other Deduction','number'),f('earnedDays','Earn Leave Days','number')];
 const rules=[f('houseRentPercent','House Rent (% of Basic)','number'),f('absenceOn','Absent Deduction On','select',['Basic','Gross']),f('absenceDivisor','Absent Daily Divisor','number'),f('otMultiplier','OT Multiplier','number'),f('otDivisor','OT Monthly Hours Divisor','number'),f('earnedDivisor','Earn Leave Daily Divisor','number')];
 const generatedFields=['empId','empName','period','profileStatus','gross','basic','houseRent','medical','transport','food','present','absent','leave','holiday','otHours','otRate','otAmount','attendanceBonus','bonus','night','ait','pf','stamp','absenceDeduction','advanceDeduction','otherDeduction','net','earnedDays','earnedAmount',...metadata.map(x=>x.key)];
 const formById=id=>forms.find(x=>x.id===id);
 const round=v=>Math.round((Number(v)+Number.EPSILON)*100)/100;
 function checkValues(type,values){
  const schema=type==='rules'?rules:type==='attendance'?attendance:type==='generated'?generatedFields.map(key=>f(key,key)):formById(type)?.fields;
  if(!schema||!values||typeof values!=='object'||Array.isArray(values))throw Error('Invalid Payroll record.');
  const allowed=new Set([...schema,...metadata].map(x=>x.key));
  for(const [key,value]of Object.entries(values)){if(!allowed.has(key)||typeof value!=='string'||value.length>500)throw Error('Invalid Payroll field.');}
  for(const field of [...schema,...metadata]){const v=values[field.key];if(!v)continue;if(field.type==='number'&&(!Number.isFinite(Number(v))||Number(v)<0||Number(v)>1e9))throw Error('Invalid '+field.label+'.');if(field.type==='select'&&!field.options.includes(v))throw Error('Invalid '+field.label+'.');if(field.type==='month'&&!/^\d{4}-(0[1-9]|1[0-2])$/.test(v))throw Error('Invalid salary month.');}
  if(values.empId?.length>120||values.empName?.length>200)throw Error('Employee ID or name is too long.');
  if(type==='attendance'&&(!values.empId||!values.period))throw Error('Employee and salary month are required.');
  if(['salary','bonus','increment','loan'].includes(type)&&!values.empId)throw Error('Emp ID is required.');
  if(type==='salary'&&(!values.empName||!values.gross))throw Error('Emp Name and Gross Salary are required.');
  if(['bonus','increment','loan'].includes(type)&&(!values.amount&&values.amount!=='0'))throw Error('Amount is required.');
  if(formById(type)&&!formById(type).report&&(!values.date||!['Active','Inactive'].includes(values.profileStatus)))throw Error('Date and Status are required.');
  if(type==='loan'&&(!values.payType||Number(values.duration)<1||!Number.isInteger(Number(values.duration))))throw Error('Pay Type and whole installment months are required.');
  if(type==='rules'&&['absenceDivisor','otDivisor','earnedDivisor'].some(k=>Number(values[k])<=0))throw Error('Calculation divisors must be greater than zero.');
  if(type==='generated'){if(!values.empId||!values.empName||!/^\d{4}-(0[1-9]|1[0-2])$/.test(values.period||''))throw Error('Invalid generated salary.');for(const key of ['gross','basic','houseRent','medical','transport','food','otHours','otRate','otAmount','attendanceBonus','bonus','night','ait','pf','stamp','absenceDeduction','advanceDeduction','otherDeduction','net','earnedDays','earnedAmount'])if(values[key]!==undefined&&(!Number.isFinite(Number(values[key]))||Math.abs(Number(values[key]))>1e9))throw Error('Invalid generated amount.');}
  return values;
 }
 function validateRows(rows,normalDate){for(const row of rows||[]){if(!row.payrollForm)continue;checkValues(row.payrollForm,row.payrollValues);for(const [key,value]of Object.entries(row.payrollValues))if(/^(date|fromDate|toDate|printDate|joinDate)$/.test(key)&&value)normalDate(value);}}
 function calculate(salary,attendance,rule,policies={}){
  for(const field of rules)if(rule[field.key]===''||rule[field.key]==null)throw Error('Set the company salary calculation rules first.');
  checkValues('rules',rule);if(Number(rule.absenceDivisor)<=0||Number(rule.otDivisor)<=0||Number(rule.earnedDivisor)<=0)throw Error('Calculation divisors must be greater than zero.');
  const days=['present','absent','leave','holiday'].reduce((sum,k)=>sum+Number(attendance[k]||0),0),[year,month]=String(attendance.period||'').split('-').map(Number);
  if(!Number.isFinite(days)||days<=0||days>new Date(year,month,0).getDate())throw Error('Attendance day totals do not match a valid salary month.');
  const gross=round(Number(salary.gross)+Number(policies.increment||0)),medical=Number(salary.medical||0),transport=Number(salary.transport||0),food=Number(salary.food||0);
  if(gross<medical+transport+food)throw Error('Gross Salary cannot be lower than allowances.');
  const basic=round((gross-medical-transport-food)/(1+Number(rule.houseRentPercent)/100)),houseRent=round(gross-basic-medical-transport-food);
  const otHours=round(Number(attendance.otHours||0)+Number(attendance.otAdjustment||0));
  const otRate=round(policies.otRate!==undefined?Number(policies.otRate):basic*Number(rule.otMultiplier)/Number(rule.otDivisor));
  const otAmount=round(otHours*otRate+Number(policies.fixedAmount||0)),absenceDeduction=round(Number(attendance.absent||0)*(rule.absenceOn==='Basic'?basic:gross)/Number(rule.absenceDivisor));
  const attendanceBonus=round(Number(policies.attendanceBonus||0)),bonus=round(Number(policies.bonus||0)),advanceDeduction=round(Number(policies.advanceDeduction||0));
  const net=round(gross+otAmount+attendanceBonus+bonus+Number(attendance.night||0)-absenceDeduction-advanceDeduction-Number(attendance.ait||0)-Number(attendance.pf||0)-Number(attendance.stamp||0)-Number(attendance.otherDeduction||0));
  return {...salary,...attendance,gross:String(gross),basic:String(basic),houseRent:String(houseRent),medical:String(medical),transport:String(transport),food:String(food),otHours:String(otHours),otRate:String(otRate),otAmount:String(otAmount),absenceDeduction:String(absenceDeduction),advanceDeduction:String(advanceDeduction),attendanceBonus:String(attendanceBonus),bonus:String(bonus),net:String(net),earnedAmount:String(round(Number(attendance.earnedDays||0)*basic/Number(rule.earnedDivisor)))};
 }
 return {forms,metadata,attendance,rules,generatedFields,formById,checkValues,validateRows,round,calculate};
})();

;
;/* payroll-options.js */
window.FARNOOR_PAYROLL_DESIGNATIONS=["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"];
window.FARNOOR_PAYROLL_SECTIONS=["Account","Administration","Boiler","Checking & Cleaning","Commercial","Cutting","Driver","Electrical","Finishing","Gazipur Administration","Knitting and Dyeing","Line-1-Ast.OP","Line-1-OP","Line-2-Ast.OP","Line-2-OP","Line-3-Ast.OP","Line-3-OP","Line-4-Ast.OP","Line-4-OP","Line-5-Ast.OP","Line-5-OP","Mechanical","Merchandising","Production","Quality","Sample","Security","Store"];
window.FARNOOR_PAYROLL_OPTIONS={"floor":["1st Floor","2nd Floor","4th Floor","Ground Floor"],"sectionGroup":["LINE-12","Full Salary Line-01","LINE -11","LINE-02","LINE-03","LINE-04","LINE-05","LINE-06","LINE-07","LINE-08","LINE-09","LINE-10","Loader (Store)","Production Counter","Quilting","Quilting Helper","Quilting operator","Sample"],"workingSection":["ACCOUNTS","admin","Asst. Oparetor 2nd Floor","Asst. Oparetor Line 01","Asst. Oparetor Line 02","Asst. Oparetor Line 03","Asst. Oparetor Line 04","Asst. Oparetor Line 05","Asst. Oparetor Line 06","Asst. Oparetor Line 07","Asst. Oparetor Line 08","Asst. Oparetor Line 09","Asst. Oparetor Line 10","Asst. Oparetor Line 11","Asst. Oparetor Line 12","Asst. Operator(Quilting)","Boiler","Canteen Boy","Checker","Commercial","Cutting Quality","CUTTING STAFF","CUTTING WORKER","Electrical","Finishing Quality","FINISHING STAFF","FINISHING WORKER","General Manager","Governess","House Keeping","HR & Admin","HR Admin & Compliance","IE & Planning","Inputman","LINE -08","LINE -11","Line Ironman","LINE-01 (A)","LINE-01 (B)","LINE-02 (A)","LINE-02 (B)","LINE-03","LINE-03 (A)","LINE-03 (B)","LINE-04","LINE-05","LINE-05 (A)","LINE-05 (B)","LINE-06","LINE-07","Line-08","LINE-09","LINE-09 (A)","Line-09 (B)","LINE-10","LINE-10 (A)","LINE-10 (B)","LINE-12","LINE-12 (A)","LINE-12 (B)","LINE-13","LINE-14","LINE-15","LINE-16","LINE-17","LINE-19","LINE-20","MAINTENANCE","Medical","MERCHANDISING","Needle Issue Man","Office Boy","Peon","Production Counter","QUALITY STAFF","Quality Worker","Quilting","Receive Man","Sample & Design","Seam Sealing","Security","Sewing","Sewing Quality","SEWING STAFF","Sewing-01","Sewing-02","Sewing-03","Sewing-04","Sewing-05","Sewing-06","Sewing-07","Sewing-08","Sewing-09","Sewing-10","Sewing-12","Sewing-13","Store"],"workGroup":["GENERAL","General-1","Group G","Worker Group"],"workShift":["Afternoon","All Shift","GENERAL","General-1","GENERAL-Fri","GENERAL-Fri.","Gov Emergency","Morning","Night","Ramadan Shift","Ramadan Shift 1","Ramadan Shift 26","Ramadan Shift F","Ramadan Shift-001","Weekly Holiday","Weekly Holiday- Ramadan"]};

;
;/* store-core.js */
'use strict';
const StoreCore=(()=>{
 const categories=['Fabric','Accessories','Accessories2','Stationery','Mechanical','Electrical','Requisition'];
 const columns=category=>category==='Fabric'?['buyer','style','colour','orderQty','receiveQty','receiveDate','excess','remarks']:category==='Accessories'?['buyer','style','item','size','colour','orderQty','receiveQty','receiveDate','excess','remarks']:['item','size','receiveQty','receiveDate',...(category==='Requisition'?[]:['excess']),'remarks'];
 const labels={buyer:'BUYER',style:'STYLE/ARTICLE',item:'ITEM',size:'SIZE',colour:'COLOUR',orderQty:'BOOKING QTY',receiveQty:'RECIVE QTY',receiveDate:'RECIVE DATE',excess:'SORT/EXCESS',remarks:'REMARKS'};
 const viewColumns=(category,delivery=false)=>columns(category).filter(field=>field!=='excess'||(category!=='Electrical'&&(['Stationery','Accessories2'].includes(category)?delivery:!delivery)));
 const viewLabel=(category,field,delivery=false)=>delivery&&!['Stationery','Accessories2'].includes(category)&&field==='receiveQty'?'DELIVERY QTY':delivery&&!['Stationery','Accessories2'].includes(category)&&field==='receiveDate'?'DELIVERY DATE':labels[field];
 const key=category=>'store-'+category.toLowerCase()+'-receive';
 const digits=value=>String(value).trim().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replaceAll(',','');
 function validate(category,rows,normalizeDate){if(!categories.includes(category)||!Array.isArray(rows)||!rows.length||rows.length>1000)throw Error('Enter at least one Store row (maximum 1000).');return rows.map(row=>{const result={};for(const field of columns(category)){if(typeof row[field]!=='string'||row[field].length>500)throw Error('Invalid Store cell.');let value=row[field].trim();if(['orderQty','receiveQty','excess'].includes(field)&&value){value=digits(value);if(!/^-?\d+(\.\d{1,3})?$/.test(value)||Math.abs(Number(value))>1000000000||(field!=='excess'&&Number(value)<0))throw Error('Enter a valid quantity, up to three decimal places.');}if(field==='receiveDate'&&value)value=normalizeDate(value);result[field]=value;}return result;});}
 function validateFiles(records,normalizeDate){for(const category of categories){for(const file of records[key(category)]||[]){if(file.storeCategory!==category||!Number.isFinite(Date.parse(file.createdAt))||file.updatedAt&&!Number.isFinite(Date.parse(file.updatedAt)))throw Error('Invalid Store report.');validate(category,file.rows,normalizeDate);}}}
 function surplus(records){return categories.filter(c=>c!=='Requisition').flatMap(category=>(records[key(category)]||[]).flatMap(file=>(file.rows||[]).filter(row=>Number(digits(row.excess||''))>0).map(row=>({category,item:row.item||row.style||'',size:row.size||'',colour:row.colour||'',excess:row.excess,date:row.receiveDate||'',fileId:file.id}))));}
 function matches(rows,item,size){const norm=value=>String(value||'').normalize('NFKC').trim().toLocaleLowerCase();return rows.filter(row=>norm(item)&&norm(row.item)===norm(item)&&norm(row.size)===norm(size));}
 return {categories,columns,labels,viewColumns,viewLabel,key,digits,validate,validateFiles,surplus,matches};
})();

;
;/* hr-forms.js */
window.FARNOOR_HR_FORMS={"hr-company-info":[{"key":"name","label":"Name","type":"text","options":[]},{"key":"address","label":"Address","type":"text","options":[]},{"key":"tel","label":"Tel","type":"text","options":[]},{"key":"fax","label":"Fax","type":"text","options":[]},{"key":"email","label":"email","type":"text","options":[]},{"key":"address_bn","label":"Address (BN)","type":"text","options":[]},{"key":"web","label":"web","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"name_bn","label":"Name (BN)","type":"text","options":[]}],"hr-branch-setup":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"device_id","label":"Device ID","type":"text","options":[]},{"key":"brance_name","label":"Brance Name","type":"text","options":[]},{"key":"remarks","label":"Location","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-emp-group-list":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"no","label":"CodeNo","type":"text","options":[]},{"key":"name","label":"Name","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-department-list":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"no","label":"CodeNo","type":"text","options":[]},{"key":"name","label":"Name","type":"text","options":[]},{"key":"name_bn","label":"Name (BN)","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-section-list":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"no","label":"CodeNo","type":"text","options":[]},{"key":"name","label":"Name","type":"text","options":[]},{"key":"name_bn","label":"Name (BN)","type":"text","options":[]},{"key":"department","label":"Department","type":"select","options":["Account","Administration","Boilar","Commercial","Cutting","Driver","Electrical","Gazipur Administration","Knitting and Dyeing","Maintenance","Merchandising","Packing","Production","Quality","Sample","Security","Store"]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-section-group":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"no","label":"CodeNo","type":"text","options":[]},{"key":"name","label":"Name","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-designation-list":[{"key":"index","label":"Index (Sort)","type":"text","options":[]},{"key":"no","label":"CodeNo","type":"text","options":[]},{"key":"name","label":"Name","type":"text","options":[]},{"key":"name_bn","label":"Name (BN)","type":"text","options":[]},{"key":"department","label":"Department","type":"select","options":["Account","Administration","Boilar","Commercial","Cutting","Driver","Electrical","Gazipur Administration","Knitting and Dyeing","Maintenance","Merchandising","Packing","Production","Quality","Sample","Security","Store"]},{"key":"desig_group","label":"Desig Group","type":"text","options":[]},{"key":"desig_group_list","label":"Desig Group","type":"text","options":[]},{"key":"payment_group","label":"Payment Group","type":"text","options":[]},{"key":"grade","label":"Grade","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-emp-type-list":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"no","label":"CodeNo","type":"text","options":[]},{"key":"name","label":"Name","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"name_bn","label":"Name (BN)","type":"text","options":[]}],"hr-work-group-list":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"no","label":"Code No","type":"text","options":[]},{"key":"name","label":"Group Name","type":"text","options":[]},{"key":"remarks","label":"Description","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-work-shift-policy":[{"key":"index","label":"index","type":"text","options":[]},{"key":"code","label":"Sys Code","type":"text","options":[]},{"key":"name","label":"Shift Name","type":"text","options":[]},{"key":"start_time_hr","label":"Start Time","type":"text","options":[]},{"key":"start_time_min","label":"Start Time","type":"text","options":[]},{"key":"start_time_sec","label":"Start Time","type":"text","options":[]},{"key":"early_in","label":"Start Time","type":"text","options":[]},{"key":"early_unit","label":"Start Time","type":"text","options":[]},{"key":"late_allowed_hr","label":"Late Allowed","type":"text","options":[]},{"key":"late_allowed_min","label":"Late Allowed","type":"text","options":[]},{"key":"late_allowed_sec","label":"Late Allowed","type":"text","options":[]},{"key":"end_time_hr","label":"End Time","type":"text","options":[]},{"key":"end_time_min","label":"End Time","type":"text","options":[]},{"key":"end_time_sec","label":"End Time","type":"text","options":[]},{"key":"lately_out","label":"End Time","type":"text","options":[]},{"key":"lately_unit","label":"End Time","type":"text","options":[]},{"key":"early_allowed_hr","label":"Early Allowed","type":"text","options":[]},{"key":"early_allowed_min","label":"Early Allowed","type":"text","options":[]},{"key":"early_allowed_sec","label":"Early Allowed","type":"text","options":[]},{"key":"regular_hour_hr","label":"Regular Work Hour","type":"text","options":[]},{"key":"regular_hour_min","label":"Regular Work Hour","type":"text","options":[]},{"key":"regular_hour_sec","label":"Regular Work Hour","type":"text","options":[]},{"key":"absent_hour_hr","label":"Last Time for Punch In","type":"text","options":[]},{"key":"absent_hour_min","label":"Last Time for Punch In","type":"text","options":[]},{"key":"absent_hour_sec","label":"Last Time for Punch In","type":"text","options":[]},{"key":"absent_work_hour","label":"Minimum Work Hour","type":"text","options":[]},{"key":"breaktime_deduction_hr","label":"BreakTime Deduction(Hr)","type":"text","options":[]},{"key":"breaktime_deduction_min","label":"BreakTime Deduction(Hr)","type":"text","options":[]},{"key":"breaktime_deduction_sec","label":"BreakTime Deduction(Hr)","type":"text","options":[]},{"key":"shift_type","label":"Shift Type","type":"text","options":[]},{"key":"count_type","label":"Calculation Type","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"holiday","label":"Status","type":"text","options":[]},{"key":"wh","label":"Status","type":"text","options":[]},{"key":"search24hr","label":"24hr Search","type":"text","options":[]}],"hr-attendance-policy":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"code","label":"Sys Code","type":"text","options":[]},{"key":"name","label":"Policy Name","type":"text","options":[]},{"key":"value","label":"Value","type":"text","options":[]},{"key":"remarks","label":"Remarks","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"date","label":"Date","type":"date","options":[]}],"hr-leave-policy":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"code","label":"Sys Code","type":"text","options":[]},{"key":"name","label":"Leave Name","type":"text","options":[]},{"key":"value","label":"Yearly Days","type":"text","options":[]},{"key":"pay_type","label":"With Payment","type":"select","options":["Active","Inactive"]},{"key":"remarks","label":"Remarks","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-payroll-policy":[{"key":"code","label":"code","type":"text","options":[]},{"key":"name","label":"name","type":"text","options":[]},{"key":"value","label":"value","type":"text","options":[]},{"key":"remarks","label":"remarks","type":"text","options":[]},{"key":"status","label":"status","type":"select","options":["Active","Inactive"]},{"key":"date","label":"Date","type":"date","options":[]}],"hr-emp-profile-create":[{"key":"status","label":"System ID/No","type":"select","options":["Active","Inactive"]},{"key":"performance","label":"System ID/No","type":"text","options":[]},{"key":"org_id","label":"Org. ID/No","type":"text","options":[]},{"key":"cardno","label":"Punch ID/No.","type":"text","options":[]},{"key":"employee_name","label":"Emp Name (Eng)","type":"text","options":[]},{"key":"fname","label":"Emp Name (BN)","type":"text","options":[]},{"key":"gender","label":"Emp Name (BN)","type":"select","options":["Female","Male"]},{"key":"branch_name","label":"Branch Name","type":"select","options":["Farnoor Garments Ltd"]},{"key":"egroup","label":"Emp Group","type":"select","options":["Staff","Worker"]},{"key":"department","label":"Department","type":"select","options":["Account","Administration","Boilar","Commercial","Cutting","Driver","Electrical","Gazipur Administration","Knitting and Dyeing","Maintenance","Merchandising","Packing","Production","Quality","Sample","Security","Store"]},{"key":"section","label":"Section","type":"select","options":["Account","Administration","Boiler","Checking & Cleaning","Commercial","Cutting","Driver","Electrical","Finishing","Gazipur Administration","Knitting and Dyeing","Line-1-Ast.OP","Line-1-OP","Line-2-Ast.OP","Line-2-OP","Line-3-Ast.OP","Line-3-OP","Line-4-Ast.OP","Line-4-OP","Line-5-Ast.OP","Line-5-OP","Mechanical","Merchandising","Production","Quality","Sample","Security","Store"]},{"key":"section_group","label":"Section Group","type":"text","options":[]},{"key":"working_section","label":"Working Section","type":"select","options":["ACCOUNTS","admin","Asst. Oparetor 2nd Floor","Asst. Oparetor Line 01","Asst. Oparetor Line 02","Asst. Oparetor Line 03","Asst. Oparetor Line 04","Asst. Oparetor Line 05","Asst. Oparetor Line 06","Asst. Oparetor Line 07","Asst. Oparetor Line 08","Asst. Oparetor Line 09","Asst. Oparetor Line 10","Asst. Oparetor Line 11","Asst. Oparetor Line 12","Asst. Operator(Quilting)","Boiler","Canteen Boy","Checker","Commercial","Cutting Quality","CUTTING STAFF","CUTTING WORKER","Electrical","Finishing Quality","FINISHING STAFF","FINISHING WORKER","General Manager","Governess","House Keeping","HR & Admin","HR Admin & Compliance","IE & Planning","Inputman","LINE -08","LINE -11","Line Ironman","LINE-01 (A)","LINE-01 (B)","LINE-02 (A)","LINE-02 (B)","LINE-03","LINE-03 (A)","LINE-03 (B)","LINE-04","LINE-05","LINE-05 (A)","LINE-05 (B)","LINE-06","LINE-07","Line-08","LINE-09","LINE-09 (A)","Line-09 (B)","LINE-10","LINE-10 (A)","LINE-10 (B)","LINE-12","LINE-12 (A)","LINE-12 (B)","LINE-13","LINE-14","LINE-15","LINE-16","LINE-17","LINE-19","LINE-20","MAINTENANCE","Medical","MERCHANDISING","Needle Issue Man","Office Boy","Peon","Production Counter","QUALITY STAFF","Quality Worker","Quilting","Receive Man","Sample & Design","Seam Sealing","Security","Sewing","Sewing Quality","SEWING STAFF","Sewing-01","Sewing-02","Sewing-03","Sewing-04","Sewing-05","Sewing-06","Sewing-07","Sewing-08","Sewing-09","Sewing-10","Sewing-12","Sewing-13","Store"]},{"key":"designation","label":"Designation","type":"select","options":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"]},{"key":"desig_priority","label":"Designation","type":"text","options":[]},{"key":"work_type","label":"Work Type","type":"text","options":[]},{"key":"grade","label":"Grade","type":"text","options":[]},{"key":"dateofbirth","label":"Date of birth","type":"date","options":[]},{"key":"birth_reg_no","label":"Date of birth","type":"text","options":[]},{"key":"dateofjoin","label":"Date of Join","type":"date","options":[]},{"key":"date_of_confirmation","label":"Date of Confirmation","type":"date","options":[]},{"key":"dateofrelease","label":"Date of Release","type":"date","options":[]},{"key":"id_issue_date","label":"ID Issue Date","type":"date","options":[]},{"key":"resign_submit","label":"Resign Submit","type":"date","options":[]},{"key":"floor","label":"Floor","type":"select","options":["1st Floor","2nd Floor","4th Floor","Ground Floor"]},{"key":"official_contact_no","label":"Official Contact No","type":"text","options":[]},{"key":"office_email","label":"Official Contact No","type":"text","options":[]},{"key":"supervisor_name","label":"Supervisor Name","type":"text","options":[]},{"key":"sid","label":"Supervisor Name","type":"text","options":[]},{"key":"type","label":"Employee Type","type":"text","options":[]},{"key":"supervisor_designation","label":"Supervisor Designation","type":"text","options":[]}],"hr-card-print":[{"key":"id1","label":"ID1","type":"text","options":[]},{"key":"id2","label":"ID2","type":"text","options":[]},{"key":"id3","label":"ID3","type":"text","options":[]},{"key":"page_no","label":"Page No","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"page_title","label":"Page Title","type":"text","options":[]},{"key":"page_title_list","label":"Page Title","type":"text","options":[]}],"hr-card-print-profile":[{"key":"page_no","label":"Page No","type":"text","options":[]},{"key":"page_title","label":"Page Title","type":"text","options":[]},{"key":"page_title_list","label":"Page Title","type":"text","options":[]},{"key":"branch_name","label":"Branch Name","type":"select","options":["Farnoor Garments Ltd"]},{"key":"egroup","label":"Emp Group","type":"select","options":["Staff","Worker"]},{"key":"department","label":"Department","type":"select","options":["Account","Administration","Boilar","Commercial","Cutting","Driver","Electrical","Gazipur Administration","Knitting and Dyeing","Maintenance","Merchandising","Packing","Production","Quality","Sample","Security","Store"]},{"key":"section","label":"Section","type":"select","options":["Account","Administration","Boiler","Checking & Cleaning","Commercial","Cutting","Driver","Electrical","Finishing","Gazipur Administration","Knitting and Dyeing","Line-1-Ast.OP","Line-1-OP","Line-2-Ast.OP","Line-2-OP","Line-3-Ast.OP","Line-3-OP","Line-4-Ast.OP","Line-4-OP","Line-5-Ast.OP","Line-5-OP","Mechanical","Merchandising","Production","Quality","Sample","Security","Store"]},{"key":"designation","label":"Designation","type":"select","options":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"]},{"key":"date","label":"Date","type":"date","options":[]},{"key":"status","label":"Date","type":"select","options":["Active","Inactive"]}],"hr-job-circular":[{"key":"title","label":"Title","type":"text","options":[]},{"key":"index","label":"index","type":"text","options":[]},{"key":"date","label":"Date","type":"date","options":[]},{"key":"issuer","label":"Issuer","type":"text","options":[]},{"key":"description","label":"Description","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"circular_type","label":"Circular Type","type":"text","options":[]}],"hr-interview-info":[{"key":"index","label":"index","type":"text","options":[]},{"key":"name","label":"Name","type":"text","options":[]},{"key":"address","label":"Address","type":"text","options":[]},{"key":"contact_no","label":"Contact No","type":"text","options":[]},{"key":"edu_info","label":"Education","type":"text","options":[]},{"key":"exp_info","label":"Experience","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"date","label":"Appointment Date","type":"date","options":[]},{"key":"appointment_time_hr","label":"Appointment Time","type":"text","options":[]},{"key":"appointment_time_min","label":"Appointment Time","type":"text","options":[]},{"key":"appointment_time_sec","label":"Appointment Time","type":"text","options":[]},{"key":"previous_job_info","label":"Previous Job Info","type":"text","options":[]}],"hr-confirmation-letter":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"designation","label":"Designation","type":"select","options":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"]},{"key":"remarks","label":"Remarks","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"effective_date","label":"Effective Date","type":"date","options":[]}],"hr-promotion-letter":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"designation","label":"Previous Position","type":"select","options":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"]},{"key":"new_place","label":"New Position","type":"text","options":[]},{"key":"idno2","label":"New ID","type":"text","options":[]},{"key":"grade2","label":"New Grade","type":"text","options":[]},{"key":"salary2","label":"New Basic","type":"text","options":[]},{"key":"rent2","label":"House Rent","type":"text","options":[]},{"key":"mallow2","label":"New Medical Allowance","type":"text","options":[]},{"key":"effective_date","label":"Effective Date","type":"date","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"rid","label":"","type":"text","options":[]}],"attendance":[{"key":"branch_name","label":"Branch Name","type":"select","options":["Farnoor Garments Ltd"]},{"key":"egroup","label":"Emp Group","type":"select","options":["Staff","Worker"]},{"key":"department","label":"Department","type":"select","options":["Account","Administration","Boilar","Commercial","Cutting","Driver","Electrical","Gazipur Administration","Knitting and Dyeing","Maintenance","Merchandising","Packing","Production","Quality","Sample","Security","Store"]},{"key":"floor","label":"Floor","type":"select","options":["1st Floor","2nd Floor","4th Floor","Ground Floor"]},{"key":"section","label":"Section","type":"select","options":["Account","Administration","Boiler","Checking & Cleaning","Commercial","Cutting","Driver","Electrical","Finishing","Gazipur Administration","Knitting and Dyeing","Line-1-Ast.OP","Line-1-OP","Line-2-Ast.OP","Line-2-OP","Line-3-Ast.OP","Line-3-OP","Line-4-Ast.OP","Line-4-OP","Line-5-Ast.OP","Line-5-OP","Mechanical","Merchandising","Production","Quality","Sample","Security","Store"]},{"key":"working_section","label":"Working Section","type":"select","options":["ACCOUNTS","admin","Asst. Oparetor 2nd Floor","Asst. Oparetor Line 01","Asst. Oparetor Line 02","Asst. Oparetor Line 03","Asst. Oparetor Line 04","Asst. Oparetor Line 05","Asst. Oparetor Line 06","Asst. Oparetor Line 07","Asst. Oparetor Line 08","Asst. Oparetor Line 09","Asst. Oparetor Line 10","Asst. Oparetor Line 11","Asst. Oparetor Line 12","Asst. Operator(Quilting)","Boiler","Canteen Boy","Checker","Commercial","Cutting Quality","CUTTING STAFF","CUTTING WORKER","Electrical","Finishing Quality","FINISHING STAFF","FINISHING WORKER","General Manager","Governess","House Keeping","HR & Admin","HR Admin & Compliance","IE & Planning","Inputman","LINE -08","LINE -11","Line Ironman","LINE-01 (A)","LINE-01 (B)","LINE-02 (A)","LINE-02 (B)","LINE-03","LINE-03 (A)","LINE-03 (B)","LINE-04","LINE-05","LINE-05 (A)","LINE-05 (B)","LINE-06","LINE-07","Line-08","LINE-09","LINE-09 (A)","Line-09 (B)","LINE-10","LINE-10 (A)","LINE-10 (B)","LINE-12","LINE-12 (A)","LINE-12 (B)","LINE-13","LINE-14","LINE-15","LINE-16","LINE-17","LINE-19","LINE-20","MAINTENANCE","Medical","MERCHANDISING","Needle Issue Man","Office Boy","Peon","Production Counter","QUALITY STAFF","Quality Worker","Quilting","Receive Man","Sample & Design","Seam Sealing","Security","Sewing","Sewing Quality","SEWING STAFF","Sewing-01","Sewing-02","Sewing-03","Sewing-04","Sewing-05","Sewing-06","Sewing-07","Sewing-08","Sewing-09","Sewing-10","Sewing-12","Sewing-13","Store"]},{"key":"designation","label":"Designation","type":"select","options":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"]},{"key":"workgroup","label":"Workgroup","type":"text","options":[]},{"key":"work_shift","label":"Work Shift","type":"text","options":[]},{"key":"report_type","label":"Report Type","type":"text","options":[]},{"key":"report_sub_list","label":"Report Type","type":"text","options":[]},{"key":"in_time_hr","label":"Search Time","type":"text","options":[]},{"key":"in_time_min","label":"Search Time","type":"text","options":[]},{"key":"in_time_sec","label":"Search Time","type":"text","options":[]},{"key":"operator","label":"Search Time","type":"text","options":[]},{"key":"days_count","label":"Search Time","type":"text","options":[]},{"key":"print_date","label":"Print Date","type":"date","options":[]},{"key":"rpp","label":"Print Date","type":"text","options":[]},{"key":"ts","label":"Print Date","type":"text","options":[]},{"key":"status","label":"Emp. Status","type":"select","options":["Active","Inactive"]},{"key":"date","label":"Date","type":"date","options":[]},{"key":"date_end_day","label":"Date","type":"text","options":[]},{"key":"date_end_month","label":"Date","type":"text","options":[]},{"key":"date_end_year","label":"Date","type":"text","options":[]}],"hr-leave-report-emp":[{"key":"date","label":"Date","type":"date","options":[]},{"key":"date_end_day","label":"Date","type":"text","options":[]},{"key":"date_end_month","label":"Date","type":"text","options":[]},{"key":"date_end_year","label":"Date","type":"text","options":[]}],"hr-leave-reports":[{"key":"branch_name","label":"Branch Name","type":"select","options":["Farnoor Garments Ltd"]},{"key":"egroup","label":"Emp. Group","type":"select","options":["Staff","Worker"]},{"key":"section","label":"Section","type":"select","options":["Account","Administration","Boiler","Checking & Cleaning","Commercial","Cutting","Driver","Electrical","Finishing","Gazipur Administration","Knitting and Dyeing","Line-1-Ast.OP","Line-1-OP","Line-2-Ast.OP","Line-2-OP","Line-3-Ast.OP","Line-3-OP","Line-4-Ast.OP","Line-4-OP","Line-5-Ast.OP","Line-5-OP","Mechanical","Merchandising","Production","Quality","Sample","Security","Store"]},{"key":"department","label":"Department","type":"select","options":["Account","Administration","Boilar","Commercial","Cutting","Driver","Electrical","Gazipur Administration","Knitting and Dyeing","Maintenance","Merchandising","Packing","Production","Quality","Sample","Security","Store"]},{"key":"designation","label":"Designation","type":"select","options":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"]},{"key":"leave_type","label":"Leave Type","type":"text","options":[]},{"key":"print_date","label":"Print Date","type":"date","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"date","label":"Date","type":"date","options":[]},{"key":"date_end_day","label":"Date","type":"text","options":[]},{"key":"date_end_month","label":"Date","type":"text","options":[]},{"key":"date_end_year","label":"Date","type":"text","options":[]}],"hr-manual-punch":[{"key":"branch_name","label":"Branch Name","type":"select","options":["Farnoor Garments Ltd"]},{"key":"egroup","label":"Emp. Group","type":"select","options":["Staff","Worker"]},{"key":"department","label":"Department","type":"select","options":["Account","Administration","Boilar","Commercial","Cutting","Driver","Electrical","Gazipur Administration","Knitting and Dyeing","Maintenance","Merchandising","Packing","Production","Quality","Sample","Security","Store"]},{"key":"section","label":"Section","type":"select","options":["Account","Administration","Boiler","Checking & Cleaning","Commercial","Cutting","Driver","Electrical","Finishing","Gazipur Administration","Knitting and Dyeing","Line-1-Ast.OP","Line-1-OP","Line-2-Ast.OP","Line-2-OP","Line-3-Ast.OP","Line-3-OP","Line-4-Ast.OP","Line-4-OP","Line-5-Ast.OP","Line-5-OP","Mechanical","Merchandising","Production","Quality","Sample","Security","Store"]},{"key":"designation","label":"Designation","type":"select","options":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"date","label":"Date","type":"date","options":[]}],"hr-leave-entry":[{"key":"fname","label":"Emp Name","type":"text","options":[]},{"key":"designation","label":"Designation","type":"select","options":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"]},{"key":"branch_name","label":"Branch Name","type":"select","options":["Farnoor Garments Ltd"]},{"key":"leave_balance","label":"Leave Balance","type":"text","options":[]},{"key":"cl","label":"Leave Balance","type":"text","options":[]},{"key":"sl","label":"Leave Balance","type":"text","options":[]},{"key":"ml","label":"Leave Balance","type":"text","options":[]},{"key":"dateofjoin","label":"Date of Join","type":"date","options":[]},{"key":"leave_type","label":"Leave Type","type":"text","options":[]},{"key":"remarks","label":"Purpose of Leave App.","type":"text","options":[]},{"key":"date","label":"Date from","type":"date","options":[]},{"key":"date_to","label":"Date to","type":"date","options":[]},{"key":"leave_days","label":"Total Days","type":"text","options":[]},{"key":"amount","label":"Amount","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-outdoor-slip":[{"key":"outdoor_type","label":"Outdoor Type","type":"text","options":[]},{"key":"date","label":"Date from","type":"date","options":[]},{"key":"date_to","label":"Date to","type":"date","options":[]},{"key":"remarks","label":"Description","type":"text","options":[]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]}],"hr-profile-leave":[{"key":"branch_name","label":"Branch Name","type":"select","options":["Farnoor Garments Ltd"]},{"key":"egroup","label":"Emp. Group","type":"select","options":["Staff","Worker"]},{"key":"department","label":"Department","type":"select","options":["Account","Administration","Boilar","Commercial","Cutting","Driver","Electrical","Gazipur Administration","Knitting and Dyeing","Maintenance","Merchandising","Packing","Production","Quality","Sample","Security","Store"]},{"key":"section","label":"Section","type":"select","options":["Account","Administration","Boiler","Checking & Cleaning","Commercial","Cutting","Driver","Electrical","Finishing","Gazipur Administration","Knitting and Dyeing","Line-1-Ast.OP","Line-1-OP","Line-2-Ast.OP","Line-2-OP","Line-3-Ast.OP","Line-3-OP","Line-4-Ast.OP","Line-4-OP","Line-5-Ast.OP","Line-5-OP","Mechanical","Merchandising","Production","Quality","Sample","Security","Store"]},{"key":"designation","label":"Designation","type":"select","options":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"]},{"key":"status","label":"Status","type":"select","options":["Active","Inactive"]},{"key":"date","label":"Date","type":"date","options":[]}],"hr-holiday-schedule":[{"key":"date","label":"Date","type":"date","options":[]},{"key":"date_end_day","label":"Date","type":"text","options":[]},{"key":"date_end_month","label":"Date","type":"text","options":[]},{"key":"date_end_year","label":"Date","type":"text","options":[]}],"hr-duty-roster":[{"key":"work_group","label":"Work Group","type":"text","options":[]},{"key":"date","label":"Date","type":"date","options":[]},{"key":"date_end_day","label":"Date","type":"text","options":[]},{"key":"date_end_month","label":"Date","type":"text","options":[]},{"key":"date_end_year","label":"Date","type":"text","options":[]}],"hr-system-settings":[{"key":"name","label":"Name","type":"text","options":[]},{"key":"value","label":"Value","type":"text","options":[]},{"key":"remarks","label":"Remarks","type":"text","options":[]},{"key":"styles_info","label":"Styles Info","type":"text","options":[]},{"key":"jscript","label":"JScript","type":"text","options":[]},{"key":"settings_type","label":"Settings Type","type":"text","options":[]},{"key":"settings_type_list","label":"Settings Type","type":"text","options":[]},{"key":"color1","label":"Image Files","type":"text","options":[]},{"key":"color2","label":"Image Files","type":"text","options":[]},{"key":"status","label":"Status","type":"text","options":[]}],"hr-alert-manager":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"message","label":"Message","type":"text","options":[]},{"key":"status","label":"Status","type":"text","options":[]},{"key":"date","label":"Date","type":"date","options":[]},{"key":"remarks","label":"Remarks","type":"text","options":[]}],"hr-session-log":[{"key":"idno","label":"Login ID","type":"text","options":[]},{"key":"date","label":"Date","type":"date","options":[]},{"key":"time_stamp","label":"Time Stamp","type":"text","options":[]},{"key":"status","label":"Time Stamp","type":"text","options":[]},{"key":"sys_time_hr","label":"Sys Time","type":"text","options":[]},{"key":"sys_time_min","label":"Sys Time","type":"text","options":[]},{"key":"sys_time_sec","label":"Sys Time","type":"text","options":[]}],"hr-report-list":[{"key":"name","label":"Name","type":"text","options":[]},{"key":"display_title","label":"Display Title","type":"text","options":[]},{"key":"value","label":"Value","type":"text","options":[]},{"key":"status","label":"status","type":"text","options":[]},{"key":"remarks","label":"modules","type":"text","options":[]},{"key":"modules_list","label":"modules","type":"text","options":[]}],"hr-status-settings":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"name","label":"Name","type":"text","options":[]},{"key":"colum_no","label":"Colum No","type":"text","options":[]},{"key":"scroll_height","label":"Scroll Height","type":"text","options":[]},{"key":"refresh_time","label":"Refresh Time","type":"text","options":[]},{"key":"status_type","label":"Status Type","type":"text","options":[]},{"key":"status_type_list","label":"Status Type","type":"text","options":[]},{"key":"page_link","label":"Page Link","type":"text","options":[]},{"key":"remarks","label":"Remarks","type":"text","options":[]},{"key":"status","label":"Status","type":"text","options":[]}],"hr-attendance-emp":[],"hr-earn-leave-withdraw":[{"key":"idno","label":"IDNo","type":"text","options":[]},{"key":"date","label":"Date","type":"date","options":[]},{"key":"days","label":"Days","type":"text","options":[]},{"key":"status","label":"Status","type":"text","options":[]}],"hr-leave-app":[{"key":"fname","label":"Emp. Name","type":"text","options":[]},{"key":"idno","label":"ID","type":"text","options":[]},{"key":"date","label":"Date","type":"date","options":[]}],"hr-leave-request-status":[{"key":"idno","label":"ID","type":"text","options":[]},{"key":"request_status","label":"Request Status","type":"text","options":[]},{"key":"date","label":"Date","type":"date","options":[]},{"key":"date_end_day","label":"Date","type":"text","options":[]},{"key":"date_end_month","label":"Date","type":"text","options":[]},{"key":"date_end_year","label":"Date","type":"text","options":[]}],"hr-note-book":[{"key":"index","label":"Index","type":"text","options":[]},{"key":"subject","label":"Subject","type":"text","options":[]},{"key":"remarks","label":"Description","type":"text","options":[]},{"key":"category","label":"Category","type":"text","options":[]},{"key":"category_list","label":"Category","type":"text","options":[]},{"key":"reminder","label":"Reminder","type":"text","options":[]},{"key":"reminder_date","label":"Reminder Date","type":"date","options":[]},{"key":"reminder_time_hr","label":"Reminder Time","type":"text","options":[]},{"key":"reminder_time_min","label":"Reminder Time","type":"text","options":[]},{"key":"reminder_time_sec","label":"Reminder Time","type":"text","options":[]},{"key":"status","label":"Status","type":"text","options":[]},{"key":"date","label":"Date","type":"date","options":[]}]};

;
;/* app.js */
'use strict';
const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='farnoor.workspace.v1';
const statuses=['Pending','In progress','Completed','Cancelled'];
function normalizeDate(value){
 const raw=String(value).trim().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));
 const match=raw.match(/^(\d{1,2})[/.\-](\d{1,2})[/.\-](\d{2}|\d{4})$/);
 if(!match)throw Error('Use a date like 1/1/26 or 01/01/2026.');
 const day=Number(match[1]),month=Number(match[2]),year=match[3].length===2?2000+Number(match[3]):Number(match[3]);
 const test=new Date(year,month-1,day);
 if(year<1900||year>2199||test.getFullYear()!==year||test.getMonth()!==month-1||test.getDate()!==day)throw Error('Please enter a valid date.');
 return `${String(day).padStart(2,'0')}/${String(month).padStart(2,'0')}/${year}`;
}
function initialState(){return {profile:{username:'Farnoor Admin',email:'admin@farnoor.example',photo:''},records:{}};}
function validateState(data){
 if(!data||!data.profile||typeof data.profile.username!=='string'||!data.profile.username.trim()||data.profile.username.length>60||typeof data.profile.email!=='string'||!/^\S+@\S+\.\S+$/.test(data.profile.email)||data.profile.email.length>120||typeof data.profile.photo!=='string'||(data.profile.photo&&!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(data.profile.photo))||data.profile.photo.length>2800000||!data.records||typeof data.records!=='object'||Array.isArray(data.records))throw Error('Invalid backup file.');
 for(const department of DEPARTMENTS)for(const page of department.pages){const rows=data.records[page.id]||[];if(!Array.isArray(rows)||rows.length>10000)throw Error('Invalid records.');const ids=new Set();for(const row of rows){if(typeof row.id!=='string'||ids.has(row.id)||typeof row.reference!=='string'||typeof row.name!=='string'||row.reference.length>120||row.name.length>200||!Number.isFinite(Number(row.quantity))||Number(row.quantity)<0||!statuses.includes(row.status))throw Error('Invalid record in backup.');normalizeDate(row.date);ids.add(row.id);}}
 if(data.ledger){for(const kind of ['credit','debit']){if(!Array.isArray(data.ledger[kind])||data.ledger[kind].length>10000)throw Error('Invalid account files.');for(const file of data.ledger[kind]){if(typeof file.id!=='string'||file.id.length>120||typeof file.createdAt!=='string'||!Number.isFinite(Date.parse(file.createdAt))||!Array.isArray(file.rows)||file.rows.length>10000)throw Error('Invalid account file.');for(const row of file.rows){normalizeDate(row.date);if(!Number.isSafeInteger(row.cents)||row.cents<0||typeof row.remarks!=='string'||row.remarks.length>500)throw Error('Invalid account row.');}}}}
 if(data.orderFiles){if(!Array.isArray(data.orderFiles)||data.orderFiles.length>10000)throw Error('Invalid order files.');const ids=new Set();for(const file of data.orderFiles){if(typeof file.id!=='string'||file.id.length>120||ids.has(file.id)||!Number.isFinite(Date.parse(file.createdAt))||!Array.isArray(file.rows)||file.rows.length>10000)throw Error('Invalid order file.');ids.add(file.id);for(const row of file.rows){for(const key of ['buyer','style','item','remarks'])if(typeof row[key]!=='string'||row[key].length>500)throw Error('Invalid order details.');if(!Number.isSafeInteger(row.qty)||row.qty<1)throw Error('Invalid order quantity.');normalizeDate(row.orderDate);normalizeDate(row.shipmentDate);}}}
 if(data.productionSchedules){if(!Array.isArray(data.productionSchedules)||data.productionSchedules.length>10000)throw Error('Invalid production schedules.');const ids=new Set();for(const file of data.productionSchedules){if(typeof file.id!=='string'||ids.has(file.id)||file.id.length>120||!DEPARTMENTS.flatMap(d=>d.pages).some(p=>p.section===file.section)||!Number.isFinite(Date.parse(file.createdAt))||typeof file.month!=='string'||!/^\d{1,2}\/\d{4}$/.test(file.month)||!['None','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].includes(file.weekly)||!Array.isArray(file.extra)||file.extra.some(day=>!Number.isInteger(day)||day<1||day>31)||!Array.isArray(file.rows)||file.rows.length>10000||!file.journal||typeof file.journal!=='object'||Array.isArray(file.journal))throw Error('Invalid saved production plan.');const [month,year]=file.month.split('/').map(Number);if(month<1||month>12||year<1900||year>2199||file.extra.some(day=>day>new Date(year,month,0).getDate()))throw Error('Invalid production month.');ids.add(file.id);for(const row of file.rows){for(const key of ['buyer','item','style','remarks'])if(typeof row[key]!=='string'||row[key].length>500)throw Error('Invalid production details.');for(const key of ['orderQty','totalQty','firstTarget','dailyTarget'])if(!Number.isSafeInteger(row[key])||row[key]<0||row[key]>1000000000)throw Error('Invalid production quantity.');normalizeDate(row.startDate);}for(const [date,actual]of Object.entries(file.journal)){normalizeDate(date);if(!actual||typeof actual!=='object'||String(actual.remarks||'').length>500||!Number.isFinite(Number(actual.hours??10))||Number(actual.hours??10)<=0||Number(actual.hours??10)>24||!/^[০-৯0-9,]*$/.test(String(actual.output||'')))throw Error('Invalid daily output.');}}}
 StoreCore.validateFiles(data.records,normalizeDate);
 window.FarnoorPayrollCore?.validateRows(data.records.payroll,normalizeDate);
 return data;
}
let state=initialState();let storageWarning='';
let activePage=null,opened=new Set(),query='',filter='All statuses',editingId=null,pendingPhoto='',sessionActive=false;
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('visible'),4500);}
function avatar(photo,name){return photo?`<img class="avatar-image" src="${esc(photo)}" alt="User photo">`:`<span class="avatar-initial">${esc(name.slice(0,1).toUpperCase())}</span>`;}
function renderProfile(){$('#username').textContent=state.profile.username;$('#avatar').innerHTML=avatar(state.profile.photo,state.profile.username);}
function pageInfo(id){for(const department of DEPARTMENTS){const page=department.pages.find(p=>p.id===id);if(page)return {department,page};}return null;}
const submenuLooks=new Map();
const departmentHues={admin:195,packing:95,sewing:330,hr:333,accounts:150,commercial:215,merch:265,knitting:185,inventory:38,production:200,cutting:18,finishing:300,quality:80,sample:348,maintenance:215,electrical:48};
for(const department of DEPARTMENTS){
 const keys=new Set();
 for(const page of department.pages.filter(p=>!p.hidden)){
  if(!page.groupEntry)keys.add('page:'+page.id);
  if(page.parent)keys.add('group:'+department.id+':'+page.parent);
  page.navPath?.forEach((part,index)=>keys.add('group:'+department.id+':'+page.navPath.slice(0,index+1).join('/')));
 }
 for(const key of keys){
  const index=submenuLooks.size;let hue=Math.round(index*137.508)%360;
  const distance=Math.abs(hue-departmentHues[department.id]);
  if(Math.min(distance,360-distance)<65)hue=(hue+150)%360;
  const saturation=58+index%17,lightness=91+(index%5)*.7;
  submenuLooks.set(key,{hue,saturation,lightness,shape:['rounded','ticket','rail','pill','underline'][index%5]});
 }
}
function submenuAttributes(key,depth=0){
 const look=submenuLooks.get(key),{hue:h,saturation:s,lightness:l,shape}=look;
 return `data-sub-style="${shape}" data-sub-depth="${depth}" style="--sub-bg:hsl(${h} ${s}% ${l}%);--sub-edge:hsl(${h} ${s-15}% 75%);--sub-ink:hsl(${h} 42% 25%);--sub-accent:hsl(${h} 45% 48%)"`;
}
function renderNavigation(){
 const pageButton=(p,depth=0)=>`<button class="page-button ${activePage===p.id?'active':''}" data-page="${p.id}" ${submenuAttributes('page:'+p.id,depth)} aria-expanded="${activePage===p.id}"><span class="submenu-icon" aria-hidden="true">${p.icon}</span><span class="submenu-label">${esc(p.name)}</span></button>`;
 const tree=(department,pages,depth=0,path=[])=>{const seen=new Set();return pages.map(page=>{if(!page.navPath||page.navPath.length<=depth)return page.groupEntry?'':pageButton(page,depth);const label=page.navPath[depth];if(seen.has(label))return '';seen.add(label);const children=pages.filter(p=>p.navPath?.[depth]===label),nextPath=[...path,label],key=department.id+':'+nextPath.join('/'),entry=children.find(p=>p.groupEntry&&p.navPath.length===depth+1);return `<button class="page-button schedule-group" data-group="${esc(key)}" ${entry?`data-group-page="${entry.id}"`:''} ${submenuAttributes('group:'+key,depth)} aria-expanded="${opened.has(key)}"><span class="submenu-icon" aria-hidden="true">${({'ORDER':'▣','Admin':'♛','Utilities':'⚒','Management':'▦','HR Info':'♙','Attendance':'◷','Schedule':'▦','Schedule Report':'▤','Sewing':'⚙'})[label]||'▥'}</span><span class="submenu-label">${esc(label)}</span><span class="submenu-toggle">${opened.has(key)?'−':'+'}</span></button>${opened.has(key)?`<div class="nested-pages">${tree(department,children,depth+1,nextPath)}</div>`:''}`;}).join('');};
 $('#navigation').innerHTML=DEPARTMENTS.filter(d=>d.navigationOnly?(window.FarnoorAccess?.canPage('sewing-plan')||DEPARTMENTS.find(item=>item.id==='production')?.pages.some(p=>window.FarnoorAccess?.canPage(p.permissionPage||p.id))):d.pages.some(p=>!p.hidden&&(window.FarnoorAccess?.canPage(p.permissionPage||p.id)??false))).map(d=>{const seen=new Set();const pages=d.pages.filter(p=>!p.hidden&&(window.FarnoorAccess?.canPage(p.permissionPage||p.id)??false));return `<div class="department"><button class="department-button" data-department="${d.id}" style="--color:${d.color}" aria-expanded="${opened.has(d.id)}"><span class="icon" aria-hidden="true">${d.icon}</span><span>${esc(d.name)}</span><span class="chevron">${opened.has(d.id)?'−':'+'}</span></button>${opened.has(d.id)?`<div class="pages">${pages.some(p=>p.navPath)?tree(d,pages):pages.map(p=>{if(!p.parent)return pageButton(p);if(seen.has(p.parent))return '';seen.add(p.parent);const key=d.id+':'+p.parent;return `<button class="page-button account-group" data-group="${key}" ${submenuAttributes('group:'+key)} aria-expanded="${opened.has(key)}"><span class="submenu-icon" aria-hidden="true">${p.parent==='CREDIT'?'⊕':p.parent==='DEBIT'?'⊖':'▤'}</span><span class="submenu-label">${esc(p.parent)}</span><span class="submenu-toggle">${opened.has(key)?'−':'+'}</span></button>${opened.has(key)?`<div class="nested-pages">${pages.filter(child=>child.parent===p.parent).map(child=>pageButton(child,1)).join('')}</div>`:''}`;}).join('')}</div>`:''}</div>`;}).join('');
}
function openNavigationBranch(departmentId,path=[]){opened.clear();opened.add(departmentId);path.forEach((part,index)=>opened.add(departmentId+':'+path.slice(0,index+1).join('/')));}
function closeNavigationBranch(key){for(const item of [...opened])if(item===key||item.startsWith(key+':')||item.startsWith(key+'/'))opened.delete(item);}
$('#navigation').addEventListener('click',e=>{const group=e.target.closest('[data-group]');if(!group)return;const key=group.dataset.group;if(opened.has(key)){closeNavigationBranch(key);activePage=null;renderClosed();}else{const separator=key.indexOf(':');openNavigationBranch(key.slice(0,separator),key.slice(separator+1).split('/'));activePage=null;renderClosed();if(group.dataset.groupPage)goPage(group.dataset.groupPage);}renderNavigation();});
function goPage(id){const info=pageInfo(id);if(!info)return;document.body.dataset.activeDepartment=info.department.id;openNavigationBranch(info.department.id,info.page.navPath||(info.page.parent?[info.page.parent]:[]));activePage=id;query='';filter='All statuses';renderNavigation();renderPage();}
$('#navigation').addEventListener('click',event=>{const department=event.target.closest('[data-department]'),page=event.target.closest('[data-page]');if(department){const id=department.dataset.department,wasOpen=opened.has(id);opened.clear();activePage=null;renderClosed();if(!wasOpen)opened.add(id);document.body.dataset.activeDepartment=wasOpen?'':id;if(id==='sewing-line'&&!wasOpen)$('#main').innerHTML='<section class="account-paper"><h2>Sewing Line</h2></section>';renderNavigation();}if(page){if(activePage===page.dataset.page){activePage=null;renderNavigation();renderClosed();}else goPage(page.dataset.page);}});
function badge(status){return `<span class="badge ${status==='Completed'?'complete':status==='Pending'?'pending':status==='Cancelled'?'cancelled':''}">${esc(status)}</span>`;}
function heading(label,title,subtitle,action=''){return `<div class="page-heading"><div><span class="eyebrow">${esc(label)}</span><h2>${esc(title)}</h2><p>${esc(subtitle)}</p></div>${action}</div>`;}
function allRecords(){return DEPARTMENTS.flatMap(d=>d.pages.flatMap(p=>(state.records[p.id]||[]).map(r=>({...r,page:p.id}))));}
function renderOverview(){
 activePage=null;opened.clear();renderNavigation();const orders=(state.orderFiles||[]).flatMap(file=>file.rows.map(row=>({reference:row.style,name:row.buyer+' · '+row.item,quantity:row.qty,date:row.shipmentDate,status:'Saved'}))),all=allRecords(),pending=all.filter(r=>r.status==='Pending').length;
 $('#main').innerHTML=heading('OPERATIONS OVERVIEW','Your factory, at a glance','A clear view of orders, teams and daily operations.',`<span class="date-tag">${new Date().toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'})}</span>`)+`<div class="stats">${[['Buyer orders',orders.length,'Saved order rows','#6753ab'],['Order quantity',orders.reduce((s,r)=>s+Number(r.quantity),0).toLocaleString(),'Pieces in the order register','#2d7c95'],['Employee records',(state.records.employees||[]).length,'People in the employee register','#af546d'],['Pending records',pending,'Across all departments','#b17a29']].map(([label,value,note,color])=>`<div class="stat"><span class="accent" style="--accent:${color}"></span><small>${label}</small><strong>${value}</strong><p>${note}</p></div>`).join('')}</div><section class="panel"><div class="panel-header"><h3>Buyer order register</h3><button data-open-page="order-report">View orders</button></div><div class="table-wrap"><table><thead><tr><th>ORDER</th><th>BUYER / STYLE</th><th>QUANTITY</th><th>DELIVERY</th><th>STATUS</th></tr></thead><tbody>${orders.slice(0,5).map(r=>`<tr><td>${esc(r.reference)}</td><td>${esc(r.name)}</td><td>${Number(r.quantity).toLocaleString()} pcs</td><td>${esc(r.date)}</td><td>${badge(r.status)}</td></tr>`).join('')||'<tr><td colspan="5" class="empty">No orders yet. Open Buyer orders to add one.</td></tr>'}</tbody></table></div></section><div class="overview-bottom"><section class="panel"><div class="panel-header"><h3>Department activity</h3><small>Completed records / total</small></div><div class="progress-list">${DEPARTMENTS.filter(d=>['merch','production','quality'].includes(d.id)).map(d=>{const records=d.pages.flatMap(p=>state.records[p.id]||[]),done=records.filter(r=>r.status==='Completed').length;return `<div><div class="progress-title"><span>${esc(d.name)}</span><strong>${done} / ${records.length}</strong></div><div class="track"><span style="width:${records.length?done/records.length*100:0}%;background:${d.color}"></span></div></div>`;}).join('')}</div></section><section class="panel"><div class="panel-header"><h3>Quick access</h3><small>Common registers</small></div><div class="quick-list"><button data-open-page="order-report">▤ Buyer orders <span>Open</span></button><button data-open-page="store-fabric-receive">▧ Fabric <span>Open</span></button><button data-open-page="employees">♧ Personal File <span>Open</span></button></div></section></div><div class="notice">User workspace · Saved data is stored in the secure online database. Download a backup when needed. Right-click your user profile to edit it; on mobile, tap the profile.</div><p class="footer-note">FARNOOR GARMENTS LTD. · Management workspace · User workspace</p>`;
}
function renderClosed(){$('#main').innerHTML=`<div class="closed"><div class="symbol">▦</div><h2>Page closed</h2><p>Select a page from a department or return to the overview.</p><button id="returnOverview" class="primary">Open overview</button></div>`;}
function fields(){return pageInfo(activePage).page.fields||DEFAULT_FIELDS;}
function filteredRows(){return (state.records[activePage]||[]).filter(r=>(filter==='All statuses'||r.status===filter)&&`${r.reference} ${r.name} ${r.date} ${r.status}`.toLowerCase().includes(query.toLowerCase()));}
function renderRows(){const rows=filteredRows();$('#rows').innerHTML=rows.map(r=>`<tr>${fields().map(([key])=>`<td>${key==='status'?badge(r[key]):esc(key==='quantity'?Number(r[key]).toLocaleString():r[key])}</td>`).join('')}<td><div class="row-actions"><button data-edit="${esc(r.id)}">Edit</button><button data-delete="${esc(r.id)}" aria-label="Delete ${esc(r.reference)}">Delete</button></div></td></tr>`).join('')||'<tr><td colspan="6" class="empty">No matching records. Add a record or adjust your filters.</td></tr>';$('#rowCount').textContent=`${rows.length} of ${(state.records[activePage]||[]).length} records`;}
function renderPage(){const {department,page}=pageInfo(activePage);if(page.navigationOnly){$('#main').innerHTML=heading(department.name,page.name,'')+'<section class="account-paper"><h3>'+esc(page.name)+'</h3></section>';return;}$('#main').innerHTML=heading(department.name,page.name,'Manage your records. Dates are displayed as DD/MM/YYYY.','<button id="newRecord" class="primary">+ New record</button>')+`<section class="panel"><div class="toolbar"><input id="search" type="search" placeholder="Search this register…" aria-label="Search records" value="${esc(query)}"><select id="statusFilter" aria-label="Filter status">${['All statuses',...statuses].map(s=>`<option ${filter===s?'selected':''}>${s}</option>`).join('')}</select><button id="export">Export CSV</button><span id="rowCount" class="count"></span></div><div class="table-wrap"><table><thead><tr>${fields().map(([,label])=>`<th>${esc(label.toUpperCase())}</th>`).join('')}<th>ACTIONS</th></tr></thead><tbody id="rows"></tbody></table></div></section><div class="notice">User workspace · Saved records are stored in the secure online database. Date example: <strong>1/1/26 → 01/01/2026</strong>. Bengali digits are also accepted: <strong>১/১/২৬</strong>.</div>`;renderRows();$('#search').addEventListener('input',e=>{query=e.target.value;renderRows();});$('#statusFilter').addEventListener('change',e=>{filter=e.target.value;renderRows();});}
function openRecord(id=null){editingId=id;const row=(state.records[activePage]||[]).find(r=>r.id===id)||{};$('#recordTitle').textContent=id?'Edit record':'New record';$('#recordCategory').textContent=pageInfo(activePage).page.name;$('#recordFields').innerHTML=fields().map(([key,label,type])=>`<label>${esc(label)}${type==='status'?`<select name="${key}">${statuses.map(s=>`<option ${row[key]===s?'selected':''}>${s}</option>`).join('')}</select>`:`<input name="${key}" ${type==='number'?'type="number" min="0" step="any"':'type="text"'} value="${esc(row[key]??'')}" ${type==='date'?'data-date placeholder="1/1/26" inputmode="numeric"':`maxlength="${key==='name'?200:120}"`} required>`}</label>`).join('');$('#recordDialog').showModal();}
$('#recordForm').addEventListener('focusout',e=>{if(e.target.matches('[data-date]')&&e.target.value){try{e.target.value=normalizeDate(e.target.value);e.target.setCustomValidity('');}catch(error){e.target.setCustomValidity(error.message);}}});
$('#recordForm').addEventListener('input',e=>e.target.setCustomValidity?.(''));
$('#recordForm').addEventListener('submit',async e=>{e.preventDefault();const values=Object.fromEntries(new FormData(e.target));try{values.date=normalizeDate(values.date);}catch(error){toast(error.message);return;}values.reference=values.reference.trim();values.name=values.name.trim();if(!values.reference||!values.name){toast('Reference and description cannot be blank.');return;}values.quantity=Number(values.quantity);values.id=editingId||crypto.randomUUID();const next=structuredClone(state),rows=next.records[activePage]||[];if(editingId)rows[rows.findIndex(r=>r.id===editingId)]=values;else rows.push(values);next.records[activePage]=rows;if(await commit(next)){$('#recordDialog').close();renderPage();toast('Record saved');}});
$('#main').addEventListener('click',async e=>{const target=e.target.closest('button');if(!target)return;if(target.dataset.openPage)goPage(target.dataset.openPage);if(target.id==='returnOverview')renderOverview();if(target.id==='newRecord')openRecord();if(target.dataset.edit)openRecord(target.dataset.edit);if(target.dataset.delete){const id=target.dataset.delete,page=activePage;$('#deleteDialog').showModal();$('#deleteDialog').onclose=async ()=>{if($('#deleteDialog').returnValue==='delete'){const next=structuredClone(state);next.records[page]=next.records[page].filter(r=>r.id!==id);if(await commit(next)){renderPage();toast('Record deleted');}}};}if(target.id==='export')exportCSV();});
function download(filename,content,type){const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function exportCSV(){const quote=value=>'"'+String(/^[=+@\-\t\r]/.test(String(value))?'\''+value:value).replace(/"/g,'""')+'"';const cols=fields();download(`farnoor-${activePage}.csv`,'\ufeff'+[cols.map(([,label])=>quote(label)).join(','),...filteredRows().map(r=>cols.map(([key])=>quote(r[key])).join(','))].join('\r\n'),'text/csv;charset=utf-8');toast('CSV exported');}
function openProfile(){if(!sessionActive)return;$('#profileForm').elements.username.value=state.profile.username;$('#profileForm').elements.email.value=state.profile.email;$('#profileForm').elements.photo.value='';pendingPhoto=state.profile.photo;renderPhotoPreview();$('#profileDialog').showModal();}
function renderPhotoPreview(){$('#photoPreview').innerHTML=pendingPhoto?`<img src="${esc(pendingPhoto)}" alt="Photo preview">`:'';}
$('#profileButton').addEventListener('contextmenu',e=>{e.preventDefault();openProfile();});$('#profileButton').addEventListener('click',openProfile);
let photoLoading=false;
$('#profileForm').elements.photo.addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>250*1024){toast('Choose a PNG, JPG or WebP photo under 250 KB.');e.target.value='';return;}photoLoading=true;try{pendingPhoto=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file);});renderPhotoPreview();}catch{toast('Could not read this photo.');}finally{photoLoading=false;}});
$('#removePhoto').onclick=()=>{pendingPhoto='';$('#profileForm').elements.photo.value='';renderPhotoPreview();};
$('#profileForm').onsubmit=async e=>{e.preventDefault();if(photoLoading){toast('Please wait for the photo to finish loading.');return;}const username=e.target.elements.username.value.trim(),email=e.target.elements.email.value.trim();if(!username){toast('Please enter a username.');return;}if(!/^\S+@\S+\.\S+$/.test(email)){toast('Please enter a complete email address.');return;}const next=structuredClone(state);next.profile={username,email,photo:pendingPhoto};if(await commit(next)){renderProfile();$('#profileDialog').close();toast('Profile updated');}};
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.close).close());
$('#dashboardButton').onclick=renderOverview;
$('#backup').onclick=()=>download('farnoor-backup.json',JSON.stringify(state,null,2),'application/json');
$('#restoreButton').onclick=()=>$('#restore').click();
$('#restore').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>12*1024*1024)throw Error('Backup is too large.');const next=validateState(JSON.parse(await file.text()));if(await confirmBackupRestore()){if(await commit(next)){renderProfile();renderOverview();toast('Backup restored');}}}catch(error){toast(error.message||'Could not restore backup.');}finally{e.target.value='';}};
renderProfile();renderOverview();if(storageWarning)toast(storageWarning);
// Optional browser-agent navigation. Unsupported browsers keep the ordinary UI.
if(document.modelContext?.registerTool){
 const lifecycle=new AbortController();
 window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
 try{Promise.resolve(document.modelContext.registerTool({name:'open_register',title:'Open department register',description:'Open an existing Farnoor department page. Does not change saved records.',inputSchema:{type:'object',properties:{pageId:{type:'string',enum:DEPARTMENTS.flatMap(d=>d.pages.map(p=>p.id))}},required:['pageId'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!sessionActive)throw Error('Workspace is logged out.');if(!input||typeof input.pageId!=='string'||!pageInfo(input.pageId)||Object.keys(input).length!==1)throw Error('Unknown page.');goPage(input.pageId);return {opened:input.pageId,title:pageInfo(input.pageId).page.name};}},{signal:lifecycle.signal})).catch(()=>{});}catch{}
}







function confirmBackupRestore(){return new Promise(resolve=>{const dialog=document.createElement('dialog');dialog.style.cssText='max-width:440px;padding:24px;border:1px solid #ccd7d0;border-radius:12px;color:#173d2f';dialog.innerHTML='<h3>Restore backup?</h3><p>This replaces the current workspace with the selected backup. Keep a download of your current data before continuing.</p><div style="display:flex;gap:12px;justify-content:flex-end"><button type="button" data-restore-cancel>Cancel</button><button type="button" data-restore-confirm>Restore selected backup</button></div>';const finish=value=>{dialog.close();dialog.remove();resolve(value);};dialog.querySelector('[data-restore-cancel]').onclick=()=>finish(false);dialog.querySelector('[data-restore-confirm]').onclick=()=>finish(true);dialog.oncancel=e=>{e.preventDefault();finish(false);};document.body.append(dialog);dialog.showModal();});}

;
;/* xlsx-export.js */
/* Minimal dependency-free Office Open XML workbook writer, with numeric cells. */
function makeXlsx(matrix,title){
 const xml=value=>String(value).replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
 const rows=matrix.map((row,r)=>`<row r="${r+1}">${row.map((value,c)=>{const ref=String.fromCharCode(65+c)+(r+1);return typeof value==='number'?`<c r="${ref}"><v>${value}</v></c>`:`<c r="${ref}" t="inlineStr"><is><t xml:space="preserve">${xml(value)}</t></is></c>`;}).join('')}</row>`).join('');
 const files={
 '[Content_Types].xml':'<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>',
 '_rels/.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
 'xl/workbook.xml':`<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${xml(title)}" sheetId="1" r:id="rId1"/></sheets></workbook>`,
 'xl/_rels/workbook.xml.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>',
 'xl/worksheets/sheet1.xml':`<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols><col min="1" max="1" width="8" customWidth="1"/><col min="2" max="11" width="24" customWidth="1"/></cols><sheetData>${rows}</sheetData></worksheet>`};
 const encoder=new TextEncoder(),parts=[],central=[];let offset=0;
 const crc=data=>{let n=0xffffffff;for(const byte of data){n^=byte;for(let k=0;k<8;k++)n=(n>>>1)^((n&1)?0xedb88320:0);}return (n^0xffffffff)>>>0;};
 const header=(size)=>({bytes:new Uint8Array(size),view:null});
 for(const [name,content]of Object.entries(files)){const filename=encoder.encode(name),data=encoder.encode(content),checksum=crc(data),local=header(30);local.view=new DataView(local.bytes.buffer);local.view.setUint32(0,0x04034b50,true);local.view.setUint16(4,20,true);local.view.setUint32(14,checksum,true);local.view.setUint32(18,data.length,true);local.view.setUint32(22,data.length,true);local.view.setUint16(26,filename.length,true);parts.push(local.bytes,filename,data);const cd=header(46);cd.view=new DataView(cd.bytes.buffer);cd.view.setUint32(0,0x02014b50,true);cd.view.setUint16(4,20,true);cd.view.setUint16(6,20,true);cd.view.setUint32(16,checksum,true);cd.view.setUint32(20,data.length,true);cd.view.setUint32(24,data.length,true);cd.view.setUint16(28,filename.length,true);cd.view.setUint32(42,offset,true);central.push(cd.bytes,filename);offset+=30+filename.length+data.length;}
 const centralSize=central.reduce((n,a)=>n+a.length,0),end=header(22);end.view=new DataView(end.bytes.buffer);end.view.setUint32(0,0x06054b50,true);end.view.setUint16(8,Object.keys(files).length,true);end.view.setUint16(10,Object.keys(files).length,true);end.view.setUint32(12,centralSize,true);end.view.setUint32(16,offset,true);const output=new Uint8Array(offset+centralSize+22);let cursor=0;for(const piece of [...parts,...central,end.bytes]){output.set(piece,cursor);cursor+=piece.length;}return output;
}

;
;/* account.js */
'use strict';
const ledgerPages=['credit-entry','debit-entry','cash-report','debit-report','balance-report'];
const ordinaryPage=renderPage;
let accountDraft=null,accountKind='credit',selectedFile=null,range=null;
const blankRow=()=>({date:'',amount:'',remarks:''});
const money=cents=>(cents/100).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2});
const ledger=()=>state.ledger||{credit:[],debit:[]};
const dateKey=date=>normalizeDate(date).split('/').reverse().join('-');
function amountCents(value){const normalized=String(value).trim().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replace(/,/g,'');if(!/^\d+(\.\d{1,2})?$/.test(normalized))throw Error('Amount must be positive or zero, with at most two decimal places.');const [whole,fraction='']=normalized.split('.');const cents=Number(whole)*100+Number(fraction.padEnd(2,'0'));if(!Number.isSafeInteger(cents)||cents>1000000000000)throw Error('Amount is too large.');return cents;}
function accountActions(){return '<div class="account-actions no-print"><button data-account-action="print" class="print-action">Print</button><button data-account-action="edit" class="edit-action">Edit</button><button data-account-action="excel" class="excel-action">Excel</button><button data-account-action="delete" class="delete-action">Delete</button></div>';}
function signatures(){return '<div class="signatures"><span>Account</span><span>GM</span><span>MD</span></div>';}
function companyReport(title){return `<div class="report-company"><h3>FARNOOR GARMENTS LTD.</h3><p>1028/1/2 MALIBAGH BAZAR ROAD, DHAKA-1217</p></div><div class="live-clock"></div><h2 class="account-title">${title}</h2>`;}
function tickClock(){document.querySelectorAll('.live-clock').forEach(el=>el.textContent=new Date().toLocaleString('en-GB',{timeZone:'Asia/Dhaka',hour12:false}));}
setInterval(tickClock,1000);
renderPage=function(){if(!ledgerPages.includes(activePage)){ordinaryPage();return;}if(activePage.endsWith('-entry')){accountKind=activePage.startsWith('credit')?'credit':'debit';if(!accountDraft||accountDraft.kind!==accountKind)accountDraft={kind:accountKind,id:null,rows:Array.from({length:5},blankRow)};renderAccountEntry();}else if(activePage==='balance-report')renderBalance();else{accountKind=activePage==='cash-report'?'credit':'debit';renderAccountReport();}};
function draftTable(){return `<div class="table-wrap"><table class="account-table"><thead><tr><th>SL</th><th>DATE</th><th>AMOUNT</th><th>TOTAL AMOUNT</th><th>REMARKS</th><th class="row-delete no-print" aria-label="Delete row"></th></tr></thead><tbody>${accountDraft.rows.map((row,index)=>`<tr><td>${index+1}</td><td><input data-row="${index}" data-col="0" aria-label="Row ${index+1} date" value="${esc(row.date)}" placeholder="1/1/26"></td><td><input data-row="${index}" data-col="1" aria-label="Row ${index+1} amount" inputmode="decimal" value="${esc(row.amount)}"></td><td><input data-row="${index}" data-col="2" aria-label="Row ${index+1} total amount" readonly value="${esc(row.amount)}"></td><td><input data-row="${index}" data-col="3" aria-label="Row ${index+1} remarks" maxlength="500" value="${esc(row.remarks)}"></td><td class="row-delete no-print"><button data-remove-row="${index}" aria-label="Delete row ${index+1}">−</button></td></tr>`).join('')}</tbody></table></div>`;}
function renderAccountEntry(){const title=accountKind==='credit'?'CREDIT ENTRY':'DEBIT ENTRY';$('#main').innerHTML=`${accountActions()}<section class="account-paper printable">${companyReport(title)}<p class="file-caption">${accountDraft.id?'Editing saved file '+esc(accountDraft.id):'New file · Five starting rows'}</p>${draftTable()}<div class="entry-controls no-print"><button data-account-action="new">New file</button><button data-account-action="row">+ Row</button><button id="accountSave" data-account-action="save" class="primary">Save</button></div>${signatures()}</section><p class="notice no-print">Enter moves one cell right; after the final cell it moves to the next row. Arrow keys move between cells. TOTAL AMOUNT mirrors AMOUNT. Saved files appear newest first in ${accountKind==='credit'?'CASH REPORT':'DEBIT REPORT'}.</p>`;tickClock();}
function inheritDate(index){const row=accountDraft.rows[index];if(!row.date&&index>0)row.date=accountDraft.rows[index-1].date;if(row.date)row.date=normalizeDate(row.date);const input=$(`[data-row="${index}"][data-col="0"]`);if(input)input.value=row.date;}
async function saveAccount(){try{const rows=accountDraft.rows.filter(row=>row.date||row.amount||row.remarks).map(row=>{if(!row.date||row.amount==='')throw Error('Every filled row needs DATE and AMOUNT.');return {date:normalizeDate(row.date),cents:amountCents(row.amount),remarks:row.remarks.trim()};});if(!rows.length)throw Error('Enter at least one row before saving.');const next=structuredClone(state);next.ledger||={credit:[],debit:[]};const existing=next.ledger[accountKind].find(file=>file.id===accountDraft.id);const file={id:accountDraft.id||`${accountKind.toUpperCase()}-${Date.now()}-${crypto.randomUUID().slice(0,6)}`,createdAt:existing?.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString(),rows};const index=next.ledger[accountKind].findIndex(f=>f.id===file.id);if(index>=0)next.ledger[accountKind][index]=file;else next.ledger[accountKind].unshift(file);if(await commit(next)){selectedFile=file.id;accountDraft=null;goPage(accountKind==='credit'?'cash-report':'debit-report');toast('File saved');}}catch(error){toast(error.message);}}
function entryRowsTable(rows){return `<div class="table-wrap"><table><thead><tr><th>SL</th><th>DATE</th><th>AMOUNT</th><th>TOTAL AMOUNT</th><th>REMARKS</th></tr></thead><tbody>${rows.map((row,i)=>`<tr><td>${i+1}</td><td>${esc(row.date)}</td><td>${money(row.cents)}</td><td>${money(row.cents)}</td><td class="remarks-cell">${esc(row.remarks)}</td></tr>`).join('')}</tbody><tfoot><tr><th colspan="2">TOTAL (BDT)</th><th>${money(rows.reduce((sum,r)=>sum+r.cents,0))}</th><th>${money(rows.reduce((sum,r)=>sum+r.cents,0))}</th><th></th></tr></tfoot></table></div>`;}
function renderAccountReport(){const files=ledger()[accountKind];if(!files.some(f=>f.id===selectedFile))selectedFile=files[0]?.id||null;const file=files.find(f=>f.id===selectedFile);$('#main').innerHTML=accountActions()+`<div class="saved-files no-print"><h3>Saved files · newest first</h3>${files.map(f=>`<button data-file="${esc(f.id)}" class="${selectedFile===f.id?'selected-file':''}">${esc(f.id)}<small>${new Date(f.createdAt).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'})} · ${f.rows.length} rows · BDT ${money(f.rows.reduce((s,r)=>s+r.cents,0))}</small></button>`).join('')||'<p>No saved files yet.</p>'}<button data-account-action="new">+ New entry</button></div><section class="account-paper printable">${companyReport(accountKind==='credit'?'CASH REPORT':'DEBIT REPORT')}${file?`<p class="file-caption">${esc(file.id)}</p>${entryRowsTable(file.rows)}`:'<div class="empty">Save an entry to see its report here.</div>'}${signatures()}</section>`;tickClock();}
function transactions(kind){return ledger()[kind].flatMap(file=>file.rows.map((r,index)=>({...r,fileId:file.id,index,kind,createdAt:file.createdAt}))).filter(r=>!range||(dateKey(r.date)>=range.from&&dateKey(r.date)<=range.to)).sort((a,b)=>dateKey(a.date).localeCompare(dateKey(b.date))||a.createdAt.localeCompare(b.createdAt)||a.index-b.index);}
function balanceRows(){const credits=transactions('credit'),debits=transactions('debit');return Array.from({length:Math.max(credits.length,debits.length)},(_,i)=>({credit:credits[i],debit:debits[i],balance:(credits[i]?.cents||0)-(debits[i]?.cents||0)}));}
function renderBalance(){const rows=balanceRows();$('#main').innerHTML=accountActions()+`<form id="balanceSearch" class="balance-search no-print"><label>From DATE<input name="from" placeholder="1/1/26" value="${esc(range?.fromDisplay||'')}"></label><label>To DATE<input name="to" placeholder="31/12/26" value="${esc(range?.toDisplay||'')}"></label><button class="primary">Search</button><button type="button" data-account-action="clear">Clear</button></form><section class="account-paper printable ${range?'filtered-report':''}"><div class="report-identity">${companyReport('BALANCE REPORT')}</div><div class="table-wrap"><table id="balanceTable"><thead><tr><th>SL</th><th>CREDIT</th><th>CREDIT DATE</th><th>DEBIT</th><th>DEBIT DATE</th><th>BALANCE</th><th>REMARKS</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td><label><input class="balance-select no-print" type="checkbox" value="${i}" aria-label="Select balance row ${i+1}">${i+1}</label></td><td>${r.credit?money(r.credit.cents):'—'}</td><td>${esc(r.credit?.date||'—')}</td><td>${r.debit?money(r.debit.cents):'—'}</td><td>${esc(r.debit?.date||'—')}</td><td>${money(r.balance)}</td><td class="remarks-cell">${esc([r.credit?.remarks,r.debit?.remarks].filter(Boolean).join(' / '))}</td></tr>`).join('')||'<tr><td colspan="7" class="empty">No saved transactions in this date range.</td></tr>'}</tbody><tfoot><tr><th>TOTAL</th><th>${money(rows.reduce((s,r)=>s+(r.credit?.cents||0),0))}</th><th></th><th>${money(rows.reduce((s,r)=>s+(r.debit?.cents||0),0))}</th><th></th><th>${money(rows.reduce((s,r)=>s+r.balance,0))}</th><th></th></tr></tfoot></table></div><div class="report-signatures">${signatures()}</div></section><p class="notice no-print">Rows pair CREDIT and DEBIT entries in date order. Each BALANCE is that row’s CREDIT minus DEBIT. The total is all displayed CREDIT minus all displayed DEBIT. Select one row to Edit its source file; select rows to Delete their source transactions.</p>`;tickClock();$('#balanceSearch').onsubmit=async e=>{e.preventDefault();try{const form=new FormData(e.target),from=normalizeDate(form.get('from')),to=normalizeDate(form.get('to'));if(dateKey(from)>dateKey(to))throw Error('From DATE must be on or before To DATE.');range={from:dateKey(from),to:dateKey(to),fromDisplay:from,toDisplay:to};renderBalance();}catch(error){toast(error.message);}};}
function editFile(kind,id){const file=ledger()[kind].find(f=>f.id===id);if(!file){toast('Select a saved file first.');return;}accountKind=kind;accountDraft={kind,id:file.id,rows:file.rows.map(r=>({date:r.date,amount:(r.cents/100).toFixed(2),remarks:r.remarks}))};goPage(kind+'-entry');}
async function confirmLedgerDelete(callback){const dialog=$('#deleteDialog');dialog.querySelector('h2').textContent='Delete selected account data?';dialog.querySelector('p').textContent='This deletes the selected file or transactions and updates BALANCE REPORT. Download a backup first if you need a copy.';dialog.showModal();dialog.onclose=async ()=>{if(dialog.returnValue==='delete')callback();};}
function checkedBalance(){return [...document.querySelectorAll('.balance-select:checked')].map(el=>balanceRows()[Number(el.value)]);}
$('#main').addEventListener('input',e=>{const input=e.target;if(!input.matches('[data-row]'))return;const row=accountDraft.rows[Number(input.dataset.row)],col=Number(input.dataset.col);row[['date','amount',null,'remarks'][col]]=input.value;if(col===1)$(`[data-row="${input.dataset.row}"][data-col="2"]`).value=input.value;});
$('#main').addEventListener('focusout',e=>{if(e.target.matches('[data-col="0"]')){try{inheritDate(Number(e.target.dataset.row));}catch(error){toast(error.message);}}});
$('#main').addEventListener('keydown',e=>{if(!e.target.matches('[data-row]'))return;const row=Number(e.target.dataset.row),col=Number(e.target.dataset.col);let r=row,c=col;if(e.key==='Enter'){e.preventDefault();try{if(col===0)inheritDate(row);}catch(error){toast(error.message);return;}c++;if(c>3){c=0;r++;}if(r>=accountDraft.rows.length){$('#accountSave').focus();return;}}else if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(e.key==='ArrowLeft')c--;if(e.key==='ArrowRight')c++;if(e.key==='ArrowUp')r--;if(e.key==='ArrowDown')r++;}else return;$(`[data-row="${r}"][data-col="${c}"]`)?.focus();});
$('#main').addEventListener('click',async e=>{const button=e.target.closest('button');if(!button)return;if(button.dataset.removeRow!==undefined){accountDraft.rows.splice(Number(button.dataset.removeRow),1);if(!accountDraft.rows.length)accountDraft.rows.push(blankRow());renderAccountEntry();return;}if(button.dataset.file){selectedFile=button.dataset.file;renderAccountReport();return;}const action=button.dataset.accountAction;if(!action)return;
 if(action==='save')saveAccount();
 if(action==='row'){accountDraft.rows.push(blankRow());renderAccountEntry();}
 if(action==='new'){if(accountDraft&&accountDraft.rows.some(r=>r.date||r.amount||r.remarks)&&!confirm('Discard the current unsaved entry and start a new file?'))return;accountDraft={kind:accountKind,id:null,rows:Array.from({length:5},blankRow)};goPage(accountKind+'-entry');}
 if(action==='clear'){range=null;renderBalance();}
 if(action==='print')window.print();
 if(action==='edit'){if(activePage==='balance-report'){const selected=checkedBalance();if(selected.length!==1){toast('Select exactly one balance row to edit.');return;}const row=selected[0];let source=row.credit||row.debit;if(row.credit&&row.debit){const kind=prompt('Type CREDIT or DEBIT to choose the source file to edit.','CREDIT');if(!kind)return;if(!['CREDIT','DEBIT'].includes(kind.toUpperCase())){toast('Enter CREDIT or DEBIT.');return;}source=kind.toUpperCase()==='CREDIT'?row.credit:row.debit;}editFile(source.kind,source.fileId);}else if(activePage.endsWith('-entry')){if(accountDraft.id)editFile(accountKind,accountDraft.id);else toast('This new file is already editable.');}else editFile(accountKind,selectedFile);}
 if(action==='delete'){if(activePage==='balance-report'){const selected=checkedBalance();if(!selected.length){toast('Select balance rows to delete.');return;}await confirmLedgerDelete(async ()=>{const next=structuredClone(state);for(const kind of ['credit','debit'])next.ledger[kind]=next.ledger[kind].map(f=>({...f,rows:f.rows.filter((r,index)=>!selected.some(row=>row[kind]?.fileId===f.id&&row[kind]?.index===index))})).filter(f=>f.rows.length);if(await commit(next)){renderBalance();toast('Selected transactions deleted');}});}else{const id=activePage.endsWith('-entry')?accountDraft.id:selectedFile;if(!id){toast('Save or select a file before deleting.');return;}await confirmLedgerDelete(async ()=>{const next=structuredClone(state);next.ledger[accountKind]=next.ledger[accountKind].filter(f=>f.id!==id);if(await commit(next)){accountDraft=null;selectedFile=null;goPage(accountKind==='credit'?'cash-report':'debit-report');toast('File deleted');}});}}
 if(action==='excel'){try{let matrix,title;if(activePage==='balance-report'){title='BALANCE REPORT';matrix=[['SL','CREDIT','CREDIT DATE','DEBIT','DEBIT DATE','BALANCE','REMARKS'],...balanceRows().map((r,i)=>[i+1,(r.credit?.cents||0)/100,r.credit?.date||'',(r.debit?.cents||0)/100,r.debit?.date||'',r.balance/100,[r.credit?.remarks,r.debit?.remarks].filter(Boolean).join(' / ')])];}else{title=activePage.endsWith('-entry')?(accountKind==='credit'?'CREDIT ENTRY':'DEBIT ENTRY'):(accountKind==='credit'?'CASH REPORT':'DEBIT REPORT');const rows=activePage.endsWith('-entry')?accountDraft.rows.filter(r=>r.date||r.amount||r.remarks).map(r=>({date:normalizeDate(r.date),cents:amountCents(r.amount),remarks:r.remarks})):ledger()[accountKind].find(f=>f.id===selectedFile)?.rows||[];matrix=[['SL','DATE','AMOUNT','TOTAL AMOUNT','REMARKS'],...rows.map((r,i)=>[i+1,r.date,r.cents/100,r.cents/100,r.remarks])];}if(matrix.length===1){toast('No rows to export.');return;}download(title.toLowerCase().replaceAll(' ','-')+'.xlsx',makeXlsx(matrix,title),'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');toast('Excel file downloaded');}catch(error){toast(error.message);}}
});

;
;/* orders.js */
'use strict';
const previousPageRenderer=renderPage;
const orderColumns=[['buyer','BUYER'],['style','STYLE'],['item','ITEM'],['qty','ORDER QTY'],['orderDate','ORDER DATE'],['shipmentDate','SHIPMENT DATE'],['remarks','REMARKS']];
let orderDraft=null,orderSelected=null,orderSearch='';
const newOrderRow=()=>({buyer:'',style:'',item:'',qty:'',orderDate:'',shipmentDate:'',remarks:''});
const orderFiles=()=>state.orderFiles||[];
function orderReportNumbers(files=orderFiles()){const numbers=new Map(),used=new Map();for(const file of files){const number=file.reportNumber||(/^FGL-\d{4}\.\d+$/.test(file.id)?file.id:null);if(number){numbers.set(file.id,number);const [year,serial]=number.slice(4).split('.');if(!used.has(year))used.set(year,new Set());used.get(year).add(Number(serial));}}for(const file of [...files].sort((a,b)=>a.createdAt.localeCompare(b.createdAt)||a.id.localeCompare(b.id))){if(numbers.has(file.id))continue;const year=new Intl.DateTimeFormat('en',{year:'numeric',timeZone:'Asia/Dhaka'}).format(new Date(file.createdAt));if(!used.has(year))used.set(year,new Set());let serial=1;while(used.get(year).has(serial))serial++;used.get(year).add(serial);numbers.set(file.id,'FGL-'+year+'.'+String(serial).padStart(4,'0'));}return numbers;}
function orderReportNumber(file){return orderReportNumbers().get(file.id)||file.id;}
function preserveOrderNumbers(files){const numbers=orderReportNumbers(files);for(const file of files)file.reportNumber=numbers.get(file.id);}
function nextOrderNumber(files){const year=new Intl.DateTimeFormat('en',{year:'numeric',timeZone:'Asia/Dhaka'}).format(new Date());const prefix='FGL-'+year+'.';const serial=Math.max(0,...[...orderReportNumbers(files).values()].filter(n=>n.startsWith(prefix)).map(n=>Number(n.slice(prefix.length))))+1;return prefix+String(serial).padStart(4,'0');}
renderPage=function(){if(activePage==='order-entry'){orderDraft||={id:null,rows:Array.from({length:5},newOrderRow)};drawOrderEntry();}else if(activePage==='order-report')drawOrderReport();else previousPageRenderer();};
function orderActions(){return '<div class="order-actions no-print"><button data-order-action="print" class="print-action">Print</button><button data-order-action="edit" class="edit-action">Edit</button><button data-order-action="excel" class="excel-action">Excel</button><button data-order-action="delete" class="delete-action">Delete</button></div>';}
function orderSignatures(){return '<div class="signatures"><span>Merchandiser</span><span>Head of Production</span><span>General Manager</span><span>Managing Director</span></div>';}
function orderIdentity(title,file){return `<div class="order-company"><img src="Farnoor_New_Logo.png" alt="Farnoor logo"><div><h3>FARNOOR GARMENTS LTD.</h3><p>1028/1/2 MALIBAGH BAZAR ROAD, DHAKA-1217</p></div></div><div class="order-saved-clock">${file?esc(new Date(file.updatedAt||file.createdAt).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'})):''}</div><h2 class="account-title">${title}</h2>`;}
function orderTable(rows,editable=false){return `<div class="table-wrap"><table class="order-table"><thead><tr><th>SL</th>${orderColumns.map(([,label])=>`<th>${label}</th>`).join('')}${editable?'<th class="row-delete no-print" aria-label="Remove row"></th>':''}</tr></thead><tbody>${rows.map((row,index)=>`<tr><td>${index+1}</td>${orderColumns.map(([key,label],col)=>`<td>${editable?`<input data-order-row="${index}" data-order-col="${col}" aria-label="Order row ${index+1} ${label}" value="${esc(row[key])}" ${key==='qty'?'inputmode="numeric"':key.endsWith('Date')?'placeholder="1/1/26"':'maxlength="500"'}>`:esc(row[key])}</td>`).join('')}${editable?`<td class="row-delete no-print"><button data-order-remove="${index}" aria-label="Remove order row ${index+1}">−</button></td>`:''}</tr>`).join('')||'<tr><td colspan="8" class="empty">No matching orders.</td></tr>'}</tbody></table></div>`;}
function drawOrderEntry(){$('#main').innerHTML=`<section class="account-paper printable order-entry-paper"><div class="order-entry-title"><h2 class="account-title">NEW ORDER</h2><input aria-label="Order number" readonly value="${esc(orderDraft.id?orderReportNumber(orderFiles().find(file=>file.id===orderDraft.id)||{id:orderDraft.id}):nextOrderNumber(orderFiles()))}"></div>${orderTable(orderDraft.rows,true)}<p id="entrySaveStatus" role="status"></p><div class="entry-controls no-print"><button data-order-action="row">+ Row</button><button id="orderSave" data-order-action="save" class="primary">Save</button></div></section>`;}
async function saveOrder(){try{const rows=orderDraft.rows.filter(r=>Object.values(r).some(v=>String(v).trim())).map(r=>{const row=Object.fromEntries(Object.entries(r).map(([k,v])=>[k,String(v).trim()]));if(!row.buyer||!row.style||!row.item)throw Error('Every filled row needs BUYER, STYLE and ITEM.');const qty=row.qty.replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replaceAll(',','');if(!/^\d+$/.test(qty)||!Number.isSafeInteger(Number(qty))||Number(qty)<1)throw Error('ORDER QTY must be a positive whole number.');row.qty=Number(qty);row.orderDate=normalizeDate(row.orderDate);row.shipmentDate=normalizeDate(row.shipmentDate);if(dateKey(row.shipmentDate)<dateKey(row.orderDate))throw Error('SHIPMENT DATE cannot be before ORDER DATE.');return row;});if(!rows.length)throw Error('Enter at least one order.');const next=structuredClone(state);next.orderFiles||=[];preserveOrderNumbers(next.orderFiles);const index=next.orderFiles.findIndex(f=>f.id===orderDraft.id);const file={id:orderDraft.id||nextOrderNumber(next.orderFiles),createdAt:index>=0?next.orderFiles[index].createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),rows};file.reportNumber=index>=0?next.orderFiles[index].reportNumber:file.id;if(index>=0)next.orderFiles[index]=file;else next.orderFiles.unshift(file);if(await commit(next,{orderFile:file})){orderSelected=file.id;orderDraft=null;orderSearch='';goPage('order-report');toast('Order file saved');}}catch(error){toast(error.message);}}
function filteredOrderRows(){const terms=orderSearch.toLowerCase().trim().split(/\s+/).filter(Boolean);return orderFiles().flatMap(file=>file.rows.map(row=>({...row,fileId:file.id}))).filter(row=>terms.every(term=>`${row.buyer} ${row.style} ${row.item}`.toLowerCase().includes(term)));}
function drawOrderReport(){const files=orderFiles();if(!files.some(f=>f.id===orderSelected))orderSelected=files[0]?.id||null;$('#main').innerHTML=`<form id="orderSearchForm" class="order-search no-print"><label>Search BUYER / STYLE / ITEM<input id="orderSearchInput" type="search" list="orderSuggestions" autocomplete="off" placeholder="Type at least two letters or numbers…" value="${esc(orderSearch)}"><datalist id="orderSuggestions"></datalist></label><button class="primary">Search</button><button type="button" data-order-action="clear">Clear</button></form>${orderSearch?`${orderActions()}<section class="account-paper printable order-search-results">${orderTable(filteredOrderRows())}</section>`:`<div class="order-saved-list">${files.map(file=>`<section class="account-paper printable order-document ${file.id===orderSelected?'selected-order':''}" data-order-file="${esc(file.id)}">${orderActions()}<div class="no-print file-controls"><small>Saved ${new Date(file.createdAt).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'})}</small></div>${orderIdentity('ORDER REPORT',file)}<p class="file-caption">${esc(orderReportNumber(file))}</p>${orderTable(file.rows)}${orderSignatures()}</section>`).join('')||'<div class="empty">No saved order files. Open ORDER ENTRY to add an order.</div>'}</div>`}`;tickClock();$('#orderSearchForm').onsubmit=async e=>{e.preventDefault();const value=$('#orderSearchInput').value.trim();if(value&&value.length<2){toast('Type at least two letters or numbers.');return;}orderSearch=value;drawOrderReport();};$('#orderSearchInput').oninput=e=>{const value=e.target.value.toLowerCase().trim();const suggestions=value.length>=2?[...new Set(files.flatMap(f=>f.rows.flatMap(r=>[r.buyer,r.style,r.item])))].filter(text=>text.toLowerCase().includes(value)).slice(0,30):[];$('#orderSuggestions').innerHTML=suggestions.map(s=>`<option value="${esc(s)}"></option>`).join('');};const selector=$('#orderFileSelect');if(selector)selector.onchange=e=>{orderSelected=e.target.value;drawOrderReport();};}
function editOrder(id){const file=orderFiles().find(f=>f.id===id);if(!file){toast('Select a saved order file first.');return;}orderDraft={id:file.id,rows:file.rows.map(row=>({...row,qty:String(row.qty)}))};goPage('order-entry');}
$('#main').addEventListener('input',e=>{if(!e.target.matches('[data-order-row]'))return;const input=e.target;orderDraft.rows[Number(input.dataset.orderRow)][orderColumns[Number(input.dataset.orderCol)][0]]=input.value;});
$('#main').addEventListener('focusout',e=>{if(!e.target.matches('[data-order-col="4"],[data-order-col="5"]')||!e.target.value)return;try{const input=e.target,value=normalizeDate(input.value);input.value=value;orderDraft.rows[Number(input.dataset.orderRow)][orderColumns[Number(input.dataset.orderCol)][0]]=value;}catch(error){toast(error.message);}});
$('#main').addEventListener('keydown',e=>{if(!e.target.matches('[data-order-row]'))return;let row=Number(e.target.dataset.orderRow),col=Number(e.target.dataset.orderCol);if(e.key==='Enter'){e.preventDefault();if([4,5].includes(col)&&e.target.value){try{normalizeDate(e.target.value);}catch(error){toast(error.message);return;}}col++;if(col===orderColumns.length){col=0;row++;}if(row===orderDraft.rows.length){$('#orderSave').focus();return;}}else if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(e.key==='ArrowLeft')col--;if(e.key==='ArrowRight')col++;if(e.key==='ArrowUp')row--;if(e.key==='ArrowDown')row++;}else return;$(`[data-order-row="${row}"][data-order-col="${col}"]`)?.focus();});
$('#main').addEventListener('click',async e=>{const button=e.target.closest('button');if(!button)return;if(button.dataset.orderRemove!==undefined){orderDraft.rows.splice(Number(button.dataset.orderRemove),1);if(!orderDraft.rows.length)orderDraft.rows.push(newOrderRow());drawOrderEntry();return;}if(button.dataset.selectOrder){orderSelected=button.dataset.selectOrder;drawOrderReport();return;}const action=button.dataset.orderAction;if(!action)return;const selectedFile=button.closest('[data-order-file]');if(selectedFile){orderSelected=selectedFile.dataset.orderFile;document.querySelectorAll("[data-order-file]").forEach(node=>node.classList.toggle("selected-order",node.dataset.orderFile===orderSelected));}
 if(action==='save')saveOrder();
 if(action==='row'){orderDraft.rows.push(newOrderRow());drawOrderEntry();}
 if(action==='new'){if(orderDraft?.rows.some(row=>Object.values(row).some(v=>String(v).trim()))&&!confirm('Discard the current unsaved order entry?'))return;orderDraft={id:null,rows:Array.from({length:5},newOrderRow)};goPage('order-entry');}
 if(action==='clear'){orderSearch='';drawOrderReport();}
 if(action==='print')window.print();
 if(action==='edit'){if(activePage==='order-entry'&&!orderDraft.id){toast('This new file is already editable.');return;}if(orderSearch){const ids=[...new Set(filteredOrderRows().map(r=>r.fileId))];if(ids.length!==1){toast('Clear search and select one saved file to edit.');return;}editOrder(ids[0]);}else editOrder(activePage==='order-entry'?orderDraft.id:orderSelected);}
 if(action==='delete'){if(orderSearch){toast('Clear search and select the saved file to delete.');return;}const id=activePage==='order-entry'?orderDraft.id:orderSelected;if(!id){toast('Select a saved file first.');return;}const dialog=$('#deleteDialog');dialog.querySelector('h2').textContent='Delete this order file?';dialog.querySelector('p').textContent='All rows in this selected order file will be removed. Download a backup if you need a copy.';dialog.showModal();dialog.onclose=async ()=>{if(dialog.returnValue==='delete'){const next=structuredClone(state);preserveOrderNumbers(next.orderFiles);next.orderFiles=next.orderFiles.filter(f=>f.id!==id);if(await commit(next)){orderSelected=null;orderDraft=null;goPage('order-report');toast('Order file deleted');}}};}
 if(action==='excel'){try{let rows;if(activePage==='order-entry')rows=orderDraft.rows.filter(row=>Object.values(row).some(v=>String(v).trim()));else rows=orderSearch?filteredOrderRows():orderFiles().find(f=>f.id===orderSelected)?.rows||[];if(!rows.length){toast('No order rows to export.');return;}const matrix=[['SL',...orderColumns.map(([,label])=>label)],...rows.map((row,i)=>[i+1,...orderColumns.map(([key])=>key==='qty'?Number(String(row.qty).replaceAll(',','').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c))):key.endsWith('Date')&&row[key]?normalizeDate(row[key]):row[key])])];if(matrix.some(row=>row.some(cell=>typeof cell==='number'&&!Number.isFinite(cell))))throw Error('Enter a valid ORDER QTY before exporting.');download('order-report.xlsx',makeXlsx(matrix,'ORDER REPORT'),'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');toast('Order Excel file downloaded');}catch(error){toast(error.message);}}
});
const previousNewOrderGo=goPage;goPage=function(id){if(id==='order-new'){if(!FarnoorAccess.canAction('order-entry','edit'))return toast('EDIT permission is required.');if(orderDraft?.rows.some(row=>Object.values(row).some(value=>String(value).trim()))&&!confirm('Discard unsaved order changes and start a new order?'))return;orderDraft=null;id='order-entry';}previousNewOrderGo(id);};

;
;/* schedule-core.js */
'use strict';
const WEEKDAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const BANGLA_MONTHS=['জানুয়ারী','ফেব্রুয়ারী','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
const ENGLISH_MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const PLAN_FIELDS=[['buyer','BUYER'],['item','ITEM'],['style','STIYLE'],['orderQty','ORDER QTY'],['excess','EXCESS'],['totalQty','TOTAL QTY'],['firstTarget','FAST DAY TERGET'],['dailyTarget','DAILY TERGET'],['startDate','TERGET START DATE'],['remarks','REMARKS']];
function scheduleDigits(value){return String(value).trim().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replaceAll(',','');}
function parseScheduleMonth(value){let raw=scheduleDigits(value);const named=BANGLA_MONTHS.findIndex(name=>raw.startsWith(name+'-'));if(named>=0)raw=(named+1)+'/'+raw.slice(BANGLA_MONTHS[named].length+1);const english=ENGLISH_MONTHS.findIndex(name=>raw.toLowerCase().startsWith(name.toLowerCase()+'-'));if(english>=0)raw=(english+1)+'/'+raw.slice(ENGLISH_MONTHS[english].length+1);const match=raw.match(/^(\d{1,2})[/-](\d{2}|\d{4})$/);if(!match)throw Error('Month/Year লিখুন যেমন 1/26।');const month=Number(match[1]),year=Number(match[2])+(match[2].length===2?2000:0);if(month<1||month>12||year<1900||year>2199)throw Error('সঠিক Month/Year দিন।');return {month,year,days:new Date(year,month,0).getDate(),label:ENGLISH_MONTHS[month-1]+'-'+year};}
function scheduleInteger(value,label,zero=true){const raw=scheduleDigits(value);if(!/^\d+$/.test(raw)||!Number.isSafeInteger(Number(raw))||Number(raw)>1000000000||(!zero&&Number(raw)===0))throw Error(label+' must be '+(zero?'a non-negative':'a positive')+' whole number.');return Number(raw);}
function excessPercent(row){if(!String(row.orderQty).trim()||!String(row.totalQty).trim())return null;const order=Number(scheduleDigits(row.orderQty)),total=Number(scheduleDigits(row.totalQty));return order>0&&Number.isFinite(total)?(total-order)/order*100:null;}
function signedPercent(value){return value===null||Math.abs(value)<0.005?'':(value>0?'+':'')+Number(value.toFixed(2))+'%';}
function validateProductionPlan(draft){const month=parseScheduleMonth(draft.month);if(!WEEKDAYS.includes(draft.weekly)&&draft.weekly!=='None')throw Error('Select a weekly holiday.');if(!Array.isArray(draft.extra)||draft.extra.some(day=>!Number.isInteger(day)||day<1||day>month.days))throw Error('Extra holidays must be valid days of the selected month.');const rows=draft.rows.filter(row=>Object.values(row).some(value=>String(value).trim())).map(row=>{if(!row.buyer.trim()||!row.item.trim()||!row.style.trim())throw Error('Every filled row needs BUYER, ITEM and STIYLE.');const startDate=normalizeDate(row.startDate);const parts=startDate.split('/').map(Number);if(parts[1]!==month.month||parts[2]!==month.year)throw Error('TERGET START DATE must be inside the selected month.');return {...row,buyer:row.buyer.trim(),item:row.item.trim(),style:row.style.trim(),remarks:row.remarks.trim(),orderQty:scheduleInteger(row.orderQty,'ORDER QTY',false),totalQty:scheduleInteger(row.totalQty,'TOTAL QTY',false),firstTarget:scheduleInteger(row.firstTarget,'FAST DAY TERGET'),dailyTarget:scheduleInteger(row.dailyTarget,'DAILY TERGET',false),startDate};});if(!rows.length)throw Error('Enter at least one production plan row.');return {...draft,rows};}
function generateProductionCalendar(draft){const month=parseScheduleMonth(draft.month),plans=draft.rows.map(row=>{try{const parts=normalizeDate(row.startDate).split('/').map(Number);if(parts[1]!==month.month||parts[2]!==month.year)return null;return {day:parts[0],remaining:scheduleInteger(row.totalQty,'TOTAL QTY'),first:scheduleInteger(row.firstTarget,'FAST DAY TERGET'),daily:scheduleInteger(row.dailyTarget,'DAILY TERGET'),started:false};}catch{return null;}}).filter(Boolean);const calendar=[];
 for(let day=1;day<=month.days;day++){const date=`${String(day).padStart(2,'0')}-${String(month.month).padStart(2,'0')}-${month.year}`,weekly=WEEKDAYS[new Date(month.year,month.month-1,day).getDay()]===draft.weekly,holiday=draft.extra.includes(day)?'Holiday':weekly?'Weekly Holiday':'';let target=0;if(!holiday)for(const plan of plans){if(day<plan.day||plan.remaining<=0)continue;const count=Math.min(plan.remaining,plan.started?plan.daily:plan.first);target+=count;plan.remaining-=count;plan.started=true;}const actual=draft.journal?.[date]||{},hours=holiday?0:Number(actual.hours??10),output=holiday?0:Number(scheduleDigits(actual.output||0));calendar.push({day,date,holiday,target,hours,output,achievement:target?output/target*100:null,hourlyTarget:hours>0?target/hours:null,remarks:String(actual.remarks||'')});}
 return {month,calendar,unallocated:plans.reduce((sum,plan)=>sum+plan.remaining,0)};
}
function validateProductionActuals(draft){const result=generateProductionCalendar(draft);for(const row of result.calendar){if(row.holiday)continue;const actual=draft.journal?.[row.date]||{};scheduleInteger(actual.output||'0','DAILY OUTPUT');const hours=Number(actual.hours??10);if(!Number.isFinite(hours)||hours<=0||hours>24)throw Error('TOTAL HOURS must be greater than 0 and at most 24.');if(String(actual.remarks||'').length>500)throw Error('Daily remarks are too long.');}return result;}

;
;/* schedule.js */
'use strict';
const previousSchedulePageRenderer=renderPage;
const productionDrafts=new Map();let selectedSchedule=null;
const blankPlanRow=()=>({buyer:'',item:'',style:'',orderQty:'',totalQty:'',firstTarget:'',dailyTarget:'',startDate:'',remarks:'',bookingQty:'',bookingDate:'',shipmentDate:''});
const scheduleSection=()=>pageInfo(activePage)?.page.section;
const scheduleFiles=section=>(state.productionSchedules||[]).filter(file=>file.section===section);
function newProductionDraft(section){const today=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Dhaka'}));return {id:null,section,month:`${today.getMonth()+1}/${today.getFullYear()}`,weekly:'Sunday',extra:[],rows:Array.from({length:4},blankPlanRow),journal:{}};}
function currentProductionDraft(){const section=scheduleSection();if(!productionDrafts.has(section))productionDrafts.set(section,newProductionDraft(section));return productionDrafts.get(section);}
renderPage=function(){if(activePage?.startsWith('schedule-line-'))drawProductionEditor();else if(activePage?.startsWith('schedule-report-'))drawProductionReport();else previousSchedulePageRenderer();};
function productionActions(){return '<div class="order-actions no-print"><button class="print-action" data-production-action="print">Print</button><button class="edit-action" data-production-action="edit">Edit</button><button class="excel-action" data-production-action="excel">Excel</button><button class="delete-action" data-production-action="delete">Delete</button></div>';}
function productionIdentity(section){const unit2=section.startsWith('Unit-2');return `<div class="order-company"><img src="assets/Farnoor_New_Logo.png" alt="Farnoor logo"><div><h3>FARNOOR GARMENTS LTD.${unit2?' Unit-2':''}</h3><p>${unit2?'454, BaburChala,Pirujali, Alimpara, Gazipur Sodor, Gazipur':'1028/1/2 MALIBAGH BAZAR ROAD, DHAKA-1217'}</p></div></div><h2 class="account-title">PRODUCTION PLAN</h2><div class="live-clock production-clock"></div>`;}
function planTotals(rows){const sum=key=>rows.reduce((total,row)=>total+(Number(scheduleDigits(row[key]))||0),0);const totalOrder=sum('orderQty'),totalQty=sum('totalQty');return {orderQty:totalOrder,totalQty,excess:rows.reduce((total,row)=>total+(excessPercent(row)||0),0),firstTarget:sum('firstTarget'),dailyTarget:sum('dailyTarget')};}
function productionTable(draft,editable){const totals=planTotals(draft.rows);return `<div class="table-wrap"><table class="production-plan-table"><thead><tr><th>SL</th>${PLAN_FIELDS.map(([,label])=>`<th>${label}</th>`).join('')}${editable?'<th class="row-delete no-print" aria-label="Remove row"></th>':''}</tr></thead><tbody>${draft.rows.map((row,index)=>`<tr><td>${index+1}</td>${PLAN_FIELDS.map(([key,label],col)=>`<td>${key==='startDate'&&!editable?`<input data-report-file="${esc(draft.id)}" data-report-row="${index}" aria-label="Report row ${index+1} TERGET START DATE" value="${esc(row.reportStartDate||'')}" placeholder="" maxlength="10">`:key==='excess'?`<span data-excess-row="${index}">${signedPercent(excessPercent(row))}</span>`:editable?`<input data-plan-row="${index}" data-plan-col="${col}" data-plan-field="${key}" aria-label="Plan row ${index+1} ${label}" value="${esc(row[key])}" ${['orderQty','bookingQty','totalQty','firstTarget','dailyTarget'].includes(key)?'inputmode="numeric"':key==='startDate'?'placeholder="1/1/26"':'maxlength="500"'}>`:esc(row[key])}</td>`).join('')}${editable?`<td class="row-delete no-print"><button data-remove-plan="${index}" aria-label="Remove plan row ${index+1}">−</button></td>`:''}</tr>`).join('')}</tbody><tfoot><tr><th colspan="4">Total</th>${['orderQty','excess','totalQty','firstTarget','dailyTarget'].map(key=>`<th data-plan-total="${key}">${key==='excess'?signedPercent(totals[key]):totals[key].toLocaleString()}</th>`).join('')}<th colspan="2"></th>${editable?'<th class="row-delete no-print"></th>':''}</tr></tfoot></table></div>`;}
function calendarTable(draft,editable){const {calendar}=generateProductionCalendar(draft);return `<h2 class="account-title">TIME ALLOWED</h2><div class="table-wrap"><table class="production-calendar"><thead><tr><th>SL</th><th>DATE</th><th>8am-7pm<br>10 Hours</th><th>DAILY TERGET</th><th>DAILY OUTPUT</th><th>ACEVEMENT</th><th>TOTAL HOURS</th><th>HOURLY OUTPUT TERGET</th><th>REMARKS</th></tr></thead><tbody>${calendar.map((row,index)=>`<tr class="${row.holiday?'holiday-row':''}"><td>${index+1}</td><td>${row.date}</td>${row.holiday?`<td colspan="2">${row.holiday}</td>`:`<td>10</td><td>${row.target.toLocaleString()}</td>`}<td>${row.holiday?'—':editable?`<input data-production-date="${row.date}" data-daily-key="output" aria-label="${row.date} DAILY OUTPUT" inputmode="numeric" value="${esc(draft.journal[row.date]?.output||'')}" placeholder="0">`:row.output.toLocaleString()}</td><td data-achievement="${row.date}">${!editable?'':row.achievement===null?'—':row.achievement.toFixed(2)+'%'}</td><td>${!editable?`<input data-report-file="${esc(draft.id)}" data-report-date="${row.date}" aria-label="${row.date} Report TOTAL HOURS" inputmode="decimal" maxlength="30" value="${esc(draft.journal[row.date]?.reportHours||'')}">`:row.holiday?'0':editable?`<input data-production-date="${row.date}" data-daily-key="hours" aria-label="${row.date} TOTAL HOURS" type="number" min="0.01" max="24" step="0.25" value="${esc(row.hours)}">`:row.hours}</td><td data-hourly="${row.date}">${!editable?'':row.hourlyTarget===null?'—':row.hourlyTarget.toFixed(2)}</td><td>${editable?`<input data-production-date="${row.date}" data-daily-key="remarks" aria-label="${row.date} REMARKS" maxlength="500" value="${esc(row.remarks)}">`:esc(row.remarks)}</td></tr>`).join('')}</tbody><tfoot><tr><th colspan="3">Total</th><th>${calendar.reduce((s,r)=>s+r.target,0).toLocaleString()}</th><th data-output-total>${calendar.reduce((s,r)=>s+r.output,0).toLocaleString()}</th><th data-achievement-total>${!editable?'':calendar.reduce((s,r)=>s+r.target,0)?(calendar.reduce((s,r)=>s+r.output,0)/calendar.reduce((s,r)=>s+r.target,0)*100).toFixed(2)+'%':'—'}</th><th data-hours-total>${editable?calendar.reduce((s,r)=>s+r.hours,0):''}</th><th></th><th></th></tr></tfoot></table></div>`;}
function productionSignatures(){return '<div class="signatures"><span>Head of Production</span><span>General Manager</span><span>Managing Director</span></div>';}
function holidayControls(draft){const month=parseScheduleMonth(draft.month);return `<div class="production-controls"><div class="production-section">Section <strong>${esc(draft.section)}</strong></div><label>Month/Year<input id="productionMonth" aria-label="Month/Year" value="${esc(draft.month)}" placeholder="1/26"><span id="productionMonthLabel">${month.label}</span></label><label>Weekly Holiday<select id="productionWeekly" aria-label="Weekly Holiday">${['None',...WEEKDAYS].map(day=>`<option ${draft.weekly===day?'selected':''}>${day}</option>`).join('')}</select></label><details class="extra-holidays"><summary>Extra Holiday <span id="extraSummary">${draft.extra.length?draft.extra.join(', '):'Select dates'}</span></summary><div class="holiday-options">${Array.from({length:31},(_,i)=>i+1).map(day=>`<label><input type="checkbox" data-extra-holiday="${day}" aria-label="Extra Holiday ${day}" ${day>month.days?'disabled':''} ${draft.extra.includes(day)?'checked':''}>${day}</label>`).join('')}</div></details></div>`;}
function remainingNotice(draft){const {unallocated}=generateProductionCalendar(draft);return `<p id="productionRemainder" class="notice ${unallocated?'':'no-print'}">${unallocated?`${unallocated.toLocaleString()} pcs remain beyond this month. Extend the plan in a later month; no extra date rows are added.`:''}</p>`;}
function drawProductionEditor(){const draft=currentProductionDraft();$('#main').innerHTML=`${productionActions()}<section class="account-paper production-paper printable">${productionIdentity(draft.section)}${holidayControls(draft)}<p class="file-caption">${draft.id?'Editing '+esc(draft.id):'New schedule · Four starting rows'}</p>${productionTable(draft,true)}<div class="entry-controls no-print"><button data-production-action="new">New file</button><button data-production-action="row">+Row</button><button data-production-action="save" id="productionSave" class="primary">Save</button></div><div id="productionCalendar">${calendarTable(draft,true)}</div>${remainingNotice(draft)}<div class="entry-controls no-print"><button data-production-action="save" class="primary">Save</button></div>${productionSignatures()}</section><p class="notice no-print">Targets skip holidays and stop at TOTAL QTY. Overlapping plan rows are added together on each date. First target is used on the first working day on/after TERGET START DATE. Month-end remaining quantity is shown explicitly. Achievement = output ÷ target × 100; hourly target = target ÷ total hours.</p>`;tickClock();}
function refreshProduction(){const draft=currentProductionDraft();try{const totals=planTotals(draft.rows);document.querySelectorAll('[data-excess-row]').forEach(el=>el.textContent=signedPercent(excessPercent(draft.rows[Number(el.dataset.excessRow)])));for(const key of ['orderQty','excess','totalQty','firstTarget','dailyTarget']){$(`[data-plan-total="${key}"]`).textContent=key==='excess'?signedPercent(totals[key]):totals[key].toLocaleString();}$('#productionCalendar').innerHTML=calendarTable(draft,true);$('#productionRemainder').outerHTML=remainingNotice(draft);}catch(error){toast(error.message);}}
function refreshActuals(){const {calendar}=generateProductionCalendar(currentProductionDraft());for(const row of calendar){$(`[data-achievement="${row.date}"]`).textContent=row.achievement===null?'—':Number.isFinite(row.achievement)?row.achievement.toFixed(2)+'%':'—';$(`[data-hourly="${row.date}"]`).textContent=row.hourlyTarget===null?'—':Number.isFinite(row.hourlyTarget)?row.hourlyTarget.toFixed(2):'—';}const output=calendar.reduce((s,r)=>s+(Number.isFinite(r.output)?r.output:0),0),target=calendar.reduce((s,r)=>s+r.target,0);$('[data-output-total]').textContent=output.toLocaleString();$('[data-achievement-total]').textContent=target?(output/target*100).toFixed(2)+'%':'—';$('[data-hours-total]').textContent=calendar.reduce((s,r)=>s+(Number.isFinite(r.hours)?r.hours:0),0);}
async function saveProduction(){try{const original=currentProductionDraft(),draft=validateProductionPlan(original);validateProductionActuals(draft);const next=structuredClone(state);next.productionSchedules||=[];const index=next.productionSchedules.findIndex(file=>file.id===draft.id),file={...structuredClone(draft),id:draft.id||`PLAN-${Date.now()}-${crypto.randomUUID().slice(0,6)}`,createdAt:index>=0?next.productionSchedules[index].createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};if(index>=0)next.productionSchedules[index]=file;else next.productionSchedules.unshift(file);if(await commit(next)){selectedSchedule=file.id;productionDrafts.delete(draft.section);goPage('schedule-report-'+activePage.split('-').at(-1));toast('Production schedule saved');}}catch(error){toast(error.message);}}
function drawProductionReport(){const section=scheduleSection(),files=scheduleFiles(section);if(!files.some(file=>file.id===selectedSchedule))selectedSchedule=files[0]?.id||null;const file=files.find(file=>file.id===selectedSchedule);$('#main').innerHTML=`${productionActions()}<div class="saved-files no-print"><h3>${esc(section)} · Schedule Report · newest first</h3>${files.map(f=>`<button data-schedule-file="${esc(f.id)}" class="${f.id===selectedSchedule?'selected-file':''}">${esc(f.id)} · ${parseScheduleMonth(f.month).label}<small>${new Date(f.createdAt).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'})}</small></button>`).join('')||'<p>No saved schedules for this section.</p>'}<button data-production-action="new">+ New plan</button></div>${file?`<section class="account-paper production-paper printable">${productionIdentity(file.section)}<div class="production-report-meta"><span>Section: ${esc(file.section)}</span><span>${parseScheduleMonth(file.month).label}</span><span>Weekly Holiday: ${esc(file.weekly)}</span><span>Extra Holiday: ${file.extra.join(', ')||'None'}</span></div><p class="file-caption">${esc(file.id)}</p>${productionTable(file,false)}${calendarTable(file,false)}${remainingNotice(file)}${productionSignatures()}</section>`:'<div class="empty">Save a Production Plan to see its Schedule Report.</div>'}`;tickClock();}
function editProduction(){const section=scheduleSection(),file=scheduleFiles(section).find(f=>f.id===selectedSchedule);if(!file){toast('Select a saved schedule first.');return;}productionDrafts.set(section,structuredClone(file));goPage('schedule-line-'+activePage.split('-').at(-1));}
$('#main').addEventListener('input',e=>{const input=e.target;if(input.id==='productionMonth'){try{const month=parseScheduleMonth(input.value),draft=currentProductionDraft();draft.month=`${month.month}/${month.year}`;draft.extra=draft.extra.filter(day=>day<=month.days);$('#productionMonthLabel').textContent=month.label;document.querySelectorAll('[data-extra-holiday]').forEach(checkbox=>{checkbox.disabled=Number(checkbox.dataset.extraHoliday)>month.days;checkbox.checked=draft.extra.includes(Number(checkbox.dataset.extraHoliday));});$('#extraSummary').textContent=draft.extra.join(', ')||'Select dates';refreshProduction();}catch{}}if(input.matches('[data-plan-row]')){const draft=currentProductionDraft();draft.rows[Number(input.dataset.planRow)][PLAN_FIELDS[Number(input.dataset.planCol)][0]]=input.value;refreshProduction();}if(input.matches('[data-production-date]')){const draft=currentProductionDraft();draft.journal[input.dataset.productionDate]||={};draft.journal[input.dataset.productionDate][input.dataset.dailyKey]=input.value;refreshActuals();}});
$('#main').addEventListener('change',e=>{const input=e.target;if(input.id==='productionMonth'){try{const month=parseScheduleMonth(input.value),draft=currentProductionDraft();draft.month=`${month.month}/${month.year}`;draft.extra=draft.extra.filter(day=>day<=month.days);drawProductionEditor();}catch(error){toast(error.message);input.value=currentProductionDraft().month;}}if(input.id==='productionWeekly'){currentProductionDraft().weekly=input.value;refreshProduction();}if(input.matches('[data-extra-holiday]')){const draft=currentProductionDraft(),day=Number(input.dataset.extraHoliday);draft.extra=input.checked?[...new Set([...draft.extra,day])].sort((a,b)=>a-b):draft.extra.filter(d=>d!==day);$('#extraSummary').textContent=draft.extra.join(', ')||'Select dates';input.closest('details').open=false;refreshProduction();}});
$('#main').addEventListener('focusout',e=>{if(e.target.matches('[data-plan-col="8"]')&&e.target.value){try{const value=normalizeDate(e.target.value);e.target.value=value;currentProductionDraft().rows[Number(e.target.dataset.planRow)].startDate=value;refreshProduction();}catch(error){toast(error.message);}}});
$('#main').addEventListener('keydown',e=>{if(!e.target.matches('[data-plan-row]'))return;let row=Number(e.target.dataset.planRow),col=Number(e.target.dataset.planCol);if(e.key==='Enter'){e.preventDefault();if(col===8&&e.target.value){try{normalizeDate(e.target.value);}catch(error){toast(error.message);return;}}col++;if(col===4)col++;if(col===PLAN_FIELDS.length){col=0;row++;}if(row>=currentProductionDraft().rows.length){$('#productionSave').focus();return;}}else if(['ArrowRight','ArrowLeft','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(e.key==='ArrowRight'){col++;if(col===4)col++;}if(e.key==='ArrowLeft'){col--;if(col===4)col--;}if(e.key==='ArrowUp')row--;if(e.key==='ArrowDown')row++;}else return;$(`[data-plan-row="${row}"][data-plan-col="${col}"]`)?.focus();});
$('#main').addEventListener('click',async e=>{const button=e.target.closest('button');if(!button)return;if(button.dataset.removePlan!==undefined){const draft=currentProductionDraft();draft.rows.splice(Number(button.dataset.removePlan),1);if(!draft.rows.length)draft.rows.push(blankPlanRow());drawProductionEditor();return;}if(button.dataset.scheduleFile){selectedSchedule=button.dataset.scheduleFile;drawProductionReport();return;}const action=button.dataset.productionAction;if(!action)return;if(action==='save')saveProduction();if(action==='row'){currentProductionDraft().rows.push(blankPlanRow());drawProductionEditor();}if(action==='new'){const section=scheduleSection(),draft=productionDrafts.get(section);if(draft?.rows.some(row=>Object.values(row).some(v=>String(v).trim()))&&!confirm('Discard the current unsaved production plan?'))return;productionDrafts.set(section,newProductionDraft(section));goPage('schedule-line-'+activePage.split('-').at(-1));}if(action==='edit'){if(activePage.startsWith('schedule-line-'))toast('This plan is already editable.');else editProduction();}if(action==='print')window.print();if(action==='delete'){const id=activePage.startsWith('schedule-line-')?currentProductionDraft().id:selectedSchedule;if(!id){toast('Select a saved schedule first.');return;}const section=scheduleSection(),reportId='schedule-report-'+activePage.split('-').at(-1),dialog=$('#deleteDialog');dialog.querySelector('h2').textContent='Delete this production schedule?';dialog.querySelector('p').textContent='The selected schedule file and its daily outputs will be removed.';dialog.showModal();dialog.onclose=async ()=>{if(dialog.returnValue==='delete'){const next=structuredClone(state);next.productionSchedules=next.productionSchedules.filter(file=>file.id!==id);if(await commit(next)){productionDrafts.delete(section);selectedSchedule=null;goPage(reportId);toast('Schedule deleted');}}};}if(action==='excel'){try{const draft=activePage.startsWith('schedule-line-')?currentProductionDraft():scheduleFiles(scheduleSection()).find(f=>f.id===selectedSchedule);if(!draft)throw Error('Select a saved schedule first.');const validated=validateProductionPlan(draft),{calendar}=validateProductionActuals(validated);const totals=planTotals(validated.rows);const matrix=[['FARNOOR GARMENTS LTD.',draft.section],['Address','1028/1/2 Malibagh Bazar Road, Dhaka-1217'],['Month',parseScheduleMonth(draft.month).label,'Weekly Holiday',draft.weekly,'Extra Holiday',draft.extra.join(', ')],[],['PRODUCTION PLAN'],['SL',...PLAN_FIELDS.map(([,label])=>label)],...validated.rows.map((row,i)=>[i+1,...PLAN_FIELDS.map(([key])=>key==='excess'?signedPercent(excessPercent(row)):key==='startDate'?(row.reportStartDate||''):row[key])]),['Total','','','',totals.orderQty,signedPercent(totals.excess),totals.totalQty,totals.firstTarget,totals.dailyTarget,'',''],[],['TIME ALLOWED'],['SL','DATE','8am-7pm 10 Hours','DAILY TERGET','DAILY OUTPUT','ACEVEMENT','TOTAL HOURS','HOURLY OUTPUT TERGET','REMARKS'],...calendar.map((row,i)=>[i+1,row.date,row.holiday||10,row.holiday||row.target,row.output,'',draft.journal[row.date]?.reportHours||'','',row.remarks]),['Total','','',calendar.reduce((sum,row)=>sum+row.target,0),calendar.reduce((sum,row)=>sum+row.output,0),'','','',''],['Remaining after month',generateProductionCalendar(validated).unallocated],[],['Head of Production','','General Manager','','Managing Director']];download('production-'+draft.section.replaceAll(' ','-')+'.xlsx',makeXlsx(matrix,'Production Schedule'),'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');toast('Schedule Excel file downloaded');}catch(error){toast(error.message);}}});



;
;/* production-v2.js */
'use strict';
const PRODUCTION_SECTIONS=['Line-1','Line-2','Line-3','Line-4','Unit-2 Line-1','Unit-2 Line-2','Unit-2 Line-3','Unit-2 Line-4'];
const productionReportDrafts=new Map();
let productionReportAll=false;
let productionReportMonth='',productionReportEditing=false,productionOrderNames={buyers:[],items:[],styles:[]},productionNamesRequest=null,productionNamesLoadedAt=0;
function productionPageId(section,report=false){return 'schedule-'+(report?'report-':'line-')+(PRODUCTION_SECTIONS.indexOf(section)+1);}
function productionSectionSelect(section,report=false){return `<label class="production-section">Section<select id="productionSection" class="production-section-select" aria-label="Section">${PRODUCTION_SECTIONS.map(name=>`<option value="${esc(name)}" ${name===section?'selected':''} ${FarnoorAccess.canPage(productionPageId(name,report))?'':'disabled'}>${esc(name)}</option>`).join('')}</select></label>`;}
productionIdentity=function(section,savedAt){return `${savedAt?'<div class="production-print-clock"></div>':''}<div class="order-company production-company"><img src="Farnoor_New_Logo.png" alt="Farnoor logo"><div><h3>FARNOOR GARMENTS LTD.</h3><p>1028/1/2 Malibagh Bazar Road, Dhaka-1217</p></div></div><h2 class="account-title">PRODUCTION PLAN</h2>${savedAt?`<div class="production-saved-clock">${esc(new Date(savedAt).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}))}</div>`:'<div class="live-clock production-clock"></div>'}`;};
holidayControls=function(draft){const month=parseScheduleMonth(draft.month);return `<div class="production-controls">${productionSectionSelect(draft.section,activePage.startsWith('schedule-report-'))}<label>Month/Year<input id="productionMonth" aria-label="Month/Year" value="${esc(month.label)}" placeholder="1/26"><span id="productionMonthLabel" hidden>${month.label}</span></label><label>Weekly Holiday<select id="productionWeekly" aria-label="Weekly Holiday">${['None',...WEEKDAYS].map(day=>`<option ${draft.weekly===day?'selected':''}>${day}</option>`).join('')}</select></label><details class="extra-holidays"><summary>Extra Holiday <span id="extraSummary">${draft.extra.length?draft.extra.join(', '):'Select dates'}</span></summary><div class="holiday-options">${Array.from({length:31},(_,i)=>i+1).map(day=>`<label><input type="checkbox" data-extra-holiday="${day}" aria-label="Extra Holiday ${day}" ${day>month.days?'disabled':''} ${draft.extra.includes(day)?'checked':''}>${day}</label>`).join('')}</div></details></div>`;};
async function loadProductionOrderNames(){
 if(productionNamesRequest)return productionNamesRequest;
 if(Date.now()-productionNamesLoadedAt<60000)return;
 productionNamesRequest=(async()=>{try{const response=await FarnoorAPI.request('/api/production/order-options');const body=await response.json();if(!response.ok)throw Error(body.error||'Could not load order names.');for(const key of ['buyers','items','styles'])productionOrderNames[key]=Array.isArray(body[key])?body[key].filter(s=>typeof s==='string'):[];productionNamesLoadedAt=Date.now();}catch(error){if(activePage?.startsWith('schedule-'))toast(error.message);}finally{productionNamesRequest=null;}})();return productionNamesRequest;
}
drawProductionEditor=function(){const draft=currentProductionDraft();$('#main').innerHTML=`<div class="order-actions no-print">${productionReportEditing?'<button data-production-v2="cancel-edit">Back to reports</button>':''}</div><section class="account-paper production-paper printable">${productionIdentity(draft.section)}${holidayControls(draft)}<p class="file-caption">${draft.id?'Editing '+esc(draft.id):'New schedule'}</p>${productionTable(draft,true)}<div class="entry-controls no-print"><button data-production-action="row">+Row</button></div><div id="productionCalendar">${calendarTable(draft,true)}</div>${remainingNotice(draft)}<div class="entry-controls no-print"><button data-production-action="save" id="productionSave" class="primary">Save</button></div>${productionSignatures()}</section>`;tickClock();loadProductionOrderNames();};
const productionV2Renderer=renderPage;
renderPage=function(){if(activePage?.startsWith('schedule-report-')&&productionReportEditing)drawProductionEditor();else productionV2Renderer();};
function productionReportFiles(section){return (productionReportAll?(state.productionSchedules||[]).filter(file=>FarnoorAccess.canPage(productionPageId(file.section,true))):scheduleFiles(section)).filter(file=>!productionReportMonth||file.month===productionReportMonth).slice().sort((a,b)=>Date.parse(b.createdAt)-Date.parse(a.createdAt)||b.id.localeCompare(a.id));}
function productionFileActions(file){return `<div class="order-actions no-print production-file-actions">${[['print','Print'],['pdf','PDF'],['edit','Edit'],['excel','Excel'],['delete','Delete'],['save-report','Save']].map(([action,label])=>`<button class="${action}-action" data-production-action="${action}" ${action==='save-report'?'data-page-action-required="edit"':''} data-schedule-target="${esc(file.id)}" aria-label="${label} ${esc(file.id)}">${label}</button>`).join('')}</div>`;}
drawProductionReport=function(){const section=scheduleSection(),files=productionReportFiles(section);if(!files.some(file=>file.id===selectedSchedule))selectedSchedule=files[0]?.id||null;$('#main').innerHTML=`<div class="production-report-filters no-print">${productionSectionSelect(section,true)}<label>Month/Year<input id="productionReportMonth" aria-label="Report Month/Year" placeholder="1/26 · All" value="${productionReportMonth?esc(parseScheduleMonth(productionReportMonth).label):''}"></label><button data-production-v2="all-months" aria-pressed="${productionReportAll}">All</button><button data-production-action="new" class="primary">New schedule</button></div><div class="production-report-list">${files.map(file=>`<article class="production-report-document ${file.id===selectedSchedule?'production-print-selected':''}" data-production-file="${esc(file.id)}">${productionFileActions(file)}<section class="account-paper production-paper printable">${productionIdentity(file.section,file.updatedAt||file.createdAt)}<div class="production-report-meta"><span class="production-report-date">${esc(new Date(file.updatedAt||file.createdAt).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}))}</span><span class="report-section">Section: ${esc(file.section)}</span><span class="report-month">${parseScheduleMonth(file.month).label}</span><span class="report-weekly">Weekly Holiday: ${esc(file.weekly)}</span><span class="report-extra">Extra Holiday: ${file.extra.join(', ')||'None'}</span></div>${productionTable(productionReportDrafts.get(file.id)?.file||file,false)}${calendarTable(productionReportDrafts.get(file.id)?.file||file,false)}${remainingNotice(file)}${productionSignatures()}</section></article>`).join('')||'<div class="empty">No saved schedules match this section and month.</div>'}</div>`;tickClock();};
editProduction=function(){const section=scheduleSection(),file=scheduleFiles(section).find(f=>f.id===selectedSchedule);if(!file){toast('Select a saved schedule first.');return;}productionDrafts.set(section,structuredClone(file));productionReportEditing=true;drawProductionEditor();};
saveProduction=async function(){const button=$('#productionSave');if(button?.dataset.saving==='true')return;if(button)button.dataset.saving='true';try{const original=currentProductionDraft(),draft=validateProductionPlan(original);validateProductionActuals(draft);const next=structuredClone(state);next.productionSchedules||=[];const index=next.productionSchedules.findIndex(file=>file.id===draft.id);if(draft.id&&index<0)throw Error('This schedule was removed. Refresh before saving.');const file={...structuredClone(draft),id:draft.id||`PLAN-${Date.now()}-${crypto.randomUUID().slice(0,6)}`,createdAt:index>=0?next.productionSchedules[index].createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};if(index>=0)next.productionSchedules[index]=file;else next.productionSchedules.unshift(file);if(await commit(next)){selectedSchedule=file.id;productionDrafts.delete(draft.section);productionReportEditing=false;productionReportMonth='';const report=productionPageId(draft.section,true);if(FarnoorAccess.canPage(report))goPage(report);else{productionDrafts.set(draft.section,structuredClone(file));drawProductionEditor();}toast('Production schedule saved');}}catch(error){toast(error.message);}finally{if(button)delete button.dataset.saving;}};
const productionV2GoPage=goPage;
goPage=function(id){if(id!==activePage)productionReportEditing=false;productionV2GoPage(id);};
function productionComplete(input,event){const col=Number(input.dataset.planCol);if(![0,1,2].includes(col)||event.inputType?.startsWith('delete'))return;const typed=input.value;if(typed.trim().length<2)return;const key=['buyers','items','styles'][col],local=(state.orderFiles||[]).flatMap(file=>file.rows.map(row=>row[['buyer','item','style'][col]])),names=[...new Set([...productionOrderNames[key],...local])].filter(value=>typeof value==='string');const query=typed.toLocaleLowerCase(),match=names.find(value=>value.toLocaleLowerCase().startsWith(query))||names.find(value=>value.toLocaleLowerCase().includes(query));if(match&&match!==typed){input.value=match;const start=match.toLocaleLowerCase().indexOf(query);input.setSelectionRange(start===0?typed.length:0,match.length);}}
$('#main').addEventListener('input',event=>{if(event.target.matches('[data-plan-row]'))productionComplete(event.target,event);},true);
$('#main').addEventListener('change',event=>{const input=event.target;if(input.id==='productionSection'){event.stopImmediatePropagation();const report=activePage.startsWith('schedule-report-'),id=productionPageId(input.value,report);if(!FarnoorAccess.canPage(id)){input.value=scheduleSection();toast('This section has not been permitted.');return;}productionReportAll=false;productionReportEditing=false;goPage(id);}if(input.id==='productionReportMonth'){event.stopImmediatePropagation();try{const month=input.value.trim()?parseScheduleMonth(input.value):null;productionReportAll=false;productionReportMonth=month?`${month.month}/${month.year}`:'';drawProductionReport();}catch(error){toast(error.message);}}},true);
$('#main').addEventListener('keydown',event=>{if(event.target.id==='productionReportMonth'&&event.key==='Enter'){event.preventDefault();event.target.dispatchEvent(new Event('change',{bubbles:true}));}},true);
$('#main').addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;const extra=button.dataset.productionV2;if(extra){event.preventDefault();event.stopImmediatePropagation();if(extra==='all-months'){productionReportAll=true;productionReportMonth='';drawProductionReport();}if(extra==='cancel-edit'){productionReportEditing=false;drawProductionReport();}return;}if(button.dataset.scheduleTarget){selectedSchedule=button.dataset.scheduleTarget;const target=(state.productionSchedules||[]).find(file=>file.id===selectedSchedule);if(target&&activePage.startsWith('schedule-report-')){activePage=productionPageId(target.section,true);const sectionInput=$('#productionSection');if(sectionInput)sectionInput.value=target.section;renderNavigation();if(typeof applyActionControls==='function')applyActionControls();}document.querySelectorAll('[data-production-file]').forEach(node=>node.classList.toggle('production-print-selected',node.dataset.productionFile===selectedSchedule));}if(button.dataset.productionAction==='save-report'){event.preventDefault();event.stopImmediatePropagation();saveProductionReportFields(selectedSchedule);return;}if(button.dataset.productionAction==='print')refreshProductionPrintTime();if(button.dataset.productionAction==='pdf'){event.preventDefault();event.stopImmediatePropagation();exportPagePDF(button.closest('[data-production-file]'));return;}if(button.dataset.productionAction==='new'&&activePage.startsWith('schedule-report-')){event.preventDefault();event.stopImmediatePropagation();const section=scheduleSection(),draft=productionDrafts.get(section);if(draft?.rows.some(row=>Object.values(row).some(value=>String(value).trim()))&&!confirm('Discard the current unsaved production plan?'))return;productionDrafts.set(section,newProductionDraft(section));const editor=productionPageId(section);if(FarnoorAccess.canPage(editor))goPage(editor);else{productionReportEditing=true;drawProductionEditor();}}},true);

function refreshProductionPrintTime(){setSchedulePortraitPrint();const time=new Date().toLocaleString('en-GB',{timeZone:'Asia/Dhaka'});document.querySelectorAll('.production-print-clock').forEach(node=>node.textContent=time);}
window.addEventListener('beforeprint',refreshProductionPrintTime);

function reportFieldDraft(id){const saved=(state.productionSchedules||[]).find(file=>file.id===id);if(!saved)return null;let draft=productionReportDrafts.get(id);if(!draft){draft={original:JSON.stringify(saved),file:structuredClone(saved)};productionReportDrafts.set(id,draft);}return draft;}
$('#main').addEventListener('input',event=>{const input=event.target;if(!input.dataset.reportFile)return;const draft=reportFieldDraft(input.dataset.reportFile);if(!draft||!FarnoorAccess.canAction(productionPageId(draft.file.section,true),'edit'))return;if(input.dataset.reportRow!==undefined)draft.file.rows[Number(input.dataset.reportRow)].reportStartDate=input.value;else if(input.dataset.reportDate){draft.file.journal[input.dataset.reportDate]||={};draft.file.journal[input.dataset.reportDate].reportHours=input.value;}});
$('#main').addEventListener('change',event=>{const input=event.target;if(input.dataset.reportRow!==undefined&&input.value.trim()){try{input.value=normalizeDate(input.value);const draft=reportFieldDraft(input.dataset.reportFile);if(draft&&FarnoorAccess.canAction(productionPageId(draft.file.section,true),'edit'))draft.file.rows[Number(input.dataset.reportRow)].reportStartDate=input.value;}catch(error){toast(error.message);}}});
async function saveProductionReportFields(id){const draft=productionReportDrafts.get(id);if(!draft){toast('No report changes to save.');return;}if(!FarnoorAccess.canAction(productionPageId(draft.file.section,true),'edit')){toast('EDIT permission is required.');return;}try{const next=structuredClone(state),index=(next.productionSchedules||[]).findIndex(file=>file.id===id);if(index<0||JSON.stringify(next.productionSchedules[index])!==draft.original)throw Error('This report changed. Refresh before saving.');for(const row of draft.file.rows)if(row.reportStartDate?.trim())row.reportStartDate=normalizeDate(row.reportStartDate);for(const actual of Object.values(draft.file.journal)){if(actual.reportHours!==undefined){const value=scheduleDigits(actual.reportHours);if(value&&(!/^\d+(\.\d+)?$/.test(value)||Number(value)>1000000000))throw Error('Enter a valid non-negative TOTAL HOURS.');actual.reportHours=value;}}next.productionSchedules[index]={...structuredClone(draft.file),updatedAt:new Date().toISOString()};if(await commit(next)){productionReportDrafts.delete(id);drawProductionReport();toast('Report changes saved.');}}catch(error){toast(error.message);}}

function setSchedulePortraitPrint(){if(!document.querySelector('.production-report-list'))return;let style=document.getElementById('schedulePortraitPrint');if(!style){style=document.createElement('style');style.id='schedulePortraitPrint';document.head.append(style);}style.textContent='@page{size:A4 portrait!important;margin:8mm!important}@page farnoorScheduleA4{size:A4 portrait!important;margin:8mm!important}@media print{html,body{page:farnoorScheduleA4!important}}';}
window.addEventListener('beforeprint',setSchedulePortraitPrint);
window.addEventListener('afterprint',()=>document.getElementById('schedulePortraitPrint')?.remove());

;
;/* permissions.js */
'use strict';
let adminView=false,accessInfo={role:'member',department:'',pages:[],revision:0},adminData=null,selectedDepartment='Admin',departmentPanelOpen=false,adminLoading=false;
let adminUserPanel='';
const adminUserLists={users:null,running:null},adminUserLoading={users:false,running:false},adminUserErrors={users:'',running:''};
const permissionDrafts=new Map();
const PAGE_ACTIONS=['edit','view','pdf','print'];
function canAction(id,action){id=pageInfo(id)?.page.permissionPage||id;return accessInfo.role==='super_admin'||(accessInfo.actions?accessInfo.actions[id]?.includes(action):accessInfo.pages.includes(id))||false;}
function canPage(id){return canAction(id,'view');}
function applyPageLinks(){document.querySelectorAll('[data-open-page]').forEach(node=>{node.hidden=!canPage(node.dataset.openPage);});}
function applyAccess(access){const changed=JSON.stringify(accessInfo)!==JSON.stringify(access);accessInfo=access||{role:'member',department:'',pages:[],revision:0};$('#superAdminButton').hidden=accessInfo.role!=='super_admin';$('#profileRole').textContent=accessInfo.role==='super_admin'?'Super Admin':accessInfo.department||'Member';$('#restoreButton').hidden=accessInfo.role!=='super_admin';document.querySelectorAll('[data-super-admin-only]').forEach(node=>{node.hidden=accessInfo.role!=='super_admin';});if(activePage&&!canPage(activePage)){activePage=null;document.querySelectorAll('dialog[open]').forEach(dialog=>dialog.close());toast('Your page permissions changed.');}if(accessInfo.role!=='super_admin')adminView=false;renderNavigation();applyPageLinks();return changed;}
window.FarnoorAccess={canPage,canAction,apply:applyAccess};
const authorizedGoPage=goPage;goPage=function(id){if(!canPage(id)){toast('This page has not been permitted for your department.');return;}adminView=false;authorizedGoPage(id);applyPageLinks();};
const authorizedRenderPage=renderPage;renderPage=function(){if(!activePage||!canPage(activePage)){activePage=null;renderOverview();return;}authorizedRenderPage();applyPageLinks();};
const authorizedOverview=renderOverview;renderOverview=function(){adminView=false;if(accessInfo.role!=='super_admin'){const first=DEPARTMENTS.flatMap(module=>module.pages).find(page=>!page.hidden&&canPage(page.id));if(first){goPage(first.id);return;}activePage=null;renderNavigation();$('#main').innerHTML=heading('DEPARTMENT ACCESS','Permission pending','Your Super Admin can tick the pages permitted for your department.')+'<section class="panel access-empty"><h3>'+esc(accessInfo.department||'Your department')+'</h3><p>No pages have been permitted yet. Contact your Super Admin.</p></section>';return;}authorizedOverview();applyPageLinks();};
const authorizedRenderClosed=renderClosed;renderClosed=function(){if(accessInfo.role==='super_admin'){authorizedRenderClosed();return;}$('#main').innerHTML='<div class="closed"><div class="symbol">▦</div><h2>Page closed</h2><p>Select a page from your department.</p></div>';};
const authorizedBackup=$('#backup').onclick;$('#backup').onclick=function(event){if(accessInfo.role!=='super_admin')return toast('Super Admin access is required.');return authorizedBackup.call(this,event);};
async function adminRequest(route,options={}){const response=await FarnoorAPI.request('/api/admin/'+route,{...options,headers:{'Content-Type':'application/json'}});const body=await response.json();if(!response.ok)throw Object.assign(Error(body.error||'Could not load permissions.'),{status:response.status});return body;}
async function loadAdministration(){if(adminLoading)return;adminLoading=true;try{adminData=await adminRequest('departments');if(adminView)renderAdminView();}catch(error){toast(error.message);if(adminView)$('#adminLoadMessage').textContent=error.message;}finally{adminLoading=false;}}
function draftFor(department){if(!permissionDrafts.has(department)){const saved=adminData.permissions.find(p=>p.department===department);permissionDrafts.set(department,{pages:new Set(saved?.pages||[]),actions:Object.fromEntries(window.FARNOOR_PAGE_CATALOG.map(page=>[page.id,new Set(saved?.actions?.[page.id]||(saved?.pages?.includes(page.id)?PAGE_ACTIONS:[]))])),revision:saved?.revision||0,saving:false,dirty:false});}return permissionDrafts.get(department);}
function renderAdminView(){if(accessInfo.role!=='super_admin'){adminView=false;renderOverview();return;}activePage=null;opened.clear();renderNavigation();$('#main').innerHTML=heading('SUPER ADMIN','Super Admin','Manage department access to every subdepartment and page.')+`<div class="admin-section-buttons"><button id="adminDepartments" class="admin-department-button" aria-expanded="${departmentPanelOpen}">▦ Department <span>${departmentPanelOpen?'−':'+'}</span></button><button id="adminDepartmentAdd" class="admin-department-button" aria-expanded="${adminUserPanel==='department-add'}">⊕ Department Add <span>${adminUserPanel==='department-add'?'−':'+'}</span></button><button id="adminUserList" class="admin-department-button admin-users-button" aria-expanded="${adminUserPanel==='users'}">♙ User List <span>${adminUserPanel==='users'?'−':'+'}</span></button><button id="adminLoginUsers" class="admin-department-button" aria-expanded="${adminUserPanel==='login'}">♙ Login User <span>${adminUserPanel==='login'?'−':'+'}</span></button><button id="adminRunningUsers" class="admin-department-button admin-running-button" aria-expanded="${adminUserPanel==='running'}">● Running Users <span>${adminUserPanel==='running'?'−':'+'}</span></button>${["A","B","C","D","E","G"].map(group=>`<button type="button" class="admin-department-button" data-email-group="${group}" aria-expanded="${adminUserPanel==='email-'+group}">✉ Email.${group}</button>`).join('')}</div><div id="adminLoadMessage" role="status">${adminData?'':'Loading departments…'}</div>`;if(adminUserPanel==='department-add'){renderDepartmentAdd();return;}if(adminUserPanel==='login'){renderLoginUsers();return;}if(adminUserPanel.startsWith('email-')){renderEmailContacts(adminUserPanel.slice(-1));return;}if(adminUserPanel){renderAdminUsers();return;}if(!departmentPanelOpen||!adminData)return;const draft=draftFor(selectedDepartment),users=adminData.users.filter(u=>u.department===selectedDepartment),catalog=[...window.FARNOOR_PAGE_CATALOG,...DEPARTMENTS.find(m=>m.id==='admin').pages.filter(p=>p.navigationOnly&&p.permissionPage).map(p=>({...p,id:p.permissionPage,moduleId:'admin',parent:(p.navPath||[]).join(' / '),name:p.name,sharedPermission:true}))];
const moduleNames={hr:'Administration',accounts:'Account'};
const orderedModules=[...DEPARTMENTS.filter(m=>m.id==='admin'),...DEPARTMENTS.filter(m=>!['admin','sewing'].includes(m.id)),...DEPARTMENTS.filter(m=>m.id==='sewing')];
function actionBoxes(page){return `<span class="permission-action-boxes">${PAGE_ACTIONS.map(action=>`<label class="permission-action-cell"><input type="checkbox" data-permission-page="${page.id}" data-permission-action="${action}" aria-label="${action.toUpperCase()} ${esc(page.parent?page.parent+' / ':'')}${esc(page.name)}" ${draft.actions[page.id].has(action)?'checked':''}></label>`).join('')}</span>`;}
function pageRow(page){page={...DEPARTMENTS.flatMap(module=>module.pages).find(item=>item.id===page.id),...page};return `<div class="permission-page" style="--page-shade:${page.shade||'#f3f7ef'}"><span class="permission-page-name"><span class="permission-page-icon">${esc(page.icon||'▤')}</span>${esc(page.name)}${page.hidden?' (Legacy)':''}${page.sharedPermission?'<small style="display:block;font-size:11px">Documents-এর সঙ্গে একই অনুমতি</small>':''}</span>${actionBoxes(page)}</div>`;}
$('#main').insertAdjacentHTML('beforeend',`<section class="permission-layout"><div class="panel permission-editor"><div class="department-dropdown"><label for="permissionDepartment">Department</label><select id="permissionDepartment">${adminData.groups.map(group=>`<optgroup label="${esc(group.name)}">${group.departments.map(name=>`<option value="${esc(name)}" ${name===selectedDepartment?'selected':''}>${esc(name)}</option>`).join('')}</optgroup>`).join('')}</select></div><div class="permission-controls"><button type="button" id="permitAll">Tick all</button><button type="button" id="permitNone">Untick all</button><button type="button" id="reloadPermissions">Reload permissions</button></div><div class="permission-column-head"><span>Departments, subdepartments and pages</span><span class="permission-action-head">${['Edit','View','Pdf','Print'].map(label=>`<span>${label}</span>`).join('')}</span></div><div class="permission-module-list">${orderedModules.map(module=>{const pages=catalog.filter(p=>p.moduleId===module.id),checked=pages.every(p=>draft.pages.has(p.id)),moduleName=moduleNames[module.id]||module.name,parents=[...new Set(pages.map(p=>p.parent).filter(Boolean))];return `<details class="permission-module" open><summary><span class="permission-module-name"><span class="permission-icon" style="background:${module.color}">${module.icon}</span>${esc(moduleName)}</span><small>${pages.filter(p=>draft.pages.has(p.id)).length}/${pages.length}</small><span class="permission-action-boxes">${PAGE_ACTIONS.map(action=>`<label class="permission-action-cell"><input type="checkbox" data-permission-module="${module.id}" data-permission-action="${action}" aria-label="All ${esc(moduleName)} ${action.toUpperCase()}" ${pages.every(page=>draft.actions[page.id].has(action))?'checked':''}></label>`).join('')}</span></summary><div>${pages.filter(p=>!p.parent).map(pageRow).join('')}${parents.map(parent=>`<details class="permission-subdepartment" open><summary>${esc(parent)}</summary><div>${pages.filter(p=>p.parent===parent).map(pageRow).join('')}</div></details>`).join('')}</div></details>`;}).join('')}</div><div class="permission-save"><span id="permissionSaveStatus" role="status">${draft.dirty?'Unsaved changes':'Saved permissions'}</span><button type="button" class="primary" id="savePermissions" ${draft.saving?'disabled':''}>${draft.saving?'Saving…':'Save Permissions'}</button></div></div></section>`);
document.querySelectorAll('[data-permission-module]').forEach(input=>{const pages=catalog.filter(p=>p.moduleId===input.dataset.permissionModule),count=pages.filter(p=>draft.actions[p.id].has(input.dataset.permissionAction)).length;input.indeterminate=count>0&&count<pages.length;});}
$('#superAdminButton').onclick=()=>{adminView=!adminView;if(!adminView){renderOverview();return;}activePage=null;renderAdminView();loadAdministration();};
$('#main').addEventListener('click',async event=>{if(!adminView)return;const button=event.target.closest('button');if(!button)return;if(button.id==='adminDepartments'){departmentPanelOpen=!departmentPanelOpen;adminUserPanel='';renderAdminView();if(!adminData)loadAdministration();}if(button.id==='adminUserList'||button.id==='adminRunningUsers'){const kind=button.id==='adminUserList'?'users':'running';adminUserPanel=adminUserPanel===kind?'':kind;departmentPanelOpen=false;renderAdminView();if(adminUserPanel)loadAdminUsers(kind);}if(button.id==='refreshAdminUsers'&&adminUserPanel)loadAdminUsers(adminUserPanel);if(button.dataset.permissionDepartment){selectedDepartment=button.dataset.permissionDepartment;renderAdminView();}if(button.id==='permitAll'||button.id==='permitNone'){const draft=draftFor(selectedDepartment);if(draft.saving)return;draft.pages=new Set(button.id==='permitAll'?window.FARNOOR_PAGE_CATALOG.map(p=>p.id):[]);for(const page of window.FARNOOR_PAGE_CATALOG)draft.actions[page.id]=new Set(button.id==='permitAll'?PAGE_ACTIONS:[]);draft.dirty=true;renderAdminView();}if(button.id==='reloadPermissions'){const draft=draftFor(selectedDepartment);if(draft.saving)return;if(draft.dirty&&!confirm('Discard unsaved permission changes for this department?'))return;permissionDrafts.delete(selectedDepartment);await loadAdministration();}if(button.id==='savePermissions'){const department=selectedDepartment,draft=draftFor(department);if(draft.saving)return;draft.saving=true;renderAdminView();try{const result=await adminRequest('permissions',{method:'POST',body:JSON.stringify({department,pages:[...draft.pages],actions:Object.fromEntries(Object.entries(draft.actions).map(([id,rights])=>[id,[...rights]])),revision:draft.revision})});draft.revision=result.revision;draft.dirty=false;const saved=adminData.permissions.find(p=>p.department===department);Object.assign(saved,result);toast('Department permissions saved.');}catch(error){toast(error.message);}finally{draft.saving=false;if(adminView)renderAdminView();}}});
function changeAction(draft,id,action,checked){const rights=draft.actions[id];if(checked){rights.add(action);if(action!=='view')rights.add('view');}else if(action==='view')rights.clear();else rights.delete(action);if(rights.has('view'))draft.pages.add(id);else draft.pages.delete(id);}
$('#main').addEventListener('change',event=>{if(!adminView||!adminData)return;const target=event.target;if(target.id==='permissionDepartment'){selectedDepartment=target.value;renderAdminView();return;}const draft=draftFor(selectedDepartment);if(draft.saving)return;if(target.dataset.permissionPage)changeAction(draft,target.dataset.permissionPage,target.dataset.permissionAction,target.checked);else if(target.dataset.permissionModule){for(const page of window.FARNOOR_PAGE_CATALOG.filter(p=>p.moduleId===target.dataset.permissionModule))changeAction(draft,page.id,target.dataset.permissionAction,target.checked);}else return;draft.dirty=true;$('#permissionSaveStatus').textContent='Unsaved changes';document.querySelectorAll('[data-permission-module]').forEach(input=>{const pages=window.FARNOOR_PAGE_CATALOG.filter(p=>p.moduleId===input.dataset.permissionModule),count=pages.filter(p=>draft.actions[p.id].has(input.dataset.permissionAction)).length;input.checked=count===pages.length;input.indeterminate=count>0&&count<pages.length;input.closest('summary').querySelector('small').textContent=pages.filter(p=>draft.pages.has(p.id)).length+'/'+pages.length;});document.querySelectorAll('[data-permission-page]').forEach(input=>input.checked=draft.actions[input.dataset.permissionPage].has(input.dataset.permissionAction));});
$('#main').addEventListener('click',event=>{if(event.target.matches('[data-permission-module]'))event.stopPropagation();});

function userTime(value){if(!value)return '—';const date=new Date(value);return Number.isFinite(date.getTime())?date.toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}):'—';}
async function loadAdminUsers(kind){if(adminUserLoading[kind])return;adminUserLoading[kind]=true;adminUserErrors[kind]='';if(adminView&&adminUserPanel===kind)renderAdminView();try{adminUserLists[kind]=await adminRequest(kind==='running'?'running-users':'users');}catch(error){adminUserErrors[kind]=error.message;}finally{adminUserLoading[kind]=false;if(adminView&&adminUserPanel===kind)renderAdminView();}}
function renderAdminUsers(){const kind=adminUserPanel,data=adminUserLists[kind],rows=data?.users||[],running=kind==='running';$('#main').insertAdjacentHTML('beforeend',`<section class="panel admin-user-panel"><div class="admin-user-heading"><div><span class="eyebrow">SUPER ADMIN</span><h3>${running?'Running Users':'User List'} <span class="admin-user-count">${data?rows.length:'…'}</span></h3></div><button type="button" id="refreshAdminUsers" ${adminUserLoading[kind]?'disabled':''}>${adminUserLoading[kind]?'Refreshing…':'Refresh'}</button></div><p class="hint">${running?'Users active within the last 90 seconds. Updates every 15 seconds. Each user appears once, even with multiple open tabs.':'All registered users. Select Running Users to see who is currently active.'}</p><p class="admin-user-updated" role="status">${adminUserErrors[kind]?esc(adminUserErrors[kind]):data?'Updated: '+esc(userTime(data.checkedAt)):'Loading users…'}</p><div class="table-wrap"><table class="admin-user-table"><thead><tr><th>SL</th><th>Username</th><th>Department</th><th>Email ID</th><th>Role</th><th>Status</th><th>${running?'Last active':'Registered'}</th></tr></thead><tbody>${rows.map((user,index)=>`<tr><td>${index+1}</td><td><strong>${esc(user.username)}</strong></td><td>${esc(user.department)}</td><td>${esc(user.email)}</td><td>${user.role==='super_admin'?'Super Admin':'User'}</td><td><span class="user-online-status ${user.running?'online':''}">${user.running?'● Running':user.approved?'Offline':'Pending approval'}</span></td><td>${esc(userTime(running?user.last_seen:user.created_at))}</td></tr>`).join('')||`<tr><td colspan="7" class="empty">${adminUserLoading[kind]?'Loading users…':adminUserErrors[kind]?'Could not load users. Click Refresh to retry.':running?'No users are currently running.':'No registered users yet.'}</td></tr>`}</tbody></table></div></section>`);}
setInterval(()=>{if(adminView&&adminUserPanel==='running'&&!document.hidden)loadAdminUsers('running');},15000);

;
;/* login-users.js */
'use strict';
let loginUsers=[],loginUsersLoading=false,loginUserError='',loginUserEdit=null,loginUserShowDeleted=false;
async function loadLoginUsers(){if(loginUsersLoading)return;loginUsersLoading=true;loginUserError='';renderAdminView();try{const data=await adminRequest('login-users');loginUsers=data.users;}catch(error){loginUserError=error.message;}finally{loginUsersLoading=false;if(adminView&&adminUserPanel==='login')renderAdminView();}}
function renderLoginUsers(){const users=loginUsers.filter(user=>loginUserShowDeleted?user.deleted_at:!user.deleted_at);$('#main').insertAdjacentHTML('beforeend',`<section class="panel"><div class="admin-user-heading"><h3>Login User</h3><div><button id="addLoginUser" class="primary">+ Add User</button><button id="refreshLoginUsers">Refresh</button><button id="showDeletedLoginUsers">${loginUserShowDeleted?'Active Users':'Deleted Users'}</button></div></div><p role="status">${esc(loginUserError|| (loginUsersLoading?'Loading users…':''))}</p><div class="table-wrap"><table class="admin-user-table"><thead><tr><th>SL</th><th>Username</th><th>Department</th><th>Email</th><th>Status</th><th>Action</th></tr></thead><tbody>${users.map((user,index)=>`<tr><td>${index+1}</td><td>${esc(user.username)}</td><td>${esc(user.department)}</td><td>${esc(user.email)}</td><td>${user.deleted_at?'Deleted':user.role==='super_admin'?'Super Admin':user.approved?'Active':'Pending'}</td><td>${user.deleted_at?`<button data-login-user-action="restore" data-user-id="${esc(user.id)}">Restore</button>`:`<button class="edit-action" data-login-user-action="edit" data-user-id="${esc(user.id)}">Edit</button> ${user.role==='super_admin'?'':`<button class="delete-action" data-login-user-action="delete" data-user-id="${esc(user.id)}">Delete</button>`}`}</td></tr>`).join('')||'<tr><td colspan="6">No users</td></tr>'}</tbody></table></div><div id="loginUserEditor"></div></section>`);}
function openLoginUserEditor(user=null){loginUserEdit=user;$('#loginUserEditor').innerHTML=`<form id="loginUserForm" class="panel"><h3>${user?'Edit User':'Add User'}</h3><div class="production-controls"><label>Username<input name="username" aria-label="Login User Username" required minlength="3" maxlength="60" value="${esc(user?.username||'')}" autocomplete="off"></label><label>Department<select name="department" aria-label="Login User Department">${(adminData?.groups||window.FARNOOR_DEPARTMENT_GROUPS).flatMap(group=>group.departments).map(department=>`<option ${department===(user?.department||'Admin')?'selected':''}>${esc(department)}</option>`).join('')}</select></label><label>Email<input name="email" aria-label="Login User Email" type="email" required maxlength="120" value="${esc(user?.email||'')}" ${user?.role==='super_admin'?'readonly':''}></label>${user?'':`<label>Password<input name="password" aria-label="New User Password" type="password" required minlength="8" maxlength="128" autocomplete="new-password"></label><label>Confirm Password<input name="confirmPassword" aria-label="New User Confirm Password" type="password" required minlength="8" maxlength="128" autocomplete="new-password"></label>`}</div><p id="loginUserFormStatus" role="status"></p><button type="submit" class="primary">Save User</button><button type="button" id="cancelLoginUserEdit">Cancel</button></form>`;}
$('#main').addEventListener('click',async event=>{if(!adminView)return;const button=event.target.closest('button');if(!button)return;if(button.id==='adminLoginUsers'){adminUserPanel=adminUserPanel==='login'?'':'login';departmentPanelOpen=false;renderAdminView();if(adminUserPanel)loadLoginUsers();}if(button.id==='addLoginUser')openLoginUserEditor();if(button.id==='refreshLoginUsers')loadLoginUsers();if(button.id==='showDeletedLoginUsers'){loginUserShowDeleted=!loginUserShowDeleted;renderAdminView();}if(button.id==='cancelLoginUserEdit')$('#loginUserEditor').innerHTML='';const action=button.dataset.loginUserAction;if(!action)return;const user=loginUsers.find(row=>row.id===button.dataset.userId);if(!user)return;if(action==='edit'){openLoginUserEditor(user);return;}if(action==='delete'&&!confirm(`Delete login user ${user.username}? Login will be blocked. You can restore this user from Deleted Users.`))return;button.disabled=true;try{await adminRequest('login-users',{method:'POST',body:JSON.stringify({action,id:user.id,revision:user.user_revision})});toast(action==='delete'?'User deleted':'User restored');await loadData(true);await loadLoginUsers();}catch(error){toast(error.message);button.disabled=false;}});
$('#main').addEventListener('submit',async event=>{if(event.target.id!=='loginUserForm')return;event.preventDefault();if(accessInfo.role!=='super_admin')return;const form=event.target,button=form.querySelector('[type="submit"]');if(button.disabled)return;button.disabled=true;const body=Object.fromEntries(new FormData(form));body.action=loginUserEdit?'edit':'create';if(loginUserEdit){body.id=loginUserEdit.id;body.revision=loginUserEdit.user_revision;}try{await adminRequest('login-users',{method:'POST',body:JSON.stringify(body)});form.reset();loginUserEdit=null;toast('User saved');adminData=null;loadAdministration();await loadData(true);await loadLoginUsers();}catch(error){form.querySelector('[role="status"]').textContent=error.message;button.disabled=false;}});



;
;/* payroll.js */
'use strict';
const payrollCore=window.FarnoorPayrollCore,payrollPreviousRenderer=renderPage;
let payrollLegacy=false;let payrollScreen='salary',payrollShowOpen=false,payrollShowReport=false,payrollBusy=false;
const payrollDrafts=new Map();
const payrollToday=()=>new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Dhaka'}).format(new Date());
const payrollMoney=value=>Number(value||0).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2});
const payrollPreviousFilteredRows=filteredRows;filteredRows=function(){const rows=payrollPreviousFilteredRows();return activePage==='payroll'&&payrollLegacy?rows.filter(r=>!r.payrollForm&&!r.hrSourceForm):rows;};
const payrollRecords=()=>state.records.payroll||[];
const payrollDateNumber=value=>{if(!value)return 0;const [d,m,y]=normalizeDate(value).split('/').map(Number);return y*10000+m*100+d;};
const payrollMonth=value=>{const [d,m,y]=normalizeDate(value).split('/');return y+'-'+m;};
function payrollNewDraft(kind){const form=payrollCore.formById(kind),values={};for(const field of form.fields){values[field.key]=field.value||'';if(field.type==='date')values[field.key]=field.key==='fromDate'?'01/'+payrollToday().slice(3):payrollToday();if(field.type==='checkbox')values[field.key]='false';}if(form.fields.some(f=>f.key==='index'))values.index=String(payrollRecords().filter(r=>r.payrollForm===kind).length+1);return {id:null,values,dirty:false,attendance:new Map()};}
function payrollDraft(){if(!payrollDrafts.has(payrollScreen))payrollDrafts.set(payrollScreen,payrollNewDraft(payrollScreen));return payrollDrafts.get(payrollScreen);}
function payrollOptions(field){if(window.FARNOOR_PAYROLL_OPTIONS?.[field.key])return window.FARNOOR_PAYROLL_OPTIONS[field.key];if(field.type==='department')return [...new Set(['Administration','Account','Commercial','Merchandising','Knitting and Dyeing','Store','Production','Cutting','Finishing','Packing','Quality','Sample','Maintenance','Electrical',...DEPARTMENTS.map(d=>d.name)])];if(field.type==='section')return window.FARNOOR_PAYROLL_SECTIONS||[];if(field.type==='designation')return window.FARNOOR_PAYROLL_DESIGNATIONS||[];return field.options||[];}
function payrollField(field,values,scope='entry'){
 const value=values[field.key]??field.value??'',id='pr-'+scope+'-'+field.key,disabled=scope==='rules'?(!pagePermission('edit')?'disabled':''):(!payrollCore.formById(payrollScreen).report&&!pagePermission('edit')?'disabled':'');
 let input;
 if(['select','department','section','designation'].includes(field.type)||window.FARNOOR_PAYROLL_OPTIONS?.[field.key]){const options=[...new Set([...payrollOptions(field),...(value?[value]:[])])];input=`<select id="${id}" data-payroll-field="${field.key}" data-payroll-scope="${scope}" ${disabled}><option value=""></option>${options.map(v=>`<option ${v===value?'selected':''}>${esc(v)}</option>`).join('')}</select>`;}
 else if(field.type==='checkbox')input=`<input type="checkbox" id="${id}" data-payroll-field="${field.key}" data-payroll-scope="${scope}" ${value==='true'?'checked':''}>`;
 else input=`<input id="${id}" data-payroll-field="${field.key}" data-payroll-scope="${scope}" type="${field.type==='month'?'month':field.type==='number'?'number':'text'}" ${field.type==='number'?'min="0" max="1000000000" step="0.01"':''} maxlength="500" ${field.type==='date'?'placeholder="1/1/26"':''} value="${esc(value)}" ${disabled}>`;
 return `<tr><td><label for="${id}">${esc(field.label)}</label></td><td><div class="payroll-field">${input}<button type="button" data-payroll-clear="${field.key}" data-payroll-scope="${scope}" ${disabled}>Clear</button></div></td></tr>`;
}
function payrollTable(fields,values,scope='entry'){return `<table class="payroll-form-table"><tbody>${fields.map(f=>payrollField(f,values,scope)).join('')}</tbody></table>`;}
renderPage=function(){if(activePage!=='payroll'){payrollPreviousRenderer();return;}if(payrollLegacy){payrollPreviousRenderer();$('#main').insertAdjacentHTML('afterbegin','<button type="button" data-payroll-action="back">Back to Payroll</button>');return;}renderPayroll();};
function renderPayroll(){
 const form=payrollCore.formById(payrollScreen),draft=payrollDraft(),rules=payrollRecords().find(r=>r.payrollForm==='rules')?.payrollValues||{};
 $('#main').innerHTML=heading('HR','Payroll','')+`<div class="payroll-workspace"><nav class="payroll-menu no-print" aria-label="Payroll menus">${payrollCore.forms.map(f=>`<button type="button" data-payroll-menu="${f.id}" class="${f.id===payrollScreen?'selected':''}" aria-expanded="${f.id===payrollScreen}"><span>${f.icon}</span>${esc(f.name)}<span>${f.id===payrollScreen?'−':'+'}</span></button>`).join('')}${payrollRecords().some(r=>!r.payrollForm&&!r.hrSourceForm)?'<button type="button" data-payroll-action="legacy">Existing Payroll records</button>':''}</nav><div class="payroll-content">${draft.collapsed?'':`<section class="payroll-paper"><h3 class="payroll-title">${esc(form.title)}</h3><div class="payroll-entry no-print">${payrollTable(form.fields,draft.values)}${payrollScreen==='salary'?`<details class="payroll-details"><summary>Employee details</summary>${payrollTable(payrollCore.metadata,draft.values)}</details>`:''}<div class="payroll-controls">${form.report?'<button type="button" data-payroll-action="search">Search</button>':'<button type="button" data-payroll-action="open">Open</button><button type="button" class="primary" data-payroll-action="save" data-page-action-required="edit">Save</button>'}<button type="button" data-payroll-action="clear">Clear</button><button type="button" data-payroll-action="new">New</button></div>${draft.dirty?'<p class="hint">Unsaved changes</p>':''}</div>${payrollScreen==='generator'?`<details class="payroll-details no-print"><summary>Company salary calculation rules</summary><p class="hint">Enter your company’s approved calculation rules before generating salaries.</p>${payrollTable(payrollCore.rules,rules,'rules')}<div class="payroll-controls"><button type="button" data-payroll-action="save-rules" data-page-action-required="edit">Save Rules</button></div></details><div class="payroll-controls no-print"><button type="button" data-payroll-action="attendance">Attendance / Deductions</button><button type="button" data-payroll-action="generate" data-page-action-required="edit">Generate & Save Salary</button></div>`:''}${payrollScreen==='adjustment'?'<div class="payroll-controls no-print"><button type="button" data-payroll-action="attendance">Edit OT Adjustment</button></div>':''}${draft.showAttendance?payrollAttendanceTable():''}${payrollShowOpen&&!form.report?payrollOpenTable():''}${payrollShowReport&&form.report?payrollReport():''}</section>`}</div></div>`;
 $('#main').querySelectorAll('[data-page-action-required="edit"]').forEach(b=>b.disabled=payrollBusy||!pagePermission('edit'));
}
function payrollEmployeeRows(){const date=payrollDraft().values.date||payrollToday(),latest=new Map();for(const row of payrollRecords().filter(r=>r.payrollForm==='salary'&&payrollDateNumber(r.date)<=payrollDateNumber(date)).sort((a,b)=>payrollDateNumber(a.date)-payrollDateNumber(b.date)))latest.set(row.payrollValues.empId,row.payrollValues);return [...latest.values()].filter(v=>v.profileStatus==='Active'&&payrollMatches(v,payrollDraft().values,false));}
function payrollMatches(v,filters,useDate=true){for(const key of ['empId','branch','empGroup','department','section','designation','paymentGroup','floor','workingSection','sectionGroup','desigGroup','workGroup','workShift'])if(filters[key]&&filters[key]!=='All Shift'&&String(v[key]||'').toLowerCase()!==String(filters[key]).toLowerCase())return false;if(filters.profileStatus&&v.profileStatus&&v.profileStatus!==filters.profileStatus)return false;if(useDate&&filters.dateRange==='true'){const d=payrollDateNumber(v.date||v.period&&('01/'+v.period.slice(5)+'/'+v.period.slice(0,4)));if(d<payrollDateNumber(filters.fromDate)||d>payrollDateNumber(filters.toDate))return false;}return true;}
function payrollOpenTable(){const form=payrollCore.formById(payrollScreen),rows=payrollRecords().filter(r=>r.payrollForm===payrollScreen);return `<div class="payroll-open-list table-wrap"><table class="payroll-result"><thead><tr><th>Index</th><th>Emp ID</th><th>Name</th><th>Date</th><th>Amount</th><th>Status</th><th class="no-print">Open</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td><td>${esc(r.payrollValues.empId||'')}</td><td>${esc(r.name)}</td><td>${esc(r.date)}</td><td>${payrollMoney(r.quantity)}</td><td>${esc(r.payrollValues.profileStatus||'')}</td><td class="no-print"><button type="button" data-payroll-open="${esc(r.id)}">Open</button><button type="button" data-payroll-delete="${esc(r.id)}" data-page-action-required="edit">Delete</button></td></tr>`).join('')||'<tr><td colspan="7" class="payroll-empty">No saved records.</td></tr>'}</tbody></table></div>`;}
function payrollAttendanceTable(){const draft=payrollDraft(),period=payrollMonth(draft.values.date||payrollToday()),employees=payrollEmployeeRows();for(const e of employees)if(!draft.attendance.has(e.empId)){const saved=payrollRecords().find(r=>r.payrollForm==='attendance'&&r.payrollValues.empId===e.empId&&r.payrollValues.period===period);draft.attendance.set(e.empId,{empId:e.empId,empName:e.empName,period,...saved?.payrollValues});}const fields=payrollCore.attendance.filter(f=>!['empId','empName','period'].includes(f.key));return `<div class="payroll-result no-print"><h3 class="payroll-subheading">Attendance / Deductions · ${esc(period)}</h3><div class="table-wrap"><table class="payroll-attendance"><thead><tr><th>Emp ID</th><th>Name</th>${fields.map(f=>`<th>${esc(f.label)}</th>`).join('')}</tr></thead><tbody>${employees.map(e=>`<tr><td>${esc(e.empId)}</td><td>${esc(e.empName)}</td>${fields.map(f=>`<td><input type="number" min="0" max="1000000000" step="0.01" aria-label="${esc(e.empId+' '+f.label)}" data-payroll-attendance="${esc(e.empId)}" data-payroll-key="${f.key}" value="${esc(draft.attendance.get(e.empId)[f.key]??'')}" ${!pagePermission('edit')?'disabled':''}></td>`).join('')}</tr>`).join('')||'<tr><td colspan="16">Add Employee Salary records first.</td></tr>'}</tbody></table></div><div class="payroll-controls"><button type="button" data-payroll-action="save-attendance" data-page-action-required="edit">Save Attendance / Deductions</button></div></div>`;}
function payrollRecord(type,values,id){const normalized={...values};for(const f of [...(payrollCore.formById(type)?.fields||[]),...payrollCore.metadata])if(f.type==='date'&&normalized[f.key])normalized[f.key]=normalizeDate(normalized[f.key]);payrollCore.checkValues(type,normalized);const date=normalized.date||normalized.period&&('01/'+normalized.period.slice(5)+'/'+normalized.period.slice(0,4))||payrollToday();return {id:id||crypto.randomUUID(),reference:String(normalized.empId||normalized.index||type),name:String(normalized.empName||payrollCore.formById(type)?.name||type),quantity:Math.max(0,Number(normalized.gross||normalized.amount||normalized.net||normalized.NetPayableAmount||0)),date,status:'Completed',payrollForm:type,payrollValues:normalized};}
async function payrollSaveRows(rows,replaceIds=[]){if(!pagePermission('edit'))throw Error('EDIT permission is required.');const next=structuredClone(state),ids=new Set(replaceIds);next.records.payroll=[...payrollRecords().filter(r=>!ids.has(r.id)),...rows];payrollBusy=true;try{if(!await commit(next))return false;toast('Payroll saved online.');return true;}finally{payrollBusy=false;}}
function payrollLatestPolicy(type,employee,date){return payrollRecords().filter(r=>r.payrollForm===type&&r.payrollValues.profileStatus!=='Inactive'&&payrollDateNumber(r.date)<=payrollDateNumber(date)&&(!r.payrollValues.empId||r.payrollValues.empId===employee.empId)&&(!r.payrollValues.designation||r.payrollValues.designation===employee.designation)&&(!r.payrollValues.section||r.payrollValues.section===employee.section)&&(!r.payrollValues.empGroup||r.payrollValues.empGroup===employee.empGroup)).sort((a,b)=>(!!b.payrollValues.empId-!!a.payrollValues.empId)||payrollDateNumber(b.date)-payrollDateNumber(a.date))[0]?.payrollValues;}
async function payrollGenerate(){
 const draft=payrollDraft(),date=normalizeDate(draft.values.date),period=payrollMonth(date),rule=payrollRecords().find(r=>r.payrollForm==='rules')?.payrollValues||{},employees=payrollEmployeeRows();if(!employees.length)throw Error('No Employee Salary records match these filters.');
 const rows=[];for(const salary of employees){const a=payrollRecords().find(r=>r.payrollForm==='attendance'&&r.payrollValues.empId===salary.empId&&r.payrollValues.period===period)?.payrollValues;if(!a)throw Error('Save attendance for '+salary.empId+' before generating salaries.');for(const key of ['present','absent','leave','holiday'])if(a[key]===''||a[key]===undefined)throw Error('Enter all attendance day totals for '+salary.empId+'.');
  const ot=payrollLatestPolicy('ot-policy',salary,date),att=payrollLatestPolicy('att-policy',salary,date),increments=payrollRecords().filter(r=>r.payrollForm==='increment'&&r.payrollValues.empId===salary.empId&&r.payrollValues.profileStatus==='Active'&&payrollDateNumber(r.date)>payrollDateNumber(salary.date)&&payrollDateNumber(r.date)<=payrollDateNumber(date));
  const bonuses=payrollRecords().filter(r=>r.payrollForm==='bonus'&&r.payrollValues.empId===salary.empId&&r.payrollValues.profileStatus==='Active'&&payrollMonth(r.date)===period);
  const loans=payrollRecords().filter(r=>r.payrollForm==='loan'&&r.payrollValues.empId===salary.empId&&r.payrollValues.profileStatus==='Active').filter(r=>{const [y,m]=period.split('-').map(Number),[sy,sm]=payrollMonth(r.date).split('-').map(Number),elapsed=(y-sy)*12+m-sm;return elapsed>=0&&elapsed<Number(r.payrollValues.duration);});
  const calculated=payrollCore.calculate(salary,a,rule,{...(ot?.otRate?{otRate:ot.otRate}:{}),fixedAmount:ot?.fixedAmount||0,increment:increments.reduce((s,r)=>s+Number(r.payrollValues.amount),0),attendanceBonus:Number(a.absent)===0?att?.amount||0:0,bonus:bonuses.reduce((s,r)=>s+Number(r.payrollValues.amount),0),advanceDeduction:loans.reduce((s,r)=>s+Number(r.payrollValues.amount)/Number(r.payrollValues.duration),0)});
  const values=Object.fromEntries(payrollCore.generatedFields.filter(k=>calculated[k]!==undefined).map(k=>[k,String(calculated[k])]));rows.push({...payrollRecord('generated',values),date});
 }
 const replace=payrollRecords().filter(r=>r.payrollForm==='generated'&&r.payrollValues.period===period&&employees.some(e=>e.empId===r.payrollValues.empId)).map(r=>r.id);
 if(replace.length&&!confirm('Replace the generated salary for '+period+' for these '+employees.length+' employees?'))return;
 if(await payrollSaveRows(rows,replace)){payrollShowReport=true;renderPayroll();}
}
function payrollReport(){
 const draft=payrollDraft(),v=draft.values,form=payrollCore.formById(payrollScreen),period=payrollMonth(v.date||v.fromDate||payrollToday());let data=[];
 if(payrollScreen==='increment-report')data=payrollRecords().filter(r=>r.payrollForm==='increment').map(r=>({...r.payrollValues,date:r.date}));
 else if(payrollScreen==='bonus-sheet'&&v.bonusType==='Entry Bonus')data=payrollRecords().filter(r=>r.payrollForm==='bonus').map(r=>({...r.payrollValues,date:r.date}));
 else data=payrollRecords().filter(r=>r.payrollForm==='generated'&&(v.dateRange==='true'||r.payrollValues.period===period)).map(r=>({...r.payrollValues,date:r.date}));
 data=data.map(r=>{const employee=payrollRecords().filter(x=>x.payrollForm==='salary'&&x.payrollValues.empId===r.empId).sort((a,b)=>payrollDateNumber(b.date)-payrollDateNumber(a.date))[0]?.payrollValues||{};return {...employee,...r,empName:r.empName||employee.empName||''};});data=data.filter(r=>payrollMatches(r,v));if(payrollScreen==='sheet'&&v.reportType==='Monthly Staff Salary')data=data.filter(r=>r.empGroup==='Staff');if(payrollScreen==='sheet'&&v.genStatus==='Resigned Employee')data=data.filter(r=>r.profileStatus==='Inactive');if(payrollScreen==='earned'&&v.joinMonth&&v.condition)data=data.filter(r=>{const joined=r.joinDate?payrollMonth(r.joinDate):'';return joined&&(v.condition==='='?joined===v.joinMonth:v.condition==='<='?joined<=v.joinMonth:joined>=v.joinMonth);});
 const meta=`<div class="payroll-report-meta"><h3>FARNOOR GARMENTS LTD.</h3><p>1028/1/2 MALIBAGH BAZAR ROAD, DHAKA-1217</p><h3>${esc(v.reportTitle||form.title)}</h3><p>Period: ${esc(period)} · Print Date: ${esc(v.printDate||payrollToday())}</p></div>`;
 if(payrollScreen==='slip')return `<div class="payroll-result">${meta}<div class="payroll-slips">${data.map(r=>`<article class="payroll-slip"><h4>${esc(r.empName)} · ${esc(r.empId)}</h4><p>${esc(r.department||'')} / ${esc(r.designation||'')} · ${esc(r.period)}</p><table><tbody>${[['gross','Gross Salary'],['basic','Basic'],['houseRent','House Rent'],['medical','Medical'],['transport','Transport'],['food','Fooding'],['otAmount','Overtime'],['attendanceBonus','Attn Bonus'],['bonus','Bonus'],['absenceDeduction','Absent Deduction'],['advanceDeduction','Loan / Advance'],['ait','AIT'],['pf','PF'],['stamp','Stamp'],['net','Net Payable']].map(([k,l])=>`<tr><td>${l}</td><td>${payrollMoney(r[k])}</td></tr>`).join('')}</tbody></table><div class="payroll-signatures"><span>Prepared by</span><span>Received by</span></div></article>`).join('')||'<p class="payroll-empty">No generated salary for this period.</p>'}</div></div>`;
 let columns;
 if(payrollScreen==='increment-report')columns=[['empId','Emp ID'],['empName','Name'],['date','Effective Date'],['amount','Increment','money']];
 else if(payrollScreen==='bonus-sheet'){data=data.map(r=>({...r,amount:v.bonusType==='Entry Bonus'?r.amount:String(payrollCore.round(Number(r[v.bonusOn==='Gross'?'gross':'basic']||0)*Number(v.percentage||0)/100))}));columns=[['empId','Emp ID'],['empName','Name'],['department','Department'],['basic','Basic','money'],['gross','Gross','money'],['amount','Bonus','money']];}
 else if(payrollScreen==='earned'){const rule=payrollRecords().find(r=>r.payrollForm==='rules')?.payrollValues;if(!rule?.earnedDivisor)throw Error('Set the Earn Leave Daily Divisor in Company salary calculation rules.');data=data.map(r=>({...r,earnedAmount:String(payrollCore.round(Number(r.earnedDays||0)*Number(r[v.calcOn==='Gross'?'gross':'basic']||0)/Number(rule.earnedDivisor)*Number(v.percentage||0)/100))}));columns=[['empId','Emp ID'],['empName','Name'],['joinDate','Date of Join'],['earnedDays','Earn Leave Days'],['earnedAmount','Amount','money']];}
 else if(payrollScreen==='adjustment'||payrollScreen==='sheet'&&v.reportType==='Overtime Sheet')columns=[['empId','Emp ID'],['empName','Name'],['department','Department'],['otHours','OT Hours'],['otRate','OT Rate','money'],['otAmount','OT Amount','money']];
 else if(payrollScreen==='sheet'&&v.reportType==='Night and Dinner Bill')columns=[['empId','Emp ID'],['empName','Name'],['department','Department'],['night','Night Allowance','money']];
 else if(payrollScreen==='sheet'&&v.reportType==='Top Sheet Wages'){const grouped=new Map();for(const row of data){const key=row.department||'Unassigned';if(!grouped.has(key))grouped.set(key,{department:key,employees:0,gross:0,otAmount:0,net:0});const total=grouped.get(key);total.employees++;for(const amount of ['gross','otAmount','net'])total[amount]+=Number(row[amount]||0);}data=[...grouped.values()];columns=[['department','Department'],['employees','Employees'],['gross','Gross','money'],['otAmount','OT','money'],['net','Net Payable','money']];}
 else columns=[['empId','Emp ID'],['empName','Name'],['department','Department'],['gross','Gross','money'],['basic','Basic','money'],['houseRent','House Rent','money'],['medical','Medical','money'],['transport','Transport','money'],['food','Fooding','money'],['present','Present'],['absent','Absent'],['otHours','OT Hours'],['otAmount','OT Amount','money'],['attendanceBonus','Attn Bonus','money'],['bonus','Bonus','money'],['absenceDeduction','Absent Deduction','money'],['advanceDeduction','Advance Ded','money'],['ait','AIT','money'],['pf','PF','money'],['stamp','Stamp','money'],['net','Net Payable','money']];
 draft.reportData=data;draft.reportColumns=columns;
 return `<div class="payroll-result">${meta}<div class="payroll-controls no-print"><button type="button" data-payroll-action="csv">Export CSV</button><button type="button" data-payroll-action="xlsx">Export Excel</button></div><div class="table-wrap"><table><thead><tr><th>SL</th>${columns.map(c=>`<th>${esc(c[1])}</th>`).join('')}</tr></thead><tbody>${data.map((r,i)=>`<tr><td>${i+1}</td>${columns.map(c=>`<td>${c[2]==='money'?payrollMoney(r[c[0]]):esc(r[c[0]]||'')}</td>`).join('')}</tr>`).join('')||`<tr><td colspan="${columns.length+1}" class="payroll-empty">No saved records match this period and these filters.</td></tr>`}</tbody>${data.length?`<tfoot><tr class="payroll-total"><td>Total</td>${columns.map(c=>`<td>${c[2]==='money'?payrollMoney(data.reduce((s,r)=>s+Number(r[c[0]]||0),0)):''}</td>`).join('')}</tr></tfoot>`:''}</table></div><div class="payroll-signatures"><span>Prepared by</span><span>Checked by</span><span>Approved by</span></div></div>`;
}
$('#main').addEventListener('input',event=>{if(activePage!=='payroll')return;const t=event.target,draft=payrollDraft();if(t.dataset.payrollAttendance){draft.attendance.get(t.dataset.payrollAttendance)[t.dataset.payrollKey]=t.value;draft.dirty=true;}else if(t.dataset.payrollField&&t.dataset.payrollScope==='entry'){draft.values[t.dataset.payrollField]=t.type==='checkbox'?String(t.checked):t.value;draft.dirty=true;}});
$('#main').addEventListener('change',event=>{if(activePage!=='payroll')return;const t=event.target;if(t.dataset.payrollField&&t.dataset.payrollScope==='entry'){const draft=payrollDraft();draft.values[t.dataset.payrollField]=t.type==='checkbox'?String(t.checked):t.value;draft.dirty=true;}});
document.addEventListener('click',async event=>{
 if(activePage!=='payroll'||payrollBusy)return;const button=event.target.closest('button');if(!button)return;
 try{
  if(button.dataset.payrollAction==='legacy'){payrollLegacy=true;renderPage();return;}if(button.dataset.payrollAction==='back'){payrollLegacy=false;renderPage();return;}if(button.dataset.payrollMenu){const id=button.dataset.payrollMenu;if(id===payrollScreen)payrollDraft().collapsed=!payrollDraft().collapsed;else{payrollScreen=id;payrollDraft().collapsed=false;payrollShowOpen=false;payrollShowReport=false;}renderPayroll();return;}
  if(button.dataset.payrollClear){const input=$('#pr-'+button.dataset.payrollScope+'-'+button.dataset.payrollClear);input.value='';if(input.type==='checkbox')input.checked=false;if(button.dataset.payrollScope==='entry'){payrollDraft().values[button.dataset.payrollClear]='';payrollDraft().dirty=true;}return;}
  if(button.dataset.payrollOpen){const r=payrollRecords().find(r=>r.id===button.dataset.payrollOpen);payrollDrafts.set(payrollScreen,{id:r.id,values:{...r.payrollValues},dirty:false,attendance:new Map()});payrollShowOpen=false;renderPayroll();return;}
  if(button.dataset.payrollDelete){if(!pagePermission('edit'))throw Error('EDIT permission is required.');if(confirm('Delete this Payroll record?')){await payrollSaveRows([], [button.dataset.payrollDelete]);renderPayroll();}return;}
  const action=button.dataset.payrollAction;if(!action)return;const draft=payrollDraft(),form=payrollCore.formById(payrollScreen);
  if(['save','save-rules','save-attendance','generate'].includes(action)&&!pagePermission('edit'))throw Error('EDIT permission is required.');
  if(action==='open'){payrollShowOpen=!payrollShowOpen;renderPayroll();}
  if(action==='new'||action==='clear'){if(draft.dirty&&!confirm('Clear the unsaved Payroll inputs?'))return;payrollDrafts.set(payrollScreen,payrollNewDraft(payrollScreen));payrollShowOpen=false;payrollShowReport=false;renderPayroll();}
  if(action==='save'){const r=payrollRecord(payrollScreen,draft.values,draft.id);if(await payrollSaveRows([r],draft.id?[draft.id]:[])){draft.id=r.id;draft.values=r.payrollValues;draft.dirty=false;renderPayroll();}}
  if(action==='search'){for(const f of form.fields)if(f.type==='date'&&draft.values[f.key])draft.values[f.key]=normalizeDate(draft.values[f.key]);if(draft.values.dateRange==='true'&&payrollDateNumber(draft.values.fromDate)>payrollDateNumber(draft.values.toDate))throw Error('Date From must be before Date To.');payrollShowReport=true;renderPayroll();}
  if(action==='attendance'){draft.showAttendance=!draft.showAttendance;renderPayroll();}
  if(action==='save-attendance'){const values=[...draft.attendance.values()];if(!values.length)throw Error('No employee attendance to save.');const rows=values.map(v=>payrollRecord('attendance',v)),ids=payrollRecords().filter(r=>r.payrollForm==='attendance'&&values.some(v=>v.empId===r.payrollValues.empId&&v.period===r.payrollValues.period)).map(r=>r.id);if(await payrollSaveRows(rows,ids)){draft.dirty=false;renderPayroll();}}
  if(action==='save-rules'){const values={};$('#main').querySelectorAll('[data-payroll-scope="rules"][data-payroll-field]').forEach(input=>values[input.dataset.payrollField]=input.value);for(const field of payrollCore.rules)if(values[field.key]==='')throw Error('Enter '+field.label+'.');const old=payrollRecords().filter(r=>r.payrollForm==='rules');if(await payrollSaveRows([payrollRecord('rules',values)],old.map(r=>r.id)))renderPayroll();}
  if(action==='generate')await payrollGenerate();
  if(action==='csv'){const cols=draft.reportColumns||[],rows=draft.reportData||[],quote=v=>'"'+String(v??'').replace(/"/g,'""')+'"';download('farnoor-'+payrollScreen+'.csv','\ufeff'+[cols.map(c=>quote(c[1])).join(','),...rows.map(r=>cols.map(c=>quote(r[c[0]])).join(','))].join('\r\n'),'text/csv');}
  if(action==='xlsx'){const cols=draft.reportColumns||[],rows=draft.reportData||[];download('farnoor-'+payrollScreen+'.xlsx',makeXlsx([cols.map(c=>c[1]),...rows.map(r=>cols.map(c=>c[2]==='money'?Number(r[c[0]]||0):r[c[0]]||''))], 'PAYROLL'),'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');}
 }catch(error){toast(error.message);}
});

;
;/* payroll-source.js */
'use strict';
// Original imported entries stay separate from current salary calculations.
const payrollSourcePreviousRender=renderPayroll;
let payrollSourceVisible=false,payrollSourceQuery='',payrollSourceKind='salary';
const payrollSourceAll=()=>payrollRecords().filter(r=>r.hrSource==='AutoPro'&&r.hrSourceForm);
const payrollSourceRows=()=>payrollSourceAll().filter(r=>r.hrSourceForm===payrollSourceKind);
renderPayroll=function(){
 payrollSourcePreviousRender();
 const all=payrollSourceAll(),rows=payrollSourceRows();
 if(!all.length)return;
 const titles={salary:'Salary records',increment:'Increment records',loan:'Loan / Advance records',bonus:'Bonus records','ot-policy':'OT Policy records','att-policy':'Attendance Bonus Policy records',top:'TopSheet records'};
 $('#main .payroll-menu').insertAdjacentHTML('beforeend',[...new Set(all.map(r=>r.hrSourceForm))].map(kind=>`<button type="button" data-payroll-source-toggle="${esc(kind)}">AutoPro · ${esc(titles[kind]||kind)} (${all.filter(r=>r.hrSourceForm===kind).length})</button>`).join(''));
 if(!payrollSourceVisible)return;
 const shown=rows.filter(r=>JSON.stringify(r.hrSourceValues).toLowerCase().includes(payrollSourceQuery.toLowerCase()));
 const columns=Object.keys(rows[0]?.hrSourceValues||{}).filter(k=>!['Author','Time Stamp'].includes(k));
 $('#main .payroll-content').innerHTML=`<section class="payroll-paper"><h3 class="payroll-title">AUTOPRO · ORIGINAL ${esc((titles[payrollSourceKind]||payrollSourceKind).toUpperCase())}</h3><p class="hint">Original saved entries. Blank source fields are preserved. These records do not generate new salaries.</p><label class="no-print">Search original records<input data-payroll-source-search value="${esc(payrollSourceQuery)}" type="search"></label><p>${shown.length} / ${rows.length} records</p><div class="table-wrap"><table class="payroll-result"><thead><tr>${columns.map(k=>`<th>${esc(k)}</th>`).join('')}<th class="no-print">Details</th></tr></thead><tbody>${shown.map(r=>`<tr>${columns.map(k=>`<td>${esc(r.hrSourceValues[k]||'')}</td>`).join('')}<td class="no-print"><button type="button" data-payroll-source-view="${esc(r.id)}">View</button></td></tr>`).join('')}</tbody></table></div></section>`;
};
document.addEventListener('click',event=>{
 const toggle=event.target.closest('[data-payroll-source-toggle]');
 if(toggle){if(activePage!=='payroll'||!canPage('payroll'))return;const kind=toggle.dataset.payrollSourceToggle;payrollSourceVisible=kind!==payrollSourceKind||!payrollSourceVisible;payrollSourceKind=kind;payrollSourceQuery='';renderPayroll();}
 if(event.target.closest('[data-payroll-menu]')&&payrollSourceVisible){payrollSourceVisible=false;renderPayroll();}
 const button=event.target.closest('[data-payroll-source-view]');
 if(!button||activePage!=='payroll'||!canPage('payroll','view'))return;
 const row=payrollSourceRows().find(r=>r.id===button.dataset.payrollSourceView);if(!row)return;
 let dialog=$('#payrollSourceDialog');if(!dialog){dialog=document.createElement('dialog');dialog.id='payrollSourceDialog';document.body.append(dialog);}
 dialog.innerHTML=`<form method="dialog"><h2>AutoPro · Original ${esc(payrollCore.formById(row.hrSourceForm)?.name||row.hrSourceForm)} entry</h2><table class="payroll-form-table"><tbody>${Object.entries(row.hrSourceValues).map(([k,v])=>`<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table><p class="hint">Imported ${esc(row.hrImportedAt.slice(0,10))}. Empty fields were empty in AutoPro.</p><button>Close</button></form>`;dialog.showModal();
});
document.addEventListener('change',event=>{if(event.target.matches('[data-payroll-source-search]')){payrollSourceQuery=event.target.value;renderPayroll();}});

// Payroll pages belong directly beneath HR > Payroll in the sidebar.
const payrollSidebarPriorNavigation=renderNavigation;
function payrollSidebarMenus(){
 const sourceTitles={salary:'Salary records',increment:'Increment records',loan:'Loan / Advance records',bonus:'Bonus records','ot-policy':'OT Policy records','att-policy':'Attendance Bonus Policy records',top:'TopSheet records'};
 const sourceIcons={salary:'▤',increment:'⤴',loan:'⇄',bonus:'✦','ot-policy':'◉','att-policy':'☑',top:'▥'};
 const all=payrollSourceAll(),kinds=[...new Set(all.map(r=>r.hrSourceForm))];
 const button=(key,icon,label,attribute,selected,index)=>{if(!submenuLooks.has(key))submenuLooks.set(key,{hue:(index*137+22)%360,saturation:66,lightness:93,shape:['rounded','ticket','rail','pill','underline'][index%5]});return '<button type="button" class="page-button '+(selected?'active selected':'')+'" '+attribute+' '+submenuAttributes(key,1)+' aria-expanded="'+selected+'"><span class="submenu-icon" aria-hidden="true">'+icon+'</span><span class="submenu-label">'+esc(label)+'</span><span class="submenu-toggle">'+(selected?'−':'+')+'</span></button>';};
 const forms=payrollCore.forms.map((f,i)=>button('payroll-form:'+f.id,f.icon,f.name,'data-payroll-menu="'+esc(f.id)+'"',!payrollSourceVisible&&f.id===payrollScreen,i)).join('');
 const legacy=payrollRecords().some(r=>!r.payrollForm&&!r.hrSourceForm)?button('payroll-legacy','▧','Existing Payroll records','data-payroll-action="legacy"',payrollLegacy,21):'';
 const sources=kinds.map((kind,i)=>button('payroll-source:'+kind,sourceIcons[kind]||'◈','AutoPro · '+(sourceTitles[kind]||kind)+' ('+all.filter(r=>r.hrSourceForm===kind).length+')','data-payroll-source-toggle="'+esc(kind)+'"',payrollSourceVisible&&payrollSourceKind===kind,payrollCore.forms.length+i)).join('');
 return '<nav class="payroll-menu payroll-sidebar no-print" aria-label="Payroll menus">'+forms+legacy+sources+'</nav>';
}

renderNavigation=function(){payrollSidebarPriorNavigation();const parent=$('#navigation [data-page="payroll"]');if(parent){parent.setAttribute('aria-expanded',String(activePage==='payroll'));if(activePage==='payroll')parent.insertAdjacentHTML('afterend',payrollSidebarMenus());}};
const payrollSidebarPriorRender=renderPayroll;
renderPayroll=function(){payrollSidebarPriorRender();$('#main .payroll-menu')?.remove();$('#main .payroll-workspace')?.classList.add('payroll-sidebar-content');renderNavigation();};

;
;/* page-actions.js */
'use strict';
function pagePermission(action,page=activePage){return !!page&&FarnoorAccess.canAction(page,action);}
function buttonPermissionPage(button){const target=button.dataset.scheduleTarget||button.dataset.reportFile;const file=target&&(state.productionSchedules||[]).find(file=>file.id===target);return file?productionPageId(file.section,true):activePage;}
function requiredButtonAction(button){
 if(button.dataset.pageAction)return button.dataset.pageAction;
 if(button.dataset.pageActionRequired)return button.dataset.pageActionRequired;
 const action=button.dataset.accountAction||button.dataset.orderAction||button.dataset.productionAction;
 if(action==='print')return 'print';
 if(action==='pdf')return 'pdf';
 if(['new','row','save','edit','delete'].includes(action)||button.id==='newRecord'||button.dataset.edit!==undefined||button.dataset.delete!==undefined||button.dataset.removeRow!==undefined||button.dataset.removeOrderRow!==undefined||button.dataset.orderRemove!==undefined||button.dataset.removePlan!==undefined)return 'edit';
 return null;
}
function applyActionControls(){
 const main=$('#main');document.body.dataset.printDenied=String(!pagePermission('print'));
 if(adminView||!activePage)return;
 const entryPage=['admin-personal-new-entry','admin-maternity-new-entry','admin-service-new-entry','admin-service-file','admin-warning-new-entry','admin-warning-letter'].includes(activePage);if(entryPage){const title=main.querySelector('.page-heading');if(title){title.style.justifyContent='center';title.style.textAlign='center';}}
 let toolbar=main.querySelector('.page-action-toolbar');if(entryPage){toolbar?.remove();toolbar=null;}
 if(((activePage.startsWith('schedule-')||activePage.startsWith('store-'))||(['order-report','order-entry','booking-entry','booking-report'].includes(activePage)||activePage.startsWith('sewing-line-page-')))){toolbar?.remove();toolbar=null;}
 if(!toolbar&&!entryPage&&!['hr-profile-search','admin-service-print','admin-service-entry-report','admin-warning-entry-report','admin-personal-entry-report','admin-maternity-print','admin-personal-print','admin-personal-file'].includes(activePage)&&!activePage.startsWith('admin-personal-form-')&&!activePage.startsWith('admin-maternity-form-')&&!((activePage.startsWith('schedule-')||activePage.startsWith('store-'))||(['order-report','order-entry','booking-entry','booking-report'].includes(activePage)||activePage.startsWith('sewing-line-page-')))){toolbar=document.createElement('div');toolbar.className='page-action-toolbar no-print';toolbar.innerHTML='<button type="button" data-page-action="pdf">Pdf</button><button type="button" data-page-action="print">Print</button>';main.prepend(toolbar);}
 main.querySelectorAll('button').forEach(button=>{const action=requiredButtonAction(button);if(action){button.disabled=button.dataset.busy==='true'||!pagePermission(action,buttonPermissionPage(button));button.title=button.disabled?action.toUpperCase()+' permission is required':'';}});
 main.querySelectorAll('.account-paper input,.account-paper select,.account-paper textarea,.order-paper input,.order-paper select,.order-paper textarea').forEach(input=>{if(input.classList.contains('balance-select')||input.classList.contains('production-section-select'))return;input.disabled=!pagePermission('edit',buttonPermissionPage(input));});
}
// Capture before page-specific listeners, including controls recreated by report views.
document.addEventListener('click',event=>{const button=event.target.closest('button');if(!button||!button.closest('#main')||adminView||!activePage)return;const action=requiredButtonAction(button);if(action&&!pagePermission(action,buttonPermissionPage(button))){event.preventDefault();event.stopImmediatePropagation();toast(action.toUpperCase()+' permission is required.');return;}if(button.dataset.pageAction){event.preventDefault();event.stopImmediatePropagation();if(action==='pdf')exportPagePDF();else window.print();}},true);
document.addEventListener('submit',event=>{if(event.target.id==='recordForm'&&!pagePermission('edit')){event.preventDefault();event.stopImmediatePropagation();toast('EDIT permission is required.');}},true);
const originalWindowPrint=window.print.bind(window);
window.print=()=>{if(!pagePermission('print')){toast('PRINT permission is required.');return;}originalWindowPrint();};
new MutationObserver(applyActionControls).observe($('#main'),{childList:true,subtree:true});

// A downloadable PDF, separate from the Print dialog. Canvas text retains Unicode names.
function exportPagePDF(root=$('#main')){
 if(!pagePermission('pdf')){toast('PDF permission is required.');return;}
 try{
  const page=pageInfo(activePage).page,lines=[];
  const visible=element=>element.getClientRects().length>0;
  const value=cell=>{const inputs=[...cell.querySelectorAll('input:not([type=checkbox]),select,textarea')];return inputs.length?inputs.map(input=>input.value).join(' '):cell.textContent.trim().replace(/\s+/g,' ');};
  root.querySelectorAll('.file-caption,.order-saved-clock,.production-saved-clock,.production-report-meta,.production-entry-meta,.payroll-report-meta').forEach(el=>{if(visible(el))lines.push(el.textContent.trim());});
  root.querySelectorAll(activePage==='payroll'?($('#main').querySelector('.payroll-result')?'.payroll-result table':'.payroll-form-table'):'table').forEach(table=>{if(!visible(table))return;table.querySelectorAll('tr').forEach(row=>{if(!visible(row))return;const cells=[...row.querySelectorAll('th,td')].filter(cell=>!cell.classList.contains('no-print')&&!cell.querySelector('.row-actions'));lines.push(cells.map(value).join('  |  '));});lines.push('');});
  const signatures=root.querySelector('.signatures');if(signatures&&visible(signatures))lines.push([...signatures.querySelectorAll('span')].map(node=>node.textContent.trim()).join('   '));if(!lines.length)lines.push('No displayed records.');
  const canvas=document.createElement('canvas');canvas.width=1240;canvas.height=1754;const ctx=canvas.getContext('2d'),images=[];let y=0;
  function sheet(){ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#174c3b';ctx.font='bold 30px "Segoe UI", "Nirmala UI", sans-serif';ctx.fillText('FARNOOR GARMENTS LTD.',65,70);ctx.font='18px "Segoe UI", "Nirmala UI", sans-serif';ctx.fillText('1028/1/2 MALIBAGH BAZAR ROAD, DHAKA-1217',65,102);ctx.font='bold 24px "Segoe UI", "Nirmala UI", sans-serif';ctx.fillText(page.name,65,145);ctx.font='18px "Segoe UI", "Nirmala UI", sans-serif';ctx.fillText(new Date().toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}),65,177);ctx.fillStyle='#17271f';ctx.font='20px "Segoe UI", "Nirmala UI", sans-serif';y=220;}
  function finish(){ctx.font='16px "Segoe UI",sans-serif';ctx.fillText('Page '+(images.length+1),65,1700);images.push(Uint8Array.from(atob(canvas.toDataURL('image/jpeg',0.9).split(',')[1]),c=>c.charCodeAt(0)));}
  sheet();
  for(const line of lines){let wrapped='';for(const word of line.split(/\s+/)){const test=wrapped?wrapped+' '+word:word;if(ctx.measureText(test).width>1100&&wrapped){if(y>1640){finish();sheet();}ctx.fillText(wrapped,65,y);y+=29;wrapped=word;}else wrapped=test;}if(y>1640){finish();sheet();}ctx.fillText(wrapped,65,y);y+=32;}
  finish();download(activePage+'.pdf',makeImagePDF(images),'application/pdf');toast('PDF downloaded.');
 }catch(error){toast('Could not create PDF: '+error.message);}
}
function makeImagePDF(images){
 const encode=text=>new TextEncoder().encode(text),parts=[],offsets=[0];let length=0;
 const append=data=>{const bytes=typeof data==='string'?encode(data):data;parts.push(bytes);length+=bytes.length;};
 const object=(id,content)=>{offsets[id]=length;append(id+' 0 obj\n');append(content);append('\nendobj\n');};
 append('%PDF-1.4\n');object(1,'<< /Type /Catalog /Pages 2 0 R >>');object(2,'<< /Type /Pages /Count '+images.length+' /Kids ['+images.map((_,i)=>(3+i*3)+' 0 R').join(' ')+'] >>');
 images.forEach((jpeg,index)=>{const pageId=3+index*3,imageId=pageId+1,streamId=pageId+2;object(pageId,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 '+imageId+' 0 R >> >> /Contents '+streamId+' 0 R >>');offsets[imageId]=length;append(imageId+' 0 obj\n<< /Type /XObject /Subtype /Image /Width 1240 /Height 1754 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+jpeg.length+' >>\nstream\n');append(jpeg);append('\nendstream\nendobj\n');const stream='q\n595.28 0 0 841.89 0 0 cm\n/Im0 Do\nQ';object(streamId,'<< /Length '+encode(stream).length+' >>\nstream\n'+stream+'\nendstream');});
 const xref=length;append('xref\n0 '+offsets.length+'\n0000000000 65535 f \n');for(let i=1;i<offsets.length;i++)append(String(offsets[i]).padStart(10,'0')+' 00000 n \n');append('trailer\n<< /Size '+offsets.length+' /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF');return new Blob(parts,{type:'application/pdf'});
}

;
;/* store.js */
'use strict';
function nextStoreReference(){const year=new Intl.DateTimeFormat('en',{year:'numeric',timeZone:'Asia/Dhaka'}).format(new Date());const prefix='STORE FGL-'+year+'.';let max=0;for(const files of Object.values(state.records||{}))if(Array.isArray(files))for(const file of files){if(file.storeCategory&&String(file.reference||'').startsWith(prefix)){const suffix=String(file.reference).slice(prefix.length);if(/^\d+$/.test(suffix))max=Math.max(max,Number(suffix));}}return prefix+String(max+1).padStart(4,'0');}
const storeDrafts=new Map();let storeEditing=null,storeSelected=null,storeSurplus=[],storeSavePending=false;
const storeBlank=category=>Object.fromEntries(StoreCore.columns(category).map(key=>[key,'']));
const storeCategory=()=>pageInfo(activePage).page.storeCategory;
const storeDelivery=()=>(activePage?.endsWith('-delivery')||activePage?.endsWith('-delivery-report'))||false;
const storeDraftKey=category=>category+(storeDelivery()?':delivery':':receive');
const storeReport=category=>'store-'+category.toLowerCase()+'-report';
const storeFiles=category=>(state.records[StoreCore.key(category)]||[]).filter(file=>(file.storeMovement==='Delivery')===storeDelivery()).slice().sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
function storeDraft(category){const key=storeDraftKey(category);if(!storeDrafts.has(key))storeDrafts.set(key,{rows:Array.from({length:4},()=>storeBlank(category))});return storeDrafts.get(key);}
function storeIdentity(category,file){return `<div class="store-brand"><img src="Farnoor_New_Logo.png" alt="Farnoor logo"><div><h2>FARNOOR GARMENTS LTD.</h2><p>1028/1/2 Malibagh Bazar Road, Dhaka-1217</p></div></div><h3 class="store-title">${esc(category.toUpperCase())}</h3><p class="store-date">${file?'Saved: '+esc(new Date(file.createdAt).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'})):'Date: <span class="store-live-clock"></span>'}</p>`;}
function storeSignatures(){return '<div class="store-signatures">'+['Store Officer','Store Incharg','Head of Production','General Manager'].map(name=>'<span>'+name+'</span>').join('')+'</div>';}
function storeTable(category,rows,edit=false){const columns=StoreCore.viewColumns(category,storeDelivery());return `<div class="table-wrap"><table class="store-table"><thead><tr><th>SL</th>${columns.map(key=>`<th>${StoreCore.viewLabel(category,key,storeDelivery())}</th>`).join('')}${edit?'<th class="store-remove no-print"></th>':''}</tr></thead><tbody>${rows.map((row,index)=>`<tr><td>${index+1}</td>${columns.map((key,col)=>`<td>${key==='excess'&&typeof storeVarianceCell==='function'&&storeVarianceEnabled(category)?storeVarianceCell(row,edit,index,col):edit?`<input data-store-row="${index}" data-store-col="${col}" data-store-field="${key}" aria-label="${StoreCore.viewLabel(category,key,storeDelivery())} row ${index+1}" maxlength="500" value="${esc(row[key])}" ${['orderQty','receiveQty','excess'].includes(key)?'inputmode="decimal"':''}>`:esc(row[key])}</td>`).join('')}${edit?`<td class="store-remove no-print"><button data-store-action="remove" data-row="${index}" data-page-action-required="edit" aria-label="Delete row ${index+1}">−</button></td>`:''}</tr>`).join('')}</tbody></table></div>`;}
function storeActions(file){return `<div class="store-actions no-print">${['Print','PDF','Edit','Excel','Delete'].map(action=>`<button class="store-${action.toLowerCase()}" data-store-action="${action.toLowerCase()}" data-store-id="${esc(file.id)}" data-page-action-required="${['Edit','Delete'].includes(action)?'edit':action==='Print'?'print':action==='PDF'?'pdf':'view'}">${action}</button>`).join('')}</div>`;}
function renderStoreFiles(category){return storeFiles(category).map(file=>`<article class="store-document ${storeSelected===file.id?'store-print-selected':''}" data-store-file="${esc(file.id)}">${storeActions(file)}<section class="account-paper store-paper">${storeIdentity(category,file)}${storeTable(category,file.rows)}${storeSignatures()}</section></article>`).join('')||'<p class="empty">No saved files yet.</p>';}
function renderStore(){const category=storeCategory(),editing=storeEditing?.category===category&&(storeEditing.draft.storeMovement==='Delivery')===storeDelivery(),report=activePage.endsWith('-report');if(report&&!editing){$('#main').innerHTML=heading('STORE',storeDelivery()?'Delivery Report':'Recive Report',category)+renderStoreFiles(category);return;}const draft=editing?storeEditing.draft:storeDraft(category);$('#main').innerHTML=heading('STORE',editing?'Edit '+category:storeDelivery()?'Delivery':category==='Requisition'?'New Requisition':'Recive',category)+`<div class="store-editor"><section class="account-paper store-paper">${storeIdentity(category)}${storeTable(category,draft.rows,true)}<div class="store-controls no-print"><button data-store-action="row" data-page-action-required="edit">+Row</button><button id="storeSave" class="primary" data-store-action="save" data-page-action-required="edit">Save</button>${editing?'<button data-store-action="cancel">Cancel</button>':''}</div>${storeSignatures()}</section>${category==='Requisition'?'<aside id="storeStockHint" class="store-stock-hint no-print" aria-live="polite" hidden></aside>':''}</div>`;storeTick();if(category==='Requisition'){loadStoreSurplus();const row=draft.rows.find(row=>row.item?.trim());if(row)storeHint(row);}}
const previousStoreRender=renderPage;renderPage=function(){if(activePage&&pageInfo(activePage)?.page.storeCategory){if(!FarnoorAccess.canPage(activePage)){renderOverview();return;}renderStore();if(typeof applyActionControls==='function')applyActionControls();}else previousStoreRender();};
function storeTick(){document.querySelectorAll('.store-live-clock').forEach(node=>node.textContent=new Date().toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}));}setInterval(storeTick,1000);
async function loadStoreSurplus(){try{const response=await FarnoorAPI.request('/api/store/surplus');const body=await response.json();if(!response.ok)throw Error(body.error);storeSurplus=body.rows||[];const input=document.activeElement;if(input?.dataset.storeRow){const draft=storeEditing?.category==='Requisition'?storeEditing.draft:storeDraft('Requisition');storeHint(draft.rows[Number(input.dataset.storeRow)]);}}catch{storeSurplus=StoreCore.surplus(state.records);} }
function storeHint(row){const node=$('#storeStockHint');if(!node)return;const matches=StoreCore.matches(storeSurplus,row.item,row.size);node.hidden=!matches.length;node.innerHTML='<h3>Available excess stock</h3>'+matches.map(match=>`<p><strong>${esc(match.category)} · ${esc(match.item)}</strong><br>Size: ${esc(match.size||'—')} · Excess: ${esc(match.excess)}<br>${esc(match.colour||'')} ${esc(match.date||'')}</p>`).join('');}
$('#main').addEventListener('input',event=>{const input=event.target;if(!input.matches('[data-store-field]'))return;const category=storeCategory(),draft=storeEditing?.category===category&&(storeEditing.draft.storeMovement==='Delivery')===storeDelivery()?storeEditing.draft:storeDraft(category),row=draft.rows[Number(input.dataset.storeRow)];row[input.dataset.storeField]=input.value;if(category==='Requisition')storeHint(row);});
$('#main').addEventListener('keydown',event=>{const input=event.target;if(!input.matches('[data-store-field]'))return;if(!['Enter','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)||event.altKey||event.ctrlKey||event.metaKey)return;event.preventDefault();const cols=StoreCore.viewColumns(storeCategory(),storeDelivery()).length,all=[...$('#main').querySelectorAll('[data-store-field]')],index=all.indexOf(input),shift=event.key==='ArrowUp'?-cols:event.key==='ArrowDown'?cols:event.key==='ArrowLeft'?-1:1,target=all[index+shift];if(target){target.focus();target.select();}else if(event.key==='Enter'&&index===all.length-1)$('#storeSave').focus();});
async function saveStore(){const category=storeCategory(),edit=storeEditing?.category===category&&(storeEditing.draft.storeMovement==='Delivery')===storeDelivery()?storeEditing:null,draft=edit?edit.draft:storeDraft(category),button=$('#storeSave');if(storeSavePending||button?.dataset.saving)return;storeSavePending=true;button.dataset.saving='yes';button.disabled=true;button.textContent='Saving…';const progress=document.createElement('p');progress.className='store-save-progress no-print';progress.setAttribute('role','status');progress.textContent='Saving to the online database. Please wait; large data may take up to a minute.';button.closest('.store-controls').after(progress);await new Promise(resolve=>setTimeout(resolve,0));try{const rows=StoreCore.validate(category,draft.rows.filter(row=>Object.values(row).some(value=>String(value).trim())),normalizeDate),key=StoreCore.key(category),next={...state,records:{...state.records,[StoreCore.key(category)]:[...(state.records[StoreCore.key(category)]||[])]}};next.records[key]||=[];const original=edit&&next.records[key].find(file=>file.id===edit.id);if(edit&&(!original||JSON.stringify(original)!==edit.original))throw Error('This file changed. Refresh before saving.');const delivery=storeDelivery();const now=new Date().toISOString(),file={id:original?.id||'STORE-'+crypto.randomUUID(),reference:original?.reference||nextStoreReference(),name:category,quantity:rows.reduce((sum,row)=>sum+Number(row.receiveQty||0),0),date:new Date().toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),status:'Completed',storeCategory:category,storeMovement:delivery?'Delivery':'Receive',createdAt:original?.createdAt||now,updatedAt:now,rows};if(original)next.records[key][next.records[key].indexOf(original)]=file;else next.records[key].unshift(file);if(await commit(next,{storeFile:file})){storeEditing=null;storeDrafts.delete(storeDraftKey(category));storeSelected=file.id;const destination=delivery?'store-'+category.toLowerCase()+'-delivery-report':storeReport(category);if(FarnoorAccess.canPage(destination))goPage(destination);else renderStore();toast('Store file saved online.');}}catch(error){toast(error.message);}finally{storeSavePending=false;delete button.dataset.saving;button.disabled=false;button.textContent='Save';progress.remove();}}
$('#main').addEventListener('click',async event=>{const button=event.target.closest('[data-store-action]');if(!button)return;const action=button.dataset.storeAction,category=storeCategory(),file=storeFiles(category).find(file=>file.id===button.dataset.storeId),draft=storeEditing?.category===category&&(storeEditing.draft.storeMovement==='Delivery')===storeDelivery()?storeEditing.draft:storeDraft(category);if(action==='save')return saveStore();if(action==='row'){if(draft.rows.length>=1000)return toast('Maximum 1000 rows.');draft.rows.push(storeBlank(category));renderStore();return;}if(action==='remove'){draft.rows.splice(Number(button.dataset.row),1);if(!draft.rows.length)draft.rows.push(storeBlank(category));renderStore();return;}if(action==='cancel'){storeEditing=null;renderStore();return;}if(!file)return;if(action==='edit'){storeEditing={category,id:file.id,original:JSON.stringify(file),draft:structuredClone(file)};renderStore();return;}if(action==='delete'){if(!confirm('Delete this saved Store file? Download a backup first if needed.'))return;const next=structuredClone(state);next.records[StoreCore.key(category)]=next.records[StoreCore.key(category)].filter(item=>item.id!==file.id);if(await commit(next)){renderStore();toast('Store file deleted.');}return;}if(action==='excel'){download(file.reference+'.xlsx',makeXlsx([['FARNOOR GARMENTS LTD.'],['1028/1/2 Malibagh Bazar Road, Dhaka-1217'],[category.toUpperCase()],['Saved',file.createdAt],['SL',...StoreCore.viewColumns(category,file.storeMovement==='Delivery').map(key=>StoreCore.viewLabel(category,key,file.storeMovement==='Delivery'))],...file.rows.map((row,index)=>[index+1,...StoreCore.viewColumns(category,file.storeMovement==='Delivery').map(key=>['orderQty','receiveQty','excess'].includes(key)&&row[key]?Number(row[key]):row[key])]),[],['Store Officer','Store Incharg','Head of Production','General Manager']],category.toUpperCase()),'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');return;}if(action==='pdf')return storePDF(file);if(action==='print'){storeSelected=file.id;document.querySelectorAll('[data-store-file]').forEach(node=>node.classList.toggle('store-print-selected',node.dataset.storeFile===file.id));document.body.classList.add('store-printing');try{window.print();}finally{setTimeout(()=>document.body.classList.remove('store-printing'),1000);}}});
async function storePDF(file){try{const canvas=document.createElement('canvas');canvas.width=1240;canvas.height=1754;const context=canvas.getContext('2d'),images=[],category=file.storeCategory,cols=['sl',...StoreCore.viewColumns(category,file.storeMovement==='Delivery')],width=1140/cols.length;let logo;try{logo=new Image();logo.src='Farnoor_New_Logo.png';await logo.decode();}catch{}const lines=(text,maxWidth)=>{context.font='16px Segoe UI, Nirmala UI, sans-serif';let output=[''];for(const word of String(text).split(/\s+/)){let last=output.length-1,test=output[last]?output[last]+' '+word:word;if(context.measureText(test).width>maxWidth&&output[last])output.push(word);else output[last]=test;}return output;};let y;function header(){context.fillStyle='white';context.fillRect(0,0,1240,1754);if(logo)context.drawImage(logo,180,35,65,65);context.fillStyle='#183e31';context.font='bold 30px Segoe UI';context.textAlign='center';context.fillText('FARNOOR GARMENTS LTD.',680,65);context.font='18px Segoe UI';context.fillText('1028/1/2 Malibagh Bazar Road, Dhaka-1217',680,95);context.font='bold 26px Segoe UI';context.fillText(category.toUpperCase(),620,145);context.textAlign='left';context.font='16px Segoe UI';context.fillText('Saved: '+new Date(file.createdAt).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}),50,184);y=210;draw(cols.map(key=>key==='sl'?'SL':StoreCore.viewLabel(category,key,file.storeMovement==='Delivery')),true);}function draw(values,head=false){const wrapped=values.map(value=>lines(value,width-12)),height=Math.max(48,...wrapped.map(value=>value.length*22+16));context.strokeStyle='#243e32';context.lineWidth=1;values.forEach((value,index)=>{const x=50+index*width;if(head){context.fillStyle='#e3eee7';context.fillRect(x,y,width,height);}context.strokeRect(x,y,width,height);context.fillStyle='#12251b';context.font=(head?'bold ':'')+'16px Segoe UI, Nirmala UI, sans-serif';context.save();context.textAlign='center';wrapped[index].forEach((line,n)=>context.fillText(line,x+width/2,y+(height-wrapped[index].length*22)/2+17+n*22));context.restore();});y+=height;return height;}function finish(){context.font='15px Segoe UI';['Store Officer','Store Incharg','Head of Production','General Manager'].forEach((name,i)=>{const textWidth=context.measureText(name).width,x=50+i*285+(285-textWidth)/2;context.beginPath();context.moveTo(x,1640);context.lineTo(x+textWidth,1640);context.stroke();context.fillText(name,x,1655);});context.fillText('Page '+(images.length+1),50,1720);images.push(Uint8Array.from(atob(canvas.toDataURL('image/jpeg',.95).split(',')[1]),char=>char.charCodeAt(0)));}header();file.rows.forEach((row,index)=>{const values=[String(index+1),...StoreCore.viewColumns(category,file.storeMovement==='Delivery').map(key=>row[key])],height=Math.max(48,...values.map(value=>lines(value,width-12).length*22+16));if(y+height>1550){finish();header();}draw(values);});finish();download(file.reference+'.pdf',makeImagePDF(images),'application/pdf');toast('PDF downloaded.');}catch(error){toast('PDF failed: '+error.message);}}

;
;/* department-add.js */
'use strict';
let departmentRegistry=[],departmentRegistryBusy=false,departmentRegistryError='';
async function loadDepartmentRegistry(){if(departmentRegistryBusy)return;departmentRegistryBusy=true;departmentRegistryError='';renderAdminView();try{const result=await adminRequest('department-registry');departmentRegistry=result.departments;}catch(error){departmentRegistryError=error.message;}finally{departmentRegistryBusy=false;if(adminView&&adminUserPanel==='department-add')renderAdminView();}}
function renderDepartmentAdd(){const counts=new Map((adminData?.users||[]).map(user=>[user.department,(adminData.users.filter(row=>row.department===user.department)).length]));$('#main').insertAdjacentHTML('beforeend',`<section class="panel"><div class="admin-user-heading"><h3>Department Add</h3><button id="refreshDepartmentRegistry">Refresh</button></div><form id="departmentAddForm" class="department-add-form"><label>New Department<input name="name" aria-label="New Department" required maxlength="60" placeholder="Department name" autocomplete="off"></label><button type="submit" class="primary">+ Add Department</button></form><p id="departmentAddStatus" role="status">${esc(departmentRegistryError||(departmentRegistryBusy?'Loading departments…':''))}</p><div class="table-wrap"><table><thead><tr><th>SL</th><th>Department</th><th>Status</th><th>Users</th><th>Action</th></tr></thead><tbody>${departmentRegistry.map((item,index)=>`<tr><td>${index+1}</td><td>${esc(item.name)}</td><td>${item.active?'Active':'Removed'}</td><td>${counts.get(item.name)||0}</td><td><button data-department-registry="${item.active?'delete':'restore'}" data-name="${esc(item.name)}" ${item.active&&counts.get(item.name)?'disabled title="Move users to another department first"':''} class="${item.active?'danger':''}">${item.active?'Remove':'Restore'}</button></td></tr>`).join('')||'<tr><td colspan="5">No departments loaded.</td></tr>'}</tbody></table></div></section>`);}
async function manageDepartment(body){const result=await adminRequest('department-registry',{method:'POST',body:JSON.stringify(body)});permissionDrafts.clear();adminData=null;await loadAdministration();if(adminData&&!adminData.groups.some(group=>group.departments.includes(selectedDepartment)))selectedDepartment=adminData.groups[0]?.departments[0]||'';await loadDepartmentRegistry();return result;}
$('#main').addEventListener('click',async event=>{const button=event.target.closest('button');if(!button||!adminView)return;if(button.id==='adminDepartmentAdd'){departmentPanelOpen=false;adminUserPanel=adminUserPanel==='department-add'?'':'department-add';renderAdminView();if(adminUserPanel)await loadDepartmentRegistry();return;}if(button.id==='refreshDepartmentRegistry')return loadDepartmentRegistry();const action=button.dataset.departmentRegistry;if(!action)return;const item=departmentRegistry.find(item=>item.name===button.dataset.name);if(!item)return;if(action==='delete'&&!confirm(`Remove department ${item.name}? It can be restored later. Page permissions will be cleared.`))return;button.disabled=true;try{await manageDepartment({action,name:item.name,revision:item.revision});toast(action==='delete'?'Department removed':'Department restored. Set its page permissions.');}catch(error){toast(error.message);button.disabled=false;}});
$('#main').addEventListener('submit',async event=>{if(event.target.id!=='departmentAddForm')return;event.preventDefault();const form=event.target,button=form.querySelector('button');button.disabled=true;try{await manageDepartment({action:'create',name:new FormData(form).get('name').normalize('NFKC').trim()});toast('Department added. Set its page permissions in Department.');}catch(error){$('#departmentAddStatus').textContent=error.message;button.disabled=false;}});

;
;/* hr-details.js */
'use strict';
const hrPreviousRenderer=renderPage;
const hrSchemas=window.FARNOOR_HR_FORMS||{};
let hrEditing=null;
const hrDialog=document.createElement('dialog');
hrDialog.className='hr-detail-dialog';hrDialog.style.cssText='width:min(1000px,94vw);max-height:90vh;overflow:auto';
hrDialog.innerHTML='<form id="hrDetailForm"><h2 id="hrDetailTitle"></h2><div id="hrDetailFields" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px"></div><div style="display:flex;gap:12px;margin-top:20px"><button type="button" id="hrDetailClose">Close</button><button type="submit" class="primary" id="hrDetailSave">Save</button></div></form>';
document.body.append(hrDialog);
const hrIsPage=()=>activePage==='employees'||!!hrSchemas[activePage];
const hrList=()=>state.records[activePage]||[];
function hrRender(){
 if(activePage==='employees'){
  $('#main').innerHTML=heading('HR','Emp Profile','')+'<section class="panel"><p>Employee records are available in HR Info → Profile Search.</p></section>';
  applyActionControls();return;
 }
 const page=pageInfo(activePage).page,employees=activePage==='employees';
 const rows=hrList().filter(row=>!Array.isArray(row.hrSourceRows)).filter(row=>JSON.stringify([row.reference,row.name,row.date,row.hrDetails,row.hrValues]).toLowerCase().includes(query.toLowerCase()));
 $('#main').innerHTML=heading('HR',page.name,'','<button type="button" data-hr-new data-page-action-required="edit" class="primary">+ New record</button>')+'<section class="panel"><div class="toolbar"><input id="hrSearch" type="search" aria-label="Search HR records" placeholder="Search by ID, name, department…" value="'+esc(query)+'"><span>'+rows.length+' of '+hrList().length+' records</span></div><div class="table-wrap"><table><thead><tr><th>ID / REFERENCE</th><th>NAME / DESCRIPTION</th>'+(employees?'<th>NAME (BN)</th><th>DESIGNATION</th><th>DEPARTMENT</th><th>EMPLOYMENT STATUS</th>':'')+'<th>DATE</th><th>ACTIONS</th></tr></thead><tbody>'+rows.map(row=>'<tr><td>'+esc(row.reference)+'</td><td>'+esc(row.name)+'</td>'+(employees?['Name (Bn)','Designation','Department','Status'].map(key=>'<td>'+esc(row.hrDetails?.[key]||'')+'</td>').join(''):'')+'<td>'+esc(row.date)+'</td><td><button type="button" data-hr-view="'+esc(row.id)+'">View details</button> <button type="button" data-hr-edit="'+esc(row.id)+'" data-page-action-required="edit">Edit</button></td></tr>').join('')+'</tbody></table></div></section>';
 $('#hrSearch').oninput=event=>{query=event.target.value;const position=event.target.selectionStart;hrRender();$('#hrSearch').focus();$('#hrSearch').setSelectionRange(position,position);};
 applyActionControls();
}
renderPage=function(){if(hrIsPage()){hrRender();return;}hrPreviousRenderer();};
function hrInput(field,value,view){
 const name=esc(field.inputKey||field.key),label=esc(field.label),current=String(value??'');
 const control=field.type==='select'?'<select name="'+name+'" '+(view?'disabled':'')+'><option value=""></option>'+[...new Set([...(field.options||[]),...(current?[current]:[])])].map(option=>'<option value="'+esc(option)+'" '+(option===current?'selected':'')+'>'+esc(option)+'</option>').join('')+'</select>':'<input name="'+name+'" value="'+esc(current)+'" maxlength="4000" '+(view?'readonly':'')+' '+(field.type==='date'?'placeholder="DD/MM/YYYY"':'')+'>';
 return '<label style="display:grid;gap:5px">'+label+control+'</label>';
}
function hrOpen(id,view){
 if(!FarnoorAccess.canPage(activePage)||(!view&&!pagePermission('edit')))return;
 const row=hrList().find(record=>record.id===id)||{},employee=activePage==='employees';
 const base=[{key:'reference',label:employee?'Employee ID':'Reference'},{key:'name',label:employee?'Employee name':'Name / description'},{key:'date',label:employee?'Joining date':'Record date',type:'date'}];
 const detailKeys=employee?Object.keys(row.hrDetails||{'ID No':'','Name (Eng)':'','Name (Bn)':'','Designation':'','Department':'','Section':'','Status':'','Date of Join':'','Contact No':'','Salary':''}):[];
 const detailed=employee?detailKeys.map((key,index)=>({key:'detail_'+index,label:key})):(hrSchemas[activePage]||[]).map(field=>({...field,inputKey:'hr_'+field.key}));
 hrEditing={page:activePage,id:id||null,original:JSON.stringify(row),employee,detailKeys,detailed,view};
 $('#hrDetailTitle').textContent=(view?'View ':id?'Edit ':'New ')+pageInfo(activePage).page.name;
 const values={reference:row.reference,name:row.name,date:row.date||new Date().toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),...Object.fromEntries(Object.entries(row.hrValues||{}).map(([key,value])=>['hr_'+key,value]))};
 if(employee)detailKeys.forEach((key,index)=>{values['detail_'+index]=row.hrDetails?.[key]||'';});
 $('#hrDetailFields').innerHTML=[...base,...detailed].map(field=>hrInput(field,values[field.inputKey||field.key],view)).join('');
 $('#hrDetailFields').style.gridTemplateColumns=employee?'minmax(0,1fr)':'repeat(auto-fit,minmax(240px,1fr))';
 for(const label of $('#hrDetailFields').querySelectorAll('label'))if(employee)label.style.cssText='display:grid;grid-template-columns:minmax(120px,32%) minmax(0,1fr);align-items:center;gap:15px;border-bottom:1px solid #dce9df;padding:7px 0';
 $('#hrDetailSave').hidden=view;hrDialog.showModal();
}
$('#hrDetailClose').onclick=()=>hrDialog.close();
$('#main').addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;if(button.hasAttribute('data-hr-new'))hrOpen(null,false);if(button.dataset.hrView)hrOpen(button.dataset.hrView,true);if(button.dataset.hrEdit)hrOpen(button.dataset.hrEdit,false);});
$('#hrDetailForm').onsubmit=async event=>{
 event.preventDefault();const edit=hrEditing;if(!edit||edit.view||!pagePermission('edit',edit.page))return;
 const values=Object.fromEntries(new FormData(event.target));const button=$('#hrDetailSave');button.disabled=true;
 try{
  if(!values.reference?.trim()||values.reference.length>120||!values.name?.trim()||values.name.length>200)throw Error('Enter a valid reference and name.');
  const date=normalizeDate(values.date),next=structuredClone(state),rows=next.records[edit.page]||[];
  const original=rows.find(row=>row.id===edit.id);
  if(edit.id&&(!original||JSON.stringify(original)!==edit.original))throw Error('This record changed. Close and reopen it before saving.');
  const row={...(original||{}),id:original?.id||crypto.randomUUID(),reference:values.reference.trim(),name:values.name.trim(),quantity:original?.quantity??1,date,status:original?.status||'Completed'};
  if(rows.some(other=>other.id!==row.id&&other.reference===row.reference))throw Error('This reference already exists.');
  if(edit.employee){row.hrDetails={...(original?.hrDetails||{})};edit.detailKeys.forEach((key,index)=>{row.hrDetails[key]=values['detail_'+index]||'';});row.hrDetails['ID No']=row.reference;row.hrDetails['Name (Eng)']=row.name;row.hrDetails['Date of Join']=date;}
  else{row.hrValues={...(original?.hrValues||{})};for(const field of edit.detailed){let value=values[field.inputKey||field.key]||'';if(value.length>4000)throw Error('Field is too long.');if(value&&field.type==='date')value=normalizeDate(value);row.hrValues[field.key]=value;}}
  if(original)rows[rows.indexOf(original)]=row;else rows.push(row);next.records[edit.page]=rows;
  if(await commit(next,edit.employee?{employeeFile:row,employeeOriginal:original||null}:{})){hrDialog.close();renderPage();toast('HR record saved online.');}
 }catch(error){toast(error.message);}finally{button.disabled=false;}
};

$('#hrDetailFields').addEventListener('keydown',event=>{if(!hrEditing?.employee||event.isComposing||event.ctrlKey||event.altKey||event.metaKey||!['Enter','ArrowUp','ArrowDown'].includes(event.key)||!event.target.matches('input,select,textarea'))return;event.preventDefault();const inputs=[...$('#hrDetailFields').querySelectorAll('input,select,textarea')],index=inputs.indexOf(event.target),next=inputs[index+(event.key==='ArrowUp'?-1:1)];if(next){next.focus();if(next.select)next.select();}else if(event.key==='Enter')$('#hrDetailSave').focus();});

;
;/* hr-source.js */
'use strict';
// Read-only source reports retain every original cell, including empty values.
const hrSourcePriorRender=hrRender;
let hrSourceSearch='',hrSourceOffset=0,hrSourcePage='';
const hrSourceBundles=()=>hrList().filter(r=>r.hrSource==='AutoPro'&&Array.isArray(r.hrSourceRows));
function hrSourceRender(){
 const bundles=hrSourceBundles();if(!bundles.length)return;
 if(!hrList().some(row=>!Array.isArray(row.hrSourceRows))) $('#main .panel')?.remove();
 if(hrSourcePage!==activePage){hrSourceSearch='';hrSourceOffset=0;hrSourcePage=activePage;}
 const records=bundles.flatMap(bundle=>bundle.hrSourceRows.map(values=>({headers:bundle.hrSourceHeaders,values})));
 const matched=records.filter(r=>r.values.join(' ').toLowerCase().includes(hrSourceSearch.toLowerCase()));
 const headers=[...new Set(bundles.flatMap(bundle=>bundle.hrSourceHeaders))];
 const visible=matched.slice(hrSourceOffset,hrSourceOffset+100);
 $('#main').insertAdjacentHTML('beforeend','<section class="panel"><h3>AutoPro · Original '+esc(pageInfo(activePage).page.name)+'</h3><p>Original saved records. Blank fields are preserved. This archive does not change attendance or leave balances.</p><label>Search original records<input type="search" data-hr-source-search value="'+esc(hrSourceSearch)+'"></label><p>'+matched.length+' / '+records.length+' records · Showing '+(visible.length?hrSourceOffset+1:0)+'–'+(hrSourceOffset+visible.length)+'</p><div class="table-wrap"><table><thead><tr>'+headers.map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+visible.map(r=>'<tr>'+headers.map(h=>'<td>'+esc(r.values[r.headers.indexOf(h)]??'')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div><button type="button" data-hr-source-prev '+(hrSourceOffset===0?'disabled':'')+'>Previous 100</button> <button type="button" data-hr-source-next '+(hrSourceOffset+100>=matched.length?'disabled':'')+'>Next 100</button></section>');
}
hrRender=function(){hrSourcePriorRender();hrSourceRender();};
document.addEventListener('input',event=>{if(event.target.matches('[data-hr-source-search]')){const caret=event.target.selectionStart;hrSourceSearch=event.target.value;hrSourceOffset=0;hrRender();const input=document.querySelector('[data-hr-source-search]');input.focus();input.setSelectionRange(caret,caret);}});
document.addEventListener('click',event=>{if(event.target.closest('[data-hr-source-next]')){hrSourceOffset+=100;hrRender();}if(event.target.closest('[data-hr-source-prev]')){hrSourceOffset=Math.max(0,hrSourceOffset-100);hrRender();}});

;
;/* admin-email.js */
'use strict';
const emailDrafts=new Map();let emailSaving=false,emailEntryOpen=false;
function emailAddress(value){return String(value||'').trim().toLowerCase();}
function emailDraft(group){if(!emailDrafts.has(group))emailDrafts.set(group,{id:null,name:'',email:''});return emailDrafts.get(group);}
function renderEmailContacts(group){
 if(accessInfo.role!=='super_admin'||!['A','B','C','D','E','G'].includes(group))return;
 const draft=emailDraft(group),all=state.emailContacts?.[group]||[],rows=all.filter(row=>!row.deletedAt);
 $('#main').insertAdjacentHTML('beforeend',`<section class="panel" id="emailSavedContacts"><h3>Email.${group} — Saved contacts (${rows.length})</h3>${!emailEntryOpen?`<button type="button" class="primary" data-email-entry="${group}">Entry</button><div class="table-wrap"><table><thead><tr><th>Name</th><th>Email address</th><th>Actions</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${esc(row.name)}</td><td>${esc(row.email)}</td><td><button data-email-edit="${esc(row.id)}" data-email-in="${group}">Edit</button><button data-email-delete="${esc(row.id)}" data-email-in="${group}">Delete</button></td></tr>`).join('')||'<tr><td colspan="3">No saved contacts yet.</td></tr>'}</tbody></table></div>`:``}${emailEntryOpen?`<h4>Add / Edit contact</h4><form id="emailContactForm" data-email-form="${group}"><label>Name<input name="contactName" required maxlength="100" value="${esc(draft.name)}"></label><label>Email address<input name="contactEmail" type="email" required maxlength="254" placeholder="name@example.com" value="${esc(emailAddress(draft.email))}"></label><div class="dialog-actions"><button type="submit" class="primary" ${emailSaving?'disabled':''}>${emailSaving?'Saving…':draft.id?'Save changes':'Save'}</button><button type="button" data-email-new="${group}">New contact</button><button type="button" data-email-back="${group}">Back to list</button></div></form>`:``}${all.some(row=>row.deletedAt)?`<details><summary>Deleted contacts</summary>${all.filter(row=>row.deletedAt).map(row=>`<p>${esc(row.name)} · ${esc(row.email)} <button data-email-restore="${esc(row.id)}" data-email-in="${group}">Restore</button></p>`).join('')}</details>`:''}</section>`);
}
$('#main').addEventListener('input',event=>{const form=event.target.closest('[data-email-form]');if(!form)return;const draft=emailDraft(form.dataset.emailForm);draft.name=form.elements.contactName.value;draft.email=form.elements.contactEmail.value;});
$('#main').addEventListener('submit',async event=>{const form=event.target;if(!form.matches('[data-email-form]'))return;event.preventDefault();if(accessInfo.role!=='super_admin'||emailSaving)return;const group=form.dataset.emailForm,draft=emailDraft(group),name=form.elements.contactName.value.trim(),email=emailAddress(form.elements.contactEmail.value);if(!name||name.length>100||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||email.length>254){toast('Enter a name and a valid email address.');return;}const next=structuredClone(state);next.emailContacts||={};const rows=next.emailContacts[group]||=[];if(rows.length>=1000&&!draft.id){toast('Maximum 1000 contacts in this group.');return;}const contact={id:draft.id||crypto.randomUUID(),name,email,updatedAt:new Date().toISOString()},index=rows.findIndex(row=>row.id===contact.id);if(index<0)rows.push(contact);else rows[index]=contact;emailSaving=true;form.querySelector('button[type=submit]').disabled=true;try{if(await commit(next,{emailGroup:group})){emailDrafts.delete(group);emailEntryOpen=false;toast('Contact saved online.');if(adminView)renderAdminView();}}finally{emailSaving=false;if(adminView&&adminUserPanel==='email-'+group)renderAdminView();}});
$('#main').addEventListener('click',async event=>{if(!adminView||accessInfo.role!=='super_admin'||emailSaving)return;const button=event.target.closest('button');if(!button)return;if(button.dataset.emailGroup){const group=button.dataset.emailGroup;adminUserPanel='email-'+group;emailEntryOpen=false;departmentPanelOpen=false;renderAdminView();return;}if(button.dataset.emailEntry){emailEntryOpen=true;emailDrafts.delete(button.dataset.emailEntry);renderAdminView();return;}if(button.dataset.emailBack){emailEntryOpen=false;renderAdminView();return;}if(button.dataset.emailNew){emailDrafts.delete(button.dataset.emailNew);renderAdminView();return;}const group=button.dataset.emailIn;if(!group)return;const rows=state.emailContacts?.[group]||[],id=button.dataset.emailEdit||button.dataset.emailDelete||button.dataset.emailRestore,row=rows.find(row=>row.id===id);if(!row)return;if(button.dataset.emailEdit){emailEntryOpen=true;emailDrafts.set(group,{id:row.id,name:row.name,email:row.email});renderAdminView();return;}const next=structuredClone(state),target=next.emailContacts[group].find(row=>row.id===id);if(button.dataset.emailDelete)target.deletedAt=new Date().toISOString();else delete target.deletedAt;emailSaving=true;try{if(await commit(next,{emailGroup:group})){if(emailDraft(group).id===id)emailDrafts.delete(group);}}finally{emailSaving=false;if(adminView)renderAdminView();}});

;
;/* bijoy-display.js */
/*
MIT License

Copyright (c) 2026 Md. Jehad (Jehadur Rahman Emran)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This is an original implementation in TypeScript with significant additions
and corrections, including (but not limited to):
  - Trailing reph reorder (handles `Kg©KZ©vi` → কর্মকর্তার end-of-syllable case)
  - `Í` (U+00CD) Sutonny MJ alternate mapping for ন্ত / স্ত / ক্ত conjuncts
  - Multi-character sequence handling (`iæ → রু`, `Mø → গ্ল`, etc.)
  - `ÿ → ক্ষ` alternate Sutonny MJ encoding
  - Precomposed nukta letters (ড়/ঢ়/য়) preserved per Word/Office convention
  - Font-aware detection across run / paragraph / style / docDefaults

Inspired by prior open-source Bijoy converters, notably:
  - Mad-FOX/bijoy2unicode (Python)
  - bnwebtools / nishiafia/bijoytounicodeconverter (PHP/JS)
Vendored core: https://github.com/JehadurRE/Bijoy2Unicode (packages/bijoy2unicode/src/core.ts), 2026-10-12.
*/
window.FarnoorBangla=(()=>{
/**
 * bijoy2unicode — Bijoy ASCII (Sutonny MJ etc.) → Bengali Unicode converter.
 *
 * Original work by Md. Jehad (Jehadur Rahman Emran). The mapping tables and
 * reorder algorithm have been extensively modified, expanded, and rewritten
 * for correctness against real-world Bijoy/Sutonny MJ documents.
 *
 * Inspired by:
 *   - Mad-FOX/bijoy2unicode (Python) — initial mapping inspiration
 *   - bnwebtools / nishiafia/bijoytounicodeconverter — additional coverage
 *
 * Notable additions / fixes original to this implementation:
 *   - Trailing-© reph reorder (`Kg©KZ©vi` → কর্মকর্তার)
 *   - `Í` (U+00CD) prefix-pair handling (`we¯ÍvwiZ` → বিস্তারিত)
 *   - `iæ → রু` ordered before single-byte `æ → ু`
 *   - `ÿ → ক্ষ` mapping for the alternate Sutonny MJ encoding
 *   - Precomposed nukta forms (ড়/ঢ়/য়) preserved per real-world usage
 *   - Bigram-based and font-aware detection helpers (in adjacent files)
 */

                                       

const buildMap = (raw                        )          =>
  Object.entries(raw).map(([k, v]) => [
    new RegExp(escapeForRegex(k), "g"),
    v,
  ]);

function escapeForRegex(literal        )         {
  // The Python implementation uses re.sub directly. A handful of the source
  // keys are already valid escape sequences ("\\|", "\\&", "\\^", "\\["),
  // which collapse to single-character literals here. Treat every key as a
  // plain literal to keep behaviour identical.
  return literal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const preConversionMap          = buildMap({
  "  ": " ",
  yy: "y",
  vv: "v",
  "\u00AD\u00AD": "\u00AD",
  "y&": "y",
  "\u201E&": "\u201E",
  "\u2021u": "u\u2021",
  wu: "uw",
  " ,": ",",
  " |": "|",
  "\\ ": "",
  " \\": "",
  "\\": "",
  "\n ": "\n",
  " \n": "\n",
  "\n\n\n\n\n": "\n\n",
  "\n\n\n\n": "\n\n",
  "\n\n\n": "\n\n",
});

const conversionMap          = buildMap({
  // ---- Multi-character sequences first ----
  // These must run before the single-byte mappings below, otherwise the
  // single-byte mapping on the second char of a sequence would consume
  // it (e.g. `iæ` → `রু` must match before `æ` → `ু`).
  // Some entries are inherited from earlier converters; many are original
  // additions for real-world Sutonny MJ documents.
  "i\u00E6": "রু",
  "i\u201C": "রু", // ru with smart-quote variant
  "i\u0192": "রূ", // rū
  "M\u00F8": "গ্ল",
  "\u201DQ\u00A6": "চ্ছ্ব",
  "c\u00F8": "প্ল",
  "e\u00F8": "ব্ল",
  "k\u00F8": "শ্ল",
  "\u00A4\u00F8": "ম্ল",
  "\u00AF\u00F8": "স্ল",
  "\u00E5\u201C": "ভ্রু",
  // 'Í' (U+00CD) is a Sutonny MJ alternate for '—' (em-dash) used in
  // ন্ত / স্ত / ক্ত style conjuncts. Map every prefix-pair first, then the
  // remaining bare 'Í' falls through to the single-byte map below.
  "\u00AF\u00CD": "স্ত",  // ¯Í -> স্ত
  "\u0161\u00CD": "ন্ত",  // šÍ -> ন্ত
  "\u00AF\u00CD\u00A1": "স্ত্ব", // ¯Í¡ -> স্ত্ব
  "\u0161\u00CD\u00A1": "ন্ত্ব", // šÍ¡ -> ন্ত্ব
  "\u00CB\u00A1": "ত্ত্ব", // Ë¡ overrides the single-byte Ë mapping
  "\\\\": "॥",

  // ---- Vowels (Av must come before A) ----
  Av: "আ",
  A: "অ",
  B: "ই",
  C: "ঈ",
  D: "উ",
  E: "ঊ",
  F: "ঋ",
  G: "এ",
  H: "ঐ",
  I: "ও",
  J: "ঔ",
  // Consonants
  K: "ক",
  L: "খ",
  M: "গ",
  N: "ঘ",
  O: "ঙ",
  P: "চ",
  Q: "ছ",
  R: "জ",
  S: "ঝ",
  T: "ঞ",
  U: "ট",
  V: "ঠ",
  W: "ড",
  X: "ঢ",
  Y: "ণ",
  Z: "ত",
  _: "থ",
  "`": "দ",
  a: "ধ",
  b: "ন",
  c: "প",
  d: "ফ",
  e: "ব",
  f: "ভ",
  g: "ম",
  h: "য",
  i: "র",
  j: "ল",
  k: "শ",
  l: "ষ",
  m: "স",
  n: "হ",
  o: "\u09DC", // ড় (precomposed)
  p: "\u09DD", // ঢ় (precomposed)
  q: "\u09DF", // য় (precomposed)
  r: "ৎ",
  s: "ং",
  t: "ঃ",
  u: "ঁ",
  // Numbers
  "0": "০",
  "1": "১",
  "2": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
  // Kars
  "\u2022": "ঙ্",
  v: "া",
  w: "ি",
  x: "ী",
  y: "ু",
  z: "ু",
  "\u201C": "ু",
  "\u2013": "ু",
  "~": "ূ",
  "\u0192": "ূ",
  "\u201A": "ূ",
  "\u201E\u201E": "ৃ",
  "\u201E": "ৃ",
  "\u2026": "ৃ",
  "\u2020": "ে",
  "\u2021": "ে",
  "\u02C6": "ৈ",
  "\u2030": "ৈ",
  "\u0160": "ৗ",
  "|": "।",
  "&": "্\u200C",
  // Conjuncts
  "^": "্ব",
  "\u2018": "্তু",
  "\u2019": "্থ",
  "\u2039": "্ক",
  "\u0152": "্ক্র",
  "\u201D": "চ্",
  "\u2014": "্ত",
  "\u02DC": "দ্",
  "\u2122": "দ্",
  "\u0161": "ন্",
  "\u203A": "ন্",
  "\u0153": "্ন",
  "\u0178": "্ব",
  "\u00A1": "্ব",
  "\u00A2": "্ভ",
  "\u00A3": "্ভ্র",
  "\u00A4": "ম্",
  "\u00A5": "্ম",
  "\u00A6": "্ব",
  "\u00A7": "্ম",
  "\u00A8": "্য",
  "\u00A9": "র্",
  "\u00AA": "্র",
  "\u00AB": "্র",
  "\u00AC": "্ল",
  "\u00AD": "্ল",
  "\u00AE": "ষ্",
  "\u00AF": "স্",
  "\u00B0": "ক্ক",
  "\u00B1": "ক্ট",
  "\u00B2": "ক্ষ্ণ",
  "\u00B3": "ক্ত",
  "\u00B4": "ক্ম",
  "\u00B5": "ক্র",
  "\u00B6": "ক্ষ",
  "\u00B7": "ক্স",
  "\u00B8": "গু",
  "\u00B9": "জ্ঞ",
  "\u00BA": "গ্দ",
  "\u00BB": "গ্ধ",
  "\u00BC": "ঙ্ক",
  "\u00BD": "ঙ্গ",
  "\u00BE": "জ্জ",
  "\u00BF": "্ত্র",
  "\u00C0": "জ্ঝ",
  "\u00C1": "জ্ঞ",
  "\u00C2": "ঞ্চ",
  "\u00C3": "ঞ্ছ",
  "\u00C4": "ঞ্জ",
  "\u00C5": "ঞ্ঝ",
  "\u00C6": "ট্ট",
  "\u00C7": "ড্ড",
  "\u00C8": "ণ্ট",
  "\u00C9": "ণ্ঠ",
  "\u00CA": "ণ্ড",
  "\u00CB": "ত্ত",
  "\u00CC": "ত্থ",
  "\u00CD": "ত্ম",
  "\u00CE": "ত্র",
  "\u00CF": "দ্দ",
  "\u00D0": "-",
  "\u00D1": "-",
  "\u00D2": '"',
  "\u00D3": '"',
  "\u00D4": "'",
  "\u00D5": "'",
  "\u00D6": "্র",
  "\u00D7": "দ্ধ",
  "\u00D8": "দ্ব",
  "\u00D9": "দ্ম",
  "\u00DA": "ন্ঠ",
  "\u00DB": "ন্ড",
  "\u00DC": "ন্ধ",
  "\u00DD": "ন্স",
  "\u00DE": "প্ট",
  "\u00DF": "প্ত",
  "\u00E0": "প্প",
  "\u00E1": "প্স",
  "\u00E2": "ব্জ",
  "\u00E3": "ব্দ",
  "\u00E4": "ব্ধ",
  "\u00E5": "ভ্র",
  "\u00E6": "ু", // æ — u-kar variant (matches Sutonny MJ usage and bnwebtools).
                  // The rare ম্ন conjunct uses other byte sequences (e.g. gœ).
  "\u00E7": "ম্ফ",
  "\u00E8": "্ন",
  "\u00E9": "ল্ক",
  "\u00EA": "ল্গ",
  "\u00EB": "ল্ট",
  "\u00EC": "ল্ড",
  "\u00ED": "ল্প",
  "\u00EE": "ল্ফ",
  "\u00EF": "শু",
  "\u00F0": "শ্চ",
  "\u00F1": "শ্ছ",
  "\u00F2": "ষ্ণ",
  "\u00F3": "ষ্ট",
  "\u00F4": "ষ্ঠ",
  "\u00F5": "ষ্ফ",
  "\u00F6": "স্খ",
  "\u00F7": "স্ট",
  "\u00F8": "স্ন",
  "\u00F9": "স্ফ",
  "\u00FA": "্প",
  "\u00FB": "হু",
  "\u00FC": "হৃ",
  "\u00FD": "হ্ন",
  "\u00FE": "হ্ম",
  // ---- Additional real-world Bijoy / Sutonny MJ encodings (alternate `ÿ`,
  // etc.). Single-byte additions only — multi-char sequences are at the top
  // of this map.
  "\u00FF": "ক্ষ", // ÿ alternate code for ক্ষ (kkho)
});

const proConversionMap          = buildMap({
  "্্": "্",
});

const postConversionMap          = buildMap({
  "০ঃ": "০:",
  "১ঃ": "১:",
  "২ঃ": "২:",
  "৩ঃ": "৩:",
  "৪ঃ": "৪:",
  "৫ঃ": "৫:",
  "৬ঃ": "৬:",
  "৭ঃ": "৭:",
  "৮ঃ": "৮:",
  "৯ঃ": "৯:",
  " ঃ": ":",
  "\nঃ": "\n:",
  "]ঃ": "]:",
  "[ঃ": "[:",
  "  ": " ",
  "অা": "আ",
  "্\u200C্\u200C": "্\u200C",
});

function applyMap(text        , map         )         {
  let out = text;
  for (const [pattern, replacement] of map) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

const HALANT = "\u09CD";

function isBanglaPreKar(c        )          {
  return c === "ি" || c === "ৈ" || c === "ে";
}

function isBanglaPostKar(c        )          {
  return (
    c === "া" ||
    c === "ো" ||
    c === "ৌ" ||
    c === "ৗ" ||
    c === "ু" ||
    c === "ূ" ||
    c === "ী" ||
    c === "ৃ"
  );
}

function isBanglaKar(c        )          {
  return isBanglaPreKar(c) || isBanglaPostKar(c);
}

function isBanglaBanjonborno(c        )          {
  if (!c) return false;
  return (
    "কখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ".includes(c) ||
    c === "ড়" || // U+09DC
    c === "ঢ়" || // U+09DD
    c === "য়" || // U+09DF
    c === "ৎ" ||
    c === "ং" ||
    c === "ঃ" ||
    c === "ঁ"
  );
}

function isBanglaNukta(c        )          {
  return c === "ঁ";
}

function isBanglaHalant(c        )          {
  return c === HALANT;
}

function isSpace(c        )          {
  return c === " " || c === "\t" || c === "\n" || c === "\r";
}

function charAt(s        , i        )         {
  if (i < 0 || i >= s.length) return "";
  return s.charAt(i);
}

function rearrange(input        )         {
  let str = input;
  let i = 0;

  // First pass: handle reph (র + halant) when surrounded by halant.
  while (i < str.length) {
    if (
      i < str.length - 1 &&
      charAt(str, i) === "র" &&
      isBanglaHalant(charAt(str, i + 1)) &&
      isBanglaHalant(charAt(str, i - 1))
    ) {
      let j = 1;
      while (true) {
        if (i - j < 0) break;
        if (
          isBanglaBanjonborno(charAt(str, i - j)) &&
          isBanglaHalant(charAt(str, i - j - 1))
        ) {
          j += 2;
        } else if (j === 1 && isBanglaKar(charAt(str, i - j))) {
          j += 1;
        } else {
          break;
        }
      }
      str =
        str.slice(0, i - j) +
        charAt(str, i) +
        charAt(str, i + 1) +
        str.slice(i - j, i) +
        str.slice(i + 2);
      i += 1;
      continue;
    }
    i += 1;
  }

  // Reph reorder for the trailing-© case: pattern is [consonant cluster] +
  // র + ্ at the end of a syllable (i.e. NOT followed by another consonant).
  // Bijoy types `©` right after the consonant the reph attaches to, so we
  // need to move `র + ্` *before* the consonant cluster it sits behind.
  // Examples handled:
  //   ক ড র ্      → ক র ্ ড      (Bijoy `KW©`)
  //   ক ম র ্ ক ত র ্ া র → কর্মকর্তার (Bijoy `Kg©KZ©vi`)
  i = 0;
  while (i < str.length - 1) {
    if (
      charAt(str, i) === "র" &&
      isBanglaHalant(charAt(str, i + 1)) &&
      i > 0 &&
      // Previous char must be a banjonborno that does NOT itself form a
      // halanted conjunct head (otherwise it's `র + ্ + halant` and the
      // first pass already handled it).
      isBanglaBanjonborno(charAt(str, i - 1)) &&
      !isBanglaHalant(charAt(str, i - 2)) &&
      // The reph must be at end of cluster — meaning the next char after
      // the halant must NOT be the start of a new halanted conjunct.
      // Specifically, block only if (i+2, i+3) is consonant + halant —
      // that pattern means the reph is genuinely in the middle of a
      // multi-consonant cluster and should be left alone.
      !(
        isBanglaBanjonborno(charAt(str, i + 2)) &&
        isBanglaHalant(charAt(str, i + 3))
      )
    ) {
      // Walk backwards over any consonant + halant pairs to find the start
      // of the cluster the reph should attach to.
      let j = 1;
      while (true) {
        if (i - j - 1 < 0) break;
        if (
          isBanglaBanjonborno(charAt(str, i - j - 1)) &&
          isBanglaHalant(charAt(str, i - j))
        ) {
          j += 2;
        } else {
          break;
        }
      }
      str =
        str.slice(0, i - j) +
        charAt(str, i) + // র
        charAt(str, i + 1) + // halant
        str.slice(i - j, i) + // the cluster
        str.slice(i + 2);
      i += 2; // skip past the now-relocated reph
      continue;
    }
    i += 1;
  }

  str = applyMap(str, proConversionMap);

  // Second pass.
  i = 0;
  while (i < str.length) {
    // Reph reorder when followed by another conjunct.
    if (
      i < str.length - 1 &&
      charAt(str, i) === "র" &&
      isBanglaHalant(charAt(str, i + 1)) &&
      !isBanglaHalant(charAt(str, i - 1)) &&
      isBanglaHalant(charAt(str, i + 2))
    ) {
      let j = 1;
      while (true) {
        if (i - j < 0) break;
        if (
          isBanglaBanjonborno(charAt(str, i - j)) &&
          isBanglaHalant(charAt(str, i - j - 1))
        ) {
          j += 2;
        } else if (j === 1 && isBanglaKar(charAt(str, i - j))) {
          j += 1;
        } else {
          break;
        }
      }
      str =
        str.slice(0, i - j) +
        charAt(str, i) +
        charAt(str, i + 1) +
        str.slice(i - j, i) +
        str.slice(i + 2);
      i += 1;
      continue;
    }

    // Vowel + halant + consonant -> halant + consonant + vowel
    if (
      i > 0 &&
      charAt(str, i) === HALANT &&
      (isBanglaKar(charAt(str, i - 1)) || isBanglaNukta(charAt(str, i - 1))) &&
      i < str.length - 1
    ) {
      str =
        str.slice(0, i - 1) +
        charAt(str, i) +
        charAt(str, i + 1) +
        charAt(str, i - 1) +
        str.slice(i + 2);
    }

    // র + halant + vowel -> vowel + র + halant
    if (
      i > 0 &&
      i < str.length - 1 &&
      charAt(str, i) === HALANT &&
      charAt(str, i - 1) === "\u09B0" &&
      charAt(str, i - 2) !== HALANT &&
      isBanglaKar(charAt(str, i + 1))
    ) {
      str =
        str.slice(0, i - 1) +
        charAt(str, i + 1) +
        charAt(str, i - 1) +
        charAt(str, i) +
        str.slice(i + 2);
    }

    // Pre-kar to post-kar Unicode placement.
    if (
      i < str.length - 1 &&
      isBanglaPreKar(charAt(str, i)) &&
      !isSpace(charAt(str, i + 1))
    ) {
      let temp = str.slice(0, i);
      let j = 1;
      while (
        i + j < str.length - 1 &&
        isBanglaBanjonborno(charAt(str, i + j))
      ) {
        if (
          i + j < str.length &&
          isBanglaHalant(charAt(str, i + j + 1))
        ) {
          j += 2;
        } else {
          break;
        }
      }
      temp += str.slice(i + 1, i + j + 1);

      let l = 0;
      if (
        charAt(str, i) === "ে" &&
        charAt(str, i + j + 1) === "া"
      ) {
        temp += "ো";
        l = 1;
      } else if (
        charAt(str, i) === "ে" &&
        charAt(str, i + j + 1) === "ৗ"
      ) {
        temp += "ৌ";
        l = 1;
      } else {
        temp += charAt(str, i);
      }

      temp += str.slice(i + j + l + 1);
      str = temp;
      i += j;
    }

    // Nukta after kar
    if (
      i < str.length - 1 &&
      isBanglaNukta(charAt(str, i)) &&
      isBanglaPostKar(charAt(str, i + 1))
    ) {
      str =
        str.slice(0, i) +
        charAt(str, i + 1) +
        charAt(str, i) +
        str.slice(i + 2);
    }

    i += 1;
  }

  return str;
}

/**
 * Convert a single string of Bijoy ASCII text to Unicode Bengali.
 *
 * NOTE: We deliberately do *not* run Unicode NFC/NFD normalization on the
 * output. The Bengali letters ড় (U+09DC), ঢ় (U+09DD), and য় (U+09DF) are
 * in the Unicode "Composition Exclusions" list, which means NFC would split
 * them into the base consonant + nukta. Word, Office, and most published
 * Bangla content all use the precomposed forms, so we preserve them as-is.
 */
function convertBijoyToUnicode(src        )         {
  if (!src) return src;
  let out = applyMap(src, preConversionMap);
  out = applyMap(out, conversionMap);
  out = rearrange(out);
  out = applyMap(out, postConversionMap);
  return out;
}

/**
 * After conversion, scan the result for characters that are likely unmapped
 * Bijoy bytes. Anything in Latin-1 Supplement / Latin Extended that didn't
 * get converted, plus stray smart quotes / control glyphs, is suspicious.
 */
function scanUnmapped(unicodeText        )                      {
  const out = new Map                ();
  if (!unicodeText) return out;
  for (const ch of unicodeText) {
    if (isSuspiciousLeftover(ch)) {
      out.set(ch, (out.get(ch) ?? 0) + 1);
    }
  }
  return out;
}

function isSuspiciousLeftover(ch        )          {
  const code = ch.codePointAt(0) ;
  // Bengali block – fine.
  if (code >= 0x0980 && code <= 0x09ff) return false;
  // ASCII printable + tab/newline/cr – fine (numbers, English, punctuation).
  if (code >= 0x20 && code <= 0x7e) return false;
  if (code === 0x09 || code === 0x0a || code === 0x0d) return false;
  // Zero-width joiner / non-joiner – fine.
  if (code === 0x200c || code === 0x200d) return false;
  // Bengali danda + double danda – fine.
  if (code === 0x0964 || code === 0x0965) return false;
  // Latin-1 Supplement, Latin Extended-A, Latin Extended-B → almost certainly
  // unmapped Bijoy/Sutonny bytes.
  if (code >= 0x0080 && code <= 0x024f) return true;
  // Smart quotes, em-dash, bullet etc. that Bijoy uses for conjuncts.
  if (code >= 0x2010 && code <= 0x203a) return true;
  // Curly quotes range we sometimes see leftover.
  if (code === 0x0152 || code === 0x0153 || code === 0x0160 || code === 0x0161) return true;
  return false;
}

function describeCodepoint(ch        )         {
  const cp = ch.codePointAt(0) ;
  return "U+" + cp.toString(16).toUpperCase().padStart(4, "0");
}

/**
 * Heuristic check: does this string look like Bijoy ASCII text?
 * We look for the high-byte / control chars that the Bijoy keyboard layout
 * uses. Plain English / Latin text will return false.
 */
function looksLikeBijoy(text        )          {
  if (!text) return false;
  // High-byte codepoints common in Bijoy (0x80–0xFF, smart quotes, etc.)
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code >= 0x0080 && code <= 0x024f) return true;
    if (code >= 0x2010 && code <= 0x203a) return true;
  }
  return false;
}

/** Check whether a string already contains Unicode Bengali. */
function hasBengaliUnicode(text        )          {
  if (!text) return false;
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code >= 0x0980 && code <= 0x09ff) return true;
  }
  return false;
}

/**
 * Decide whether a chunk of text should be run through the Bijoy → Unicode
 * converter. Skip it if it already contains Unicode Bengali, or if it looks
 * like plain English with no Bijoy-specific bytes.
 *
 * `fontIsBijoy === true` forces conversion (the run is explicitly tagged
 * with a Bijoy font), `fontIsBijoy === false` blocks it (explicitly Unicode
 * font), `undefined` lets the heuristic decide.
 */
function shouldConvertAsBijoy(
  text        ,
  fontIsBijoy          
)          {
  if (!text) return false;
  if (fontIsBijoy === true) return true;
  if (fontIsBijoy === false) return false;
  if (hasBengaliUnicode(text)) return false;
  return looksLikeBijoy(text);
}
const cache=new Map();function displayProfile(row,key){const text=String(row.hrDetails?.[key]??'');if(!/\(Bn\)/i.test(key)||row.hrSource!=='AutoPro'||!text||hasBengaliUnicode(text)||/^(?:N\/?A|Nil|None|Unknown|[-.\d\s]+)$/i.test(text))return text;if(!cache.has(text))cache.set(text,convertBijoyToUnicode(text));return cache.get(text);}return {convertBijoyToUnicode,hasBengaliUnicode,displayProfile};})();

;
;/* hr-profile-search.js */
'use strict';
const profileSearchOptions={"branch_name":["Farnoor Garments Ltd"],"egroup":["Staff","Worker"],"department":["Account","Administration","Boilar","Commercial","Cutting","Driver","Electrical","Gazipur Administration","Knitting and Dyeing","Maintenance","Merchandising","Packing","Production","Quality","Sample","Security","Store"],"section":["Account","Administration","Boiler","Checking & Cleaning","Commercial","Cutting","Driver","Electrical","Finishing","Gazipur Administration","Knitting and Dyeing","Line-1-Ast.OP","Line-1-OP","Line-2-Ast.OP","Line-2-OP","Line-3-Ast.OP","Line-3-OP","Line-4-Ast.OP","Line-4-OP","Line-5-Ast.OP","Line-5-OP","Mechanical","Merchandising","Production","Quality","Sample","Security","Store"],"working_section":["ACCOUNTS","admin","Asst. Oparetor 2nd Floor","Asst. Oparetor Line 01","Asst. Oparetor Line 02","Asst. Oparetor Line 03","Asst. Oparetor Line 04","Asst. Oparetor Line 05","Asst. Oparetor Line 06","Asst. Oparetor Line 07","Asst. Oparetor Line 08","Asst. Oparetor Line 09","Asst. Oparetor Line 10","Asst. Oparetor Line 11","Asst. Oparetor Line 12","Asst. Operator(Quilting)","Boiler","Canteen Boy","Checker","Commercial","Cutting Quality","CUTTING STAFF","CUTTING WORKER","Electrical","Finishing Quality","FINISHING STAFF","FINISHING WORKER","General Manager","Governess","House Keeping","HR & Admin","HR Admin & Compliance","IE & Planning","Inputman","LINE -08","LINE -11","Line Ironman","LINE-01 (A)","LINE-01 (B)","LINE-02 (A)","LINE-02 (B)","LINE-03","LINE-03 (A)","LINE-03 (B)","LINE-04","LINE-05","LINE-05 (A)","LINE-05 (B)","LINE-06","LINE-07","Line-08","LINE-09","LINE-09 (A)","Line-09 (B)","LINE-10","LINE-10 (A)","LINE-10 (B)","LINE-12","LINE-12 (A)","LINE-12 (B)","LINE-13","LINE-14","LINE-15","LINE-16","LINE-17","LINE-19","LINE-20","MAINTENANCE","Medical","MERCHANDISING","Needle Issue Man","Office Boy","Peon","Production Counter","QUALITY STAFF","Quality Worker","Quilting","Receive Man","Sample & Design","Seam Sealing","Security","Sewing","Sewing Quality","SEWING STAFF","Sewing-01","Sewing-02","Sewing-03","Sewing-04","Sewing-05","Sewing-06","Sewing-07","Sewing-08","Sewing-09","Sewing-10","Sewing-12","Sewing-13","Store"],"designation":["Account Officer","Admin Officer (Comp.)","Asst. Cutting Master","Asst. Electrical","Asst. Foldar","Asst. Inputman","Asst. Mechanic","Asst. Merchandiser","Asst. Pattern Master","Asst. Poly Man","Asst. Poly Women","Asst. Q.I.","Asstt. Store Keeper","Ast. Commercial Manager","Ast. Cutter","Ast. Finishing","Ast. Finishing Incharg","Ast. Sample Machinist","Ast. Sewing Operator","Barteck Operator","Boiler Operator","Button Operator","Canteen Boy","Caretaker","Checker","Chief Cutting Master","Chief Machanic","Chief Merchandising Manager","Chief Q/C","Cleaner","Commercial Manager","Commercial Officer","Compliance Officer","Doctor","Driver","Electrical Engineer","Electrical Incharge","Electrician","Engineer","Estate Officer","Factory Manager","Finishing Incharge","Finishing Ironman","Finishing Manager","Floor Manager","Folder","General Manager","Gr. Bartek Operator","Gr. Button Operator","Gr. Operator Button","Gr. Q.I.","Gr. Sewing Operator","Gr. Sewing perator","H.R. Officer","Head of Administration","Head of HR","Input Man","Jr. Barteck Operator","Jr. Btn. Machine Operator","Jr. Bundle Man","Jr. Electrician","Jr. Folder","Jr. Packer","Jr. Poly Man","Jr. Poly Woman","Jr. Poly Women","Jr. Q.I","Jr. Q.I.","Jr. Sewing Operator","Knitting Manager","Line Chief","Line Incharge","Line Ironman","Manager (A/C & Admin.)","Manager (Admn)","Manager HR & Admin","Managing Director","Mechanic","Merchandiser","Nurse","Office Assistant","Packer","Patern Master","Poly Woman","Production Manager","Q/I","Q/I Embroidery & Printing","Safety Officer","Sample Machinist","Scissor man","Security Guard","Sewing Operator","Spot man","Sr. Barteck Operator","Sr. Cutter","Sr. Executive Accounts","Sr. Manager Accounts","Sr. Marker","Sr. Merchandiser","Sr. Operator Button","Sr. Packer","Sr. Q/I","Sr. Q/I (Dying)","Sr. Q/I (Fabric)","Sr. Q/I (Knitting )","Sr. Q/I (Knitting)","Sr. Quality Inspactor","Sr. Sewing Operator","Store Assistant","Store Keeper","Store Labour","Supervisor","Sweeper","T. Sucking M/C Operator","Time Kipper","Welfare Officer"],"floor":["1st Floor","2nd Floor","4th Floor","Ground Floor"],"bgroup":["A+","A-","B+","B-","AB+","AB-","O+","O-"],"gender":["Male","Female"],"religion":["Atheist","Buddhist","Christian","etc","Hindu","Islam"],"exp_cond":["<=","=",">="],"unit":["Year","Month"],"report_type":["Experience Report","Lefty Register","New Join Register","Profile Search","Punch Card List","Resign Lefty Register","Resign Register","Service Book"],"status":["Active","Inactive"],"form_target":["Review","Print Preview"]};
let profileSearchDraft=null,profileSearchResults=null,profileSearchOffset=0;
const profileSearchDate=(d,m,y)=>{if(!d||!m||!y||Number(d)===0||Number(m)===0||Number(y)===0)return null;const date=new Date(Number(y),Number(m)-1,Number(d));return date.getFullYear()===Number(y)&&date.getMonth()===Number(m)-1&&date.getDate()===Number(d)?date:null;};
function profileSearchParse(value){const v=String(value||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)),a=v.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);return a?profileSearchDate(a[1],a[2],a[3]):null;}
function profileSearchInitial(){const [d,m,y]=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Dhaka'}).format(new Date()).split('/');return {report_type:'Profile Search',status:'',form_target:'Print Preview',date_range:true,date_ini_day:String(Number(d)),date_ini_month:String(Number(m)),date_ini_year:y,date_end_day:String(Number(d)),date_end_month:String(Number(m)),date_end_year:y};}
function profileSearchControl(key,label,type='select'){const v=profileSearchDraft[key]||'',id='ps-'+key,options=profileSearchOptions[key]||[];return '<div class="ps-control">'+(type==='select'?'<select id="'+id+'" aria-label="'+esc(label)+'" name="'+key+'"><option value=""></option>'+options.map(o=>'<option '+(o===v?'selected':'')+'>'+esc(o)+'</option>').join('')+'</select>':'<input id="'+id+'" aria-label="'+esc(label)+'" name="'+key+'" value="'+esc(v)+'" maxlength="120">')+'<button type="button" data-ps-clear="'+key+'">Clear</button></div>';}
function profileSearchDateControls(prefix,join=false){return ['day','month','year'].map(part=>{const key=prefix+'_'+part,values=part==='day'?Array.from({length:31},(_,i)=>i+1):part==='month'?Array.from({length:12},(_,i)=>i+1):Array.from({length:Math.max(31,new Date().getFullYear()-1999)},(_,i)=>2000+i);return '<select aria-label="'+prefix+' '+part+'" name="'+key+'"><option value="">'+(join?(part==='year'?'0000':'00'):'')+'</option>'+values.map(v=>'<option value="'+v+'" '+(String(v)===profileSearchDraft[key]?'selected':'')+'>'+String(v).padStart(part==='year'?4:join?2:1,'0')+'</option>').join('')+'</select>';}).join('');}
function renderProfileSearch(){profileSearchDraft||=profileSearchInitial();$('#main').innerHTML='<section class="profile-search-paper no-print"><form id="profileSearchForm"><div class="payroll-controls"><input name="quickSearch" aria-label="Search ID or name" placeholder="Search ID or name" value="'+esc(profileSearchDraft.quickSearch||'')+'" style="min-width:240px"> <button type="submit" class="primary">Search</button><button type="button" data-ps-reset>Clear</button><button type="button" data-ps-reset>New</button></div></form></section><div id="profileSearchResult"></div>';profileSearchRenderResults();applyActionControls();}
function profileSearchMatch(employee,f){const quick=String(f.quickSearch||'').trim().toLowerCase();if(quick&&![employee.reference,employee.name,...['ID No','Punch ID','Name (Eng)','Name (Bn)'].map(k=>window.FarnoorBangla?.displayProfile(employee,k)||employee.hrDetails?.[k])].some(v=>String(v||'').toLowerCase().includes(quick)))return false;const v=employee.hrDetails||{},same=(field,keys)=>!f[field]||keys.some(key=>String(v[key]||'').trim().toLowerCase()===f[field].toLowerCase()),contains=(field,keys)=>!f[field]||keys.some(key=>String(window.FarnoorBangla?.displayProfile(employee,key)||v[key]||'').toLowerCase().includes(f[field].toLowerCase()));if(f.idno&&![employee.reference,v['ID No'],v['Punch ID']].some(x=>String(x||'').toLowerCase()===f.idno.toLowerCase()))return false;for(const [field,key]of Object.entries({branch_name:'Branch Name',egroup:'Emp.Group',department:'Department',section:'Section',working_section:'Working Section',designation:'Designation',floor:'Floor',bgroup:'Blood Group',gender:'Gender',religion:'Religion',status:'Status'}))if(!same(field,[key]))return false;const keys=Object.keys(v);if(!contains('address_info',keys.filter(k=>k.includes('Address')))||!contains('dist',keys.filter(k=>k.includes('District')))||!contains('ps',keys.filter(k=>k.includes('Police Station'))))return false;const joined=profileSearchParse(v['Date of Join']),released=profileSearchParse(v['Date of Release']),from=profileSearchDate(f.date_ini_day,f.date_ini_month,f.date_ini_year),to=profileSearchDate(f.date_end_day,f.date_end_month,f.date_end_year);if(f.checkboxdateofjoin){const exact=profileSearchDate(f.dateofjoin_ini_day,f.dateofjoin_ini_month,f.dateofjoin_ini_year);if(!exact||!joined||exact.getTime()!==joined.getTime())return false;}if(f.experience){if(!joined)return false;const end=to||new Date(),months=(end.getFullYear()-joined.getFullYear())*12+end.getMonth()-joined.getMonth()-(end.getDate()<joined.getDate()?1:0),value=f.unit==='Month'?months:months/12,target=Number(f.experience);if(!Number.isFinite(target)||target<0)return false;const op=f.exp_cond||'=';if(op==='<='?value>target:op==='>='?value<target:Math.floor(value)!==target)return false;}const date=f.report_type==='New Join Register'?joined:f.report_type==='Resign Register'||f.report_type==='Resign Lefty Register'?released:null;if(['Resign Register','Resign Lefty Register'].includes(f.report_type)&&!released)return false;if(f.date_range&&['New Join Register','Resign Register','Resign Lefty Register'].includes(f.report_type)&&(!date||from&&date<from||to&&date>to))return false;return true;}
function profileSearchRenderResults(){const node=$('#profileSearchResult');if(!node||!profileSearchResults)return;const cols=['ID No','Name (Eng)','Name (Bn)','Designation','Department','Section','Working Section','Floor','Date of Join','Status','Salary','Date of Release'];node.innerHTML='<section class="panel printable" id="profileSearchReport"><p>'+profileSearchResults.length+' records · '+(profileSearchResults.length?profileSearchOffset+1:0)+'–'+Math.min(profileSearchOffset+100,profileSearchResults.length)+'</p><div class="table-wrap"><table class="payroll-result"><thead><tr>'+cols.map(k=>'<th>'+esc(k)+'</th>').join('')+'</tr></thead><tbody>'+profileSearchResults.slice(profileSearchOffset,profileSearchOffset+100).map((row,i)=>'<tr>'+cols.map(k=>'<td>'+(k==='ID No'?'<button type="button" data-profile-edit="'+esc(row.id)+'" style="padding:0;border:0;background:transparent;color:#155e8a;text-decoration:underline;cursor:pointer">':'')+esc(window.FarnoorBangla?.displayProfile(row,k)||row.hrDetails?.[k]||(k==='ID No'?row.reference:k==='Name (Eng)'?row.name:''))+(k==='ID No'?'</button>':'')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div><div class="payroll-controls no-print"><button data-ps-page="-100" '+(!profileSearchOffset?'disabled':'')+'>Previous 100</button><button data-ps-page="100" '+(profileSearchOffset+100>=profileSearchResults.length?'disabled':'')+'>Next 100</button></div></section>';}
const profileSearchPriorRender=renderPage;renderPage=function(){if(activePage==='hr-profile-search'){renderProfileSearch();return;}profileSearchPriorRender();};
$('#main').addEventListener('submit',e=>{if(e.target.id!=='profileSearchForm')return;e.preventDefault();if(!FarnoorAccess.canPage('employees')){toast('Personal File view permission is required to search employee profiles.');return;}if(['Lefty Register','Resign Lefty Register'].includes(profileSearchDraft.report_type)){toast('Left-handed status is not present in the saved employee profiles.');return;}profileSearchResults=(state.records.employees||[]).filter(row=>profileSearchMatch(row,profileSearchDraft));profileSearchOffset=0;profileSearchRenderResults();applyActionControls();});
$('#main').addEventListener('input',e=>{if(!e.target.closest('#profileSearchForm'))return;profileSearchDraft[e.target.name]=e.target.type==='checkbox'?e.target.checked:e.target.value;});
$('#main').addEventListener('change',e=>{if(!e.target.closest('#profileSearchForm'))return;profileSearchDraft[e.target.name]=e.target.type==='checkbox'?e.target.checked:e.target.value;});
$('#main').addEventListener('click',e=>{const b=e.target.closest('button');if(!b||activePage!=='hr-profile-search')return;if(b.hasAttribute('data-ps-reset')){profileSearchDraft=profileSearchInitial();profileSearchResults=null;renderProfileSearch();}if(b.dataset.psClear){profileSearchDraft[b.dataset.psClear]='';renderProfileSearch();}if(b.dataset.psPage){profileSearchOffset=Math.max(0,profileSearchOffset+Number(b.dataset.psPage));profileSearchRenderResults();}if(b.hasAttribute('data-ps-pdf'))exportPagePDF($('#profileSearchReport'));if(b.hasAttribute('data-ps-print'))window.print();if(b.hasAttribute('data-ps-csv')){const cols=['ID No','Name (Eng)','Name (Bn)','Designation','Department','Section','Date of Join','Status'],q=v=>'"'+String(v||'').replaceAll('"','""')+'"';download('profile-search.csv','\ufeff'+[cols.map(q).join(','),...profileSearchResults.map(row=>cols.map(k=>q(window.FarnoorBangla?.displayProfile(row,k)||row.hrDetails?.[k])).join(','))].join('\r\n'),'text/csv');}});

document.getElementById('main').addEventListener('click',event=>{const button=event.target.closest('[data-profile-edit]');if(!button)return;if(!FarnoorAccess.canAction('employees','edit'))return toast('Employee edit permission is required.');const row=(state.records.employees||[]).find(r=>r.id===button.dataset.profileEdit);if(!row)return toast('Profile not found. Refresh data and retry.');goPage('employees');hrOpen(row.id,false);});

;
;/* booking.js */
'use strict';
const bookingColumns=[['buyer','BUYER'],['style','STYLE'],['item','ITEM'],['orderQty','ORDER QTY'],['bookingQty','BOOKING QTY'],['bookingDate','BOOKING DATE'],['shipmentDate','SHIPMENT DATE'],['remarks','REMARKS']];
const blankBookingRow=()=>Object.fromEntries(bookingColumns.map(([key])=>[key,'']));
let bookingDraft=null,bookingSearch='',bookingBusy=false;
const bookingFiles=()=>((state.records.booking||[]).filter(f=>!f.deletedAt)).slice().sort((a,b)=>(b.createdAt||b.date).localeCompare(a.createdAt||a.date));
const bookingFileRows=file=>file.rows||[{...blankBookingRow(),buyer:file.buyer||'',style:file.style||'',item:file.item||file.name||'',orderQty:String(file.orderQty||file.quantity||''),bookingQty:String(file.bookingQty||''),bookingDate:file.date,shipmentDate:file.shipmentDate||'',remarks:file.remarks||''}];
const bookingSourceRows=()=>FarnoorAccess.canPage('order-report')?(state.orderFiles||[]).flatMap(f=>f.rows.map(r=>({...r,orderQty:r.orderQty??r.qty??'',bookingQty:r.bookingQty??'',bookingDate:r.bookingDate??''}))):[];
function bookingSourceChoices(source){return bookingColumns.filter(([key])=>key!=='remarks').flatMap(([key,label])=>[...new Set(source.map(row=>String(row[key]??'').trim()).filter(Boolean))].map(value=>({key,label,value})));}
function bookingSelectedRows(source,choice){return source.filter(row=>String(row[choice.key]??'').trim()===choice.value).map(row=>Object.fromEntries(bookingColumns.map(([key])=>[key,String(row[key]??'')])));}
function bookingMatches(row,search){const terms=search.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);return terms.every(term=>[row.buyer,row.style,row.item].some(value=>String(value||'').toLocaleLowerCase().includes(term)));}
function bookingValidate(rows){return rows.filter(r=>bookingColumns.some(([k])=>String(r[k]??'').trim())).map(r=>{const row=Object.fromEntries(bookingColumns.map(([k])=>[k,String(r[k]??'').trim()]));for(const value of Object.values(row))if(value.length>500)throw Error('Each cell must be within 500 characters.');if(!row.buyer||!row.style||!row.item)throw Error('Enter BUYER, STYLE and ITEM for each filled row.');for(const key of ['orderQty','bookingQty']){const digits=StoreCore.digits(row[key]);if(!/^\d+(\.\d{1,3})?$/.test(digits)||Number(digits)>1000000000)throw Error('Enter a valid '+bookingColumns.find(c=>c[0]===key)[1]+'.');row[key]=digits;}row.bookingDate=normalizeDate(row.bookingDate);row.shipmentDate=normalizeDate(row.shipmentDate);if(dateKey(row.shipmentDate)<dateKey(row.bookingDate))throw Error('SHIPMENT DATE cannot be before BOOKING DATE.');return row;});}
function bookingIdentity(title,file){return `<div class="booking-company"><img src="Farnoor_New_Logo.png" alt="Farnoor logo"><div><h2>FARNOOR GARMENTS LTD.</h2><p>1028/1/2 Malibagh Bazar Road, Dhaka-1217</p></div></div>${['BOOKING','BOOKING REPORT'].includes(title)?`<h2 class="booking-title">${title}</h2><p class="booking-date">${esc(new Date(file?.updatedAt||file?.createdAt||bookingDraft?.openedAt||Date.now()).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}))}</p>`:`<p class="booking-date">${esc(new Date(file?.updatedAt||file?.createdAt||bookingDraft?.openedAt||Date.now()).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}))}</p><h2 class="booking-title">${title}</h2>`}`;}
function bookingSignatures(){return '<div class="booking-signatures">'+['Merchandiser','Head of Production','General Manager','Managing Director'].map(n=>'<span>'+n+'</span>').join('')+'</div>';}
function bookingTable(rows,edit=false){return `<div class="table-wrap"><table class="booking-table"><thead><tr><th>SL</th>${bookingColumns.map(([,label])=>`<th>${label}</th>`).join('')}${edit?'<th class="booking-remove no-print"></th>':''}</tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td>${bookingColumns.map(([k,label],j)=>`<td>${edit?`<input data-booking-row="${i}" data-booking-col="${j}" data-booking-field="${k}" aria-label="Booking row ${i+1} ${label}" maxlength="500" ${k!=='remarks'?`list="booking-source-${k}"`:''} value="${esc(r[k])}" ${k.endsWith('Qty')?'inputmode="decimal"':''}>`:esc(r[k])}</td>`).join('')}${edit?`<td class="booking-remove no-print"><button type="button" data-booking-action="remove" data-booking-row="${i}" data-page-action-required="edit" aria-label="Remove booking row ${i+1}">−</button></td>`:''}</tr>`).join('')}</tbody></table></div>`;}
function bookingActions(id=''){return `<div class="booking-actions no-print">${['Print','Edit','Excel','Delete'].map(label=>`<button type="button" class="booking-${label.toLowerCase()}" data-booking-action="${label.toLowerCase()}" data-booking-id="${esc(id)}" data-page-action-required="${label==='Print'?'print':['Edit','Delete'].includes(label)?'edit':'view'}">${label}</button>`).join('')}</div>`;}
function renderBookingEntry(){bookingDraft||={id:null,openedAt:new Date().toISOString(),rows:Array.from({length:5},blankBookingRow)};const source=bookingSourceRows();$('#main').innerHTML=`<section class="account-paper booking-paper booking-entry">${bookingIdentity('BOOKING',bookingDraft)}${bookingColumns.filter(([k])=>k!=='remarks').map(([k])=>`<datalist id="booking-source-${k}">${[...new Set(source.map(r=>String(r[k]??'')).filter(Boolean))].map(v=>`<option value="${esc(v)}"></option>`).join('')}</datalist>`).join('')}${bookingTable(bookingDraft.rows,true)}<div class="booking-controls no-print"><button type="button" data-booking-action="row" data-page-action-required="edit">+ Row</button><button type="button" class="primary" id="bookingSave" data-booking-action="save" data-page-action-required="edit" ${bookingBusy?'disabled':''}>${bookingBusy?'Saving…':'Save'}</button></div>${bookingSignatures()}</section>`;applyActionControls();}
function renderBookingReport(){const search=bookingSearch,files=bookingFiles();$('#main').innerHTML=`<form id="bookingSearchForm" class="booking-search no-print"><label>Search BUYER / STYLE / ITEM<input id="bookingSearchInput" type="search" list="bookingSuggestions" autocomplete="off" value="${esc(search)}" placeholder="Type at least two letters or numbers…"><datalist id="bookingSuggestions"></datalist></label><button class="primary">Search</button><button type="button" data-booking-action="clear">Clear</button></form><div class="booking-reports">${files.map(file=>({file,rows:bookingFileRows(file).filter(row=>bookingMatches(row,search))})).filter(({rows})=>rows.length).map(({file,rows})=>`<article class="account-paper booking-paper booking-document" data-booking-file="${esc(file.id)}">${bookingActions(file.id)}${bookingIdentity('BOOKING REPORT',file)}${bookingTable(rows)}${bookingSignatures()}</article>`).join('')||'<p class="empty">No matching booking files.</p>'}</div>${(state.records.booking||[]).some(f=>f.deletedAt)?`<details class="no-print"><summary>Deleted booking files</summary>${state.records.booking.filter(f=>f.deletedAt).map(f=>`<p>${esc(f.reference)} <button data-booking-action="restore" data-booking-id="${esc(f.id)}" data-page-action-required="edit">Restore</button></p>`).join('')}</details>`:''}`;applyActionControls();}
const previousBookingRender=renderPage;renderPage=function(){if(['booking-entry','booking-report','booking'].includes(activePage)){if(!FarnoorAccess.canPage(activePage))return renderOverview();if(activePage==='booking-report')renderBookingReport();else renderBookingEntry();}else previousBookingRender();};
$('#main').addEventListener('input',event=>{const input=event.target;if(input.matches('[data-booking-field]')){bookingDraft.rows[Number(input.dataset.bookingRow)][input.dataset.bookingField]=input.value;const list=$('#booking-source-'+input.dataset.bookingField),value=input.value.trim().toLocaleLowerCase();if(list)list.innerHTML=value.length>=2?[...new Set(bookingSourceRows().map(row=>String(row[input.dataset.bookingField]??'')).filter(text=>text.toLocaleLowerCase().includes(value)))].slice(0,40).map(text=>`<option value="${esc(text)}"></option>`).join(''):'';}if(input.id==='bookingSearchInput'){const value=input.value.trim().toLocaleLowerCase(),all=bookingFiles().flatMap(f=>bookingFileRows(f).flatMap(r=>[r.buyer,r.style,r.item]));$('#bookingSuggestions').innerHTML=value.length>=2?[...new Set(all.filter(v=>String(v).toLocaleLowerCase().includes(value)))].slice(0,40).map(v=>`<option value="${esc(v)}"></option>`).join(''):'';}});
function bookingAutoMatch(source,row,field){const normalize=value=>String(value??'').trim().toLocaleLowerCase();let value=normalize(row[field]);if(value.length<2)return null;const exact=source.filter(r=>normalize(r[field])===value),values=[...new Set(source.map(r=>String(r[field]??'')).filter(v=>normalize(v).includes(value)))];let candidates=exact;if(!candidates.length&&values.length===1){row[field]=values[0];candidates=source.filter(r=>normalize(r[field])===normalize(values[0]));}if(candidates.length>1||!['buyer','style','item'].includes(field))candidates=candidates.filter(r=>['buyer','style','item'].filter(key=>key!==field&&normalize(row[key])).every(key=>normalize(r[key])===normalize(row[key])));return candidates.length===1?candidates[0]:null;}
$('#main').addEventListener('focusout',event=>{const input=event.target,field=input.dataset.bookingField;if(!['buyer','style','item','orderQty','bookingQty','bookingDate','shipmentDate'].includes(field)||!FarnoorAccess.canAction(activePage,'edit'))return;const row=bookingDraft.rows[Number(input.dataset.bookingRow)],match=bookingAutoMatch(bookingSourceRows(),row,field);if(match)for(const key of ['buyer','style','item','orderQty','bookingQty','bookingDate','shipmentDate'])if(String(match[key]??'').trim())row[key]=String(match[key]);$('#main').querySelectorAll('[data-booking-field]').forEach(cell=>{if(cell.dataset.bookingRow===input.dataset.bookingRow)cell.value=row[cell.dataset.bookingField];});});
$('#main').addEventListener('keydown',event=>{if(!event.target.matches('[data-booking-field]')||event.altKey||event.ctrlKey||event.metaKey||!['Enter','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key))return;event.preventDefault();const all=[...$('#main').querySelectorAll('[data-booking-field]')],i=all.indexOf(event.target),step=event.key==='ArrowUp'?-8:event.key==='ArrowDown'?8:event.key==='ArrowLeft'?-1:1,target=all[i+step];if(target){target.focus();target.select();}else if(event.key==='Enter'&&i===all.length-1)$('#bookingSave').focus();});
$('#main').addEventListener('submit',event=>{if(event.target.id!=='bookingSearchForm')return;event.preventDefault();const value=$('#bookingSearchInput').value.trim();if(value&&value.length<2)return toast('Type at least two letters or numbers.');bookingSearch=value;renderBookingReport();});
async function saveBooking(){if(bookingBusy)return;try{const rows=bookingValidate(bookingDraft.rows);if(!rows.length)throw Error('Enter at least one booking row.');if(rows.length>1000)throw Error('Maximum 1000 rows per file.');bookingBusy=true;const button=$('#bookingSave');button.dataset.busy='true';button.disabled=true;button.textContent='Saving…';await new Promise(resolve=>setTimeout(resolve,0));const next={...state,records:{...state.records,booking:[...(state.records.booking||[])]}};const index=next.records.booking.findIndex(f=>f.id===bookingDraft.id),old=index>=0?next.records.booking[index]:null;if(bookingDraft.id&&(!old||old.deletedAt||JSON.stringify(old)!==bookingDraft.original))throw Error('This booking file changed. Reopen it before editing.');const now=new Date().toISOString(),id=old?.id||'BOOKING-'+crypto.randomUUID(),file={...(old||{}),id,reference:old?.reference||'BOOKING-'+Date.now(),name:'Booking',quantity:rows.reduce((n,r)=>n+Number(r.bookingQty),0),date:rows[0].bookingDate,status:'Completed',createdAt:old?.createdAt||now,updatedAt:now,bookingKind:'Booking',rows};if(old)next.records.booking[index]=file;else next.records.booking.unshift(file);if(await commit(next,{bookingFile:file})){bookingDraft=null;bookingSearch='';goPage('booking-report');toast('Booking file saved online.');}}catch(error){toast(error.message);}finally{bookingBusy=false;if(activePage==='booking-entry')renderBookingEntry();}}
$('#main').addEventListener('click',async event=>{const button=event.target.closest('[data-booking-action]');if(!button||bookingBusy)return;const action=button.dataset.bookingAction;if(!FarnoorAccess.canAction(activePage,['print'].includes(action)?'print':['excel','clear'].includes(action)?'view':'edit'))return;const id=button.dataset.bookingId,file=(state.records.booking||[]).find(f=>f.id===id);if(action==='save')return saveBooking();if(action==='row'){if(bookingDraft.rows.length>=1000)return toast('Maximum 1000 rows.');bookingDraft.rows.push(blankBookingRow());return renderBookingEntry();}if(action==='remove'){bookingDraft.rows.splice(Number(button.dataset.bookingRow),1);if(!bookingDraft.rows.length)bookingDraft.rows.push(blankBookingRow());return renderBookingEntry();}if(action==='new'){if(bookingDraft?.rows.some(r=>Object.values(r).some(v=>String(v).trim()))&&!confirm('Discard unsaved booking changes?'))return;bookingDraft=null;return renderBookingEntry();}if(action==='clear'){bookingSearch='';return renderBookingReport();}if(action==='edit'){if(!file)return toast('This entry is already editable.');bookingDraft={id:file.id,createdAt:file.createdAt,updatedAt:file.updatedAt,original:JSON.stringify(file),rows:structuredClone(bookingFileRows(file))};return goPage('booking-entry');}if(action==='delete'||action==='restore'){if(!file)return toast('Select a saved booking file.');if(action==='delete'&&!confirm('Move this booking file to Deleted files? It can be restored.'))return;const next=structuredClone(state),target=next.records.booking.find(f=>f.id===id);if(action==='delete')target.deletedAt=new Date().toISOString();else delete target.deletedAt;bookingBusy=true;try{if(await commit(next)){bookingDraft=null;goPage('booking-report');toast(action==='delete'?'Booking file deleted.':'Booking file restored.');}}finally{bookingBusy=false;}return;}if(action==='excel'){const rows=file?bookingFileRows(file).filter(r=>bookingMatches(r,bookingSearch)):bookingDraft.rows.filter(r=>Object.values(r).some(v=>String(v).trim()));if(!rows.length)return toast('No booking rows to export.');download((file?.reference||'booking-entry')+'.xlsx',makeXlsx([['FARNOOR GARMENTS LTD.'],['1028/1/2 Malibagh Bazar Road, Dhaka-1217'],['BOOKING REPORT'],['SL',...bookingColumns.map(c=>c[1])],...rows.map((r,i)=>[i+1,...bookingColumns.map(([k])=>k.endsWith('Qty')&&r[k]&&Number.isFinite(Number(StoreCore.digits(r[k])))?Number(StoreCore.digits(r[k])):r[k])]),[],['Merchandiser','Head of Production','General Manager','Managing Director']],'BOOKING REPORT'),'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');return;}if(action==='print'){const selected=button.closest('.booking-paper');document.querySelectorAll('.booking-print-selected').forEach(e=>e.classList.remove('booking-print-selected'));selected.classList.add('booking-print-selected');document.body.classList.add('booking-printing');try{window.print();}finally{setTimeout(()=>document.body.classList.remove('booking-printing'),1000);}}});

;
;/* workspace-changes.js */
'use strict';
function workspaceChanges(before,after){const changes=[],same=(a,b)=>a===b||JSON.stringify(a)===JSON.stringify(b);function walk(a,b,path){if(same(a,b))return;if(Array.isArray(a)&&Array.isArray(b)&&[a,b].every(rows=>rows.every(r=>r&&typeof r==='object'&&typeof r.id==='string')&&new Set(rows.map(r=>r.id)).size===rows.length)){const old=new Map(a.map(r=>[r.id,r])),ids=new Set(b.map(r=>r.id));changes.push({path,kind:'rows',upsert:b.filter(r=>!same(old.get(r.id),r)),remove:a.filter(r=>!ids.has(r.id)).map(r=>r.id),order:b.map(r=>r.id)});return;}if(a&&b&&!Array.isArray(a)&&!Array.isArray(b)&&typeof a==='object'&&typeof b==='object'){for(const key of new Set([...Object.keys(a),...Object.keys(b)]))walk(a[key],b[key],[...path,key]);return;}changes.push(b===undefined?{path,kind:'remove'}:{path,kind:'set',value:b});}walk(before,after,[]);return changes;}
function applyWorkspaceChanges(state,changes){if(!Array.isArray(changes)||changes.length>5000)throw Error('Too many changes.');for(const change of changes){const path=change.path;if(!Array.isArray(path)||!path.length||path.length>8||path.some(key=>typeof key!=='string'||!key||key.length>150||['__proto__','prototype','constructor'].includes(key)))throw Error('Invalid change path.');let parent=state;for(const key of path.slice(0,-1)){if(!Object.prototype.hasOwnProperty.call(parent,key))parent[key]={};parent=parent[key];if(!parent||Array.isArray(parent)||typeof parent!=='object')throw Error('Invalid change parent.');}const key=path.at(-1);if(change.kind==='remove'){delete parent[key];}else if(change.kind==='set'){parent[key]=change.value;}else if(change.kind==='rows'){if(!Array.isArray(parent[key])||!Array.isArray(change.upsert)||!Array.isArray(change.remove)||!Array.isArray(change.order))throw Error('Invalid row changes.');const rows=new Map(parent[key].map(r=>[r.id,r]));for(const id of change.remove){if(!rows.delete(id))throw Error('Removed row does not exist.');}for(const row of change.upsert){if(!row||typeof row.id!=='string')throw Error('Invalid changed row.');rows.set(row.id,row);}if(new Set(change.order).size!==change.order.length||change.order.length!==rows.size||change.order.some(id=>!rows.has(id)))throw Error('Invalid row order.');parent[key]=change.order.map(id=>rows.get(id));}else throw Error('Invalid change type.');}return state;}

;
;/* sync.js */
'use strict';
let dataSavedState=null,dataStartupRetries=0;
let dataRevision=0,dataReady=false,dataSaving=false,dataChanged=false,dataLoadInFlight=false,dataForceAfterLoad=false,dataCached=false,dataCacheUserId=FarnoorAPI.sessionUserId();
const dataStatus=text=>{for(const selector of ['#saveStatus','#entrySaveStatus']){const node=$(selector);if(node)node.textContent=text;}};
async function dataRequest(options={}){const {route='/api/workspace',...requestOptions}=options;const startup=route==='/api/workspace'&&!requestOptions.method?FarnoorAPI.takeWorkspaceStartup?.():null;const started=startup?await startup:null;if(started?.error)throw started.error;const response=started?.response||await FarnoorAPI.request(route,{...requestOptions,credentials:'same-origin',cache:'no-store',headers:{'Content-Type':'application/json'}});if(response.status===401){sessionActive=false;if(!dataReady&&!dataCached){FarnoorAPI.go('login.html');}const error=Error('Your session expired. Copy your unsaved entries and log in again.');error.status=401;throw error;}let body=await response.json();if(response.ok&&body.unchanged){const cached=started?.cached;if(!cached||cached.userId!==FarnoorAPI.sessionUserId()||cached.revision!==body.revision||body.access?.role!=='super_admin')throw Error('Cached data could not be verified. Refresh to retry.');body={revision:body.revision,access:body.access,state:{...cached.state,profile:body.profile}};}if(!response.ok){const error=Error(body.error||'Server unavailable.');error.status=response.status;throw error;}return body;}
function cacheLock(locked){$('#main').inert=locked;for(const selector of ['#superAdminButton','#profileButton','#backup','#restoreButton'])$(selector).disabled=locked;$('#workspaceRefreshNotice').hidden=!locked;}
async function warmWorkspace(){try{if(!dataCacheUserId)return;const cached=await FarnoorWorkspaceCache.read(dataCacheUserId);if(!cached||dataReady)return;const response=await FarnoorAPI.request('/api/auth/status');if(!response.ok)return;const auth=await response.json();if(!auth.authenticated||auth.user?.role!=='super_admin'||auth.user.id!==dataCacheUserId||dataReady||dataSaving)return;state=cached.state;dataRevision=cached.revision;dataCached=true;sessionActive=true;FarnoorAccess.apply(cached.access);$('#workspace').inert=false;$('#dataLoading').hidden=true;renderProfile();renderOverview();cacheLock(true);dataStatus('Checking latest saved data…');}catch{/* Online load remains the source of truth. */}}
async function loadData(force=false){
 if(dataSaving)return;
 if(dataLoadInFlight){dataForceAfterLoad=dataForceAfterLoad||force;return;}
 dataLoadInFlight=true;$('#dataLoadingMessage').hidden=true;$('#retryData').hidden=true;
 try{
  const body=await dataRequest();
  // A slow read started before a save must never replace its newer result.
  if(dataReady&&body.revision<dataRevision)return;
  const permissionsChanged=FarnoorAccess.apply(body.access);
  if(dataReady&&!force&&!permissionsChanged&&body.revision===dataRevision){dataStatus('Saved online');return;}
  const readOnly=!document.querySelector('dialog[open]')&&(!activePage||activePage.endsWith('-report'));
  if(dataReady&&!force&&!permissionsChanged&&!readOnly){dataChanged=true;dataStatus('New data available · Refresh');return;}
  dataStartupRetries=0;state=validateState(body.state);dataSavedState=structuredClone(state);dataRevision=body.revision;dataReady=true;dataCached=false;dataChanged=false;sessionActive=true;cacheLock(false);void FarnoorWorkspaceCache.write(dataCacheUserId,body);
  window.FarnoorPresence?.heartbeat();$('#workspace').inert=false;$('#dataLoading').hidden=true;renderProfile();
  if(adminView)renderAdminView();else if(activePage)renderPage();else renderOverview();dataStatus('Saved online');
 }catch(error){if(dataCached)$('#workspaceRefreshNotice').textContent='Latest data is unavailable. Showing previous data; saving is disabled. Use Refresh data to retry.';dataStatus('Connection unavailable');$('#dataLoadingMessage').textContent=error.name==='TimeoutError'||error.name==='AbortError'?'সংযোগে সময় বেশি লাগছে। Retry চাপুন।':error.message;$('#dataLoadingMessage').hidden=false;$('#retryData').hidden=false;toast(error.message);if(!dataReady&&![401,403].includes(error.status)&&dataStartupRetries<3){dataStartupRetries++;if(dataCached)$('#workspaceRefreshNotice').textContent='সর্বশেষ ডাটা আনা হচ্ছে—সংযোগ আবার চেষ্টা চলছে। ডাটা আসা পর্যন্ত Save বন্ধ থাকবে।';setTimeout(()=>void loadData(true),Math.min(1500*2**(dataStartupRetries-1),6000));}}
 finally{dataLoadInFlight=false;if(dataForceAfterLoad){dataForceAfterLoad=false;void loadData(true);}}
}
// Scoped Personal saves are validated by the server; avoid walking unrelated workspace data.
async function commit(next,saveOptions={}){if(!dataReady){toast('Wait for saved data to load.');return false;}if(dataSaving){toast('A save is already in progress.');return false;}if(dataChanged){toast('Another window changed the data. Copy unsaved inputs, then Refresh and review before saving.');return false;}dataSaving=true;$('#workspace').inert=true;dataStatus('Saving…');try{const personalRecord=saveOptions.personalFile,scopedPersonal=!!personalRecord||!!saveOptions.serviceBenefitDelete;let changes=[],compact=false;if(!scopedPersonal){validateState(next);changes=workspaceChanges(dataSavedState||state,next);if(!changes.length){dataStatus('Already saved');return true;}compact=changes.length<=5000&&JSON.stringify(changes).length<JSON.stringify(next).length*.75;}const result=await dataRequest(saveOptions.serviceBenefitDelete?{route:'/api/service-benefit/delete',method:'POST',payload:{id:saveOptions.serviceBenefitDelete,revision:dataRevision,accessRevision:accessInfo.revision}}:saveOptions.employeeFile?{route:'/api/employee/save',method:'POST',payload:{file:saveOptions.employeeFile,original:saveOptions.employeeOriginal,revision:dataRevision,accessRevision:accessInfo.revision}}:saveOptions.personalFile?{route:'/api/personal/save',method:'POST',payload:{file:saveOptions.personalFile,revision:dataRevision,accessRevision:accessInfo.revision}}:saveOptions.orderFile?{route:'/api/order/save',method:'POST',payload:{file:saveOptions.orderFile,revision:dataRevision,accessRevision:accessInfo.revision}}:saveOptions.emailGroup?{route:'/api/admin/email/save',method:'POST',payload:{group:saveOptions.emailGroup,contacts:next.emailContacts[saveOptions.emailGroup],revision:dataRevision}}:saveOptions.storeFile?{route:'/api/store/save',method:'POST',payload:{file:saveOptions.storeFile,revision:dataRevision,accessRevision:accessInfo.revision}}:saveOptions.bookingFile?{route:'/api/booking/save',method:'POST',payload:{file:saveOptions.bookingFile,revision:dataRevision,accessRevision:accessInfo.revision}}:compact?{route:'/api/workspace/changes',method:'POST',payload:{changes,revision:dataRevision,accessRevision:accessInfo.revision}}:{method:'PUT',payload:{state:next,revision:dataRevision,accessRevision:accessInfo.revision}});if(saveOptions.serviceBenefitDelete&&result.deletedId!==saveOptions.serviceBenefitDelete)throw Error('Delete was not confirmed. Refresh and retry.');state=next;dataSavedState=scopedPersonal&&dataSavedState?{...dataSavedState,records:{...dataSavedState.records,'admin-documents':structuredClone(next.records['admin-documents']||[])}}:structuredClone(next);dataRevision=result.revision;void FarnoorWorkspaceCache.write(dataCacheUserId,{state,access:accessInfo,revision:dataRevision});renderProfile();dataStatus('Saved online');return true;}catch(error){if(error.status===409){dataChanged=true;dataStatus('New data available · Refresh');}else dataStatus('Not saved · Retry');toast(error.message+' Your input is retained.');return false;}finally{dataSaving=false;$('#workspace').inert=false;}}
$('#logout').onclick=async()=>{try{const response=await FarnoorAPI.request('/api/auth/logout',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({presenceId:window.FarnoorPresence?.id})});if(!response.ok)throw Error();sessionActive=false;await FarnoorWorkspaceCache.clear();FarnoorAPI.go('login.html');}catch{toast('Could not log out. Please try again.');}};
$('#refreshData').onclick=()=>{if(accessInfo.role!=='super_admin')return toast('Super Admin access is required.');if(confirm('Refresh saved data? Copy any unsaved inputs first.'))loadData(true);};
$('#retryData').onclick=()=>loadData(true);
setInterval(()=>{if(!document.hidden&&(dataReady||dataCached)&&!dataSaving)loadData();},120000);
// Startup cache is used only after a fresh server revision and access check.
loadData(true);


;
;/* presence.js */
'use strict';
window.FarnoorPresence=(()=>{
 const id=crypto.randomUUID();let lastSent=0,busy=false,leaving=false;
 async function heartbeat(){if(leaving||busy||!dataReady||!sessionActive||document.hidden||!navigator.onLine||Date.now()-lastSent<20000)return;busy=true;try{const response=await FarnoorAPI.request('/api/presence/heartbeat',{method:'POST',body:JSON.stringify({sessionId:id})});if(response.ok)lastSent=Date.now();}catch{}finally{busy=false;}}
 async function leave(){leaving=true;try{await FarnoorAPI.request('/api/presence/leave',{method:'POST',body:JSON.stringify({sessionId:id}),keepalive:true});}catch{}}
 document.addEventListener('visibilitychange',()=>{if(!document.hidden){leaving=false;heartbeat();}});
 window.addEventListener('online',heartbeat);
 window.addEventListener('pagehide',leave);
 window.addEventListener('pageshow',()=>{leaving=false;heartbeat();});
 setInterval(heartbeat,25000);heartbeat();
 return {heartbeat,leave,id};
})();

;
;/* production-order-link.js */
'use strict';
const productionOrderFields=['buyer','style','item','orderQty','bookingQty','bookingDate','shipmentDate'];
function productionOrderRows(){return FarnoorAccess.canPage('order-report')?(state.orderFiles||[]).filter(file=>!file.deletedAt).flatMap(file=>(file.rows||[]).map(row=>({...row,orderQty:row.orderQty??row.qty??'',bookingQty:row.bookingQty??'',bookingDate:row.bookingDate??''}))):[];}
function productionOrderMatch(source,row,field){
 const norm=value=>String(value??'').trim().toLocaleLowerCase().replace(/[০-৯]/g,ch=>'০১২৩৪৫৬৭৮৯'.indexOf(ch));
 const value=norm(row[field]);if(value.length<2)return null;
 let candidates=source.filter(item=>norm(item[field])===value);
 if(!candidates.length){const values=[...new Set(source.map(item=>String(item[field]??'')).filter(item=>norm(item).includes(value)))];if(values.length===1){row[field]=values[0];candidates=source.filter(item=>norm(item[field])===norm(values[0]));}}
 if(candidates.length>1||!['buyer','style','item'].includes(field))candidates=candidates.filter(item=>['buyer','style','item'].filter(key=>key!==field&&norm(row[key])).every(key=>norm(item[key])===norm(row[key])));
 return candidates.length===1?candidates[0]:null;
}
productionComplete=function(input){
 const field=PLAN_FIELDS[Number(input.dataset.planCol)]?.[0];if(!productionOrderFields.includes(field))return;
 const id='productionOrderOptions-'+field;let list=document.getElementById(id);if(!list){list=document.createElement('datalist');list.id=id;document.getElementById('main').append(list);}input.setAttribute('list',id);
 const query=input.value.trim().toLocaleLowerCase(),names=productionOrderRows().map(row=>String(row[field]??''));
 if(['buyer','item','style'].includes(field))names.push(...productionOrderNames[{buyer:'buyers',item:'items',style:'styles'}[field]]);
 list.innerHTML=query.length<2?'':[...new Set(names)].filter(value=>value.toLocaleLowerCase().includes(query)).slice(0,40).map(value=>`<option value="${esc(value)}"></option>`).join('');
};
document.getElementById('main').addEventListener('focusout',event=>{
 const input=event.target;if(!input.matches('[data-plan-row]')||!FarnoorAccess.canAction(activePage,'edit'))return;
 const field=PLAN_FIELDS[Number(input.dataset.planCol)]?.[0];if(!productionOrderFields.includes(field))return;
 const row=currentProductionDraft().rows[Number(input.dataset.planRow)];row[field]=input.value;const match=productionOrderMatch(productionOrderRows(),row,field);
 if(match)for(const key of productionOrderFields)if(String(match[key]??'').trim())row[key]=String(match[key]);
 document.querySelectorAll(`[data-plan-row="${input.dataset.planRow}"]`).forEach(cell=>cell.value=row[PLAN_FIELDS[Number(cell.dataset.planCol)][0]]??'');refreshProduction();
});

;
;/* store-booking-link.js */
'use strict';
function storeBookingEnabled(){return ['Fabric','Accessories'].includes(storeCategory())&&!storeDelivery()&&!activePage.endsWith('-report');}
function storeBookingSource(){return FarnoorAccess.canPage('booking-report')?(state.records.booking||[]).filter(file=>!file.deletedAt).flatMap(file=>(file.rows||[]).map(row=>({...row,orderQty:row.bookingQty??''}))):[];}
function storeBookingDraft(){const category=storeCategory();return storeEditing?.category===category&&storeEditing.draft.storeMovement!=='Delivery'?storeEditing.draft:storeDraft(category);}
const storeBookingFields=['buyer','style','item','orderQty'];
document.getElementById('main').addEventListener('input',event=>{
 const input=event.target,field=input.dataset.storeField;if(!field||!storeBookingEnabled()||!storeBookingFields.includes(field))return;
 const id='storeBookingOptions-'+field;let list=document.getElementById(id);if(!list){list=document.createElement('datalist');list.id=id;document.getElementById('main').append(list);}input.setAttribute('list',id);
 const query=StoreCore.digits(input.value).toLocaleLowerCase();list.innerHTML=query.length<2?'':[...new Set(storeBookingSource().map(row=>String(row[field]??'')))].filter(value=>StoreCore.digits(value).toLocaleLowerCase().includes(query)).slice(0,40).map(value=>`<option value="${esc(value)}"></option>`).join('');
});
document.getElementById('main').addEventListener('focusout',event=>{
 const input=event.target,field=input.dataset.storeField;if(!field||!storeBookingEnabled()||!storeBookingFields.includes(field)||!FarnoorAccess.canAction(activePage,'edit'))return;
 const row=storeBookingDraft().rows[Number(input.dataset.storeRow)];row[field]=input.value;const match=productionOrderMatch(storeBookingSource(),row,field);
 if(match)for(const key of StoreCore.viewColumns(storeCategory(),false).filter(key=>['buyer','style','item','orderQty','colour','size'].includes(key)))if(String(match[key]??'').trim())row[key]=String(match[key]);
 document.querySelectorAll(`[data-store-row="${input.dataset.storeRow}"][data-store-field]`).forEach(cell=>cell.value=row[cell.dataset.storeField]??'');
});

;
;/* store-stationery-items.js */
'use strict';
const stationeryReceiveItems = ['Office File','File Clip','File Megazine','Ring File','Ball Pen','Ball Pen Red','Marker Pen Nerrow','Stapolar Machine','Stapolar Pin','Pin Remover','Punch Machine','Stel Scal','A4 Paper','Wood Pancil','Rouber','Sharpner','Calculater','Highletter 2 colour','Mesarment Tape','Jeams Paper Clip','ButterFly Clip 1/2"','Scissors','Hajira Book','Toner A4','Antry Cutter','Challane Book','Gate Pass Book'];
const accessories2Items=["CHALK","PEN","RED PEN","PENCIL","GLASS PENCIL","RUBBER/ERASER","SHARPING BELT","CUTTING KNIF","NUMBER STICKER","MARKER PEN BIG","MARKER PEN NARROW","CUTTER","MEASUREMENT TAPE","ARROW STICKER","GUIDE.1/16.C/L","GUIDE.1/16.C/R","HANGER GUIDE","MAGNET GUIDE","PLAIN FEED","ZIPPER GUIDE.C/L","ZIPPER GUIDE.C/R","ZIPPER GUIDE BOTH","Cord Gide (C/L & C/R)","BUTTON HOLE KNIF","LIFTER","SILICON","SCISSOR","1/4 Gide (C/L & C/R)","1/8 Gide (C/L & C/R)","Plastic Plan Feed","Plastic Zipper Gide C/R","Plastic Zipper Gide C/L","Plastic Zipper Gide Both","Chock Powder","TIN","AL-PIN","VOMOR","MAGIC PEN","Stapolar Pin","DB-7 -B","DB-9-B","DB-11-B","DB-14-B","DB-16-B","DB-9-NS/KN","DB-11-NS/KN","UY-7-B","UY-9-B","UY-10-B","UY-11-B","UY-14-B","UY-7-KN","UY-9-KN","UY-11-KN","UY-9-LP","UY-11-LP","DC-7-B","DC-8-B","DC-9-B","DC-11-B","DC-14-B","DC-8-NS","DC-9-NS/KN","DC-11-NS/KN","DP-9-B-5","DP-11-B-5","DP-14-B-5","DP-17-11","DP-17-14","U0-10-J/B","UO-11-B","U0-14-B","DC-9-LP","DC-11-LP","EB-16-B","TV-5 x 9"];

const electricalReceiveItems=["Tube Light 4\"","Tube Light 2\"","Plag","Iron Pipe","Iron Termoster","Iron Kye","Switch Machine 8700","Switch Machine 8100","Switch Machine","Switch","Elactric Tap","Socket 13A","Socket Multi","Socket 15A","Iron (Tatal/Bit)","Water Tap","Motor Baring 6204","Motor Baring 6203","Water Filter Catige","LED Light","Light Holder","Basin Magic Pipe","Shanp Button MC Super Wire","Plus","Scrw Driver","Glass","Relay (Fusing Machine)","Star Scrow","Star Scrow Big","Base","M Belt 32","M Belt 33","M Belt 34","M Belt 35","M Belt 36","M Belt 37","M Belt 38","M Belt 39","M Belt 40","M Belt 41","M Belt 42","A Belt 83","A Belt 84","A Belt 85","B Belt 51","B Belt 52","B Belt 83","B Belt 84","B Belt 85","IC","Tay Rod","Nut Waser","Anker Bult","Anti Cutter Knife","Padel Clum","Padel Rod","Lifter Spring","Thread Stand","Relay 5 pin","Push Switch Double","Push Switch 12 mm","Push Switch 16 mm","Magnatic Contrack","Acrolic Sheet (7\" x 12\")","Capacitor (Fusing Machine)","Fuse","Guty Set","Lifter Clam Nuka","Lifter Nut","Hit Gum","Cable 40/76","Cable 23/76","Ica Gum 200ml","Battry 2032","Motor Baring","Multi Meter","Max","Tweezers","Carbon","Snap Ring Pliers","Tester","Fan Demer","Jack Cable","Jack","Doyer Channel","Display"];

const mechanicalReceiveItems=["P/M Auto Hook","P/M N. Plate","P/M Feat Dog","P/M Bar Bush","P/M Fix Moving Knif","8000A Knif","P/M U-L Lopper","P/M Supper Tanson","O/L N. Plate","O/L U-L Lopper","O/L Divise Knif","O/L Knif Diver","O/L U-L Knif","O/L Feat Dog","F/L N.Plate","F/L Lopper","F/L Feat D/S","F/L Feat F/S","F/L Russ Cutter","B/H Hook","P/M Guide Scuru","Supper Glue","P/M Knif Patte"];

document.getElementById('main').addEventListener('input', event => {
 const input = event.target;
 if(input.dataset.storeField !== 'item' || !['Accessories','Accessories2','Stationery','Mechanical','Electrical'].includes(storeCategory()) || activePage.endsWith('-report')) return;
 let list = document.getElementById('stationeryReceiveItems');
 if(!list){list=document.createElement('datalist');list.id='stationeryReceiveItems';document.getElementById('main').append(list);}
 input.setAttribute('list',list.id);
 const query=StoreCore.digits(input.value.trim()).toLocaleLowerCase();
 list.innerHTML=query.length<2?'':(storeCategory()==='Accessories2'?accessories2Items:storeCategory()==='Electrical'&&!storeDelivery()?electricalReceiveItems:storeCategory()==='Mechanical'&&!storeDelivery()?mechanicalReceiveItems:stationeryReceiveItems).filter(value=>StoreCore.digits(value).toLocaleLowerCase().includes(query)).map(value=>`<option value="${esc(value)}"></option>`).join('');
});



;
;/* store-variance.js */
'use strict';
function storeVarianceEnabled(category=storeCategory()){return ['Fabric','Accessories'].includes(category)&&!storeDelivery();}
function storeVarianceValue(row){const booking=StoreCore.digits(row.orderQty??''),received=StoreCore.digits(row.receiveQty??'');if(!booking||!received||!/^\d+(\.\d{1,3})?$/.test(booking)||!/^\d+(\.\d{1,3})?$/.test(received))return '';return String(Math.round((Number(received)+storePreviousReceived(row)-Number(booking))*1000)/1000);}
function storeVarianceText(value){return value!==''&&Number(value)>0?'+'+value:value;}
function storeVarianceCell(row,edit,index,col){if(edit)row.excess=storeVarianceValue(row);const value=String(row.excess??''),color=value!==''&&Number(value)<0?'#c62828':value!==''&&Number(value)>0?'#15803d':'inherit';return edit?`<input readonly aria-readonly="true" data-store-row="${index}" data-store-col="${col}" data-store-field="excess" aria-label="SORT/EXCESS row ${index+1}" value="${esc(storeVarianceText(value))}" style="color:${color};font-weight:700">`:`<span style="color:${color};font-weight:700">${esc(storeVarianceText(value))}</span>`;}
function refreshStoreVariance(){if(!pageInfo(activePage)?.page.storeCategory||!storeVarianceEnabled())return;const draft=storeBookingDraft();document.querySelectorAll('[data-store-field="excess"]').forEach(cell=>{const row=draft.rows[Number(cell.dataset.storeRow)];if(!row)return;row.excess=storeVarianceValue(row);cell.value=storeVarianceText(row.excess);cell.style.color=row.excess!==''&&Number(row.excess)<0?'#c62828':row.excess!==''&&Number(row.excess)>0?'#15803d':'inherit';});}
document.getElementById('main').addEventListener('input',event=>{if(['orderQty','receiveQty'].includes(event.target.dataset.storeField))refreshStoreVariance();});
document.getElementById('main').addEventListener('focusout',event=>{if(event.target.dataset.storeField)refreshStoreVariance();});

function storeReceiptMatch(a,b){const norm=v=>String(v??'').normalize('NFKC').trim().toLocaleLowerCase();return (storeCategory()==='Fabric'?['buyer','style','colour']:['buyer','style','colour','size']).every(k=>norm(a[k])===norm(b[k]))&&norm(a.buyer)&&norm(a.style);}
function storePreviousReceived(row){if(!storeVarianceEnabled())return 0;const category=storeCategory(),editing=storeEditing?.category===category?storeEditing:null;let total=0;for(const file of state.records[StoreCore.key(category)]||[]){if(file.deletedAt||file.storeMovement==='Delivery'||file.id===editing?.id)continue;for(const prior of file.rows||[])if(storeReceiptMatch(row,prior))total+=Number(StoreCore.digits(prior.receiveQty||'0'))||0;}return Math.round(total*1000)/1000;}
function storeReceiptTotals(){if(!pageInfo(activePage)?.page.storeCategory||!storeVarianceEnabled())return;const draft=storeBookingDraft();document.querySelectorAll('[data-store-field="receiveQty"]').forEach(input=>{const row=draft.rows[Number(input.dataset.storeRow)];if(!row)return;let hint=input.parentElement.querySelector('[data-receipt-total]');if(!hint){hint=document.createElement('small');hint.dataset.receiptTotal='';hint.style.cssText='display:block;font-size:11px;white-space:normal;color:#245746';input.after(hint);}const previous=storePreviousReceived(row),current=Number(StoreCore.digits(row.receiveQty||'0'))||0;hint.textContent='Previous: '+previous+' · Total: '+Math.round((previous+current)*1000)/1000;});}
const receiptRender=renderStore;renderStore=function(){receiptRender();storeReceiptTotals();};
document.getElementById('main').addEventListener('input',storeReceiptTotals);
document.getElementById('main').addEventListener('focusout',storeReceiptTotals);
const receiptSave=saveStore;saveStore=async function(){refreshStoreVariance();return receiptSave();};


;
;/* store-stock.js */
'use strict';
function storeStockRows(category){const rows=new Map();for(const file of state.records[StoreCore.key(category)]||[]){if(file.deletedAt)continue;for(const row of file.rows||[]){const item=String(row.item||'').trim(),size=String(row.size||'').trim();if(!item)continue;const key=JSON.stringify([item.toLocaleLowerCase(),size.toLocaleLowerCase()]);if(!rows.has(key))rows.set(key,{item,size,received:0,delivered:0});const entry=rows.get(key),qty=Number(StoreCore.digits(row.receiveQty||'0'));if(Number.isFinite(qty))entry[file.storeMovement==='Delivery'?'delivered':'received']+=qty;}}return [...rows.values()].map(row=>({...row,received:Math.round(row.received*1000)/1000,delivered:Math.round(row.delivered*1000)/1000,stock:Math.round((row.received-row.delivered)*1000)/1000})).sort((a,b)=>a.item.localeCompare(b.item)||a.size.localeCompare(b.size));}
const storeStockPreviousRender=renderPage;
renderPage=function(){const category=pageInfo(activePage)?.page.stockCategory;if(!category)return storeStockPreviousRender();if(!FarnoorAccess.canPage(activePage))return renderOverview();const rows=storeStockRows(category);$('#main').innerHTML=heading('STORE','Stock',category)+`<section class="account-paper store-paper printable">${storeIdentity(category)}<h3 class="store-title">STOCK</h3><div class="table-wrap"><table class="store-table"><thead><tr><th>SL</th><th>ITEM</th><th>SIZE</th><th>RECIVE QTY</th><th>DELIVERY QTY</th><th>STOCK QTY</th></tr></thead><tbody>${rows.map((row,i)=>`<tr><td>${i+1}</td><td>${esc(row.item)}</td><td>${esc(row.size)}</td><td>${row.received}</td><td>${row.delivered}</td><td style="font-weight:700;color:${row.stock<0?'#c62828':'#15803d'}">${row.stock}</td></tr>`).join('')||'<tr><td colspan="6">No saved stock movements yet.</td></tr>'}</tbody></table></div>${storeSignatures()}</section>`;storeTick();applyActionControls();};

;
;/* whatsapp-reports.js */
'use strict';
function whatsappSavedChange(before,next,page){let kind,old,files;if(['order-entry','order-report'].includes(page)){kind='order';old=before.orderFiles||[];files=next.orderFiles||[];}else if(/^schedule-(line|report)-/.test(page||'')){kind='production';old=before.productionSchedules||[];files=next.productionSchedules||[];}else if(/^store-(fabric|accessories|accessories2)-(receive|report|delivery|delivery-report)$/.test(page||'')){kind='store';const category=pageInfo(page).page.storeCategory,key=StoreCore.key(category);old=before.records[key]||[];files=next.records[key]||[];}else return null;const previous=new Map(old.map(file=>[file.id,file.updatedAt||file.createdAt]));const file=files.find(file=>!file.deletedAt&&previous.get(file.id)!==(file.updatedAt||file.createdAt));return file?{kind,file:structuredClone(file)}:null;}
async function whatsappReportPDF(kind,file){let title,headers,rows,signatures;if(kind==='order'){title='ORDER REPORT';headers=['SL','BUYER','STYLE','ITEM','ORDER QTY','ORDER DATE','SHIPMENT DATE','REMARKS'];rows=file.rows.map((r,i)=>[i+1,r.buyer,r.style,r.item,r.qty,r.orderDate,r.shipmentDate,r.remarks]);signatures=['Merchandiser','Head of Production','General Manager','Managing Director'];}else if(kind==='store'){title=file.storeCategory+' '+(file.storeMovement==='Delivery'?'Delivery Report':'Recive Report');const fields=StoreCore.viewColumns(file.storeCategory,file.storeMovement==='Delivery');headers=['SL',...fields.map(k=>StoreCore.viewLabel(file.storeCategory,k,file.storeMovement==='Delivery'))];rows=file.rows.map((r,i)=>[i+1,...fields.map(k=>r[k])]);signatures=['Store Officer','Store Incharg','Head of Production','General Manager'];}else{title='SCHEDULE REPORT · '+file.section;headers=['SL',...PLAN_FIELDS.map(c=>c[1])];rows=file.rows.map((r,i)=>[i+1,...PLAN_FIELDS.map(([k])=>k==='excess'?signedPercent(excessPercent(r)):r[k])]);const {calendar}=generateProductionCalendar(file);rows.push([],['TIME ALLOWED'],['DATE','TARGET','OUTPUT','TOTAL HOURS','REMARKS'],...calendar.map(r=>[r.date,r.target,r.output,file.journal[r.date]?.reportHours||r.hours,r.remarks]));signatures=['Head of Production','General Manager','Managing Director'];}
 const canvas=document.createElement('canvas');canvas.width=1240;canvas.height=1754;const ctx=canvas.getContext('2d'),images=[];let y;
 let logo;try{logo=new Image();logo.src='Farnoor_New_Logo.png';await logo.decode();}catch{logo=null;}
 const font='"Segoe UI", "Nirmala UI", sans-serif';
 function sheet(){ctx.fillStyle='#fff';ctx.fillRect(0,0,1240,1754);ctx.textAlign='left';ctx.font='bold 30px '+font;const name='FARNOOR GARMENTS LTD.',nameWidth=ctx.measureText(name).width,brandX=(1240-nameWidth-100)/2;if(logo)ctx.drawImage(logo,brandX,45,76,86);ctx.fillStyle='#c7192d';ctx.fillText(name,brandX+100,78);ctx.fillStyle='#24483c';ctx.font='18px '+font;ctx.fillText('1028/1/2 Malibagh Bazar Road, Dhaka-1217',brandX+100,115);ctx.textAlign='center';ctx.font='bold 30px '+font;ctx.fillText(title.toUpperCase(),620,190);ctx.textAlign='left';ctx.font='18px '+font;ctx.fillText('Saved: '+new Date(file.updatedAt||file.createdAt).toLocaleString('en-GB',{timeZone:'Asia/Dhaka'}),50,245);y=275;}
 function finish(){images.push(Uint8Array.from(atob(canvas.toDataURL('image/jpeg',0.95).split(',')[1]),c=>c.charCodeAt(0)));}
 function wrap(value,width){ctx.font='16px '+font;const lines=[''];for(const word of String(value??'').split(/\s+/)){let i=lines.length-1;if(ctx.measureText(lines[i]+' '+word).width>width&&lines[i])lines.push(word);else lines[i]+=(lines[i]?' ':'')+word;}return lines;}
 function tableRow(values,head=false){const width=1140/headers.length,lines=values.map(value=>wrap(value,width-10)),height=Math.max(42,...lines.map(v=>v.length*21+14));if(y+height>1510){finish();sheet();if(!head)tableRow(headers,true);}ctx.strokeStyle='#24483c';ctx.lineWidth=1;for(let i=0;i<headers.length;i++){let x=50+i*width;if(head){ctx.fillStyle='#e3eee7';ctx.fillRect(x,y,width,height);}ctx.strokeRect(x,y,width,height);ctx.font=(head?'bold ':'')+'16px '+font;const val=String(values[i]??'');ctx.fillStyle=kind==='store'&&headers[i]==='SORT/EXCESS'&&Number(val)!==0?(Number(val)<0?'#db1825':'#168447'):'#183e31';ctx.textAlign='center';(lines[i]||[]).forEach((line,n)=>ctx.fillText(line,x+width/2,y+(height-lines[i].length*21)/2+16+n*21));}ctx.textAlign='left';y+=height;}
 sheet();tableRow(headers,true);for(const row of rows)tableRow(row);if(y+145>1650){finish();sheet();}const signatureY=y+110;ctx.font='16px '+font;signatures.forEach((name,i)=>{const width=1140/signatures.length,textWidth=ctx.measureText(name).width,x=50+i*width+(width-textWidth)/2;ctx.strokeStyle='#24483c';ctx.beginPath();ctx.moveTo(x,signatureY);ctx.lineTo(x+textWidth,signatureY);ctx.stroke();ctx.fillStyle='#24483c';ctx.fillText(name,x,signatureY+23);});finish();return {blob:makeImagePDF(images),title};
}

async function whatsappDispatchSaved(change){try{const {blob,title}=await whatsappReportPDF(change.kind,change.file);if(blob.size>5000000)throw Error('WhatsApp PDF is too large.');const bytes=new Uint8Array(await blob.arrayBuffer());let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));const response=await FarnoorAPI.request('/api/admin/whatsapp/report',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({kind:change.kind,id:change.file.id,version:change.file.updatedAt||change.file.createdAt,pdf:btoa(binary)})});const result=await response.json();if(!response.ok)throw Error(result.error||'WhatsApp could not send the report.');if(result.enabled===false)return;if(result.queued){for(let attempt=0;attempt<60;attempt++){await new Promise(resolve=>setTimeout(resolve,2000));const check=await FarnoorAPI.request('/api/admin/whatsapp/job',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({key:result.jobKey})});if(!check.ok)throw Error('Could not check WhatsApp delivery.');const job=await check.json();if(job.status!=='processing'){Object.assign(result,job);break;}}if(result.status===undefined){toast('Saved online. WhatsApp PDF is still queued.');return;}}if(result.error)toast('Saved online. WhatsApp: '+result.error);else toast('Saved online. WhatsApp accepted '+result.accepted+' PDF messages.');}catch(error){toast('Saved online. WhatsApp: '+error.message);}}
const whatsappOriginalCommit=commit;commit=async function(next,options){const change=accessInfo.role==='super_admin'?whatsappSavedChange(state,next,activePage):null;const saved=await whatsappOriginalCommit(next,options);if(saved&&change)setTimeout(()=>{void whatsappDispatchSaved(change);},0);return saved;};


;
;/* email-reports.js */
'use strict';
let emailAutomaticActive=false,emailSetupOpen=false;
async function emailSetupRequest(route,data){const response=await FarnoorAPI.request(route,data?{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}:undefined),result=await response.json();if(!response.ok)throw Error(result.error||'Email request failed.');return result;}
const emailSetupRender=renderAdminView;renderAdminView=function(){emailSetupRender();if(!adminView||accessInfo.role!=='super_admin')return;$('#main').insertAdjacentHTML('beforeend',`<section class="panel no-print"><button data-email-setup>Email Setup</button>${emailSetupOpen?'<h3>Automatic PDF email</h3><p>Sender: lutfarbabu@gmail.com</p><p>Order → Email.A · Schedule → Email.C · Store Recive → Email.A/B/C together when leaving Store; Fabric/Accessories Delivery → Email.A/B/C</p><button data-email-check>Check connection</button><button data-email-enable>Enable automatic PDF email</button><button data-email-disable>Disable automatic PDF email</button><p id="emailSetupStatus" role="status"></p>':''}</section>`);};
$('#main').addEventListener('click',async event=>{const b=event.target.closest('button');if(!b||accessInfo.role!=='super_admin'||!adminView)return;if(b.hasAttribute('data-email-setup')){emailSetupOpen=!emailSetupOpen;renderAdminView();return;}const check=b.hasAttribute('data-email-check'),enable=b.hasAttribute('data-email-enable'),disable=b.hasAttribute('data-email-disable');if(!check&&!enable&&!disable)return;b.disabled=true;try{const result=await emailSetupRequest(check?'/api/admin/email/status':'/api/admin/email/automatic',check?null:{enabled:enable});if(!check)emailAutomaticActive=result.enabled;$('#emailSetupStatus').textContent=check?'Connected: '+result.sender+' · Remaining recipients today: '+result.quota:'Automatic PDF email: '+(result.enabled?'On':'Off');}catch(e){$('#emailSetupStatus').textContent=e.message;}finally{b.disabled=false;}});
async function emailDispatchSaved(change){try{const {blob}=await whatsappReportPDF(change.kind,change.file);if(blob.size>5000000)throw Error('PDF exceeds the email size limit.');const bytes=new Uint8Array(await blob.arrayBuffer());let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));const result=await emailSetupRequest('/api/admin/email/report',{kind:change.kind,id:change.file.id,version:change.file.updatedAt||change.file.createdAt,pdf:btoa(binary)});if(result.enabled===false){emailAutomaticActive=false;return;}for(let i=0;i<60;i++){await new Promise(resolve=>setTimeout(resolve,2000));const job=await emailSetupRequest('/api/admin/email/job',{key:result.jobKey});if(job.status!=='processing'){toast(job.error?'Saved online. Email: '+job.error:'Saved online. Gmail accepted '+job.accepted+' PDF emails.');return;}}toast('Saved online. PDF email is still queued.');}catch(error){toast('Saved online. Email: '+error.message);}}

const storeEmailQueue=new Map();let storeEmailInside=false,storeEmailBusy=false;
const storeEmailQueueKey='farnoor.store-email-pending:'+FarnoorAPI.sessionUserId();
try{for(const item of JSON.parse(sessionStorage.getItem(storeEmailQueueKey)||'[]'))if(typeof item.id==='string')storeEmailQueue.set(item.id,item);}catch{}
function storeEmailRemember(){try{sessionStorage.setItem(storeEmailQueueKey,JSON.stringify([...storeEmailQueue.values()].map(file=>({id:file.id,updatedAt:file.updatedAt||file.createdAt}))));}catch{}}
function storeEmailPendingFiles(){return [...storeEmailQueue.values()].map(item=>{for(const category of ['Fabric','Accessories','Accessories2','Stationery','Mechanical','Electrical']){const file=(state.records[StoreCore.key(category)]||[]).find(f=>f.id===item.id&&!f.deletedAt);if(file)return file;}return null;}).filter(Boolean);}
function storeEmailReceive(file){return file&&['Fabric','Accessories','Accessories2','Stationery','Mechanical','Electrical'].includes(file.storeCategory)&&file.storeMovement!=='Delivery';}
const emailOriginalCommit=commit;commit=async function(next,options){const file=options?.storeFile,receive=storeEmailReceive(file),change=emailAutomaticActive&&accessInfo.role==='super_admin'&&!receive?whatsappSavedChange(state,next,activePage):null;const saved=await emailOriginalCommit(next,options);if(saved&&emailAutomaticActive&&accessInfo.role==='super_admin'){if(receive){storeEmailQueue.set(file.id,structuredClone(file));storeEmailRemember();storeEmailInside=true;}else if(change)setTimeout(()=>void emailDispatchSaved(change),0);}return saved;};
async function storeEmailSendBatch(){if(storeEmailBusy||!storeEmailQueue.size)return;storeEmailBusy=true;const queuedVersions=new Map([...storeEmailQueue].map(([id,file])=>[id,file.updatedAt]));const files=storeEmailPendingFiles();if(!files.length){storeEmailBusy=false;return;}try{const reports=[];for(const file of files){const {blob}=await whatsappReportPDF('store',file),bytes=new Uint8Array(await blob.arrayBuffer());let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));reports.push({id:file.id,version:file.updatedAt||file.createdAt,pdf:btoa(binary)});}const result=await emailSetupRequest('/api/admin/email/store-batch',{reports});if(result.enabled===false)throw Error('Automatic email is off.');for(let i=0;i<60;i++){await new Promise(resolve=>setTimeout(resolve,2000));const job=await emailSetupRequest('/api/admin/email/job',{key:result.jobKey});if(job.status!=='processing'){if(job.error)throw Error(job.error);for(const file of files)if(storeEmailQueue.get(file.id)?.updatedAt===queuedVersions.get(file.id))storeEmailQueue.delete(file.id);storeEmailRemember();toast('Gmail accepted '+files.length+' Store PDFs in one email to '+job.accepted+' recipients.');return;}}throw Error('Store email is still queued.');}catch(error){toast('Store email: '+error.message+' Saved reports are retained.');}finally{storeEmailBusy=false;}}
function storeEmailNavigation(){const inside=pageInfo(activePage)?.department.id==='inventory'&&!adminView;if(storeEmailInside&&!inside)void storeEmailSendBatch();storeEmailInside=inside;}
const emailStoreRender=renderPage;renderPage=function(){emailStoreRender();storeEmailNavigation();};
const emailStoreOverview=renderOverview;renderOverview=function(){emailStoreOverview();storeEmailNavigation();};
const emailStoreAdmin=renderAdminView;renderAdminView=function(){emailStoreAdmin();storeEmailNavigation();};
async function emailLoadSetting(){try{const result=await emailSetupRequest('/api/admin/email/automatic');emailAutomaticActive=!!result.settings.enabled;}catch{emailAutomaticActive=false;}}
setTimeout(()=>void emailLoadSetting(),3000);


;
;/* admin-personal.js */
'use strict';
const personalFileButtons=[
 ['new','New Entry','✚','#d9f3e6','#166348'],
 ['file-1','File-1','①','#dcecff','#24558b'],
 ['file-2','File-2','②','#eee2ff','#7042a1'],
 ['file-3','File-3','③','#ffe2e9','#a43b5e'],
 ['file-4','File-4','④','#fff0ce','#8b6014'],
 ['file-5','File-5','⑤','#d6f1f4','#176774'],
 ['file-6','File-6','⑥','#e7efcf','#536b22'],
 ['file-7','File-7','⑦','#ffe6d4','#9b5525'],
 ['staff-3','Staff-3','♙','#e1e5ff','#4c5093'],
 ['electrican','Electrican','ϟ','#f4e0f4','#8a3a88']
];
let personalFileSelected='',personalCardLookup='',personalCardText='',personalCompanyChoice='FARNOOR GARMENTS LTD',personalNameChoice='',personalPrintSubmitted=false;
function personalCardKey(value){return String(value??'').normalize('NFKC').trim().toLocaleLowerCase().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));}
function personalCardRows(card=personalCardLookup){return (state.records['admin-documents']||[]).filter(row=>row.personalFile&&!row.maternityBenefit&&!row.serviceBenefit&&!row.warningBenefit&&(!card||personalCardKey(row.personalEntry?.['field-0']||row.reference)===personalCardKey(card)));}
function personalCardCount(folder){return personalCardLookup?personalCardRows().filter(row=>row.personalFolder===folder).length:0;}
function personalCardLookupForm(){const options=(items,current)=>items.map(item=>`<option value="${esc(item)}"${item===current?' selected':''}>${esc(item)}</option>`).join('');return `<form id="personalCardLookupForm" style="display:flex;flex-wrap:wrap;align-items:end;gap:10px;margin-bottom:20px"><label style="display:grid;gap:4px;width:170px">ID No.<input id="personalCardLookup" aria-label="ID No." placeholder="Card No." maxlength="120" autocomplete="off" value="${esc(personalCardText)}"></label><label style="display:grid;gap:4px;min-width:240px">Company<select id="personalCompanyChoice" aria-label="Company"><option value="">Select company</option>${options(['FARNOOR GARMENTS LTD','FARNOOR GARMENTS LTD. UNIT-2'],personalCompanyChoice)}</select></label><label style="display:grid;gap:4px;min-width:220px">Name<select id="personalNameChoice" aria-label="Name"><option value="">Select name</option>${options(['সৈয়দ আশরাফুল হক','মোঃ মাসুদ রানা','মোঃ রাফে-উজ-জামান','লামুসা আলী'],personalNameChoice)}</select></label><button type="submit" class="primary">Save</button></form>`;}
const personalEntryFields=[
 'কার্ড নং','পদবী বাংলা','পদবী ইংলিশ','সেকশন বাংলা','সেকশন ইংলিশ','লাইন','যোগদানের তারিখ',
 'নাম বাংলা','নাম ইংলিশ','পিতার নাম','মাতার নাম','লিঙ্গ','স্বামী/স্ত্রীর নাম','স্বামী/স্ত্রীর (বয়স)','স্বামী/স্ত্রীর (পেশা)',
 {title:'স্থায়ী ঠিকানা:',fields:['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ']},
 {title:'বর্তমান ঠিকানা:',fields:['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ']},
 'জন্ম তারিখ','জন্ম সাল','শিক্ষাগত যোগ্যতা','নিজের মোবাইল নং','অভিজ্ঞতা','প্রস্তাবিত বেতন','রক্তের গ্রুপ','জাতীয় আইডি নং',
 'শারীরিক শনাক্তকরণ চিহ্ন','উচ্চতা','ভাইয়ের সংখ্যা','বোনের সংখ্যা','নিজ অবস্থান','দৈহিক সক্ষমতা',
 {children:true,title:'সন্তানাদির বিবরণ:'},
 'পূর্ববর্তী প্রতিষ্ঠানের চাকুরীর বিবরণ','জাতীয়তা','ধর্ম','পরিচিত বিশিষ্ট ব্যক্তিবর্গ','নমিনীর নাম','নমিনীর ঠিকানা',
 'নমিনীর এন.আই.ডি','নমিনীর সম্পর্ক','নমিনীর জন্ম সাল'
];
const personalEntryOptions={"field-1":["সিঃ সুইং অপারেটর","সুইং অপারেটর","জুনিয়র সুইং অপারেটর","সহকারী সুইং অপারেটর","লাইন আয়রন ম্যান","ইনপুটম্যান","সিঃ কাটারম্যান","কাটারম্যান","জুনিয়র কাটারম্যান","সাধারণ কাটারম্যান","সহকারী কাটারম্যান","সিঃ কোয়াঃ ইন্সঃ","কোয়াঃ ইন্সঃ","জুনিয়র কোয়াঃ ইন্সঃ","সাধারণ কোয়াঃ ইন্সঃ","সহকারী কোয়াঃ ইন্সঃ","পলিওম্যান","জুনিয়র পলিওম্যান","সাধারণ পলিওম্যান","সহকারী পলিওম্যান","প্যাকিংম্যান","জুনিয়র প্যাকিংম্যান","সাধারণ প্যাকিংম্যান","সহকারী প্যাকিংম্যান","ফোল্ডিংম্যান","জুনিয়র ফোল্ডিংম্যান","সাধারণ ফোল্ডিংম্যান","সহকারী ফোল্ডিংম্যান","ফিনিশিং আয়রন ম্যান","ফিনিশিং সহকারী","সূতা ঝাড়া সহকারী","লাইনচীফ","লাইন ইনচার্জ","সুপারভাইজার","ড্রাইভার","নার্স","চেকার","স্টোর লেবার","ডাক্তার","সেফটি অফিসার","ক্লিনার","সিকিউরিটি গার্ড","স্যাম্পলম্যান"],"field-2":["Sr. Sewing Operator","Sewing Operator","Jr. Sewing Operator","Ast. Sewing Operator","Line Ironman","Input Man","Sr.Cutter man","Cutter man","Jr. Cutter man","Gen. Cutter man","Ast. Cutter man","Sr. Q/I","Q/I","Jr. Q.I.","General Q.I.","Ast. Q.I.","Poly Woman","Jr. Poly Women","General. Poly Women","Ast. Poly Women","Packingman","Jr. Packingman","General Packingman","Ast. Packingman","Foldingman","Jr. Foldingman","General Foldingman","Ast. Foldingman","Finishing Ironman","Ast. Finishing","Line chief","Line Incharge","Supervisor","Driver","Nurse","Checker","Store Labour","Doctor","Safety Officer","Cleaner","Security Guard","Samplman"],"field-3":["লাইন-১","লাইন-২","লাইন-৩","লাইন-৪","লাইন-৫","সুইং","কাটিং","প্যাকিং","ফিনিশিং","কোয়ালিটি","এডমিন","মার্চেন্ডাইজিং","স্যাম্পল","স্টোর","মেকানিক্যাল","ইলেকট্রিক্যাল","একাউন্টস"],"field-4":["Line-1","Line-2","Line-3","Line-4","Line-5","Sewing","Cutting","Packing","Quality","Finishing","Admin","Merchandising","Samleman","Store","Mechanical","Electrical","Accounts"],"field-5":["সুইং লাইন-১","সুইং লাইন-২","সুইং লাইন-৩","সুইং লাইন-৪","সুইং লাইন-৫"],"field-11":["পুরুষ","মহিলা"],"field-14":["কৃষক","ব্যবসা","ড্রাইভার","চাকুরী","সিএনজি ড্রাইভার","রাজমিস্ত্রী","রিকশা ড্রাইভার","গৃহিনী","প্রবাসী","গাড়ীর মেকানিক","অটো গাড়ী ড্রাইভার"],"field-19":["৫ম শ্রেণী","৬ষ্ঠ শ্রেণী","৭ম শ্রেণী","৮ম শ্রেণী","৯ম শ্রেণী","১০ম শ্রেণী","এস.এস.সি পাশ","এইচ.এস.সি পাশ","বি.এ পাশ","এম.এ পাশ","বি.এ অনার্স/এম.এ"],"field-23":["A+","B+","O+","A-","B-","O-","AB+","AB-"],"address-15-2":["কুমারখালী","কুষ্টিয়া সদর","খোকসা","দৌলতপুর","ভেড়ামারা","মিরপুর","কয়রা","ডুমুরিয়া","তেরখাদা","দাকোপ","দিঘলিয়া","পাইকগাছা","ফুলতলা","বটিয়াঘাটা","রূপসা","আলমডাঙ্গা","চুয়াডাঙ্গা","জীবননগর","দামুড়হুদা","কালীগঞ্জ","কোটচাঁদপুর","ঝিনাইদহ সদর","মহেশপুর","শৈলকুপা","হরিণাকুন্ডু","কালিয়া","নড়াইল","লোহাগড়া","কচুয়া","চিতলমারী","ফকিরহাট","বাগেরহাট","মোংলা","মোড়েলগঞ্জ","মোল্লাহাট","রামপাল","শরণখোলা","মাগুরা সদর","মোহাম্মদপুর","শালিখা","শ্রীপুর","গাংনী","মেহেরপুর সদর","মুজিবনগর","অভয়নগর","কেশবপুর","চৌগাছা","ঝিকরগাছা","বাঘারপাড়া","মণিরামপুর","যশোর সদর","শার্শা","আশাশুনি","কলারোয়া","তালা","দেবহাটা","শ্যামনগর","সাতক্ষীরা","আনোয়ারা","কর্ণফুলী","চন্দনাইশ","পটিয়া","ফটিকছড়ি","বাঁশখালী","বোয়ালখালী","মীরসরাই","রাউজান","রাঙ্গুনিয়া","সন্দ্বীপ","সাতকানিয়া","সীতাকুন্ড","হাটহাজারী","উখিয়া","কক্সবাজার","কুতুবদিয়া","চকরিয়া","টেকনাফ","পেকুয়া","মহেশখালী","রামু","ঈদগাঁও","আলীকদম","থানচি","নাইক্ষ্যংছড়ি","বান্দরবান","রুমা","রোয়াংছড়ি","লামা","খাগড়াছড়ি সদর","দীঘিনালা","পানছড়ি","মহালছড়ি","মাটিরাঙ্গা","মানিকছড়ি","রামগঞ্জ","লক্ষ্মীছড়ি","গুইমারা","কাউখালী","কাপ্তাই","জুরাছড়ি","নানিয়ারচর","বরকল","বাঘাইছড়ি","বিলাইছড়ি","রাঙ্গামাটি সদর","রাজস্থলী","লংগদু","নোয়াখালী","বেগমগঞ্জ","চাটখিল","কোম্পানীগঞ্জ","হাতিয়া","সেনবাগ","সুবর্ণ চর","সোনাইমুড়ী","কবিরহাট","কমলনগর","রামগতি","রায়পুর","লক্ষ্মীপুর সদর","ফেনী সদর","দাগনভূঁইয়া","সোনাগাজী","ছাগলনাইয়া","পরশুরাম","ফুলগাজী","বরুড়া","চান্দিনা","দাউদকান্দি","লাকসাম","ব্রাহ্মণপাড়া","বুড়িচং","চৌদ্দগ্রাম","দেবিদ্বার","হোমনা","মুরাদনগর","লাঙ্গলকোট","মেঘনা","তিতাস","মনোহরগঞ্জ","কুমিল্লা সদর","কুমিল্লা সদর দক্ষিণ","লালমাই","চাঁদপুর সদর","হাজীগঞ্জ","ফরিদগঞ্জ","মতলব উত্তর","মতলব দক্ষিণ","হাইমচর","শাহরাস্তি","আশুগঞ্জ","আখাউড়া","কসবা","নবীনগর","নাসিরনগর","বাঞ্ছারামপুর","বি-বাড়িয়া সদর","সরাইল","বিজয়নগর","ধামরাই","দোহার","কেরানীগঞ্জ","নবাবগঞ্জ","সাভার","বেলাবো","মনোহরদী","শিবপুর","রায়পুরা","পলাশ","নরসিংদী","নারায়ণগঞ্জ","বন্দর","আড়াইহাজার","রূপগঞ্জ","সোনারগাঁও","কালিয়াকৈর","কাপাসিয়া","গাজীপুর সদর","শ্রীনগর","সিরাজদিখান","লৌহজং","টংগীবাড়ী","মুন্সীগঞ্জ","গজারিয়া","ঘিওর","মানিকগঞ্জ","শিবালয়","সাটুরিয়া","সিঙ্গাইর","হরিরামপুর","টাঙ্গাইল","কালিহাতী","ঘাটাইল","বাসাইল","গোপালপুর","মির্জাপুর","ভূঞাপুর","নাগরপুর","মধুপুর","সখিপুর","দেলদুয়ার","ধনবাড়ী","রাজবাড়ী সদর","গোয়ালন্দ","পাংশা","বালিয়াকান্দি","কালুখালী","গোপালগঞ্জ সদর","মুকসুদপুর","কাশিয়ানী","কোটালীপাড়া","টুঙ্গিপাড়া","শরীয়তপুর","ডামুড্যা","নড়িয়া","ভেদরগঞ্জ","জাজিরা","গোসাইরহাট","মাদারীপুর","শিবচর","কালকিনি","রাজৈর","ডাসার","ফরিদপুর সদর","বোয়ালমারী","আলফাডাঙ্গা","মধুখালী","ভাঙ্গা","নগরকান্দা","চর ভদ্রাসন","সদরপুর","সালথা","কিশোরগঞ্জ সদর","অষ্টগ্রাম","ইটনা","করিমগঞ্জ","কটিয়াদি","কুলিয়ারচর","তাড়াইল","নিকলী","পাকুন্দিয়া","বাজিতপুর","ভৈরব","মিঠামইন","হোসেনপুর","আগৈলঝাড়া","বাকেরগঞ্জ","বাবুগঞ্জ","বানারীপাড়া","গৌরনদী","হিজলা","বরিশাল সদর","মেহেন্দিগঞ্জ","মুলাদী","উজিরপুর","বরগুনা সদর","আমতলী","তালতলী","পাথরঘাটা","বেতাগী","বামনা","চরফ্যাশন","তজুমদ্দিন","দৌলতখান","বোরহানউদ্দিন","ভোলা সদর","মনপুরা","লালমোহন","কাঁঠালিয়া","ঝালকাঠি সদর","নলছিটি","রাজাপুর","পটুয়াখালী সদর","বাউফল","দশমিনা","গলাচিপা","কলাপাড়া","মির্জাগঞ্জ","দুমকি","রাঙ্গাবালী","নাজিরপুর","নেছারাবাদ","পিরোজপুর সদর","ভান্ডারিয়া","মঠবাড়িয়া","ইন্দুরকানী","ময়মনসিংহ সদর","ত্রিশাল","গৌরীপুর","মুক্তাগাছা","ফুলপুর","তারাকান্দা","হালুয়াঘাট","ভালুকা","ফুলবাড়িয়া","গফরগাঁও","ঈশ্বরগঞ্জ","নান্দাইল","ধোবাউড়া","ঝিনাইগাতী","নকলা","নালিতাবাড়ী","শেরপুর সদর","শ্রীবরদী","জামালপুর সদর","বকশীগঞ্জ","দেওয়ানগঞ্জ","ইসলামপুর","মাদারগঞ্জ","মেলান্দহ","সরিষাবাড়ী","আটপাড়া","বারহাট্টা","দুর্গাপুর","খালিয়াজুড়ি","কমলাকান্দা","কেন্দুয়া","মদন","মোহনগঞ্জ","নেত্রকোনা","পূর্বধলা","রংপুর সদর","বদরগঞ্জ","গংগাচড়া","তাউনিয়া","মিঠাপুকুর","পীরগাছা","পীরগঞ্জ","তারাগঞ্জ","বিরামপুর","বীরগঞ্জ","বোচাগঞ্জ","ফুলবাড়ী","চিরিরবন্দর","ঘোড়াঘাট","হাকিমপুর","কাহারোল","খানসামা","দিনাজপুর সদর","পার্বতীপুর","বিরল","গাইবান্ধা সদর","ফুলছড়ি","গোবিন্দগঞ্জ","পলাশবাড়ী","সাদুল্লাপুর","সাঘাটা","সুন্দরগঞ্জ","উলিপুর","কুড়িগ্রাম","চর রাজিবপুর","চিলমারী","নাগেশ্বরী","ভুরুঙ্গামারী","রাজারহাট","রৌমারী","নীলফামারী","ডোমার","ডিমলা","জলঢাকা","কিশোরগঞ্জ","সৈয়দপুর","দেবীগঞ্জ","তেঁতুলিয়া","পঞ্চগড়","আটোয়ারী","বোদা","ঠাকুরগাঁও","বালিয়াডাঙ্গী","রাণীশংকৈল","হরিপুর","আদিতমারী","পাটগ্রাম","লালমনিরহাট","হাতীবান্ধা","বাঘা","পুঠিয়া","পবা","বাগমারা","তানোর","মোহনপুর","চারঘাট","গোদাগাড়ী","নাটোর সদর","বাগাতিপাড়া","বড়াইগ্রাম","গুরুদাসপুর","লালপুর","সিংড়া","নলডাঙ্গা","চাঁপাইনবাবগঞ্জ","গোমস্তাপুর","শিবগঞ্জ","নাচোল","ভোলাহাট","পাঁচবিবি","কালাই","ক্ষেতলাল","আক্কেলপুর","জয়পুরহাট সদর","পত্নীতলা","ধামইরহাট","মহাদেবপুর","পোরশা","সাপাহার","বদলগাছী","মান্দা","নিয়ামতপুর","আত্রাই","রাণীনগর","নওগাঁ সদর","আদমদিঘী","বগুড়া সদর","ধুনট","ধুপচাঁচিয়া","গাবতলী","কাহালু","নন্দীগ্রাম","সারিয়াকান্দি","শেরপুর","সোনাতলা","শাজাহানপুর","আটঘরিয়া","ঈশ্বরদী","চাটমোহর","পাবনা সদর","ফরিদপুর","বেড়া","ভাঙ্গুড়া","সাঁথিয়া","সুজানগর","উল্লাপাড়া","কাজীপুর","কামারখন্দ","চৌহালি","তাড়াশ","বেলকুচি","রায়গঞ্জ","শাহজাদপুর","সিরাজগঞ্জ","বড়লেখা","কুলাউড়া","রাজনগর","কমলগঞ্জ","শ্রীমঙ্গল","মৌলভীবাজার সদর","জুড়ী","বালাগঞ্জ","বিয়ানীবাজার","বিশ্বনাথ","ফেঞ্চুগঞ্জ","গোপালগঞ্জ","গোয়াইনঘাট","জৈন্তাপুর","কানাইঘাট","সিলেট সদর","জকিগঞ্জ","দক্ষিণ সুরমা","ওসমানীনগর","ছাতক","জগন্নাথপুর","জামালগঞ্জ","তাহিরপুর","শান্তিগঞ্জ","দিরাই","দোয়ারাবাজার","ধর্মপাশা","বিশ্বম্ভরপুর","শাল্লা","সুনামগঞ্জ","মধ্যনগর","আজমিরীগঞ্জ","চুনারুঘাট","নবীগঞ্জ","বানিয়াচং","বাহুবল","মাধবপুর","লাখাই","শায়েস্তাগঞ্জ","হবিগঞ্জ"],"address-15-3":["বরগুনা","বরিশাল","ভোলা","ঝালকাঠি","পটুয়াখালী","পিরোজপুর","বান্দরবান","ব্রাহ্মণবাড়িয়া","চাঁদপুর","চট্টগ্রাম","কুমিল্লা","কক্সবাজার","ফেনী","খাগড়াছড়ি","লক্ষ্মীপুর","নোয়াখালী","রাঙ্গামাটি","ঢাকা","ফরিদপুর","গাজীপুর","গোপালগঞ্জ","কিশোরগঞ্জ","মাদারীপুর","মানিকগঞ্জ","মুন্সীগঞ্জ","নারায়ণগঞ্জ","নরসিংদী","রাজবাড়ী","শরীয়তপুর","টাঙ্গাইল","বাগেরহাট","চুয়াডাঙ্গা","যশোর","ঝিনাইদহ","খুলনা","কুষ্টিয়া","মাগুরা","মেহেরপুর","নড়াইল","সাতক্ষীরা","জামালপুর","ময়মনসিংহ","নেত্রকোনা","শেরপুর","বগুড়া","জয়পুরহাট","নওগাঁ","নাটোর","চাঁপাইনবাবগঞ্জ","পাবনা","রাজশাহী","সিরাজগঞ্জ","দিনাজপুর","গাইবান্ধা","কুড়িগ্রাম","লালমনিরহাট","নীলফামারী","পঞ্চগড়","রংপুর","ঠাকুরগাঁও","হবিগঞ্জ","মৌলভীবাজার","সুনামগঞ্জ","সিলেট"],"address-16-1":["খিলগাঁও","শান্তিনগর","বাসাবো","বাড্ডা","খিলক্ষেত","আলীমপাড়া-১৭০৩","দক্ষিণ বারতোবা-১৭৪০","মির্জাপুর বাজার-১৭৫০","মির্জাপুর-১৭০৩","ভবানীপুর-১৭৪০","এমনাগরবাড়ী-৫২১০","ফুলবাড়ীয়া"],"address-16-2":["খিলগাঁও","রামপুরা","মতিঝিল","হাতিরঝিল","রমনা","শাহজাহানপুর","সবুজবাগ","কমলাপুর","বাড্ডা","ভাটারা","গুলশান","মিরপুর","গাজীপুর সদর","গাজীপুর","শ্রীপুর","কাপাসিয়া","কালীগঞ্জ","কালিয়াকৈর"],"address-16-3":["ঢাকা-১২১৭","ঢাকা-১২১৯","ঢাকা-১২১৪","ঢাকা-১২২৯","ঢাকা","গাজীপুর"],"field-26":["৪ ফুট ৫ ইঞ্চি","৪ ফুট ৬ ইঞ্চি","৪ ফুট ৭ ইঞ্চি","৪ ফুট ৮ ইঞ্চি","৪ ফুট ৯ ইঞ্চি","৪ ফুট ১০ ইঞ্চি","৪ ফুট ১১ ইঞ্চি","৫ ফুট","৫ ফুট ১ ইঞ্চি","৫ ফুট ২ ইঞ্চি","৫ ফুট ৩ ইঞ্চি","৫ ফুট ৪ ইঞ্চি","৫ ফুট ৫ ইঞ্চি","৫ ফুট ৬ ইঞ্চি","৫ ফুট ৭ ইঞ্চি","৫ ফুট ৮ ইঞ্চি"],"field-21":["১ বৎসর","২ বৎসর","৩ বৎসর","৪ বৎসর","৫ বৎসর","৬ বৎসর","৭ বৎসর","৮ বৎসর","৯ বৎসর","১০ বৎসর","১১ বৎসর","১২ বৎসর","১৩ বৎসর","১৪ বৎসর","১৫বৎসর"],"field-25":["আছে","নাই"],"field-27":["১ জন","২ জন","৩ জন","৪ জন","৫ জন","৬ জন"],"field-28":["১ জন","২ জন","৩ জন","৪ জন","৫ জন","৬ জন"],"field-29":["১ম","২য়","৩য়","৪র্থ","৫ম","৬ষ্ঠ","৭ম"],"field-30":["আছে","নাই"],"field-33":["বাংলাদেশী"],"field-34":["ইসলাম","হিন্দু","খ্রিস্টান","বৌদ্ধ"],"field-39":["ভাই","বোন","বাবা","মা","ছেলে","মেয়ে","স্ত্রী","স্বামী"],"child-0-2":["ছেলে","মেয়ে"],"child-1-2":["ছেলে","মেয়ে"],"child-2-2":["ছেলে","মেয়ে"],"child-3-2":["ছেলে","মেয়ে"],"child-4-2":["ছেলে","মেয়ে"]};
let personalBanglaMode='bijoy';
const personalBanglaFields=new Set([1,3,5,7,9,10,11,12,14,19,21,25,26,27,28,29,30,32,33,34,35,36,37,39].map(index=>'field-'+index));
function personalIsBanglaField(key){return personalBanglaFields.has(key)||key.startsWith('address-')||/^child-\d+-(0|2)$/.test(key);}
function personalBanglaValue(key,value){const text=String(value??'');if(personalBanglaMode!=='bijoy'||!personalIsBanglaField(key))return text;const converter=window.FarnoorBangla;if(!converter)return text;return text.split(/([\u0980-\u09ff\u200c\u200d]+)/).map((part,index)=>index%2?part:converter.convertBijoyToUnicode(part)).join('');}
function personalInputFont(key){return personalBanglaMode==='bijoy'&&personalIsBanglaField(key)?'font-family:SutonnyMJ,&quot;Sutonny MJ&quot;,&quot;Nirmala UI&quot;,sans-serif;font-size:21px':'';}
function personalBanglaPreview(input){if(!personalIsBanglaField(input.dataset.personalField))return;const preview=input.parentElement.querySelector('[data-personal-bangla-preview]');if(!preview)return;const text=personalBanglaValue(input.dataset.personalField,input.value);preview.textContent=text;preview.hidden=!text||text===input.value;}
const personalEntryDraft={};
let personalEntryId=null,personalEntryFolder='file-1',personalEntryBusy=false,personalPendingRecord=null;
function personalBanglaModeControl(){return '<div class="personal-bangla-mode no-print"><label for="personalBanglaMode">বাংলা লেখার ধরন</label><select id="personalBanglaMode" title="বিজয় লেখার জন্য কম্পিউটারের বিজয় কিবোর্ড চালু করুন।"><option value="bijoy" '+(personalBanglaMode==='bijoy'?'selected':'')+'>বিজয় (SutonnyMJ)</option><option value="unicode" '+(personalBanglaMode==='unicode'?'selected':'')+'>ইউনিকোড বাংলা</option></select></div>';}
function personalEntryForm(){
 if(personalEntryDraft['field-17'])personalSyncBirthYear(false);
 const row=(label,key)=>{const value=personalEntryDraft[key]||'',options=personalEntryOptions[key];const control=`<input id="personal-${key}" style="${personalInputFont(key)}" data-personal-field="${key}" value="${esc(value)}" autocomplete="off" ${options?`data-personal-choice="true" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="personal-options-${key}"`:''} ${/তারিখ/.test(label)?'placeholder="DD/MM/YYYY"':''}>${options?`<button type="button" class="personal-choice-toggle" data-personal-choice-toggle="${key}" aria-label="${esc(label)} তালিকা দেখুন" aria-controls="personal-options-${key}" aria-expanded="false">▾</button><div class="personal-suggestions" id="personal-options-${key}" role="listbox" hidden></div>`:''}`;return `<div class="personal-entry-row"><label for="personal-${key}">${esc(label)}</label><div class="personal-choice-wrap">${control}${key==='field-0'?'<small id="personalCardEntryStatus" role="status" style="display:block;margin-top:4px;color:#42695b">'+(personalEntryId?'সেভ করা এন্ট্রি সম্পাদনা করছেন।':'')+'</small>':''}${personalIsBanglaField(key)?'<small data-personal-bangla-preview hidden style="color:#315c4c;font:16px Nirmala UI,sans-serif"></small>':''}${key==='field-37'?'<small style="display:block;margin-top:4px;color:#42695b">১ = বর্তমান ঠিকানা · ২ = স্থায়ী ঠিকানা</small>':''}</div></div>`;};
 return `<style>.personal-new-entry-heading{position:relative;min-height:70px;padding:0 180px}.personal-entry-back{position:absolute;left:0;top:20px}.personal-bangla-mode{position:absolute;right:0;top:9px;width:165px;text-align:left}.personal-bangla-mode label{display:block;font-size:11px;margin:0 0 3px;color:#42695b}.personal-bangla-mode select{width:165px;min-height:31px;padding:5px 8px;font-size:12px}@media(max-width:620px){.personal-new-entry-heading{padding:0}.personal-entry-back{position:static;margin-bottom:10px}.personal-bangla-mode{position:static;margin:0 0 10px auto}}[data-personal-bangla-preview]:not([hidden]){display:block}.personal-choice-wrap:has(.personal-choice-toggle) input{padding-right:42px}.personal-choice-toggle{position:absolute;right:3px;top:3px;min-height:33px;width:34px;padding:0;border:0;background:#e5f2ed;color:#185b43;font-size:20px}.personal-choice-wrap{position:relative;min-width:0}.personal-suggestions{position:absolute;left:0;right:0;top:100%;z-index:50;max-height:240px;overflow:auto;background:white;border:1px solid #639b85;border-radius:6px;box-shadow:0 8px 22px #183b3426}.personal-suggestions[hidden]{display:none}.personal-suggestions button{display:block;width:100%;text-align:left;border:0;border-radius:0;background:white;color:#183e31;padding:10px 12px;font-size:16px}.personal-suggestions button:hover,.personal-suggestions button[aria-selected="true"]{background:#d8eee5}.personal-entry-form{max-width:920px;margin:auto}.personal-entry-row{display:grid;grid-template-columns:minmax(150px,32%) minmax(0,1fr);align-items:center;gap:16px;padding:7px 0;border-bottom:1px solid #e4eee8}.personal-entry-row label{text-align:left;font-size:16px;color:#234b40}.personal-entry-row input,.personal-entry-row select{width:100%;min-height:39px;font-size:17px}.personal-entry-form h4{margin:24px 0 6px;padding:10px;background:#e5f2ed;color:#185b43;border-radius:7px}.personal-entry-children .personal-suggestions{position:relative;top:auto;min-width:100px}.personal-entry-children .personal-choice-wrap:has(.personal-choice-toggle){min-width:100px}.personal-entry-children input{min-width:65px;width:100%;font-size:16px}.personal-entry-children th{font-size:14px}.personal-entry-children td{padding:7px}@media(max-width:520px){.personal-entry-row{grid-template-columns:minmax(120px,42%) minmax(0,1fr);gap:8px}.personal-entry-row label{font-size:14px}}</style><form class="personal-entry-form" aria-label="Personal file New Entry" onsubmit="return false">${personalEntryFields.map((field,index)=>typeof field==='string'?row(field,'field-'+index)+(index===20?row('ফ্যামেলী অন্য জনের মোবাইল নং','family-mobile'):''):field.children?`<h4>${field.title}</h4><div class="table-wrap"><table class="personal-entry-children"><thead><tr><th>ক্রমিক নং</th><th>নাম</th><th>বয়স</th><th>লিঙ্গ</th></tr></thead><tbody>${Array.from({length:5},(_,i)=>`<tr><td>${i+1}</td>${['নাম','বয়স','লিঙ্গ'].map((label,col)=>{const key='child-'+i+'-'+col;const options=personalEntryOptions[key];return `<td><div class="personal-choice-wrap"><input id="personal-${key}" style="${personalInputFont(key)}" aria-label="সন্তান ${i+1} ${label}" data-personal-field="${key}" value="${esc(personalEntryDraft[key]||'')}" autocomplete="off" ${options?`data-personal-choice="true" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="personal-options-${key}"`:''}>${options?`<button type="button" class="personal-choice-toggle" data-personal-choice-toggle="${key}" aria-label="সন্তান ${i+1} ${label} তালিকা দেখুন" aria-controls="personal-options-${key}" aria-expanded="false">▾</button><div class="personal-suggestions" id="personal-options-${key}" role="listbox" hidden></div>`:''}${personalIsBanglaField(key)?'<small data-personal-bangla-preview hidden style="color:#315c4c;font:16px Nirmala UI,sans-serif"></small>':''}</div></td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`:`<h4>${field.title}</h4>${field.fields.map((label,col)=>row(label,'address-'+index+'-'+col)).join('')}`).join('')}<div style="display:flex;justify-content:flex-end;align-items:center;gap:12px;margin-top:22px"><button type="button" class="primary" id="personalSave" data-page-action-required="edit" ${personalEntryBusy?'disabled':''}>${personalEntryBusy?'Saving…':'Save'}</button></div></form>`;
}
function personalSyncBirthYear(updateControl=true){let year='';try{if(personalEntryDraft['field-17']?.trim())year=normalizeDate(personalEntryDraft['field-17']).slice(-4);}catch{}personalEntryDraft['field-18']=year;if(updateControl){const input=document.getElementById('personal-field-18');if(input)input.value=year;}return year;}
function personalAutofillCard(input){
 if(activePage!=='admin-personal-new-entry'||personalEntryBusy)return;
 const card=input.value,key=personalCardKey(card),rows=key?personalCardRows(card).slice().sort((a,b)=>String(b.updatedAt||b.createdAt||'').localeCompare(String(a.updatedAt||a.createdAt||''))):[],match=rows[0];
 if(match&&personalEntryId===match.id)return;
 if(!match&&!personalEntryId)return;
 personalCloseChoices();for(const field of Object.keys(personalEntryDraft))delete personalEntryDraft[field];
 if(match){Object.assign(personalEntryDraft,structuredClone(match.personalEntry||{}));if(!personalEntryDraft['field-7']&&!personalEntryDraft['field-8'])personalEntryDraft['field-7']=match.name||'';personalEntryId=match.id;personalEntryFolder=match.personalFolder||'file-1';personalFileSelected='new';}
 else{personalEntryId=null;personalEntryFolder='file-1';}
 personalPendingRecord=null;personalEntryDraft['field-0']=card;if(personalEntryDraft['field-17'])personalSyncBirthYear(false);
 for(const control of $('#main').querySelectorAll('[data-personal-field]')){const field=control.dataset.personalField;if(field==='field-0')continue;control.value=personalEntryDraft[field]||'';control.setCustomValidity('');personalBanglaPreview(control);}
 const status=document.getElementById('personalCardEntryStatus');if(status)status.textContent=match?'সেভ করা তথ্য এসেছে। Save দিলে এই এন্ট্রি আপডেট হবে।':'';
}
function personalNomineeAddress(value){const shortcut=personalCardKey(value);if(!['1','2'].includes(shortcut))return null;const group=shortcut==='1'?16:15;return [0,1,2,3].map(col=>String(personalEntryDraft['address-'+group+'-'+col]||'').trim()).filter(Boolean).join(', ');}
$('#main').addEventListener('focusout',event=>{const input=event.target,key=input.dataset.personalField;if(!key||!personalIsBanglaField(key))return;input.value=personalBanglaValue(key,input.value);personalEntryDraft[key]=input.value;personalBanglaPreview(input);});
function personalOptionMatches(key,value){const norm=text=>String(text).normalize('NFKC').trim().toLocaleLowerCase().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));const query=norm(personalBanglaValue(key,value));return [...query].length<2?[]:(personalEntryOptions[key]||[]).filter(option=>norm(option).includes(query));}
$('#main').addEventListener('input',event=>{const input=event.target,key=input.dataset.personalField;if(!key)return;if(key==='field-37'){const address=personalNomineeAddress(input.value);if(address!==null){input.value=address;if(!address)toast('আগে নির্বাচিত ঠিকানার তথ্য লিখুন।');}}personalEntryDraft[key]=personalBanglaValue(key,input.value);if(key==='field-17')personalSyncBirthYear();if(key==='field-0')personalAutofillCard(input);personalBanglaPreview(input);if(personalEntryOptions[key])personalShowChoices(input);});
const personalFileRenderPage=renderPage;
renderPage=function(...args){
 if(activePage.startsWith('admin-personal-form-')){renderPersonalPrintFile();return;}

 if(activePage==='admin-personal-new-entry'){$('#main').innerHTML='<div class="personal-new-entry-heading"><button type="button" class="no-print personal-entry-back" data-personal-nav="admin-personal-file" style="background:#e5eaff;color:#243e9d;border:1px solid #a6b4ff">← Back</button>'+heading('Admin','New Entry','')+personalBanglaModeControl()+'</div><section class="panel">'+personalEntryForm()+'</section>';if(typeof applyActionControls==='function')applyActionControls();return;}
 if(activePage==='admin-personal-entry-report'){renderPersonalEntryReport();return;}
 if(!['admin-personal-file','admin-personal-print'].includes(activePage))return personalFileRenderPage.apply(this,args);
 
 $('#main').innerHTML=personalPrintFileButtons()+personalCardLookupForm()+(personalPrintSubmitted?'<section class="panel" aria-label="Selected company and name">'+personalPrintCompanyInfo()+'<p style="text-align:center;font-size:24px;font-weight:700;color:#123f32">'+esc(personalNameChoice)+'</p></section>':'');
 if(typeof applyActionControls==='function')applyActionControls();
};
$('#main').addEventListener('click',event=>{
 const button=event.target.closest('[data-personal-file]');
 if(!button||!['admin-personal-file','admin-personal-print'].includes(activePage))return;
 if(button.dataset.personalFile==='new'){personalCardLookup='';personalCardText='';}if(button.dataset.personalFile==='new'&&personalFileSelected!=='new'&&personalEntryId){for(const key of Object.keys(personalEntryDraft))delete personalEntryDraft[key];personalEntryId=null;}personalFileSelected=button.dataset.personalFile;personalCardLookup=personalCardText.trim();goPage('admin-personal-form-'+personalFileSelected);
});

function personalSavedList(folder){
 const rows=personalCardRows().filter(r=>r.personalFolder===folder);
 return '<div class="table-wrap"><table><thead><tr><th>Card No.</th><th>Name</th><th>Action</th></tr></thead><tbody>'+rows.map(r=>'<tr><td>'+esc(r.reference)+'</td><td>'+esc(r.name)+'</td><td><button data-personal-open="'+esc(r.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="3">No saved entries.</td></tr>')+'</tbody></table></div>';
}
$('#main').addEventListener('change',event=>{if(event.target.id==='personalFolder')personalEntryFolder=event.target.value;if(event.target.dataset.personalField)personalEntryDraft[event.target.dataset.personalField]=personalBanglaValue(event.target.dataset.personalField,event.target.value);if(event.target.dataset.personalField==='field-17')personalSyncBirthYear();if(event.target.dataset.personalField==='field-0')personalAutofillCard(event.target);if(event.target.id==='personalBanglaMode'){personalCloseChoices();personalBanglaMode=event.target.value;renderPage();}});
$('#main').addEventListener('keydown',event=>{
 if(!['admin-personal-file','admin-personal-new-entry'].includes(activePage)||!event.target.matches('[data-personal-field]')||event.isComposing||event.altKey||event.ctrlKey||event.metaKey||!['Enter','ArrowUp','ArrowDown'].includes(event.key))return;
 if(event.target.list?.options.length&&event.key!=='Enter')return;
 event.preventDefault();const inputs=[...$('#main').querySelectorAll('[data-personal-field]')],index=inputs.indexOf(event.target),target=inputs[index+(event.key==='ArrowUp'?-1:1)];
 if(target){target.focus();if(typeof target.select==='function')target.select();}else if(event.key==='Enter'&&index===inputs.length-1)$('#personalSave').focus();
});
async function personalSaveEntry(){
 if(personalEntryBusy)return;
 if(!FarnoorAccess.canAction('admin-documents','edit'))return toast('Documents edit permission is required.');
 try{for(const key of ['field-6','field-17'])if(personalEntryDraft[key]?.trim())personalEntryDraft[key]=normalizeDate(personalEntryDraft[key]);}catch(error){toast(error.message);return;}
 if(personalEntryDraft['field-17'])personalSyncBirthYear(false);
 const card=(personalEntryDraft['field-0']||'').trim(),name=(personalEntryDraft['field-7']||personalEntryDraft['field-8']||'').trim();
 if(!card||!name)return toast('কার্ড নং ও নাম লিখুন।');
 if(card.length>120||name.length>200||Object.values(personalEntryDraft).some(value=>value.length>2000))return toast('কোনো ঘরে লেখা বেশি বড় হয়েছে।');
 const rows=(state.records['admin-documents']||[]).slice(),next={...state,records:{...state.records,'admin-documents':rows}},existing=personalEntryId&&rows.find(r=>r.id===personalEntryId);
 if(personalEntryId&&!existing)return toast('Saved entry is unavailable. Refresh before saving.');
 const now=new Date(),record={...existing,id:personalEntryId||personalPendingRecord?.id||crypto.randomUUID(),reference:card,name,quantity:0,date:now.toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),status:'Completed',personalFile:true,personalFolder:personalEntryFolder,personalEntry:structuredClone(personalEntryDraft),createdAt:existing?.createdAt||now.toISOString(),updatedAt:now.toISOString()};
 if(personalPendingRecord&&JSON.stringify(personalPendingRecord.personalEntry)===JSON.stringify(record.personalEntry)&&personalPendingRecord.personalFolder===record.personalFolder){record.createdAt=personalPendingRecord.createdAt;record.updatedAt=personalPendingRecord.updatedAt;record.date=personalPendingRecord.date;}personalPendingRecord=structuredClone(record);
 if(existing)rows[rows.indexOf(existing)]=record;else rows.unshift(record);next.records['admin-documents']=rows;
 personalEntryBusy=true;const button=$('#personalSave');button.disabled=true;button.textContent='Saving…';
 try{if(await commit(next,{personalFile:record})){personalEntryId=record.id;personalPendingRecord=null;toast('Personal file saved online.');goPage('admin-personal-entry-report');}}finally{personalEntryBusy=false;if(['admin-personal-file','admin-personal-new-entry'].includes(activePage))renderPage();}
}
$('#main').addEventListener('click',event=>{
 if(!['admin-personal-file','admin-personal-new-entry','admin-personal-entry-report'].includes(activePage))return;
 if(event.target.closest('#personalSave'))void personalSaveEntry();
 const open=event.target.closest('[data-personal-open]');if(!open)return;
 const row=(state.records['admin-documents']||[]).find(r=>r.id===open.dataset.personalOpen&&r.personalFile);if(!row)return;
 for(const key of Object.keys(personalEntryDraft))delete personalEntryDraft[key];Object.assign(personalEntryDraft,row.personalEntry);personalEntryId=row.id;personalEntryFolder=row.personalFolder;personalFileSelected='new';goPage('admin-personal-new-entry');
});


function personalReportDate(value){if(!value)return '';try{return normalizeDate(value);}catch{return value;}}
$('#main').addEventListener('focusout',event=>{
 const input=event.target;if(!['field-6','field-17'].includes(input.dataset.personalField)||!input.value.trim())return;
 try{input.value=normalizeDate(input.value);personalEntryDraft[input.dataset.personalField]=input.value;if(input.dataset.personalField==='field-17')personalSyncBirthYear();input.setCustomValidity('');}catch(error){input.setCustomValidity(error.message);toast(error.message);}
});
function personalReportColumns(){
 const columns=[];personalEntryFields.forEach((field,index)=>{
  if(typeof field==='string'){columns.push({label:field,key:'field-'+index,date:/তারিখ/.test(field)});if(index===20)columns.push({label:'ফ্যামেলী অন্য জনের মোবাইল নং',key:'family-mobile'});}
  else if(field.children)columns.push({label:field.title,children:true,labels:['ক্রমিক নং','নাম','বয়স','লিঙ্গ']});
  else columns.push({label:field.title,keys:field.fields.map((_,col)=>'address-'+index+'-'+col),labels:field.fields});
 });return columns;
}
function renderPersonalEntryReport(){
 const rows=(state.records['admin-documents']||[]).filter(row=>row.personalFile&&!row.maternityBenefit&&!row.serviceBenefit&&!row.warningBenefit).slice().sort((a,b)=>String(b.updatedAt||b.createdAt||'').localeCompare(String(a.updatedAt||a.createdAt||''))),columns=personalReportColumns(),count=2+columns.reduce((sum,col)=>sum+(col.labels?.length||1),0);
 const top='<th rowspan="2">ক্রমিক নং</th>'+columns.map(col=>col.labels?'<th colspan="4">'+esc(col.label)+'</th>':'<th rowspan="2">'+esc(col.label)+'</th>').join('')+'<th rowspan="2" class="no-print">Action</th>';
 const lower=columns.filter(col=>col.labels).flatMap(col=>col.labels).map(label=>'<th>'+esc(label)+'</th>').join('');
 const values=row=>{const entry=row.personalEntry||{};return columns.map(col=>{
  if(col.children){const children=Array.from({length:5},(_,i)=>[i+1,...[0,1,2].map(n=>entry['child-'+i+'-'+n]||'')]).filter(child=>child.slice(1).some(Boolean));return [0,1,2,3].map(i=>'<td>'+children.map(child=>esc(child[i])).join('<br>')+'</td>').join('');}
  if(col.keys)return col.keys.map(key=>'<td>'+esc(entry[key])+'</td>').join('');
  return '<td>'+esc(col.date?personalReportDate(entry[col.key]):entry[col.key])+'</td>';
 }).join('');};
 $('#main').innerHTML=heading('Admin · Personal file','','')+'<section class="panel"><h2 style="text-align:center;font-size:26px;font-weight:800;margin:12px 0 24px">ENTRY REPORT</h2><div class="table-wrap"><table class="personal-full-report" style="width:max-content;min-width:100%;border-collapse:collapse"><thead><tr>'+top+'</tr><tr>'+lower+'</tr></thead><tbody>'+rows.map((row,i)=>'<tr><td>'+(i+1)+'</td>'+values(row)+'<td class="no-print"><button data-personal-open="'+esc(row.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="'+count+'">No saved entries.</td></tr>')+'</tbody></table></div></section><style>.personal-full-report th,.personal-full-report td{border:1px solid #6c9485;min-width:120px;max-width:280px;padding:10px;text-align:center;vertical-align:middle;white-space:normal;overflow-wrap:anywhere}.personal-full-report th{background:#e2f1e9;color:#214d3d;font-size:14px}.personal-full-report td{font-size:15px}</style>';
 if(typeof applyActionControls==='function')applyActionControls();
}

$('#main').addEventListener('input',event=>{if(event.target.id==='personalCardLookup'){personalCardText=event.target.value;personalCardLookup='';const preview=document.querySelector('#main section[aria-label]');if(preview)preview.remove();document.getElementById('personalPrintCompanyInfo')?.remove();}});
$('#main').addEventListener('submit',event=>{
 if(event.target.id!=='personalCardLookupForm')return;event.preventDefault();if(['admin-personal-file','admin-personal-print'].includes(activePage)){if(!personalCompanyChoice||!personalNameChoice)return toast('Company ও Name নির্বাচন করুন।');const card=$('#personalCardLookup').value.trim();personalCardText=card;personalCardLookup=card;if(card&&!personalCardRows(card).length){personalPrintSubmitted=false;personalFileSelected='';renderPage();return toast('এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।');}personalPrintSubmitted=true;renderPage();return;}
 const card=$('#personalCardLookup').value.trim();if(!card){personalCardLookup='';personalFileSelected='';renderPage();return;}
 const matches=personalCardRows(card),match=matches[0];
 if(!match){personalCardLookup='';personalFileSelected='';renderPage();toast('এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।');return;}
 personalCardText=card;personalCardLookup=card;personalFileSelected=personalFileSelected||'file-1';renderPage();
 toast('কার্ড নম্বরের সঙ্গে মিলে সেভ করা ফাইল দেখানো হয়েছে।');
});

let personalChoiceInput=null,personalChoiceIndex=-1;
function personalCloseChoices(){if(!personalChoiceInput)return;const list=document.getElementById('personal-options-'+personalChoiceInput.dataset.personalField);if(list)list.hidden=true;const toggle=personalChoiceInput.parentElement?.querySelector('[data-personal-choice-toggle]');if(toggle)toggle.setAttribute('aria-expanded','false');personalChoiceInput.setAttribute('aria-expanded','false');personalChoiceInput.removeAttribute('aria-activedescendant');personalChoiceInput=null;personalChoiceIndex=-1;}
function personalShowChoices(input,showAll=false){personalCloseChoices();const key=input.dataset.personalField,list=document.getElementById('personal-options-'+key),matches=showAll?personalEntryOptions[key]||[]:personalOptionMatches(key,input.value);if(!list)return;
 list.innerHTML=matches.map((value,index)=>'<button type="button" role="option" id="personal-choice-'+key+'-'+index+'" data-personal-choice-value="'+esc(value)+'" aria-selected="false" tabindex="-1">'+esc(value)+'</button>').join('');list.hidden=!matches.length;const toggle=input.parentElement?.querySelector('[data-personal-choice-toggle]');if(toggle)toggle.setAttribute('aria-expanded',String(!!matches.length));input.setAttribute('aria-expanded',String(!!matches.length));if(matches.length){personalChoiceInput=input;personalChoiceIndex=-1;}
}
function personalChooseValue(value){const input=personalChoiceInput;if(!input)return;input.value=value;personalEntryDraft[input.dataset.personalField]=value;personalCloseChoices();personalBanglaPreview(input);input.focus();}
$('#main').addEventListener('focusout',event=>{const input=event.target;if(!input.dataset.personalChoice)return;setTimeout(()=>{if(personalChoiceInput===input&&!input.parentElement.contains(document.activeElement))personalCloseChoices();},0);});
$('#main').addEventListener('focusin',event=>{if(event.target.dataset.personalChoice)personalShowChoices(event.target);else if(!event.target.closest('.personal-suggestions')&&!event.target.closest('[data-personal-choice-toggle]'))personalCloseChoices();});
$('#main').addEventListener('pointerdown',event=>{const option=event.target.closest('[data-personal-choice-value]');if(option){event.preventDefault();personalChooseValue(option.dataset.personalChoiceValue);}else if(!event.target.dataset.personalChoice&&!event.target.closest('[data-personal-choice-toggle]'))personalCloseChoices();});
$('#main').addEventListener('click',event=>{const toggle=event.target.closest('[data-personal-choice-toggle]');if(toggle){const input=document.getElementById('personal-'+toggle.dataset.personalChoiceToggle),wasOpen=toggle.getAttribute('aria-expanded')==='true';input.focus();if(wasOpen)personalCloseChoices();else personalShowChoices(input,true);return;}const option=event.target.closest('[data-personal-choice-value]');if(option&&personalChoiceInput)personalChooseValue(option.dataset.personalChoiceValue);});
$('#main').addEventListener('keydown',event=>{
 if(event.isComposing||event.target!==personalChoiceInput)return;const input=personalChoiceInput,list=document.getElementById('personal-options-'+input.dataset.personalField),options=[...list.querySelectorAll('[role="option"]')];if(!options.length)return;
 if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();personalCloseChoices();return;}
 if(!['ArrowDown','ArrowUp','Enter'].includes(event.key))return;event.preventDefault();event.stopImmediatePropagation();
 if(event.key==='Enter'){const value=options[Math.max(0,personalChoiceIndex)].dataset.personalChoiceValue;personalChooseValue(value);const fields=[...$('#main').querySelectorAll('[data-personal-field]')],next=fields[fields.indexOf(input)+1];if(next)next.focus();return;}
 personalChoiceIndex=personalChoiceIndex<0?(event.key==='ArrowDown'?0:options.length-1):(personalChoiceIndex+(event.key==='ArrowDown'?1:-1)+options.length)%options.length;options.forEach((option,index)=>option.setAttribute('aria-selected',String(index===personalChoiceIndex)));input.setAttribute('aria-activedescendant',options[personalChoiceIndex].id);options[personalChoiceIndex].scrollIntoView({block:'nearest'});
},true);

$('#main').addEventListener('change',event=>{if(event.target.id==='personalCompanyChoice')personalCompanyChoice=event.target.value;if(event.target.id==='personalNameChoice')personalNameChoice=event.target.value;});

function personalPrintCompany(){return personalCompanyChoice==='FARNOOR GARMENTS LTD. UNIT-2'?{bn:'ফারনূর গার্মেন্টস লিঃ-ইউনিট-২',address:'৪৫৪, বাবুরচালা, পিরুজালী, আলীমপাড়া, গাজীপুর সদর, গাজীপুর',en:'454, BaburChala, Alimpara, Pirujali, Gazipur',holiday:'শুক্রবার'}:{bn:'ফারনূর গার্মেন্টস লিঃ',address:'১২০৮/১/২ মালিবাগ বাজার রোড, ঢাকা-১২১৭',en:'1028/1/2 Malibagh Bazar Road, Dhaka-1217',holiday:'রবিবার'};}
function personalPrintCompanyInfo(){const c=personalPrintCompany();return '<div id="personalPrintCompanyInfo" style="text-align:center;padding:18px 12px 24px;font-size:20px;line-height:1.6;color:#123f32"><b style="font-size:28px">'+esc(c.bn)+'</b><div>'+esc(c.address)+'</div><div>'+esc(c.en)+'</div><div>সাপ্তাহিক ছুটি: '+c.holiday+'</div></div>';}
$('#main').addEventListener('change',event=>{if(['admin-personal-file','admin-personal-print'].includes(activePage)&&['personalCompanyChoice','personalNameChoice'].includes(event.target.id)){personalPrintSubmitted=false;renderPage();}});

function personalPrintSelection(){return '<div class="personal-print-selection" style="display:flex;flex-wrap:wrap;gap:6px 20px;border-bottom:1px solid #aaa;padding:4px 0;margin-bottom:12px;font-size:14px;color:#000"><span>কার্ড নং: <b>'+esc(personalFileOneBangla(personalCardLookup))+'</b></span><span>কোম্পানি: <b>'+esc(personalCompanyChoice)+'</b></span><span>নাম: <b>'+esc(personalNameChoice||'—')+'</b></span></div>';}

function personalPrintFileButtons(){return '<div class="no-print" style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px">'+personalFileButtons.filter(b=>b[0]!=='new').map(([id,name,icon,bg,fg])=>'<button type="button" data-personal-file="'+id+'" aria-pressed="'+(personalFileSelected===id)+'" style="padding:8px 14px;border:1px solid '+fg+'55;border-radius:7px;background:'+bg+';color:'+fg+';font-weight:700">'+icon+' '+name+'</button>').join('')+'</div>';}

function renderPersonalPrintFile(){const folder=activePage.slice('admin-personal-form-'.length),title=personalFileButtons.find(b=>b[0]===folder)?.[1]||folder;personalFileSelected=folder;const rows=personalCardLookup?personalCardRows():[];$('#main').innerHTML=heading('Admin · Personal file · Print',title,'')+'<div class="no-print" style="display:flex;justify-content:flex-end;gap:10px;margin-bottom:16px">'+(folder?'<button type="button" id="personalFormBack" style="margin-right:auto;background:#e0e7ff;border-color:#a5b4fc;color:#312e81;font-weight:700">← Back</button>':'')+'<button id="personalFormPrint" style="background:#2563eb;border-color:#1d4ed8;color:white">Print</button><button id="personalFormExcel" style="background:#16803c;border-color:#116530;color:white">Excel</button></div><section class="panel" id="personalFilePrintContent">'+personalSavedList(folder)+'</section>';}
$('#main').addEventListener('click',async event=>{if(!activePage.startsWith('admin-personal-form-'))return;if(event.target.closest('#personalFormBack')){goPage('admin-personal-print');return;}if(event.target.closest('#personalFormPrint')){if(!FarnoorAccess.canAction('admin-documents','print'))return toast('Print permission is required.');window.print();}if(event.target.closest('#personalFormExcel')){const rows=['file-1','file-2','file-3','file-4','file-5','file-6','file-7','staff-3','electrican'].includes(personalFileSelected)?(personalCardLookup?personalCardRows():[]):[{personalEntry:{}}];if(!rows.length)return toast('কোনো মিলে যাওয়া এন্ট্রি নেই।');const title=personalFileButtons.find(b=>b[0]===personalFileSelected)?.[1]||'Personal file',matrix=[[personalCompanyChoice],[personalNameChoice],[title],['Field','Value']];for(const row of rows){const e=row.personalEntry||{};for(const [i,field] of personalEntryFields.entries()){let value=typeof field==='string'?e['field-'+i]||'':field.children?Array.from({length:5},(_,n)=>[0,1,2].map(k=>e['child-'+n+'-'+k]||'').join(' / ')).join('; '):field.fields.map((label,k)=>label+' '+(e['address-'+i+'-'+k]||'')).join(', ');matrix.push([typeof field==='string'?field:field.title,value]);if(i===20)matrix.push(['ফ্যামেলী অন্য জনের মোবাইল নং',e['family-mobile']||'']);}}const name=title+'-'+personalCardLookup.replace(/[^a-zA-Z0-9০-৯_-]/g,'_')+'.xlsx',data=makeXlsx(matrix,title),mime='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';try{if(window.showSaveFilePicker){const handle=await window.showSaveFilePicker({suggestedName:name,types:[{description:'Excel workbook',accept:{[mime]:['.xlsx']}}]});const stream=await handle.createWritable();await stream.write(new Blob([data],{type:mime}));await stream.close();toast('Excel file saved.');}else{download(name,data,mime);toast('Excel downloaded. ব্রাউজারের Download settings দিয়ে লোকেশন নির্বাচন করুন।');}}catch(error){if(error.name!=='AbortError')toast(error.message);}}});





const personalTopFileButtons=personalPrintFileButtons;personalPrintFileButtons=function(){return personalTopFileButtons().replace('<div class="no-print" style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px">','<div class="no-print" style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px"><button type="button" data-personal-top="admin-personal-new-entry" style="background:#e1f4e6;color:#216243;font-weight:700">✚ New Entry</button>').replace('</div>','<button type="button" data-personal-top="admin-personal-entry-report" style="background:#fce3ed;color:#a02b60;font-weight:700">▤ Entry Report</button></div>');};document.getElementById('main').addEventListener('click',event=>{const button=event.target.closest('[data-personal-top]');if(button)goPage(button.dataset.personalTop);});

;
;/* personal-file-one.js */
'use strict';
const personalFileOneFieldAliases={'কার্ড নং':0,'কার্ড নং/আই ডি নং':0,'পদবী বাংলা':1,'পদবী':1,'পদবী ইংলিশ':2,'Designation':2,'সেকশন ইংলিশ':4,'Section':4,'নাম বাংলা':7,'নাম':7,'নাম ইংলিশ':8,'Name':8};
function personalFileOneValue(row,label){const index=Object.hasOwn(personalFileOneFieldAliases,label)?personalFileOneFieldAliases[label]:personalEntryFields.findIndex(field=>field===label);return index<0?'':row?.personalEntry?.['field-'+index]??'';}
function personalFileOneBangla(value){return String(value??'').replace(/[0-9]/g,d=>'০১২৩৪৫৬৭৮৯'[Number(d)]);}
function personalFileOne(row){
 const company=personalPrintCompany(),e=row?.personalEntry||{},value=label=>esc(personalFileOneBangla(personalFileOneValue(row,label))),red=label=>`<span class="pf1-red">${value(label)}</span>`,date=label=>`<span class="pf1-red">${esc(personalFileOneBangla(personalReportDate(personalFileOneValue(row,label))))}</span>`,address=index=>`<div class="pf1-address-grid">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,col)=>`<div class="pf1-address-part"><span>${label}</span><span class="pf1-red">${esc(personalFileOneBangla(e['address-'+index+'-'+col]))}</span></div>`).join('')}</div>`;
 return `<article class="pf1-paper" aria-label="File-1 আবেদন ফর্ম"><header class="pf1-header"><table class="pf1-card"><tr><td colspan="2" class="pf1-red">${value('কার্ড নং')}</td></tr><tr><th>সেকশন :</th><td class="pf1-red">${value('সেকশন বাংলা')}</td></tr></table><div class="pf1-recipient">বরাবর,<br>ব্যবস্থাপনা পরিচালক সাহেব সমীপেষু<br><strong class="pf1-red pf1-company">${esc(company.bn)}</strong><br><span class="pf1-red">${esc(company.address)}</span></div></header><div class="pf1-columns"><aside class="pf1-approvals"><section><b>নিয়োগের তারিখ :</b><div class="pf1-approval-value">${date('যোগদানের তারিখ')}</div></section><section><b>দক্ষতা :</b></section><section><b>প্রস্তাবিত বেতন :</b><div class="pf1-approval-value">${red('প্রস্তাবিত বেতন')} /=</div></section>${['হেড সুপারভাইজার/লাইনচীফ:','ফ্লোর ইনচার্জ/ম্যানেজার :','চীফ মাঃ ম্যানেজার :','জেনারেল ম্যানেজার :','ব্যবস্থাপনা পরিচালক :'].map(label=>`<section><b>${label}</b></section>`).join('')}</aside><div class="pf1-body"><div class="pf1-subject"><b>বিষয় :</b> ${red('পদবী বাংলা')} <span>পদে চাকুরীর আবেদন।</span></div><p>মহোদয়,</p><p>বিশ্বস্ত সূত্রে জানতে পারিলাম যে, আপনার পোশাক তৈরী কারখানায় ${red('পদবী বাংলা')} পদে লোক নিয়োগ করা হইবে। আমি উক্ত পদের জন্য একজন প্রার্থী/প্রার্থিনী। নিম্নে আমার পূর্ণ জীবন বৃত্তান্ত প্রদত্ত হইল।</p><div class="pf1-details"><div><label>নাম</label><span>:</span>${red('নাম বাংলা')}</div><div><label>পিতার/স্বামীর নাম</label><span>:</span><span class="pf1-red">${value('পিতার নাম')||value('স্বামী/স্ত্রীর নাম')}</span></div><div><label>স্থায়ী ঠিকানা</label><span>:</span><div>${address(15)}</div></div><div><label>বর্তমান ঠিকানা</label><span>:</span><div>${address(16)}</div></div><div><label>বয়স/জন্ম তারিখ</label><span>:</span><div>${date('জন্ম তারিখ')} &nbsp; ইং</div></div>${['জাতীয়তা','শিক্ষাগত যোগ্যতা','অভিজ্ঞতা','ধর্ম'].map(label=>`<div><label>${label}</label><span>:</span>${red(label)}</div>`).join('')}</div><p class="pf1-request">অতএব, আমাকে উল্লেখিত পদে নিয়োগ প্রদান করিলে আমি আপনার নিকট চির বাধিত থাকিব।</p><div class="pf1-signoff"><b>ধন্যবাদান্তে,</b><b>আপনার বিশ্বস্ত</b></div><div class="pf1-signatures"><div>তারিখ : &nbsp; ${date('যোগদানের তারিখ')} &nbsp; ইং</div><div><b>স্বাক্ষর :</b><br><br><br><b>পূর্ণ নাম :</b></div></div></div></div></article>`;
}
const personalFileOneOriginalList=personalSavedList;
personalSavedList=function(folder){
 
 
 const rows=folder==='file-1'&&personalCardLookup?personalCardRows():[];if(folder==='file-1'&&personalCardLookup&&!rows.length)return '<p>এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।</p>';
 return `<style>.pf1-paper,.pf1-paper th,.pf1-paper td,.pf1-paper label{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.pf1-scroll{overflow-x:auto}.pf1-paper{box-sizing:border-box;width:794px;min-height:1123px;background:#fff;color:#000;padding:75px 38px 40px;margin:0 auto;font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif;font-size:14px;line-height:1.65}.pf1-red{color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact;font-size:17px;font-weight:600;overflow-wrap:anywhere}.pf1-header{display:grid;grid-template-columns:178px 1fr;gap:14px;align-items:start;margin:0 12px 32px}.pf1-card{border-collapse:collapse;width:100%;margin:0}.pf1-card td,.pf1-card th{border:1px solid #111;padding:0 3px;text-align:center;font-size:20px;height:29px}.pf1-card .pf1-red{font-size:20px}.pf1-recipient{font-size:21px;line-height:1.6}.pf1-company{font-size:28px;font-weight:800}.pf1-columns{display:grid;grid-template-columns:178px 1fr}.pf1-approvals{font-size:21px;line-height:1.35;border:0;border-right:1px solid #000;background:#fff;padding:0;position:static;width:auto;min-height:0}.pf1-approvals section{background:#fff;margin:0;border-radius:0;box-shadow:none}.pf1-approvals section{box-sizing:border-box;min-height:93px;border-bottom:1px solid #000;padding:0 3px}.pf1-approvals section:first-child{height:126px}.pf1-approvals section:nth-child(2){min-height:68px}.pf1-approvals section:nth-child(3){height:112px}.pf1-approvals section:last-child{border:0}.pf1-approval-value{text-align:center;margin-top:32px;font-size:18px}.pf1-body{padding-left:4px;min-width:0;font-size:19px;line-height:1.4}.pf1-subject{display:flex;gap:12px;align-items:center;justify-content:space-between;min-height:65px;padding:0 10px 0 8px;margin-bottom:20px;font-size:21px}.pf1-subject .pf1-red{font-size:22px}.pf1-body p{margin:14px 0}.pf1-details{margin-top:24px}.pf1-details>div{display:grid;grid-template-columns:140px 12px minmax(0,1fr);min-height:35px;align-items:start}.pf1-address-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:12px;row-gap:3px;align-items:start}.pf1-address-part{display:grid;grid-template-columns:40px minmax(0,1fr);align-items:baseline;min-width:0}.pf1-address-part>span:last-child{overflow-wrap:anywhere;min-width:0}.pf1-details>div>label{padding-right:4px}.pf1-details label{font-size:19px}.pf1-body .pf1-red{font-size:22px;line-height:1.4}.pf1-details .pf1-red{line-height:1.4}.pf1-request{margin-top:34px!important}.pf1-signoff{display:flex;justify-content:space-between;margin-top:40px;padding-right:78px;font-size:16px} .pf1-signatures{font-size:22px;display:grid;grid-template-columns:1fr 125px;margin-top:55px}.pf1-paper + .pf1-paper{margin-top:24px;break-before:page}@page personalFileOneA4{size:A4 portrait;margin:8mm}@media print{.pf1-paper .pf1-approvals{display:block!important}.pf1-paper .pf1-columns{display:grid!important;grid-template-columns:42mm minmax(0,1fr)!important;width:100%!important}.pf1-paper .pf1-body{grid-column:2!important;width:auto!important;min-width:0!important}.pf1-paper .pf1-approvals{grid-column:1!important}.pf1-paper .pf1-card th,.pf1-paper .pf1-card td{padding:0 3px!important}body:has(.pf1-paper) #personalFilePrintContent{border:0!important;border-radius:0!important;overflow:visible!important;width:194mm!important;margin:0!important;padding:0!important}body:has(.pf1-paper) #main>section:not(:last-of-type),body:has(.pf1-paper) #main>.page-heading{display:none!important}.pf1-scroll{overflow:visible!important}.pf1-paper{page:personalFileOneA4;box-sizing:border-box;width:190mm;min-height:0;margin:0 0 0 auto;padding:14mm 2mm 2mm 10mm;font-size:10pt;break-inside:avoid;page-break-inside:avoid}.pf1-paper .pf1-header{grid-template-columns:42mm minmax(0,1fr);gap:3mm;margin:0 0 5mm}.pf1-paper .pf1-columns{grid-template-columns:42mm minmax(0,1fr)}.pf1-paper .pf1-recipient{font-size:18px;line-height:1.4}.pf1-paper .pf1-company{font-size:25px;font-weight:800}.pf1-paper .pf1-card td,.pf1-paper .pf1-card th,.pf1-paper .pf1-card .pf1-red{font-size:18px;height:25px}.pf1-paper .pf1-approvals{font-size:17px}.pf1-paper .pf1-approvals section{min-height:18mm}.pf1-paper .pf1-approvals section:first-child{height:25mm}.pf1-paper .pf1-approvals section:nth-child(2){min-height:14mm}.pf1-paper .pf1-approvals section:nth-child(3){height:23mm}.pf1-paper .pf1-approval-value{margin-top:6mm}.pf1-paper .pf1-body{font-size:17px;line-height:1.35}.pf1-paper .pf1-body .pf1-red{font-size:19px;line-height:1.35}.pf1-paper .pf1-subject{font-size:18px;min-height:13mm;margin-bottom:3mm;padding:0 2px;gap:6px}.pf1-paper .pf1-body p{margin:3mm 0}.pf1-paper .pf1-details{margin-top:4mm}.pf1-paper .pf1-details>div{grid-template-columns:31mm 3mm minmax(0,1fr);min-height:7mm}.pf1-paper .pf1-details label{font-size:17px}.pf1-paper .pf1-address-grid{column-gap:2mm}.pf1-paper .pf1-address-part{grid-template-columns:9mm minmax(0,1fr)}.pf1-paper .pf1-request{margin-top:6mm!important}.pf1-paper .pf1-signoff{margin-top:7mm;padding-right:12mm}.pf1-paper .pf1-signatures{font-size:18px;margin-top:9mm}.pf1-paper + .pf1-paper{margin-top:0}body:has(.pf1-paper) #main{width:194mm!important;max-width:194mm!important;padding:0!important;margin:0!important}body:has(.pf1-paper) #personalFilePrintContent{margin-bottom:0!important}body:has(.pf1-paper) #personalFilePrintContent>.pf1-scroll{margin:0!important;padding:0!important}body:has(.pf1-paper) #main>div.no-print{display:none!important}}.pf1-paper .pf1-recipient{padding-left:8mm}.pf1-paper .pf1-subject{display:block;text-align:left;padding-left:0;min-height:65px}.pf1-paper .pf1-subject>b{display:inline-block;margin-right:8px}.pf1-paper .pf1-subject>.pf1-red{margin-right:5px}.pf1-paper .pf1-details>div{min-height:38px;padding-bottom:3px}.pf1-paper .pf1-signatures{grid-template-columns:minmax(0,1fr) 170px}@media print{.pf1-paper .pf1-recipient{padding-left:8mm}.pf1-paper .pf1-subject{display:block!important;min-height:13mm;padding-left:0!important}.pf1-paper .pf1-details>div{min-height:8mm;padding-bottom:1mm}.pf1-paper .pf1-address-grid{row-gap:1.5mm}.pf1-paper .pf1-signatures{grid-template-columns:minmax(0,1fr) 45mm}.pf1-paper .pf1-details .pf1-red{line-height:1.4}.pf1-paper .pf1-details{line-height:1.4}}.pf1-paper .pf1-card{table-layout:auto}.pf1-paper .pf1-card th{width:54px;white-space:nowrap!important;font-size:17px}.pf1-paper .pf1-card td{white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important;font-size:18px}.pf1-paper .pf1-card .pf1-red{font-size:18px}@media print{.pf1-paper .pf1-card th{width:12mm;font-size:15px!important}.pf1-paper .pf1-card td,.pf1-paper .pf1-card .pf1-red{font-size:16px!important;white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important}}.pf1-paper .pf1-approvals section:nth-child(3) .pf1-approval-value{font-size:24px}.pf1-paper .pf1-approvals section:nth-child(3) .pf1-approval-value .pf1-red{font-size:28px;font-weight:800}@media print{.pf1-paper .pf1-approvals section:nth-child(3) .pf1-approval-value{font-size:21px}.pf1-paper .pf1-approvals section:nth-child(3) .pf1-approval-value .pf1-red{font-size:25px;font-weight:800}}@media print{.pf1-paper,.pf1-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pf1-paper .pf1-red{color:#000!important;-webkit-text-fill-color:#000!important}}.pf1-paper .pf1-approvals section{height:126px;min-height:126px}@media print{.pf1-paper .pf1-approvals section{height:25mm!important;min-height:25mm!important}}.pf1-paper .pf1-approvals section:nth-child(4)>b{white-space:nowrap;font-size:16px;letter-spacing:-.25px}@media print{.pf1-paper .pf1-approvals section:nth-child(4)>b{font-size:14px!important;white-space:nowrap!important}}</style><div class="pf1-scroll">${rows.length?rows.map(personalFileOne).join(''):personalFileOne(null)}</div>`;
};

function personalPrintOtherForm(folder){const rows=personalCardLookup?personalCardRows():[{personalEntry:{}}],title=personalFileButtons.find(b=>b[0]===folder)?.[1]||folder,c=personalPrintCompany();if(!rows.length)return '<p>এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।</p>';return rows.map(row=>'<article style="background:white;color:black;padding:20px;break-before:page"><h2 style="text-align:center">'+esc(c.bn)+'</h2><p style="text-align:center">'+esc(c.address)+'</p><h3 style="text-align:center">'+esc(title)+'</h3><table style="width:100%">'+personalEntryFields.map((field,i)=>{const e=row.personalEntry||{};let value=typeof field==='string'?e['field-'+i]:field.children?Array.from({length:5},(_,n)=>[0,1,2].map(k=>e['child-'+n+'-'+k]||'').join(' / ')).filter(v=>v.replace(/[ /]/g,'')).join('; '):field.fields.map((label,k)=>label+' '+(e['address-'+i+'-'+k]||'')).join(', ');return '<tr><th style="text-align:left;width:35%">'+esc(typeof field==='string'?field:field.title)+'</th><td>'+esc(personalFileOneBangla(value))+'</td></tr>';}).join('')+'</table></article>').join('');}

;
;/* personal-file-two.js */
'use strict';
function personalFileTwo(row){
 const e=row?.personalEntry||{},v=i=>esc(personalFileOneBangla(e['field-'+i]||'')),red=i=>`<span class="pf2-value">${v(i)}</span>`,date=i=>`<span class="pf2-value">${esc(personalFileOneBangla(personalReportDate(e['field-'+i]||'')))}</span>`,c=personalPrintCompany();
 const address=i=>`<div class="pf2-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<span>${label} <b class="pf2-value">${esc(personalFileOneBangla(e['address-'+i+'-'+k]||''))}</b></span>`).join('')}</div>`;
 const line=(n,label,value)=>`<div class="pf2-row"><span>${personalFileOneBangla(n)}।</span><b>${label}</b><b>:</b><div>${value}</div></div>`;
 return `<article class="pf2-paper" aria-label="File-2 ব্যক্তিগত তথ্যাবলী"><header class="pf2-heading"><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p><h3>ব্যক্তিগত তথ্যাবলী</h3><div class="pf2-photo">ছবি</div></header>${line(1,'নাম',red(7))}${line(2,'পদবী',red(1))}${line(3,'কার্ড নং/স্টাফ নং',red(0))}${line(4,'সেকশন',red(3))}${line(5,'মাতার নাম',red(10))}${line(6,'পিতার নাম',red(9))}${line(7,'ভাইবোনের সংখ্যা/নিজ অবস্থান',`ভাই - ${red(27)} &nbsp; , বোন - ${red(28)} &nbsp; , নিজ অবস্থান - ${red(29)}`)}${line(8,'জন্ম তারিখ / বয়স',date(17)+' &nbsp; ইং')}${line(9,'স্বামী / স্ত্রীর নাম (তাদের বয়স)',red(12)+' &nbsp; বয়স '+red(13))}${line(10,'স্বামী / স্ত্রীর পেশা',red(14))}${line(11,'বর্তমান ঠিকানা',address(16))}${line(12,'স্থায়ী ঠিকানা',address(15)+`<div>মোবাইল নং : ${red(20)}</div>`)}${line(13,'রক্তের গ্রুপ',red(23))}${line(14,'সন্তানাদির বিবরণ','')}<table class="pf2-children"><thead><tr><th>ক্রমিক নং</th><th>নাম</th><th>বয়স</th><th>লিঙ্গ</th></tr></thead><tbody>${Array.from({length:Math.max(3,Array.from({length:5},(_,i)=>[0,1,2].some(k=>e['child-'+i+'-'+k])?i+1:0).reduce((a,b)=>Math.max(a,b),0))},(_,i)=>`<tr><td>${[0,1,2].some(k=>e['child-'+i+'-'+k])?personalFileOneBangla(i+1):''}</td>${[0,1,2].map(k=>`<td class="pf2-value">${esc(personalFileOneBangla(e['child-'+i+'-'+k]||''))}</td>`).join('')}</tr>`).join('')}</tbody></table>${line(15,'শিক্ষাগত যোগ্যতা',red(19))}${line(16,'পূর্ববর্তী প্রতিষ্ঠানে চাকুরীর বিবরণ',red(32))}${line(17,'পরিচিত বিশিষ্ট ব্যক্তিবর্গ',red(35))}${line(18,'শারীরিক সনাক্তকরণ চিহ্ন',red(25))}${line(19,'উচ্চতা',red(26))}${line(20,'জাতীয় আইডি কার্ডের নং',red(24))}<footer class="pf2-footer"><div>তারিখ : &nbsp; ${date(6)} &nbsp; ইং</div><div>স্বাক্ষর :<br><br><br>পূর্ণ নাম :</div></footer></article>`;
}
const personalFileTwoPreviousList=personalSavedList;
personalSavedList=function(folder){if(folder!=='file-2')return personalFileTwoPreviousList(folder);const rows=personalCardLookup?personalCardRows():[];return `<style>.pf2-paper,.pf2-paper th,.pf2-paper td{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.pf2-paper{box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto;background:white;color:#000;padding:45px 38px 30px;font-size:18px;line-height:1.35}.pf2-heading{position:relative;text-align:center;padding:0 105px 20px 40px;min-height:135px}.pf2-heading h2{font-size:29px;margin:0 0 4px}.pf2-heading p{font-size:15px;margin:0 0 4px;line-height:1.3}.pf2-heading h3{font-size:25px;text-decoration:underline}.pf2-photo{position:absolute;right:0;top:0;border:1px solid #000;width:100px;height:90px;display:grid;place-items:center;font-size:25px}.pf2-row{display:grid;grid-template-columns:30px 210px 15px minmax(0,1fr);min-height:29px;align-items:start;gap:3px}.pf2-value{color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact;font-weight:600;overflow-wrap:anywhere}.pf2-address{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:3px 14px;margin-bottom:4px}.pf2-children{border-collapse:collapse;width:calc(100% - 40px);margin:0 0 5px 40px;table-layout:fixed}.pf2-children th,.pf2-children td{border:1px solid #000;padding:1px 5px;text-align:center;font-size:18px;white-space:normal;height:28px;color:#000;background:white}.pf2-children th:first-child{width:15%}.pf2-children th:nth-child(2){width:45%}.pf2-children td.pf2-value{color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact}.pf2-footer{display:grid;grid-template-columns:minmax(0,1fr) 260px;margin-top:135px;font-size:21px;font-weight:bold}.pf2-paper+.pf2-paper{break-before:page}@page personalFileTwoA4{size:A4 portrait;margin:8mm}@media print{body:has(.pf2-paper) #main>.page-heading,body:has(.pf2-paper) #main>.no-print{display:none!important}body:has(.pf2-paper) #main,body:has(.pf2-paper) #personalFilePrintContent{width:194mm!important;max-width:194mm!important;padding:0!important;margin:0!important;border:0!important;overflow:visible!important}.pf2-paper{page:personalFileTwoA4;width:190mm;min-height:0;padding:6mm 4mm 3mm;margin:0 auto;font-size:12pt;line-height:1.3;break-inside:avoid}.pf2-heading{min-height:29mm;padding:0 27mm 4mm 12mm}.pf2-heading h2{font-size:21pt}.pf2-heading p{font-size:11pt}.pf2-heading h3{font-size:18pt}.pf2-photo{width:25mm;height:23mm;font-size:18pt}.pf2-row{grid-template-columns:7mm 50mm 3mm minmax(0,1fr);min-height:6.8mm;gap:1mm}.pf2-children th,.pf2-children td{padding:0 1mm!important;height:7mm;font-size:12pt}.pf2-footer{font-size:14pt;margin-top:35mm;grid-template-columns:minmax(0,1fr) 62mm}}@media print{.pf2-paper,.pf2-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pf2-paper .pf2-value{color:#000!important;-webkit-text-fill-color:#000!important}}</style>${(rows.length?rows:[null]).map(personalFileTwo).join('')}`;};

;
;/* personal-file-three.js */
'use strict';
function personalFileThreeSalary(value){const gross=Number(String(value||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replace(/[,\s]/g,''));if(!Number.isFinite(gross)||gross<=0)return ['', '', '', '', '', ''];if(gross<2450)return ['', '', '', '', '', gross];const basic=Math.round((gross-2450)/1.5*100)/100,house=Math.round((gross-2450-basic)*100)/100;return [basic,house,750,450,1250,gross];}
function personalFileThree(row){const e=row?.personalEntry||{},c=personalPrintCompany(),v=i=>esc(personalFileOneBangla(e['field-'+i]||'')),red=i=>`<span class="pf3-value">${v(i)}</span>`,dt=`<span class="pf3-value">${esc(personalFileOneBangla(personalReportDate(e['field-6']||'')))}</span>`,salary=personalFileThreeSalary(e['field-22']),money=n=>`<span class="pf3-value">${n===''?'':esc(personalFileOneBangla(Number(n).toLocaleString('en-IN',{maximumFractionDigits:2})))}</span>`,clause=(n,title,body)=>`<div class="pf3-clause"><span>${personalFileOneBangla(n)}।</span><div><b class="pf3-clause-title">${title}</b>${body}</div></div>`,address=`<div class="pf3-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<span>${label} <b class="pf3-value">${esc(personalFileOneBangla(e['address-16-'+k]||''))}</b></span>`).join('')}</div>`;
return `<article class="pf3-paper" aria-label="File-3 নিয়োগপত্র প্রথম পাতা"><div class="pf3-date">তারিখ : ${dt}</div><header class="pf3-heading"><span class="pf3-ref">সূত্র :</span><h2 class="pf3-value">${esc(c.bn)}</h2><p class="pf3-value">${esc(c.address)}</p><h3>নিয়োগ পত্র।</h3></header><div>প্রতি,</div><div class="pf3-identity"><span>নাম</span><span>:</span><div>${red(7)}</div><span>পিতা/স্বামীর নাম</span><span>:</span><div class="pf3-value">${v(9)||v(12)}</div><span>মাতার নাম</span><span>:</span><div>${red(10)}</div><span>ঠিকানা</span><span>:</span>${address}</div><p>জনাব/জনাবা,<br>আপনার ${dt} ইং তারিখের আবেদন পত্রের প্রেক্ষিতে জানানো যাচ্ছে যে, ${esc(c.bn)} নিম্ন লিখিত শর্ত সাপেক্ষে <b>${v(1)}</b> পদে আপনাকে নিয়োগ প্রদান করছে।</p><h3 class="pf3-terms-title">চাকুরীর শর্তসমূহ</h3>${clause(1,'নিয়োগের কার্যকারিতা :','<p>এই নিয়োগ পত্র চাকুরীতে যোগদানের তারিখ থেকে কার্যকর হবে। সন্তোষজনক ভাবে প্রবেশকাল অতিবাহিত হলে (কাজের মান, দক্ষতা, শৃঙ্খলা এবং উপস্থিতি সাপেক্ষে) আপনাকে স্থায়ী কর্মী হিসাবে গণ্য করা হবে।</p>')}${clause(2,'প্রবেশকাল','<p>চাকুরীতে যোগদানের তারিখ থেকে তিন মাস পর্যন্ত প্রবেশকাল হিসাবে বিবেচনা করা হবে। প্রবেশনার হিসাবে কর্মরত থাকাকালীন সময়ে কর্তৃপক্ষ আপনার কাজে সন্তুষ্ট না হলে প্রবেশনালকাল আরও ৩ মাসের জন্য বর্ধিত করা যেতে পারে এবং আপনাকে নোটিশ প্রদান করা হবে। আপনি প্রবেশকালে ১ মাসের নোটিশ প্রদান করে পদত্যাগ করতে পারবেন। আপনার প্রবেশকাল সন্তোষজনক হলে আপনার চাকুরী স্থায়ী বলে বিবেচিত হবে এবং এ ব্যাপারে আর কোন পত্র দেওয়া হবে না।</p>')}${clause(3,'','<p>প্রবেশকালে কোম্পানী যে কোন সময়ে কোন প্রকার কারণ ছাড়াই আপনাকে চাকুরী থেকে অব্যাহতি দিতে পারবে। এ ক্ষেত্রে কোন ক্ষতিপূরণ প্রদান করা হবে না।</p>')}${clause(4,'আপনার মোট বেতন হবে নিম্নরূপ :',`<table class="pf3-salary"><tbody>${['মূল মজুরী','বাড়ীভাড়া','চিকিৎসা ভাতা','যাতায়াত ভাতা','খাদ্য ভাতা'].map((label,i)=>`<tr><td>${personalFileOneBangla(i+1)})</td><td>${label}</td><td>:</td><td class="pf3-amount">${money(salary[i])}</td><td>টাকা</td></tr>`).join('')}<tr class="pf3-total"><td colspan="2">সর্বমোট</td><td>:</td><td class="pf3-amount">${money(salary[5])}</td><td>টাকা</td></tr></tbody></table>`)}${clause(5,'কাজের সময়:',' সাধারণতঃ সকাল ৮.০০ ঘটিকা হতে বিকাল ৫.০০ ঘটিকা পর্যন্ত। উক্ত অনুপস্থিতির জন্য আপনার মজুরীর বেসিক হতে কর্তন করা হবে।')}${clause(6,'মজুরী পরিশোধের তারিখ :','<p>প্রতি মাসের মজুরী পরবর্তী মাসের সাত কর্ম দিবসের মধ্যে পরিশোধ করা হবে।</p>')}${clause(7,'অতিরিক্ত সময়ের কাজের হিসাব :','<p>ক. এক দিনে আট ঘন্টা অথবা সপ্তাহে আটচল্লিশ ঘন্টার বেশি হলে কাজের সময় হিসাবে গণ্য হবে।<br>খ. অতিরিক্ত কাজের মূল মজুরীর দ্বিগুণ হারে প্রদান করা হবে।<br>অতিরিক্ত কাজের মজুরী = (মূল মজুরী × ২ × মোট অতিরিক্ত কাজের সময়) / ২০৮</p>')}</article><article class="pf3-paper pf3-second" aria-label="File-3 নিয়োগপত্র দ্বিতীয় পাতা">${clause(8,'ছুটির এবং অবকাশ :',`<p>প্রত্যেক শ্রমিক নিম্নোক্ত হারে ছুটি ভোগ করবে :</p><div class="pf3-leave-list"><span>ক. সাপ্তাহিক ছুটি</span><div>: প্রতি সপ্তাহে একদিন যা সাধারণত ${esc(c.holiday)}।</div><span>খ. উৎসব ছুটি</span><div>: বছরে পূর্ণ মজুরী সহ ১৩ দিন।</div><span>গ. বার্ষিক ছুটি</span><div>: শ্রম আইন অনুযায়ী প্রদান করা হয়।</div><span>ঘ. নৈমিত্তিক ছুটি</span><div>: বছরে পূর্ণ মজুরীসহ ১০ দিন। নৈমিত্তিক ছুটি পরবর্তী বছরে যোগ হবে না।</div><span>ঙ. অসুস্থতাজনিত ছুটি</span><div>: বছরে পূর্ণ মজুরীতে ১৪ দিন। অসুস্থতার ছুটি জমা রেখে পরবর্তী বছরে যোগ হয় না।</div><span>চ. মাতৃত্বকালীন ছুটি</span><div>: উপ-ধারা (১) এর অধীন নোটিশের ক্ষেত্রে, উক্ত উপধারার নোটিশ প্রদানের তারিখের পরের দিন হইতে প্রাপ্য প্রসূতি কল্যাণ সুবিধাসহ ১২০ (একশত বিশ) দিন পর্যন্ত কাজে অনুপস্থিত থাকিবার জন্য অনুমতি প্রদান করিবেন।<br>উপ-ধারা (২) এর অধীন নোটিশের ক্ষেত্রে, সন্তান প্রসবের তারিখ হইতে প্রাপ্য প্রসূতি কল্যাণ সুবিধাসহ ১২০ (একশত বিশ) দিন পর্যন্ত কাজে অনুপস্থিত থাকিবার জন্য অনুমতি প্রদান করিবেন।</div></div>`)}${clause(9,'চাকুরির সুবিধাদি :','<div class="pf3-benefits"><p class="pf3-benefit-line"><span class="pf3-benefit-marker">ক.</span><span>যদি তিনি ৩ (তিন) বৎসর পর্যন্ত অবিচ্ছিন্নভাবে মালিকের অধীন চাকুরি করিয়া থাকেন তাহা হইলে, ৭ (সাত) দিনের মজুরী।</span></p><p class="pf3-benefit-line"><span class="pf3-benefit-marker">খ.</span><span>যদি তিনি ৩ (তিন) বৎসরের বেশি কিন্তু ১০ (দশ) বৎসরের কম মেয়াদে মালিকের অধীন অবিচ্ছিন্ন চাকুরি করিয়া থাকেন তাহা হইলে, ১৫ (পনের) দিনের মজুরী।</span></p><p class="pf3-benefit-line"><span class="pf3-benefit-marker">গ.</span><span>যদি তিনি ১০ (দশ) বৎসর বা তদূর্ধ্ব সময় মালিকের অধীন অবিচ্ছিন্ন চাকুরি করিয়া থাকেন তাহা হইলে, ৩০ (ত্রিশ) দিনের মজুরী, অথবা গ্র্যাচুইটি, যদি প্রদেয় হয়, যাহা অধিক হইবে, প্রদান করিবেন, এবং ক্ষতিপূরণের এই অর্থ তাহার অধীন শ্রমিকের প্রদেয় অন্যান্য সুবিধার অতিরিক্ত হইবে।</span></p></div>')}${clause(10,'বিশ্রাম ও আহারের জন্য বিরতি :',' প্রতি কার্যদিবসে কমপক্ষে এক ঘন্টা।')}${clause(11,'হাজিরা/ পাঞ্চকার্ড :','<p>প্রত্যেক শ্রমিকের জন্য একটি হাজিরা কার্ড/ পাঞ্চ কার্ড ইস্যু করা থাকে। উক্ত হাজিরা কার্ডে কারখানাতে আসা যাওয়া এবং অতিরিক্ত কর্মঘন্টার সময় লিপিবদ্ধ থাকবে এবং আসা যাওয়া সময় নির্ধারিত মেশিনে পাঞ্চ করতে হবে।</p>')}${clause(12,'পরিচয় পত্র :',' কোম্পানী কর্তৃক পরিচয় পত্র প্রদান করা হবে।')}${clause(13,'বদলী :',' একই মালিকের মালিকানাধীন অন্য যে কোন ফ্যাক্টরীতে প্রয়োজনে আপনাকে সমজাতীয় কাজে বদলী করা যাবে এবং আপনি বদলীকৃত ফ্যাক্টরীতে কাজ করতে অনুগত থাকবেন।')}${clause(14,'চাকুরী হতে পদত্যাগ :','<p>প্রত্যেক স্থায়ী শ্রমিক ৬০ দিনের লিখিত নোটিশ মালিকের নিকট প্রদান করে চাকুরী থেকে পদত্যাগ করতে পারবেন, অন্যথায় নোটিশের পরিবর্তে ক্ষতিপূরণ বাবদ ৬০ দিনের মজুরী মালিককে প্রদান করতে হবে।</p>')}${clause(15,'চাকুরী হতে বরখাস্ত :','<p>সম্পত্তি চুরি, অভ্যাসগত বিলম্ব উপস্থিতি, বিনা ছুটিতে অভ্যাসগত অনুপস্থিতি, অশোভন আচরণ, কাজের বিশৃঙ্খলা সৃষ্টি, নিয়মবহির্ভূত ধ্বংসকারী কোন কাজ, ঊর্ধ্বতন কর্মকর্তার আইনানুগ বা যুক্তিসঙ্গত আদেশ পালন না করা সহ অন্যান্য যে কোন অসদাচরণের জন্য বাংলাদেশ শ্রম আইন, ২০০৬ অনুসরণ করে যে কোন শ্রমিককে বরখাস্ত করা হতে পারে।</p>')}${clause(16,'অন্যান্য সুবিধা ও বিধিনিষেধ :','<div class="pf3-leave-list pf3-other-benefits"><span>ক. উৎসব ভাতা</span><div>: আইন অনুযায়ী প্রতি বৎসরের দুই ঈদে দুইটি উৎসব বোনাস প্রদান করতে হবে।</div><span>খ. অর্জিত ছুটি টাকা</span><div>: ০১ (এক) বৎসর এই কারখানাতে চাকুরী করার পর প্রতি ১৮ (আঠার) দিন কার্যদিবসের জন্য ১ (এক) দিন করে পূর্ণ বেতনে বার্ষিক ছুটি ভোগ করিতে পারিবেন।</div><span>গ. বেতন বৃদ্ধি</span><div>: প্রতি বছর সরকারী ঘোষণা অনুযায়ী বেতন বৃদ্ধি করা হয়।</div><span>ঘ. চিকিৎসা সুবিধা</span><div>: দক্ষ চিকিৎসক কর্তৃক বিনা মূল্য ব্যবস্থাপত্র ও সামান্য ঔষধ প্রদান করা হবে।</div><span>ঙ. বিধিনিষেধ</span><div>: পান, চুইংগাম ও ধূমপান এবং তৈরী পোশাকের ক্ষতি সাধন করতে পারে এরূপ কোন বস্তু খাওয়া সম্পূর্ণ নিষিদ্ধ। উক্ত দ্রব্যাদি কারো নিকট কারখানার অভ্যন্তরে পাওয়া গেলে কর্তৃপক্ষ সর্বোচ্চ শাস্তিমূলক ব্যবস্থা গ্রহণ করতে পারবে।</div></div>')}${clause(17,'আত্মরক্ষামূলক সরঞ্জামের ব্যবহার :',' কর্মকালীন সময়ে আত্মরক্ষামূলক সরঞ্জামাদি অবশ্যই ব্যবহার করতে হবে।<p>যদি উপরোল্লিখিত শর্তে আপনি চাকুরীতে যোগদানে সম্মত থাকেন তবে এই নিয়োগ পত্রের অনুলিপিতে স্বাক্ষর করতঃ প্রশাসনিক বিভাগে জমা দেওয়ার জন্য অনুরোধ করা হল।</p>')}<div class="pf3-manager">ব্যবস্থাপক/মহা-ব্যবস্থাপক</div><p class="pf3-acceptance">আমি উপরোক্ত শর্তসমূহ বুঝলাম, স্বেচ্ছায় মেনে অদ্য ${dt} ইং তারিখে চাকুরীতে যোগদান করলাম। প্রশাসনিক বিভাগে জমা দেওয়ার জন্য অনুরোধ করা হল।</p><div class="pf3-signatures"><div>তারিখ : ${dt} ইং</div><div class="pf3-signature-fields"><span>স্বাক্ষর</span><span>:...............................</span><span>নাম</span><span>:...............................</span><span>পিতা/স্বামীর নাম</span><span>:...............................</span></div></div></article>`;}
const personalFileThreePreviousList=personalSavedList;
personalSavedList=function(folder){if(folder!=='file-3')return personalFileThreePreviousList(folder);const rows=personalCardLookup?personalCardRows():[];return `<style>.pf3-paper,.pf3-paper td{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.pf3-paper{box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto 20px;padding:30px 35px;background:white;color:black;font-size:17px;line-height:1.35}.pf3-value{color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact;font-weight:600}.pf3-date{text-align:right}.pf3-heading{position:relative;text-align:center;margin:12px 0 25px}.pf3-heading h2{font-size:30px;margin:4px 0}.pf3-heading p{font-size:16px;margin:5px 0}.pf3-heading h3,.pf3-terms-title{font-size:24px;text-align:center;text-decoration:underline;margin:15px 0 6px}.pf3-ref{position:absolute;left:0;top:8px}.pf3-identity{display:grid;grid-template-columns:110px 12px minmax(0,1fr);gap:2px}.pf3-identity>div{border-bottom:1px dotted #333}.pf3-address{display:grid;grid-template-columns:1fr 1fr;gap:2px 10px}.pf3-paper p{line-height:1.35;margin:6px 0}.pf3-clause{display:grid;grid-template-columns:28px minmax(0,1fr);gap:4px;margin:7px 0}.pf3-clause-title{font-size:18px}.pf3-clause p{margin:4px 0 0 23px}.pf3-indent{padding-left:22px}.pf3-salary{width:auto;margin:5px 0 8px 25px;font-size:18px}.pf3-salary td{padding:0 6px;border:0;white-space:normal;color:black}.pf3-paper .pf3-salary td.pf3-amount{text-align:right!important;white-space:nowrap;font-variant-numeric:tabular-nums}.pf3-total td{border-top:1px solid black;font-weight:bold}.pf3-manager{width:max-content;margin:18px 0 12px auto;border-top:1px solid black;font-weight:bold}.pf3-signatures{display:grid;grid-template-columns:1fr 220px;margin-top:114px}.pf3-second{break-before:page}@media print{body:has(.pf3-paper) #main>:not(#personalFilePrintContent){display:none!important}body:has(.pf3-paper) #main,body:has(.pf3-paper) #personalFilePrintContent{width:194mm!important;max-width:194mm!important;margin:0!important;padding:0!important;border:0!important;overflow:visible!important}.pf3-paper{width:190mm;min-height:0;margin:0 auto;padding:4mm 3mm;font-size:11pt;line-height:1.28;break-inside:avoid;page:auto}.pf3-heading{margin:2mm 0 5mm}.pf3-heading h2{font-size:22pt}.pf3-heading p{font-size:11pt}.pf3-heading h3,.pf3-terms-title{font-size:17pt;margin:3mm 0 1mm}.pf3-identity{grid-template-columns:27mm 3mm minmax(0,1fr)}.pf3-paper p{line-height:1.28;margin:1mm 0}.pf3-clause{margin:1.5mm 0;grid-template-columns:6mm minmax(0,1fr)}.pf3-clause-title{font-size:11.5pt}.pf3-paper .pf3-salary{width:max-content!important;max-width:100%!important;table-layout:auto!important;font-size:11pt;margin:1mm 0 1mm 5mm}.pf3-paper .pf3-salary td{width:auto!important;min-width:0!important;white-space:nowrap!important;text-align:left!important}.pf3-salary td{padding:0 1mm!important}.pf3-manager{margin-top:7mm}.pf3-signatures{margin-top:15mm;font-size:11pt;break-inside:avoid;page-break-inside:avoid}.pf3-second{break-before:page;page-break-before:always}}@media print{.pf3-paper,.pf3-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pf3-paper .pf3-value{color:#000!important;-webkit-text-fill-color:#000!important}}.pf3-second .pf3-clause-title{text-decoration:underline}.pf3-leave-list{display:grid;grid-template-columns:155px minmax(0,1fr);gap:4px 8px;margin:4px 0 0 22px}.pf3-benefits{margin:4px 0 0 22px}.pf3-second .pf3-benefits .pf3-benefit-line{display:grid;grid-template-columns:1.4em minmax(0,1fr);column-gap:.25em;align-items:start}.pf3-benefit-marker{white-space:nowrap}.pf3-second .pf3-benefits p{margin:4px 0 0}.pf3-other-benefits{grid-template-columns:140px minmax(0,1fr)}.pf3-signature-fields{display:grid;grid-template-columns:max-content 1fr;gap:8px 5px}.pf3-second .pf3-manager{margin-bottom:4px}.pf3-second .pf3-signatures{align-items:center}@media print{.pf3-second{font-size:10.5pt;line-height:1.18;padding:2mm 3mm}.pf3-second p{line-height:1.18;margin:1mm 0}.pf3-second .pf3-clause{margin:1.3mm 0}.pf3-second .pf3-clause-title{font-size:10.8pt}.pf3-second .pf3-clause p{margin-left:0}.pf3-second .pf3-leave-list{grid-template-columns:33mm minmax(0,1fr);gap:.7mm 1mm;margin:1mm 0 0 3mm}.pf3-second .pf3-benefits{margin:1mm 0 0 3mm}.pf3-second .pf3-benefits p{margin:1mm 0}.pf3-second .pf3-other-benefits{grid-template-columns:30mm minmax(0,1fr);margin-left:0}.pf3-second .pf3-manager{font-size:10.5pt;margin-top:2mm;margin-bottom:1mm}.pf3-second .pf3-acceptance{margin-top:2mm}.pf3-second .pf3-signatures{font-size:10.5pt;grid-template-columns:1fr 64mm;margin-top:8mm}.pf3-second .pf3-signature-fields{gap:1.5mm 1mm}}@media print{.pf3-paper{width:194mm!important;height:280mm;min-height:280mm;max-width:194mm;display:flex;flex-direction:column;justify-content:space-between;gap:0;margin:0 auto!important;padding:3mm 2mm;box-sizing:border-box;font-size:11.5pt;line-height:1.28;break-inside:avoid;page-break-inside:avoid}.pf3-paper>*{flex-shrink:0}.pf3-paper p{line-height:1.28}.pf3-paper .pf3-clause-title,.pf3-paper .pf3-salary{font-size:11.5pt}.pf3-paper.pf3-second{font-size:10.5pt;line-height:1.18;padding:3mm 2mm}.pf3-second p{line-height:1.18}.pf3-second .pf3-clause-title{font-size:10.8pt}.pf3-second .pf3-manager,.pf3-second .pf3-signatures{font-size:10.5pt}.pf3-second .pf3-signatures{margin-top:5mm}}</style>${(rows.length?rows:[null]).map(personalFileThree).join('')}`;};

;
;/* personal-file-four.js */
'use strict';
function personalFileFourAge(birth,date){const parse=s=>{const x=String(s||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).split(/[\/.-]/).map(Number);if(x.length!==3)return null;const [d,m,raw]=x,y=raw<100?2000+raw:raw;const v=new Date(Date.UTC(y,m-1,d));return v.getUTCDate()===d&&v.getUTCMonth()===m-1?v:null;};const b=parse(birth),d=parse(date)||new Date(new Date().toLocaleDateString('en-US',{timeZone:'Asia/Dhaka'}));if(!b||b>d)return '';return d.getUTCFullYear()-b.getUTCFullYear()-(d.getUTCMonth()<b.getUTCMonth()||d.getUTCMonth()===b.getUTCMonth()&&d.getUTCDate()<b.getUTCDate()?1:0);}
function personalFileFour(row){const e=row?.personalEntry||{},c=personalPrintCompany(),v=i=>esc(personalFileOneBangla(e['field-'+i]||'')),red=i=>`<span class="pf4-value">${v(i)}</span>`,date=i=>`<span class="pf4-value">${esc(personalFileOneBangla(personalReportDate(e['field-'+i]||'')))}</span>`,age=personalFileFourAge(e['field-17'],e['field-6']),address=i=>`<div class="pf4-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<div><b>${label}</b><span class="pf4-value">${esc(personalFileOneBangla(e['address-'+i+'-'+k]||''))}</span></div>`).join('')}</div>`,header=`<header class="pf4-header"><img src="Farnoor_New_Logo.png" alt="Farnoor logo"><div><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p></div></header><h3>ফরম- ১৫</h3><p class="pf4-rule">[ধারা ৩৪, ৩৬, ৩৭ ও ২৭৭ এবং বিধি ৩৪(১) ও ৩৬(৪) দ্রষ্টব্য]</p><h3 class="pf4-title">বয়স ও সক্ষমতার প্রত্যয়ন পত্র</h3><div class="pf4-doctor"><b>DR. NAZIA NAHAR SUCHONA</b><br>MBBS.PGT (GYNAE &amp; OBS)<br>MEDICAL OFFICER<br>BMDC Reg No. 67405</div>`,signatures='<footer class="pf4-signatures"><div><span>সংশ্লিষ্ট ব্যক্তির</span><br>স্বাক্ষর/টিপসহি</div><div><span>রেজিষ্টার্ড চিকিৎসকের</span><br>স্বাক্ষর</div></footer>',top=`<div class="pf4-box-heading">বয়স ও সক্ষমতার প্রত্যয়ন পত্র</div><div class="pf4-box-row">১। ক্রমিক নং &nbsp; : &nbsp; ${red(0)}</div><div class="pf4-box-row" style="text-align:center">তারিখ &nbsp; : &nbsp; ${date(6)}</div>`;
return `<article class="pf4-paper" aria-label="File-4 বয়স ও সক্ষমতার প্রত্যয়ন পত্র"><section class="pf4-copy">${header}<div class="pf4-box">${top}<div class="pf4-box-row">২। নাম &nbsp; : ${red(7)}</div><div class="pf4-box-row">৩। পিতার নাম &nbsp; : ${red(9)}</div><div class="pf4-box-row">৪। মাতার নাম &nbsp; : ${red(10)}</div><div class="pf4-box-row">৫। লিঙ্গ &nbsp; : ${red(11)}</div><div class="pf4-box-row">৬। স্থায়ী ঠিকানা ${address(15)}</div><div class="pf4-box-row">৭। অস্থায়ী/যোগাযোগের ঠিকানা : ${address(16)}</div><div class="pf4-box-row">৮। জন্মসনদ/ শিক্ষা সনদ অনুসারে<br><div class="pf4-birth">বয়স/জন্ম তারিখ &nbsp; : &nbsp; ${date(17)}</div></div><div class="pf4-box-row">৯। দৈহিক সক্ষমতা &nbsp; : ${red(30)}</div><div class="pf4-box-row pf4-mark">১০। সনাক্তকরণ চিহ্ন &nbsp; : ${red(25)}</div></div>${signatures}</section><section class="pf4-copy">${header}<div class="pf4-box">${top}<div class="pf4-box-row pf4-certify">আমি এই মর্মে প্রত্যয়ন করিতেছি যে (নাম)<div class="pf4-center pf4-value">${v(7)}</div><div>পিতা &nbsp; : ${red(9)}</div><div>মাতা &nbsp; : ${red(10)}</div><div>ঠিকানা &nbsp; :</div>${address(15)}কে আমি পরীক্ষা করিয়াছি।</div><div class="pf4-box-row">তিনি প্রতিষ্ঠানে নিযুক্ত হইতে ইচ্ছুক, এবং আমার পরীক্ষা হইতে এইরূপ পাওয়া গিয়াছে যে তাহার বয়স <b class="pf4-value">${esc(personalFileOneBangla(age))}</b> বৎসর এবং তিনি প্রতিষ্ঠানে প্রাপ্ত বয়স্ক/কিশোর হিসাবে নিযুক্ত হইবার যোগ্য।</div><div class="pf4-box-row pf4-mark">তাহার সনাক্তকরণের চিহ্নঃ &nbsp; ${red(25)}</div><div class="pf4-blank-lines"><div></div><div></div><div></div></div></div>${signatures}</section></article>`;}
const personalFileFourPreviousList=personalSavedList;
personalSavedList=function(folder){if(folder!=='file-4')return personalFileFourPreviousList(folder);const rows=personalCardLookup?personalCardRows():[];return `<style>.pf4-paper,.pf4-paper section{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.pf4-paper{position:relative;box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto;padding:70px 25px 35px;background:white;color:#000;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:56px;font-size:17px;line-height:1.35}.pf4-paper::after{content:'';position:absolute;left:50%;top:20px;bottom:20px;border-left:1px dotted #000;pointer-events:none}.pf4-copy{min-width:0;display:flex;flex-direction:column}.pf4-header{display:flex;align-items:center;gap:8px;min-height:60px}.pf4-header img{width:47px;height:62px;object-fit:contain}.pf4-header h2{font-size:22px;margin:0;letter-spacing:0}.pf4-header p{font-size:12px;margin:4px 0;line-height:1.25;border-bottom:1px solid #000;padding-bottom:4px}.pf4-copy h3{font-size:23px;text-align:center;margin:4px 0}.pf4-copy .pf4-title{font-size:22px;text-decoration:underline;margin-bottom:8px}.pf4-rule{font-size:17px;text-align:center;margin:0 0 5px;line-height:1.3}.pf4-doctor{font:16px/1.25 'Times New Roman',serif;margin:0 0 12px}.pf4-value{color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact;font-weight:bold;overflow-wrap:anywhere}.pf4-box{border:1px solid #000;flex:1;display:flex;flex-direction:column}.pf4-box-heading{font-weight:bold;font-size:20px;border-bottom:1px solid #000;padding:3px}.pf4-box-row{border-bottom:1px solid #000;padding:3px;line-height:1.4}.pf4-box-row:last-child{border:0}.pf4-address{padding:7px 12px}.pf4-address>div{display:grid;grid-template-columns:45px minmax(0,1fr);gap:4px;min-height:28px}.pf4-birth{padding:6px 0 0 12px}.pf4-mark{min-height:55px}.pf4-center{text-align:center;margin:6px 0}.pf4-certify{line-height:1.7}.pf4-blank-lines{margin-top:auto}.pf4-blank-lines>div{border-top:1px solid #000;min-height:26px}.pf4-signatures{display:flex;justify-content:space-between;gap:14px;text-align:center;margin-top:50px;font-size:15px;font-weight:bold}.pf4-signatures span{border-top:1px solid #000;padding-top:3px;display:inline-block}.pf4-paper+.pf4-paper{break-before:page}@media print{body:has(.pf4-paper) #main>:not(#personalFilePrintContent){display:none!important}body:has(.pf4-paper) #main,body:has(.pf4-paper) #personalFilePrintContent{width:194mm!important;max-width:194mm!important;padding:0!important;margin:0!important;border:0!important;overflow:visible!important}.pf4-paper{width:190mm;min-height:0;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:13mm;padding:18mm 2mm 5mm;font-size:10.5pt;line-height:1.3;break-inside:avoid;page:auto}.pf4-header{gap:2mm;min-height:16mm}.pf4-header img{width:12mm;height:16mm}.pf4-header h2{font-size:14pt}.pf4-header p{font-size:8pt}.pf4-copy h3{font-size:16pt}.pf4-copy .pf4-title{font-size:14pt}.pf4-rule{font-size:11pt}.pf4-doctor{font-size:10.5pt}.pf4-box-heading{font-size:12.5pt}.pf4-box-row{padding:1mm;line-height:1.35}.pf4-address{padding:2mm 3mm}.pf4-address>div{grid-template-columns:11mm minmax(0,1fr);min-height:7mm}.pf4-mark{min-height:14mm}.pf4-blank-lines>div{min-height:6mm}.pf4-signatures{font-size:10pt;margin-top:13mm}.pf4-certify{line-height:1.6}}@media print{.pf4-paper,.pf4-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pf4-paper .pf4-value{color:#000!important;-webkit-text-fill-color:#000!important}}</style>${(rows.length?rows:[null]).map(personalFileFour).join('')}`;};

;
;/* personal-file-five.js */
'use strict';
function personalFileFive(row){const e=row?.personalEntry||{},c=personalPrintCompany(),v=i=>esc(personalFileOneBangla(e['field-'+i]||'')),red=i=>`<b class="pf5-value">${v(i)}</b>`,dt=i=>`<b class="pf5-value">${esc(personalFileOneBangla(personalReportDate(e['field-'+i]||'')))}</b>`,addr=i=>`<div class="pf5-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<span>${label} <b class="pf5-value">${esc(personalFileOneBangla(e['address-'+i+'-'+k]||''))}</b></span>`).join('')}</div>`,num=s=>Number(String(s||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c))),year=num(e['field-40']),nomineeAge=year>0&&year<=new Date().getFullYear()?new Date().getFullYear()-year:'',age=typeof personalFileFourAge==='function'?personalFileFourAge(e['field-17'],new Date().toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'})):'',line=(n,label,value)=>`<div class="pf5-line"><span>${personalFileOneBangla(n)}।</span><div>${label} ${value}</div></div>`;
return `<article class="pf5-paper" aria-label="File-5 নমিনীর ঘোষণা ফর্ম"><header class="pf5-heading"><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p><h3>ফরম-৪১</h3><div class="pf5-photo">নমিনীর<br>সত্যায়িত<br>ছবি</div></header><p class="pf5-rule">[ধারা ১৯, ১৩১(১)(ক), ১৫৫(২), ২৩৪, ২৬৪, ২৬৫ ও ২৭৩ এবং বিধি ১১৮(১), ১৩৬, ২০২(২), ২০২(১), ২৮৯(১) ও ৩২১(১) দ্রষ্টব্য]</p><p class="pf5-subtitle">জমা ও বিভিন্ন খাতে প্রাপ্য অর্থ পরিশোধের ঘোষণা ও মনোনয়নের ফরম</p><section class="pf5-details">${line(1,'কারখানা/প্রতিষ্ঠানের নাম :',`<b class="pf5-value">${esc(c.bn)}</b>`)}${line(2,'কারখানা/প্রতিষ্ঠানের ঠিকানা :',`<b class="pf5-value">${esc(c.address)}</b>`)}${line(3,'শ্রমিকের নাম ও ঠিকানা :',`<div class="pf5-person">${red(7)}${addr(16)}</div><div class="pf5-gender">লিঙ্গ : ${red(11)}</div>`)}${line(4,'পিতা/মাতা/স্বামী/স্ত্রীর নাম :',red(9))}${line(5,'জন্ম তারিখ :',`${dt(17)} &nbsp; ইং &emsp; বয়স : <b class="pf5-value">${esc(personalFileOneBangla(age))}</b>`)}${line(6,'সনাক্তকরণ চিহ্ন (যদি থাকে):',red(25))}${line(7,'স্থায়ী ঠিকানা :',addr(15))}${line(8,'চাকরিতে নিযুক্তির তারিখ :',dt(6))}${line(9,'পদের নাম :',red(1))}</section><p class="pf5-declaration">আমি এতদ্বারা ঘোষণা করিতেছি যে, আমার মৃত্যু হইলে বা আমার অবর্তমানে, আমার অনুকূলে জমা ও বিভিন্নখাতে প্রাপ্য টাকা গ্রহণের জন্য আমি নিম্নবর্ণিত ব্যক্তিগণকে মনোনয়ন দান করিতেছি এবং নির্দেশ দিচ্ছি যে, উক্ত টাকা নিম্নবর্ণিত পদ্ধতিতে মনোনীত ব্যক্তিদের মধ্যে বণ্টন করিতে হইবে:</p><table class="pf5-table"><colgroup><col style="width:45%"><col style="width:17%"><col style="width:13%"><col style="width:19%"><col style="width:6%"></colgroup><thead><tr><th>মনোনীত ব্যক্তি বা ব্যক্তিদের নাম, ঠিকানা ও ছবি (নমিনীর ছবি ও স্বাক্ষর শ্রমিক কর্তৃক সত্যায়িত) এন আই ডি নং</th><th>সদস্যদের সহিত মনোনীত ব্যক্তিদের সম্পর্ক</th><th>বয়স</th><th colspan="2">প্রত্যেক মনোনীত ব্যক্তিকে দেয় অংশ</th></tr><tr><th>১</th><th>২</th><th>৩</th><th colspan="2">৪</th></tr></thead><tbody><tr><td>${red(36)}</td><td class="pf5-center">${red(39)}</td><td class="pf5-center pf5-value">${esc(personalFileOneBangla(nomineeAge))}</td><td>জমাখাত বকেয়া মজুরি</td><td class="pf5-center">অংশ<br>১০০%</td></tr><tr><td>${red(37)}</td><td></td><td></td><td>প্রভিডেন্ট ফান্ড</td><td class="pf5-center">নাই</td></tr><tr><td>${red(38)}</td><td></td><td></td><td>বীমা</td><td>১০০%</td></tr><tr><td></td><td></td><td></td><td>দুর্ঘটনার ক্ষতিপূরণ</td><td>আইন অনুযায়ী</td></tr><tr><td></td><td></td><td></td><td>লভ্যাংশ</td><td>ঘ/অ</td></tr><tr><td></td><td></td><td></td><td>অন্যান্য</td><td>১০০%</td></tr></tbody></table><p class="pf5-witness">প্রত্যয়ন করিতেছি যে, আমার উপস্থিতিতে জনাব &nbsp; <b class="pf5-value">${esc(personalNameChoice||'')}</b> &nbsp; লিপিবদ্ধ বিবরণ সমূহ পাঠ করিবার পর উক্ত ঘোষণা স্বাক্ষর করিতেছেন।</p><div class="pf5-worker-sign">মনোনয়ন প্রদানকারী শ্রমিকের স্বাক্ষর, টিপসহি ও তারিখ</div><footer class="pf5-footer"><div>.......................................<br>তারিখসহ মনোনীত ব্যক্তিগণের<br>স্বাক্ষর অথবা টিপসহি<br>(শ্রমিক কর্তৃক সত্যায়িত ছবি)</div><div>মালিক বা ক্ষমতাপ্রাপ্ত কর্মকর্তার স্বাক্ষর<br><br>তারিখ : ..........................................</div></footer></article>`;}
const personalFileFivePreviousList=personalSavedList;
personalSavedList=function(folder){if(folder!=='file-5')return personalFileFivePreviousList(folder);const rows=personalCardLookup?personalCardRows():[];return `<style>.pf5-paper{box-sizing:border-box;background:#fff;color:#000;width:794px;min-height:1123px;margin:0 auto;padding:42px 28px 32px;font-family:'SutonnyOMJ','Nirmala UI',sans-serif;font-size:17px;line-height:1.4}.pf5-heading{position:relative;text-align:center;padding:0 90px}.pf5-heading h2{font-size:29px;margin:0 0 4px}.pf5-heading p{font-weight:bold;font-size:20px;margin:0}.pf5-heading h3{font-size:24px;text-decoration:underline;margin:0}.pf5-photo{position:absolute;right:0;top:0;width:85px;height:76px;border:1px solid #000;display:flex;align-items:center;justify-content:center;font-size:16px;line-height:1.2}.pf5-rule{text-align:center;font-weight:bold;font-size:15px;margin:5px 0}.pf5-subtitle{text-align:center;font-weight:bold;margin:6px 0 18px}.pf5-value{color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact;font-weight:bold;overflow-wrap:anywhere}.pf5-line{display:grid;grid-template-columns:40px minmax(0,1fr);margin:3px 0}.pf5-person{display:inline-grid;grid-template-columns:190px minmax(0,1fr);width:calc(100% - 170px);vertical-align:top}.pf5-address{display:grid;grid-template-columns:1fr 1fr;gap:2px 10px}.pf5-line>div>.pf5-address{display:inline-grid;width:70%;vertical-align:top}.pf5-gender{padding-left:145px}.pf5-declaration{margin:6px 0;text-align:justify;line-height:1.6}.pf5-table{border-collapse:collapse;width:100%;table-layout:fixed;font-size:17px}.pf5-table th,.pf5-table td{border:1px solid #000;padding:3px;vertical-align:middle;overflow-wrap:anywhere}.pf5-table th,.pf5-table td{white-space:normal!important;word-break:normal;text-transform:none;letter-spacing:0;color:#000;background:#fff;font-size:inherit}.pf5-table th{font-weight:normal;line-height:1.25}.pf5-table th .pf5-value,.pf5-table td .pf5-value{color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact}.pf5-table tbody tr{height:43px}.pf5-center{text-align:center}.pf5-witness{margin:14px 0 0;line-height:1.5}.pf5-worker-sign{text-align:right;margin:65px 10px 25px 0}.pf5-footer{display:flex;justify-content:space-between;align-items:flex-end;margin-top:25px;line-height:1.4}.pf5-paper+.pf5-paper{break-before:page}@media print{body:has(.pf5-paper) #main>:not(#personalFilePrintContent){display:none!important}body:has(.pf5-paper) #main,body:has(.pf5-paper) #personalFilePrintContent{width:194mm!important;max-width:194mm!important;margin:0!important;padding:0!important;border:0!important;overflow:visible!important}.pf5-paper{width:190mm;min-height:0;padding:6mm 2mm 2mm;font-size:9.5pt;line-height:1.25;page:auto;break-inside:avoid}.pf5-heading{padding:0 23mm}.pf5-heading h2{font-size:21pt}.pf5-heading p{font-size:14pt}.pf5-heading h3{font-size:17pt}.pf5-photo{width:22mm;height:20mm;font-size:11pt}.pf5-rule{font-size:10pt}.pf5-subtitle{margin:2mm 0 5mm}.pf5-line{grid-template-columns:10mm minmax(0,1fr);margin:1mm 0}.pf5-person{grid-template-columns:43mm minmax(0,1fr);width:calc(100% - 43mm)}.pf5-gender{padding-left:38mm}.pf5-table{font-size:9.5pt}.pf5-table tbody tr{height:9mm}.pf5-table th,.pf5-table td{padding:1mm}.pf5-worker-sign{margin-top:10mm;margin-bottom:3mm}.pf5-footer{margin-top:3mm}.pf5-witness{margin-top:4mm}}@media print{.pf5-paper,.pf5-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pf5-paper .pf5-value{color:#000!important;-webkit-text-fill-color:#000!important}}.pf5-footer{padding-bottom:0}.pf5-footer>div:last-child{position:static}@media print{.pf5-worker-sign{margin-top:5mm;margin-bottom:2mm}.pf5-footer{margin-top:4mm;padding-bottom:0;break-inside:avoid;page-break-inside:avoid;align-items:flex-start}.pf5-footer>div:last-child{position:static;top:auto}}</style>${(rows.length?rows:[null]).map(personalFileFive).join('')}`;};



;
;/* personal-file-six.js */
'use strict';
function personalFileSix(row){const e=row?.personalEntry||{},c=personalPrintCompany(),v=i=>esc(personalFileOneBangla(e['field-'+i]||'')),red=i=>`<b class="pf6-value">${v(i)}</b>`,headings=['বৎসরের প্রারম্ভে জমাকৃত বার্ষিক ছুটি','বার্ষিক','নৈমিত্তিক','অসুস্থতা','প্রত্যাখ্যান বা মুলতবি রাখা হইলে প্রত্যাখ্যানের বা মুলতবির কারণ','ছুটি মঞ্জুরের তারিখ','কত দিন মঞ্জুর করা হইল','বার্ষিক ছুটি নগদায়নের সংখ্যা ও তৎ অর্থ প্রদানের তারিখ','বার্ষিক','নৈমিত্তিক','পীড়া','শ্রমিকের স্বাক্ষর','মালিক/ব্যবস্থাপকের স্বাক্ষর'];
return `<article class="pf6-paper" aria-label="File-6 ছুটির রেজিস্টার"><header class="pf6-heading"><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p></header><div class="pf6-company"><div>কারখানা বা প্রতিষ্ঠানের নাম : &emsp; <b class="pf6-value">${esc(c.bn)}</b></div><div>বিভাগ বা শাখার নাম : &emsp; <b class="pf6-value">${v(5)||v(3)}</b></div></div><div class="pf6-worker"><div>শ্রমিকের নাম : &nbsp; ${red(7)}</div><div>কার্ড নং : ${red(0)}</div><div>পদবি : &nbsp; ${red(1)}</div><div>নিয়োগের তারিখ : &nbsp; <b class="pf6-value">${esc(personalFileOneBangla(personalReportDate(e['field-6']||'')))}</b></div></div><table class="pf6-table"><colgroup>${[8,5.5,5.5,5.5,11.5,12,8,11,5.5,5.5,5.5,6.5,9].map(w=>`<col style="width:${w}%">`).join('')}</colgroup><thead><tr><th rowspan="2">${headings[0]}</th><th colspan="3">কি ধরনের ছুটি চাওয়া হইয়াছে</th><th rowspan="2">${headings[4]}</th><th rowspan="2">${headings[5]}</th><th rowspan="2">${headings[6]}</th><th rowspan="2">${headings[7]}</th><th colspan="3">অবশিষ্ট পাওনা ছুটির পরিমাণ</th><th rowspan="2">${headings[11]}</th><th rowspan="2">${headings[12]}</th></tr><tr>${[1,2,3,8,9,10].map(i=>`<th>${headings[i]}</th>`).join('')}</tr><tr>${Array.from({length:13},(_,i)=>`<th>(${personalFileOneBangla(i+1)})</th>`).join('')}</tr></thead><tbody><tr>${headings.map(()=>'<td></td>').join('')}</tr></tbody></table><footer class="pf6-footer"><p>ফরম - ৯</p><p>[ধারা ১০, ১১৫, ১১৬ ও ১১৭ এবং বিধি ২৪ ও ১০৮(১) দ্রষ্টব্য]</p></footer></article>`;}
const personalFileSixPreviousList=personalSavedList;
personalSavedList=function(folder){if(folder!=='file-6')return personalFileSixPreviousList(folder);const rows=personalCardLookup?personalCardRows():[];return `<style>.pf6-paper{box-sizing:border-box;width:1123px;min-height:794px;margin:0 auto;padding:35px 14px 20px;background:#fff;color:#000;font:18px/1.35 'SutonnyOMJ','Nirmala UI',sans-serif}.pf6-heading{text-align:center}.pf6-heading h2{font-size:34px;margin:0 0 12px}.pf6-heading p{font-size:19px;font-weight:bold;margin:0}.pf6-value{color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact;font-weight:bold;overflow-wrap:anywhere}.pf6-company{display:grid;grid-template-columns:2fr 1fr;gap:20px;margin:24px 16px 40px}.pf6-worker{display:grid;grid-template-columns:1.7fr 1fr 1.3fr 1.6fr;gap:16px;margin-bottom:22px}.pf6-table{width:100%;border-collapse:collapse;table-layout:fixed;font-size:18px}.pf6-table th,.pf6-table td{border:1px solid #000;padding:3px;white-space:normal!important;word-break:normal;overflow-wrap:anywhere;background:#fff;color:#000;text-transform:none;letter-spacing:0;font:inherit;text-align:center}.pf6-table thead tr:first-child{height:85px}.pf6-table tbody td{height:300px;vertical-align:top}.pf6-footer p{margin:22px 0 0}.pf6-paper+.pf6-paper{break-before:page}@page personalFileSixLandscape{size:A4 landscape;margin:8mm}@media print{html:has(.pf6-paper),body:has(.pf6-paper),body:has(.pf6-paper) #workspace,body:has(.pf6-paper) #main,body:has(.pf6-paper) #personalFilePrintContent,body:has(.pf6-paper) .pf6-paper{page:personalFileSixLandscape!important}body:has(.pf6-paper) #main>:not(#personalFilePrintContent){display:none!important}body:has(.pf6-paper),body:has(.pf6-paper) #workspace,body:has(.pf6-paper) #main,body:has(.pf6-paper) #personalFilePrintContent{width:280mm!important;max-width:280mm!important;margin:0!important;padding:0!important;border:0!important;overflow:visible!important;min-height:0!important;height:auto!important}.pf6-paper{width:280mm;min-height:0;padding:4mm 1mm 0;font-size:11pt;line-height:1.3;page:auto;break-inside:avoid}.pf6-heading h2{font-size:23pt;margin-bottom:4mm}.pf6-heading p{font-size:12pt}.pf6-company{margin:4mm 3mm 7mm;gap:5mm}.pf6-worker{gap:4mm;margin-bottom:6mm}.pf6-table{font-size:11pt}.pf6-table th,.pf6-table td{padding:0.7mm!important}.pf6-table thead tr:first-child{height:23mm}.pf6-table tbody td{height:60mm}.pf6-footer p{margin-top:3mm}}@media print{.pf6-paper,.pf6-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pf6-paper .pf6-value{color:#000!important;-webkit-text-fill-color:#000!important}}</style>${(rows.length?rows:[null]).map(personalFileSix).join('')}`;};

// Print File-6 in an isolated document so unrelated page rules cannot force portrait.
function personalFileSixPrint(){
 const content=document.getElementById('personalFilePrintContent');if(!content?.querySelector('.pf6-paper'))return;
 document.getElementById('personalFileSixPrintFrame')?.remove();
 const frame=document.createElement('iframe');frame.id='personalFileSixPrintFrame';frame.title='File-6 Print';frame.style.cssText='position:fixed;left:-10000px;top:0;width:1123px;height:794px;border:0';
 const styles=Array.from(content.querySelectorAll('style')).map(s=>s.textContent).join('\n');
 const papers=Array.from(content.querySelectorAll('.pf6-paper')).map(p=>p.outerHTML).join('');
 frame.onload=async()=>{const win=frame.contentWindow;if(!win)return;await win.document.fonts.ready;win.focus();win.print();};
 frame.srcdoc='<!doctype html><html lang="bn"><head><meta charset="utf-8"><title>File-6</title><style>'+styles+'\n@page{size:A4 landscape;margin:8mm}@page personalFileSixLandscape{size:A4 landscape;margin:8mm}html,body{margin:0;padding:0;background:white;page:personalFileSixLandscape}.pf6-paper{margin:0;width:280mm;box-sizing:border-box}@media print{html,body,.pf6-paper{page:personalFileSixLandscape!important}body{width:280mm!important}.pf6-paper{break-after:page}.pf6-paper:last-child{break-after:auto}}@media print{.pf6-paper,.pf6-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pf6-paper .pf6-value{color:#000!important;-webkit-text-fill-color:#000!important}}</style></head><body>'+papers+'</body></html>';
 document.body.append(frame);
}
document.getElementById('main').addEventListener('click',event=>{if(!event.target.closest('#personalFormPrint')||!document.querySelector('.pf6-paper'))return;event.preventDefault();event.stopImmediatePropagation();if(!FarnoorAccess.canAction('admin-documents','print'))return toast('Print permission is required.');personalFileSixPrint();},true);


;
;/* personal-file-seven.js */
'use strict';
// Use a separate portrait document so print settings from other forms cannot affect File-7.
function personalFileSevenPrint(){
 const content=document.getElementById('personalFilePrintContent');if(!content?.querySelector('.pf7-paper'))return;
 document.getElementById('personalFileSevenPrintFrame')?.remove();
 const frame=document.createElement('iframe');frame.id='personalFileSevenPrintFrame';frame.title='File-7 A4 Portrait Print';frame.style.cssText='position:fixed;left:-10000px;top:0;width:794px;height:1123px;border:0';
 const styles=Array.from(content.querySelectorAll('style')).map(style=>style.textContent).join('\n');
 const papers=Array.from(content.querySelectorAll('.pf7-paper')).map(paper=>paper.outerHTML).join('');
 frame.onload=async()=>{const win=frame.contentWindow;if(!win)return;await win.document.fonts.ready;win.focus();win.print();};
 frame.srcdoc='<!doctype html><html lang="en"><head><meta charset="utf-8"><title>File-7</title><style>'+styles+'\n@page{size:210mm 297mm;margin:8mm}@page personalFileSevenPortrait{size:210mm 297mm;margin:8mm}html,body{margin:0;padding:0;background:white;page:personalFileSevenPortrait}body{width:194mm}.pf7-paper{box-sizing:border-box;margin:0 auto;width:190mm;min-height:0}@media print{html,body,.pf7-paper{page:personalFileSevenPortrait!important}body{width:194mm!important}.pf7-paper{break-after:page;page-break-after:always}.pf7-paper:last-child{break-after:auto;page-break-after:auto}}@media print{.pf7-paper,.pf7-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pf7-paper .pf7-value{color:#000!important;-webkit-text-fill-color:#000!important}}</style></head><body>'+papers+'</body></html>';
 document.body.append(frame);
}
document.getElementById('main').addEventListener('click',event=>{if(!event.target.closest('#personalFormPrint')||!document.getElementById('personalFilePrintContent')?.querySelector('.pf7-paper'))return;event.preventDefault();event.stopImmediatePropagation();if(!FarnoorAccess.canAction('admin-documents','print'))return toast('Print permission is required.');personalFileSevenPrint();},true);
function personalFileSeven(row){const e=row?.personalEntry||{},c=personalPrintCompany(),v=i=>esc(e['field-'+i]||''),red=i=>`<span class="pf7-value">${v(i)}</span>`,date=esc(personalReportDate(e['field-6']||'')),rawSalary=String(e['field-22']||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replace(/[,\s]/g,''),salary=rawSalary&&Number.isFinite(Number(rawSalary))?Number(rawSalary).toLocaleString('en-US'):v(22),headings=['SL','Date','Promotion/<br>Increment','Designation','Section','Increment','Salary<br>Re- Fixed','Date Of<br>Effect','Sig','Remarks'];
return `<article class="pf7-paper" aria-label="File-7 Personal Information"><header class="pf7-heading"><h2>${esc(personalCompanyChoice||'FARNOOR GARMENTS LTD')}</h2><p>${esc(c.en)}</p><h3>Personal Information</h3></header><table class="pf7-information"><colgroup><col style="width:26%"><col style="width:38%"><col style="width:12%"><col style="width:24%"></colgroup><tbody><tr><th>Name</th><td colspan="3">${red(8)}</td></tr><tr><th>Card No/ Staff No</th><td colspan="3">${red(0)}</td></tr><tr><th>ID No.</th><td colspan="3">${red(0)}</td></tr><tr><th>Designation</th><td colspan="3">${red(2)}</td></tr><tr><th>Section</th><td colspan="3">${red(4)}</td></tr><tr><th>Salary</th><td><span class="pf7-value">${salary}</span></td><th>Effective</th><td><span class="pf7-value">${date}</span></td></tr><tr><th>Date Of Joining</th><td colspan="3"><span class="pf7-value">${date}</span></td></tr></tbody></table><h3 class="pf7-promotion-title">Promotion / Increment</h3><table class="pf7-register"><colgroup>${[5,11,11,12,10,10,10,10,10,11].map(w=>`<col style="width:${w}%">`).join('')}</colgroup><thead><tr>${headings.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${Array.from({length:15},(_,i)=>`<tr><td>${i+1}</td>${Array.from({length:9},()=>'<td></td>').join('')}</tr>`).join('')}</tbody></table></article>`;}
const personalFileSevenPreviousList=personalSavedList;
personalSavedList=function(folder){if(folder!=='file-7')return personalFileSevenPreviousList(folder);const rows=personalCardLookup?personalCardRows():[];return `<style>.pf7-paper{box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto;padding:36px 24px 18px;background:white;color:#000;font:17px/1.2 'Times New Roman','Nirmala UI',serif}.pf7-heading{text-align:center}.pf7-heading h2{font-size:27px;margin:0 0 3px}.pf7-heading p{font-size:17px;font-weight:bold;margin:0}.pf7-heading h3{font-size:25px;text-decoration:underline;margin:6px 0 14px}.pf7-paper table{border-collapse:collapse;table-layout:fixed;background:white;color:black}.pf7-paper th,.pf7-paper td{border:1px solid #000;padding:3px!important;white-space:normal!important;overflow-wrap:anywhere;letter-spacing:0;text-transform:none;background:white;color:black;font:inherit}.pf7-information{width:84%;margin:0 auto}.pf7-information th{text-align:left;font-weight:bold}.pf7-information .pf7-value{font-family:Arial,'Nirmala UI',sans-serif;font-weight:bold;color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact;font-size:18px}.pf7-promotion-title{text-align:center;font-size:25px;margin:18px 0 10px}.pf7-register{width:100%;font-size:15px}.pf7-register th{text-align:center;font-weight:bold}.pf7-register td{text-align:center;height:38px}.pf7-paper+.pf7-paper{break-before:page}@page personalFileSevenPortrait{size:A4 portrait;margin:8mm}@media print{html:has(.pf7-paper),body:has(.pf7-paper),body:has(.pf7-paper) #workspace,body:has(.pf7-paper) #main,body:has(.pf7-paper) #personalFilePrintContent{page:personalFileSevenPortrait!important}body:has(.pf7-paper) #main>:not(#personalFilePrintContent){display:none!important}body:has(.pf7-paper) #main,body:has(.pf7-paper) #personalFilePrintContent{width:194mm!important;max-width:194mm!important;margin:0!important;padding:0!important;border:0!important;overflow:visible!important}.pf7-paper{width:190mm;min-height:0;padding:5mm 1mm 0;font-size:11pt;line-height:1.15;page:personalFileSevenPortrait!important;break-inside:avoid}.pf7-heading h2{font-size:21pt}.pf7-heading p{font-size:12pt}.pf7-heading h3{font-size:18pt;margin:2mm 0 4mm}.pf7-paper th,.pf7-paper td{padding:0.8mm!important}.pf7-information .pf7-value{font-size:12pt}.pf7-promotion-title{font-size:18pt;margin:5mm 0 3mm}.pf7-register{font-size:10pt}.pf7-register td{height:9mm}}@media print{.pf7-paper,.pf7-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pf7-paper .pf7-value{color:#000!important;-webkit-text-fill-color:#000!important}}</style>${(rows.length?rows:[null]).map(personalFileSeven).join('')}`;};

;
;/* personal-staff-three.js */
'use strict';
// Staff-3 shares File-3 content and print layout so both stay in sync.
function personalStaffThreeSalary(value){return personalFileThreeSalary(value);}
function personalStaffThree(row){return personalFileThree(row).replaceAll('pf3-','ps3-').replaceAll('File-3','Staff-3');}
const personalStaffThreePreviousList=personalSavedList;
personalSavedList=function(folder){if(folder!=='staff-3')return personalStaffThreePreviousList(folder);return personalStaffThreePreviousList('file-3').replaceAll('pf3-','ps3-').replaceAll('File-3','Staff-3');};

;
;/* personal-electrican.js */
'use strict';
function personalElectricanAge(birth,date){const parse=s=>{const x=String(s||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).split(/[\/.-]/).map(Number);if(x.length!==3)return null;const [d,m,raw]=x,y=raw<100?2000+raw:raw;const v=new Date(Date.UTC(y,m-1,d));return v.getUTCDate()===d&&v.getUTCMonth()===m-1?v:null;};const b=parse(birth),d=parse(date)||new Date(new Date().toLocaleDateString('en-US',{timeZone:'Asia/Dhaka'}));if(!b||b>d)return '';return d.getUTCFullYear()-b.getUTCFullYear()-(d.getUTCMonth()<b.getUTCMonth()||d.getUTCMonth()===b.getUTCMonth()&&d.getUTCDate()<b.getUTCDate()?1:0);}
function personalElectrican(row){const e=row?.personalEntry||{},c=personalPrintCompany(),v=i=>esc(personalFileOneBangla(e['field-'+i]||'')),red=i=>`<span class="pe-value">${v(i)}</span>`,date=i=>`<span class="pe-value">${esc(personalFileOneBangla(personalReportDate(e['field-'+i]||'')))}</span>`,age=personalElectricanAge(e['field-17'],e['field-6']),address=i=>`<div class="pe-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<div><b>${label}</b><span class="pe-value">${esc(personalFileOneBangla(e['address-'+i+'-'+k]||''))}</span></div>`).join('')}</div>`,header=`<header class="pe-header"><img src="Farnoor_New_Logo.png" alt="Farnoor logo"><div><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p></div></header><h3>ফরম- ২৬</h3><p class="pe-rule">[ধারা ৭৯ এবং বিধি ৬৮(৪) দ্রষ্টব্য]</p><h3 class="pe-title">স্বাস্থ্য পরীক্ষা ও সক্ষমতার প্রত্যয়ন পত্র</h3><div class="pe-doctor"><b>DR. NAZIA NAHAR SUCHONA</b><br>MBBS.PGT (GYNAE &amp; OBS)<br>MEDICAL OFFICER<br>BMDC Reg No. 67405</div>`,signatures='<footer class="pe-signatures"><div><span>সংশ্লিষ্ট ব্যক্তির</span><br>স্বাক্ষর/টিপসহি</div><div><span>রেজিষ্টার্ড চিকিৎসকের</span><br>স্বাক্ষর</div></footer>',top=`<div class="pe-box-heading">বয়স ও সক্ষমতার প্রত্যয়ন পত্র</div><div class="pe-box-row">১। ক্রমিক নং &nbsp; : &nbsp; ${red(0)}</div><div class="pe-box-row" style="text-align:center">তারিখ &nbsp; : &nbsp; ${date(6)}</div>`;
return `<article class="pe-paper" aria-label="Electrican বয়স ও সক্ষমতার প্রত্যয়ন পত্র"><section class="pe-copy">${header}<div class="pe-box">${top}<div class="pe-box-row">২। নাম &nbsp; : ${red(7)}</div><div class="pe-box-row">৩। পিতার নাম &nbsp; : ${red(9)}</div><div class="pe-box-row">৪। মাতার নাম &nbsp; : ${red(10)}</div><div class="pe-box-row">৫। লিঙ্গ &nbsp; : ${red(11)}</div><div class="pe-box-row">৬। স্থায়ী ঠিকানা ${address(15)}</div><div class="pe-box-row">৭। অস্থায়ী/যোগাযোগের ঠিকানা : ${address(16)}</div><div class="pe-box-row">৮। জন্মসনদ/ শিক্ষা সনদ অনুসারে<br><div class="pe-birth">বয়স/জন্ম তারিখ &nbsp; : &nbsp; ${date(17)}</div></div><div class="pe-box-row">৯। দৈহিক সক্ষমতা &nbsp; : ${red(30)}</div><div class="pe-box-row pe-mark">১০। সনাক্তকরণ চিহ্ন &nbsp; : ${red(25)}</div></div>${signatures}</section><section class="pe-copy">${header}<div class="pe-box">${top}<div class="pe-box-row pe-certify">আমি এই মর্মে প্রত্যয়ন করিতেছি যে (নাম)<div class="pe-center pe-value">${v(7)}</div><div>পিতা &nbsp; : ${red(9)}</div><div>মাতা &nbsp; : ${red(10)}</div><div>ঠিকানা &nbsp; :</div>${address(15)}কে আমি পরীক্ষা করিয়াছি।</div><div class="pe-box-row">তিনি প্রতিষ্ঠানে বিধি ৬৮ এর তালিকাভুক্ত <b class="pe-value">${v(1)}</b> কাজে নিযুক্ত রহিয়াছেন এবং পরীক্ষা হইতে এইরূপ পাওয়া গিয়াছে যে তাহার বয়স <b class="pe-value">${esc(personalFileOneBangla(age))}</b> বৎসর এবং তিনি প্রতিষ্ঠানের প্রাপ্ত বয়স্ক হিসাবে যোগ্য/উক্ত কাজে নিযুক্ত থাকিবার জন্য সক্ষম/অক্ষম।<br>তিনি <span class="pe-illness"></span> রোগে ভুগিতেছেন (যদি থাকে)</div><div class="pe-box-row pe-mark">তাহার সনাক্তকরণের চিহ্নঃ &nbsp; ${red(25)}</div><div class="pe-blank-lines"><div></div><div></div><div></div></div></div>${signatures}</section></article>`;}
const personalElectricanPreviousList=personalSavedList;
personalSavedList=function(folder){if(folder!=='electrican')return personalElectricanPreviousList(folder);const rows=personalCardLookup?personalCardRows():[];return `<style>.pe-paper,.pe-paper section{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.pe-paper{position:relative;box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto;padding:70px 25px 35px;background:white;color:#000;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:56px;font-size:17px;line-height:1.35}.pe-paper::after{content:'';position:absolute;left:50%;top:20px;bottom:20px;border-left:1px dotted #000;pointer-events:none}.pe-copy{min-width:0;display:flex;flex-direction:column}.pe-header{display:flex;align-items:center;gap:8px;min-height:60px}.pe-header img{width:47px;height:62px;object-fit:contain}.pe-header h2{font-size:22px;margin:0;letter-spacing:0}.pe-header p{font-size:12px;margin:4px 0;line-height:1.25;border-bottom:1px solid #000;padding-bottom:4px}.pe-copy h3{font-size:23px;text-align:center;margin:4px 0}.pe-copy .pe-title{font-size:22px;text-decoration:underline;margin-bottom:8px}.pe-rule{font-size:17px;text-align:center;margin:0 0 5px;line-height:1.3}.pe-doctor{font:16px/1.25 'Times New Roman',serif;margin:0 0 12px}.pe-value{color:#5b9bd5!important;print-color-adjust:exact;-webkit-print-color-adjust:exact;font-weight:bold;overflow-wrap:anywhere}.pe-box{border:1px solid #000;flex:1;display:flex;flex-direction:column}.pe-box-heading{font-weight:bold;font-size:20px;border-bottom:1px solid #000;padding:3px}.pe-box-row{border-bottom:1px solid #000;padding:3px;line-height:1.4}.pe-box-row:last-child{border:0}.pe-address{padding:7px 12px}.pe-address>div{display:grid;grid-template-columns:45px minmax(0,1fr);gap:4px;min-height:28px}.pe-birth{padding:6px 0 0 12px}.pe-mark{min-height:55px}.pe-center{text-align:center;margin:6px 0}.pe-certify{line-height:1.7}.pe-illness{display:inline-block;min-width:60px}.pe-blank-lines{margin-top:auto}.pe-blank-lines>div{border-top:1px solid #000;min-height:26px}.pe-signatures{display:flex;justify-content:space-between;gap:14px;text-align:center;margin-top:50px;font-size:15px;font-weight:bold}.pe-signatures span{border-top:1px solid #000;padding-top:3px;display:inline-block}.pe-paper+.pe-paper{break-before:page}@media print{body:has(.pe-paper) #main>:not(#personalFilePrintContent){display:none!important}body:has(.pe-paper) #main,body:has(.pe-paper) #personalFilePrintContent{width:194mm!important;max-width:194mm!important;padding:0!important;margin:0!important;border:0!important;overflow:visible!important}.pe-paper{width:190mm;min-height:0;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:13mm;padding:18mm 2mm 5mm;font-size:10.5pt;line-height:1.3;break-inside:avoid;page:auto}.pe-header{gap:2mm;min-height:16mm}.pe-header img{width:12mm;height:16mm}.pe-header h2{font-size:14pt}.pe-header p{font-size:8pt}.pe-copy h3{font-size:16pt}.pe-copy .pe-title{font-size:14pt}.pe-rule{font-size:11pt}.pe-doctor{font-size:10.5pt}.pe-box-heading{font-size:12.5pt}.pe-box-row{padding:1mm;line-height:1.35}.pe-address{padding:2mm 3mm}.pe-address>div{grid-template-columns:11mm minmax(0,1fr);min-height:7mm}.pe-mark{min-height:14mm}.pe-blank-lines>div{min-height:6mm}.pe-signatures{font-size:10pt;margin-top:13mm}.pe-certify{line-height:1.6}}@media print{.pe-paper,.pe-paper *{color:#000!important;-webkit-text-fill-color:#000!important;text-shadow:none!important}.pe-paper .pe-value{color:#000!important;-webkit-text-fill-color:#000!important}}</style>${(rows.length?rows:[null]).map(personalElectrican).join('')}`;};

;
;/* admin-maternity.js */
'use strict';
const maternityFileButtons=[
 ['calculation-month','Calculatin Month','▦','#dcecff','#24558b'],
 ['first-payment','1st Payment','①','#d9f3e6','#166348'],
 ['second-payment','2nd Payment','②','#eee2ff','#7042a1']
];
let maternityFileSelected='',maternityCardLookup='',maternityCardText='',maternityCompanyChoice='FARNOOR GARMENTS LTD',maternityNameChoice='',maternityPrintSubmitted=false;
function maternityCardKey(value){return String(value??'').normalize('NFKC').trim().toLocaleLowerCase().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));}
function maternityCardRows(card=maternityCardLookup){return (state.records['admin-documents']||[]).filter(row=>row.maternityBenefit===true&&(!card||maternityCardKey(row.maternityBenefitEntry?.cardNo||row.reference)===maternityCardKey(card)));}
function maternityCardCount(folder){return maternityCardLookup?maternityCardRows().filter(row=>row.personalFolder===folder).length:0;}
function maternityCardLookupForm(){const options=(items,current)=>items.map(item=>`<option value="${esc(item)}"${item===current?' selected':''}>${esc(item)}</option>`).join('');return `<form id="maternityCardLookupForm" style="display:flex;flex-wrap:wrap;align-items:end;justify-content:center;gap:10px;margin:25px auto 20px"><label style="display:grid;gap:4px;width:170px">ID No.<input id="maternityCardLookup" aria-label="ID No." placeholder="Card No." maxlength="120" autocomplete="off" value="${esc(maternityCardText)}"></label><label style="display:grid;gap:4px;min-width:240px">Company<select id="maternityCompanyChoice" aria-label="Company"><option value="">Select company</option>${options(['FARNOOR GARMENTS LTD','FARNOOR GARMENTS LTD. UNIT-2'],maternityCompanyChoice)}</select></label><button type="submit" class="primary">Save</button></form>`;}
const maternityEntryFields=[
 'কার্ড নং','পদবী বাংলা','পদবী ইংলিশ','সেকশন বাংলা','সেকশন ইংলিশ','লাইন','যোগদানের তারিখ',
 'নাম বাংলা','নাম ইংলিশ','পিতার নাম','মাতার নাম','লিঙ্গ','স্বামী/স্ত্রীর নাম','স্বামী/স্ত্রীর (বয়স)','স্বামী/স্ত্রীর (পেশা)',
 {title:'স্থায়ী ঠিকানা:',fields:['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ']},
 {title:'বর্তমান ঠিকানা:',fields:['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ']},
 'জন্ম তারিখ','জন্ম সাল','শিক্ষাগত যোগ্যতা','নিজের মোবাইল নং','অভিজ্ঞতা','প্রস্তাবিত বেতন','রক্তের গ্রুপ','জাতীয় আইডি নং',
 'শারীরিক শনাক্তকরণ চিহ্ন','উচ্চতা','ভাইয়ের সংখ্যা','বোনের সংখ্যা','নিজ অবস্থান','দৈহিক সক্ষমতা',
 {children:true,title:'সন্তানাদির বিবরণ:'},
 'পূর্ববর্তী প্রতিষ্ঠানের চাকুরীর বিবরণ','জাতীয়তা','ধর্ম','পরিচিত বিশিষ্ট ব্যক্তিবর্গ','নমিনীর নাম','নমিনীর ঠিকানা',
 'নমিনীর এন.আই.ডি','নমিনীর সম্পর্ক','নমিনীর জন্ম সাল'
];
const maternityEntryOptions={"field-1":["সিঃ সুইং অপারেটর","সুইং অপারেটর","জুনিয়র সুইং অপারেটর","সহকারী সুইং অপারেটর","লাইন আয়রন ম্যান","ইনপুটম্যান","সিঃ কাটারম্যান","কাটারম্যান","জুনিয়র কাটারম্যান","সাধারণ কাটারম্যান","সহকারী কাটারম্যান","সিঃ কোয়াঃ ইন্সঃ","কোয়াঃ ইন্সঃ","জুনিয়র কোয়াঃ ইন্সঃ","সাধারণ কোয়াঃ ইন্সঃ","সহকারী কোয়াঃ ইন্সঃ","পলিওম্যান","জুনিয়র পলিওম্যান","সাধারণ পলিওম্যান","সহকারী পলিওম্যান","প্যাকিংম্যান","জুনিয়র প্যাকিংম্যান","সাধারণ প্যাকিংম্যান","সহকারী প্যাকিংম্যান","ফোল্ডিংম্যান","জুনিয়র ফোল্ডিংম্যান","সাধারণ ফোল্ডিংম্যান","সহকারী ফোল্ডিংম্যান","ফিনিশিং আয়রন ম্যান","ফিনিশিং সহকারী","সূতা ঝাড়া সহকারী","লাইনচীফ","লাইন ইনচার্জ","সুপারভাইজার","ড্রাইভার","নার্স","চেকার","স্টোর লেবার","ডাক্তার","সেফটি অফিসার","ক্লিনার","সিকিউরিটি গার্ড","স্যাম্পলম্যান"],"field-2":["Sr. Sewing Operator","Sewing Operator","Jr. Sewing Operator","Ast. Sewing Operator","Line Ironman","Input Man","Sr.Cutter man","Cutter man","Jr. Cutter man","Gen. Cutter man","Ast. Cutter man","Sr. Q/I","Q/I","Jr. Q.I.","General Q.I.","Ast. Q.I.","Poly Woman","Jr. Poly Women","General. Poly Women","Ast. Poly Women","Packingman","Jr. Packingman","General Packingman","Ast. Packingman","Foldingman","Jr. Foldingman","General Foldingman","Ast. Foldingman","Finishing Ironman","Ast. Finishing","Line chief","Line Incharge","Supervisor","Driver","Nurse","Checker","Store Labour","Doctor","Safety Officer","Cleaner","Security Guard","Samplman"],"field-3":["লাইন-১","লাইন-২","লাইন-৩","লাইন-৪","লাইন-৫","সুইং","কাটিং","প্যাকিং","ফিনিশিং","কোয়ালিটি","এডমিন","মার্চেন্ডাইজিং","স্যাম্পল","স্টোর","মেকানিক্যাল","ইলেকট্রিক্যাল","একাউন্টস"],"field-4":["Line-1","Line-2","Line-3","Line-4","Line-5","Sewing","Cutting","Packing","Quality","Finishing","Admin","Merchandising","Samleman","Store","Mechanical","Electrical","Accounts"],"field-5":["সইং লাইন-১","সইং লাইন-২","সইং লাইন-৩","সইং লাইন-৪","সইং লাইন-৫"]};
const maternityEntryDraft={};
let maternityEntryId=null,maternityEntryFolder='file-1',maternityEntryBusy=false,maternityPendingRecord=null;
function maternityEntryForm(){
 const row=(label,key)=>{const value=maternityEntryDraft[key]||'',options=maternityEntryOptions[key];const control=`<input id="maternity-${key}" data-maternity-field="${key}" value="${esc(value)}" autocomplete="off" ${options?`data-maternity-choice="true" aria-autocomplete="list" aria-expanded="false" aria-controls="maternity-options-${key}"`:''} ${/তারিখ/.test(label)?'placeholder="DD/MM/YYYY"':''}>${options?`<div class="maternity-suggestions" id="maternity-options-${key}" role="listbox" hidden></div>`:''}`;return `<div class="maternity-entry-row"><label for="maternity-${key}">${esc(label)}</label><div class="maternity-choice-wrap">${control}</div></div>`;};
 return `<style>.maternity-choice-wrap{position:relative;min-width:0}.maternity-suggestions{position:absolute;left:0;right:0;top:100%;z-index:50;max-height:240px;overflow:auto;background:white;border:1px solid #639b85;border-radius:6px;box-shadow:0 8px 22px #183b3426}.maternity-suggestions[hidden]{display:none}.maternity-suggestions button{display:block;width:100%;text-align:left;border:0;border-radius:0;background:white;color:#183e31;padding:10px 12px;font-size:16px}.maternity-suggestions button:hover,.maternity-suggestions button[aria-selected="true"]{background:#d8eee5}.maternity-entry-form{max-width:920px;margin:auto}.maternity-entry-row{display:grid;grid-template-columns:minmax(150px,32%) minmax(0,1fr);align-items:center;gap:16px;padding:7px 0;border-bottom:1px solid #e4eee8}.maternity-entry-row label{text-align:left;font-size:16px;color:#234b40}.maternity-entry-row input,.maternity-entry-row select{width:100%;min-height:39px;font-size:17px}.maternity-entry-form h4{margin:24px 0 6px;padding:10px;background:#e5f2ed;color:#185b43;border-radius:7px}.maternity-entry-children input{min-width:65px;width:100%;font-size:16px}.maternity-entry-children th{font-size:14px}.maternity-entry-children td{padding:7px}@media(max-width:520px){.maternity-entry-row{grid-template-columns:minmax(120px,42%) minmax(0,1fr);gap:8px}.maternity-entry-row label{font-size:14px}}</style><form class="maternity-entry-form" aria-label="Maternity File New Entry" onsubmit="return false">${maternityEntryFields.map((field,index)=>typeof field==='string'?row(field,'field-'+index)+(index===20?row('ফ্যামেলী অন্য জনের মোবাইল নং','family-mobile'):''):field.children?`<h4>${field.title}</h4><div class="table-wrap"><table class="maternity-entry-children"><thead><tr><th>ক্রমিক নং</th><th>নাম</th><th>বয়স</th><th>লিঙ্গ</th></tr></thead><tbody>${Array.from({length:5},(_,i)=>`<tr><td>${i+1}</td>${['নাম','বয়স','লিঙ্গ'].map((label,col)=>{const key='child-'+i+'-'+col;return `<td><input aria-label="সন্তান ${i+1} ${label}" data-maternity-field="${key}" value="${esc(maternityEntryDraft[key]||'')}" autocomplete="off"></td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`:`<h4>${field.title}</h4>${field.fields.map((label,col)=>row(label,'address-'+index+'-'+col)).join('')}`).join('')}<div style="display:flex;justify-content:flex-end;align-items:center;gap:12px;margin-top:22px"><button type="button" class="primary" id="maternitySave" data-page-action-required="edit" ${maternityEntryBusy?'disabled':''}>${maternityEntryBusy?'Saving…':'Save'}</button></div></form>`;
}
function maternityOptionMatches(key,value){const norm=text=>String(text).normalize('NFKC').trim().toLocaleLowerCase().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));const query=norm(value);return [...query].length<2?[]:(maternityEntryOptions[key]||[]).filter(option=>norm(option).includes(query));}
$('#main').addEventListener('input',event=>{const input=event.target,key=input.dataset.maternityField;if(!key)return;maternityEntryDraft[key]=input.value;if(maternityEntryOptions[key])maternityShowChoices(input);});
const maternityFileRenderPage=renderPage;
renderPage=function(...args){
 if(activePage.startsWith('admin-maternity-form-')){renderMaternityPrintFile();return;}

 if(activePage==='admin-maternity-new-entry'){$('#main').innerHTML=heading('Admin','New Entry','')+'<section class="panel">'+maternityEntryForm()+'</section>';if(typeof applyActionControls==='function')applyActionControls();return;}
 if(activePage==='admin-maternity-entry-report'){renderMaternityEntryReport();return;}
 if(!['admin-maternity-file','admin-maternity-print'].includes(activePage))return maternityFileRenderPage.apply(this,args);
 if(activePage==='admin-maternity-file'){$('#main').innerHTML=heading('Admin','Maternity File','');return;}
 $('#main').innerHTML=maternityCardLookupForm()+(maternityPrintSubmitted?'<section class="panel" aria-label="Selected company and name">'+maternityPrintCompanyInfo()+'</section>':'');
 if(typeof applyActionControls==='function')applyActionControls();
};
$('#main').addEventListener('click',event=>{
 const button=event.target.closest('[data-maternity-file]');
 if(!button||activePage!=='admin-maternity-print')return;
 if(button.dataset.maternityFile==='new'){maternityCardLookup='';maternityCardText='';}if(button.dataset.maternityFile==='new'&&maternityFileSelected!=='new'&&maternityEntryId){for(const key of Object.keys(maternityEntryDraft))delete maternityEntryDraft[key];maternityEntryId=null;}maternityFileSelected=button.dataset.maternityFile;maternityCardLookup=maternityCardText.trim();goPage('admin-maternity-form-'+maternityFileSelected);
});

function maternitySavedList(folder){
 const rows=maternityCardRows().filter(r=>r.personalFolder===folder);
 return '<div class="table-wrap"><table><thead><tr><th>Card No.</th><th>Name</th><th>Action</th></tr></thead><tbody>'+rows.map(r=>'<tr><td>'+esc(r.reference)+'</td><td>'+esc(r.name)+'</td><td><button data-maternity-open="'+esc(r.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="3">No saved entries.</td></tr>')+'</tbody></table></div>';
}
$('#main').addEventListener('change',event=>{if(event.target.id==='maternityFolder')maternityEntryFolder=event.target.value;if(event.target.dataset.maternityField)maternityEntryDraft[event.target.dataset.maternityField]=event.target.value;});
$('#main').addEventListener('keydown',event=>{
 if(!['admin-maternity-file','admin-maternity-new-entry'].includes(activePage)||!event.target.matches('[data-maternity-field]')||event.isComposing||event.altKey||event.ctrlKey||event.metaKey||!['Enter','ArrowUp','ArrowDown'].includes(event.key))return;
 if(event.target.list?.options.length&&event.key!=='Enter')return;
 event.preventDefault();const inputs=[...$('#main').querySelectorAll('[data-maternity-field]')],index=inputs.indexOf(event.target),target=inputs[index+(event.key==='ArrowUp'?-1:1)];
 if(target){target.focus();if(typeof target.select==='function')target.select();}else if(event.key==='Enter'&&index===inputs.length-1)$('#maternitySave').focus();
});
async function maternitySaveEntry(){
 if(maternityEntryBusy)return;
 if(!FarnoorAccess.canAction('admin-documents','edit'))return toast('Documents edit permission is required.');
 try{for(const key of ['field-6','field-17'])if(maternityEntryDraft[key]?.trim())maternityEntryDraft[key]=normalizeDate(maternityEntryDraft[key]);}catch(error){toast(error.message);return;}
 const card=(maternityEntryDraft['field-0']||'').trim(),name=(maternityEntryDraft['field-7']||maternityEntryDraft['field-8']||'').trim();
 if(!card||!name)return toast('কার্ড নং ও নাম লিখুন।');
 if(card.length>120||name.length>200||Object.values(maternityEntryDraft).some(value=>value.length>2000))return toast('কোনো ঘরে লেখা বেশি বড় হয়েছে।');
 const next=structuredClone(state),rows=next.records['admin-documents']||[],existing=maternityEntryId&&rows.find(r=>r.id===maternityEntryId);
 if(maternityEntryId&&!existing)return toast('Saved entry is unavailable. Refresh before saving.');
 const now=new Date(),record={...existing,id:maternityEntryId||maternityPendingRecord?.id||crypto.randomUUID(),reference:card,name,quantity:0,date:now.toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),status:'Completed',personalFile:true,personalFolder:maternityEntryFolder,personalEntry:structuredClone(maternityEntryDraft),createdAt:existing?.createdAt||now.toISOString(),updatedAt:now.toISOString()};
 if(maternityPendingRecord&&JSON.stringify(maternityPendingRecord.personalEntry)===JSON.stringify(record.personalEntry)&&maternityPendingRecord.personalFolder===record.personalFolder){record.createdAt=maternityPendingRecord.createdAt;record.updatedAt=maternityPendingRecord.updatedAt;record.date=maternityPendingRecord.date;}maternityPendingRecord=structuredClone(record);
 if(existing)rows[rows.indexOf(existing)]=record;else rows.unshift(record);next.records['admin-documents']=rows;
 maternityEntryBusy=true;const button=$('#maternitySave');button.disabled=true;button.textContent='Saving…';
 try{if(await commit(next,{personalFile:record})){maternityEntryId=record.id;maternityPendingRecord=null;toast('Maternity File saved online.');goPage('admin-maternity-entry-report');}}finally{maternityEntryBusy=false;if(['admin-maternity-file','admin-maternity-new-entry'].includes(activePage))renderPage();}
}
$('#main').addEventListener('click',event=>{
 if(!['admin-maternity-file','admin-maternity-new-entry','admin-maternity-entry-report'].includes(activePage))return;
 if(event.target.closest('#maternitySave'))void maternitySaveEntry();
 const open=event.target.closest('[data-maternity-open]');if(!open)return;
 const row=(state.records['admin-documents']||[]).find(r=>r.id===open.dataset.maternityOpen&&r.personalFile);if(!row)return;
 for(const key of Object.keys(maternityEntryDraft))delete maternityEntryDraft[key];Object.assign(maternityEntryDraft,row.personalEntry);maternityEntryId=row.id;maternityEntryFolder=row.personalFolder;maternityFileSelected='new';goPage('admin-maternity-new-entry');
});


function maternityReportDate(value){if(!value)return '';try{return normalizeDate(value);}catch{return value;}}
$('#main').addEventListener('focusout',event=>{
 const input=event.target;if(!['field-6','field-17'].includes(input.dataset.maternityField)||!input.value.trim())return;
 try{input.value=normalizeDate(input.value);maternityEntryDraft[input.dataset.maternityField]=input.value;input.setCustomValidity('');}catch(error){input.setCustomValidity(error.message);toast(error.message);}
});
function maternityReportColumns(){
 const columns=[];maternityEntryFields.forEach((field,index)=>{
  if(typeof field==='string'){columns.push({label:field,key:'field-'+index,date:/তারিখ/.test(field)});if(index===20)columns.push({label:'ফ্যামেলী অন্য জনের মোবাইল নং',key:'family-mobile'});}
  else if(field.children)columns.push({label:field.title,children:true,labels:['ক্রমিক নং','নাম','বয়স','লিঙ্গ']});
  else columns.push({label:field.title,keys:field.fields.map((_,col)=>'address-'+index+'-'+col),labels:field.fields});
 });return columns;
}
function renderMaternityEntryReport(){
 const rows=(state.records['admin-documents']||[]).filter(row=>row.personalFile).slice().sort((a,b)=>String(b.updatedAt||b.createdAt||'').localeCompare(String(a.updatedAt||a.createdAt||''))),columns=maternityReportColumns(),count=2+columns.reduce((sum,col)=>sum+(col.labels?.length||1),0);
 const top='<th rowspan="2">ক্রমিক নং</th>'+columns.map(col=>col.labels?'<th colspan="4">'+esc(col.label)+'</th>':'<th rowspan="2">'+esc(col.label)+'</th>').join('')+'<th rowspan="2" class="no-print">Action</th>';
 const lower=columns.filter(col=>col.labels).flatMap(col=>col.labels).map(label=>'<th>'+esc(label)+'</th>').join('');
 const values=row=>{const entry=row.personalEntry||{};return columns.map(col=>{
  if(col.children){const children=Array.from({length:5},(_,i)=>[i+1,...[0,1,2].map(n=>entry['child-'+i+'-'+n]||'')]).filter(child=>child.slice(1).some(Boolean));return [0,1,2,3].map(i=>'<td>'+children.map(child=>esc(child[i])).join('<br>')+'</td>').join('');}
  if(col.keys)return col.keys.map(key=>'<td>'+esc(entry[key])+'</td>').join('');
  return '<td>'+esc(col.date?maternityReportDate(entry[col.key]):entry[col.key])+'</td>';
 }).join('');};
 $('#main').innerHTML=heading('Admin · Maternity File','','')+'<section class="panel"><h2 style="text-align:center;font-size:26px;font-weight:800;margin:12px 0 24px">ENTRY REPORT</h2><div class="table-wrap"><table class="maternity-full-report" style="width:max-content;min-width:100%;border-collapse:collapse"><thead><tr>'+top+'</tr><tr>'+lower+'</tr></thead><tbody>'+rows.map((row,i)=>'<tr><td>'+(i+1)+'</td>'+values(row)+'<td class="no-print"><button data-maternity-open="'+esc(row.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="'+count+'">No saved entries.</td></tr>')+'</tbody></table></div></section><style>.maternity-full-report th,.maternity-full-report td{border:1px solid #6c9485;min-width:120px;max-width:280px;padding:10px;text-align:center;vertical-align:middle;white-space:normal;overflow-wrap:anywhere}.maternity-full-report th{background:#e2f1e9;color:#214d3d;font-size:14px}.maternity-full-report td{font-size:15px}</style>';
 if(typeof applyActionControls==='function')applyActionControls();
}

$('#main').addEventListener('input',event=>{if(event.target.id==='maternityCardLookup'){maternityCardText=event.target.value;maternityCardLookup='';const preview=document.querySelector('#main section[aria-label]');if(preview)preview.remove();document.getElementById('maternityPrintCompanyInfo')?.remove();}});
$('#main').addEventListener('submit',event=>{
 if(event.target.id!=='maternityCardLookupForm')return;event.preventDefault();if(activePage==='admin-maternity-print'){if(!maternityCompanyChoice)return toast('Company নির্বাচন করুন।');const card=$('#maternityCardLookup').value.trim();maternityCardText=card;maternityCardLookup=card;if(card&&!maternityCardRows(card).length){maternityPrintSubmitted=false;maternityFileSelected='';renderPage();return toast('এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।');}maternityPrintSubmitted=true;renderPage();return;}
 const card=$('#maternityCardLookup').value.trim();if(!card){maternityCardLookup='';maternityFileSelected='';renderPage();return;}
 const matches=maternityCardRows(card),match=matches[0];
 if(!match){maternityCardLookup='';maternityFileSelected='';renderPage();toast('এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।');return;}
 maternityCardText=card;maternityCardLookup=card;maternityFileSelected=maternityFileSelected||'file-1';renderPage();
 toast('কার্ড নম্বরের সঙ্গে মিলে সেভ করা ফাইল দেখানো হয়েছে।');
});

let maternityChoiceInput=null,maternityChoiceIndex=-1;
function maternityCloseChoices(){if(!maternityChoiceInput)return;const list=document.getElementById('maternity-options-'+maternityChoiceInput.dataset.maternityField);if(list)list.hidden=true;maternityChoiceInput.setAttribute('aria-expanded','false');maternityChoiceInput.removeAttribute('aria-activedescendant');maternityChoiceInput=null;maternityChoiceIndex=-1;}
function maternityShowChoices(input){maternityCloseChoices();const key=input.dataset.maternityField,list=document.getElementById('maternity-options-'+key),matches=maternityOptionMatches(key,input.value);if(!list)return;
 list.innerHTML=matches.map((value,index)=>'<button type="button" role="option" id="maternity-choice-'+key+'-'+index+'" data-maternity-choice-value="'+esc(value)+'" aria-selected="false">'+esc(value)+'</button>').join('');list.hidden=!matches.length;input.setAttribute('aria-expanded',String(!!matches.length));if(matches.length){maternityChoiceInput=input;maternityChoiceIndex=-1;}
}
function maternityChooseValue(value){const input=maternityChoiceInput;if(!input)return;input.value=value;maternityEntryDraft[input.dataset.maternityField]=value;maternityCloseChoices();input.focus();}
$('#main').addEventListener('focusin',event=>{if(event.target.dataset.maternityChoice)maternityShowChoices(event.target);else if(!event.target.closest('.maternity-suggestions'))maternityCloseChoices();});
$('#main').addEventListener('pointerdown',event=>{const option=event.target.closest('[data-maternity-choice-value]');if(option){event.preventDefault();maternityChooseValue(option.dataset.maternityChoiceValue);}else if(!event.target.dataset.maternityChoice)maternityCloseChoices();});
$('#main').addEventListener('click',event=>{const option=event.target.closest('[data-maternity-choice-value]');if(option&&maternityChoiceInput)maternityChooseValue(option.dataset.maternityChoiceValue);});
$('#main').addEventListener('keydown',event=>{
 if(event.isComposing||event.target!==maternityChoiceInput)return;const input=maternityChoiceInput,list=document.getElementById('maternity-options-'+input.dataset.maternityField),options=[...list.querySelectorAll('[role="option"]')];if(!options.length)return;
 if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();maternityCloseChoices();return;}
 if(!['ArrowDown','ArrowUp','Enter'].includes(event.key))return;event.preventDefault();event.stopImmediatePropagation();
 if(event.key==='Enter'){const value=options[Math.max(0,maternityChoiceIndex)].dataset.maternityChoiceValue;maternityChooseValue(value);const fields=[...$('#main').querySelectorAll('[data-maternity-field]')],next=fields[fields.indexOf(input)+1];if(next)next.focus();return;}
 maternityChoiceIndex=(maternityChoiceIndex+(event.key==='ArrowDown'?1:-1)+options.length)%options.length;options.forEach((option,index)=>option.setAttribute('aria-selected',String(index===maternityChoiceIndex)));input.setAttribute('aria-activedescendant',options[maternityChoiceIndex].id);options[maternityChoiceIndex].scrollIntoView({block:'nearest'});
},true);

$('#main').addEventListener('change',event=>{if(event.target.id==='maternityCompanyChoice')maternityCompanyChoice=event.target.value;if(event.target.id==='maternityNameChoice')maternityNameChoice=event.target.value;});

function maternityPrintCompany(){return maternityCompanyChoice==='FARNOOR GARMENTS LTD. UNIT-2'?{bn:'ফারনূর গার্মেন্টস লিঃ-ইউনিট-২',address:'৪৫৪, বাবুরচালা, পিরুজালী, আলীমপাড়া, গাজীপুর সদর, গাজীপুর',en:'454, BaburChala, Alimpara, Pirujali, Gazipur',holiday:'শুক্রবার'}:{bn:'ফারনূর গার্মেন্টস লিঃ',address:'১২০৮/১/২ মালিবাগ বাজার রোড, ঢাকা-১২১৭',en:'1028/1/2 Malibagh Bazar Road, Dhaka-1217',holiday:'রবিবার'};}
function maternityPrintCompanyInfo(){const c=maternityPrintCompany();return '<div id="maternityPrintCompanyInfo" style="text-align:center;padding:18px 12px 24px;font-size:20px;line-height:1.6;color:#123f32"><b style="font-size:28px">'+esc(c.bn)+'</b><div>'+esc(c.address)+'</div><div>'+esc(c.en)+'</div><div>সাপ্তাহিক ছুটি: '+c.holiday+'</div></div>';}
$('#main').addEventListener('change',event=>{if(activePage==='admin-maternity-print'&&['maternityCompanyChoice','maternityNameChoice'].includes(event.target.id)){maternityPrintSubmitted=false;renderPage();}});

function maternityPrintSelection(){return '<div class="maternity-print-selection" style="display:flex;flex-wrap:wrap;gap:6px 20px;border-bottom:1px solid #aaa;padding:4px 0;margin-bottom:12px;font-size:14px;color:#000"><span>কার্ড নং: <b>'+esc(maternityFileOneBangla(maternityCardLookup))+'</b></span><span>কোম্পানি: <b>'+esc(maternityCompanyChoice)+'</b></span><span>নাম: <b>'+esc(maternityNameChoice||'—')+'</b></span></div>';}

function maternityPrintFileButtons(){return '<div class="no-print" style="display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px">'+maternityFileButtons.filter(b=>b[0]!=='new').map(([id,name,icon,bg,fg])=>'<button type="button" data-maternity-file="'+id+'" aria-pressed="'+(maternityFileSelected===id)+'" style="padding:8px 14px;border:1px solid '+fg+'55;border-radius:7px;background:'+bg+';color:'+fg+';font-weight:700">'+icon+' '+name+'</button>').join('')+'</div>';}

function renderMaternityPrintFile(){const folder=activePage.slice('admin-maternity-form-'.length),title=maternityFileButtons.find(b=>b[0]===folder)?.[1]||folder;maternityFileSelected=folder;const rows=maternityCardLookup?maternityCardRows():[];$('#main').innerHTML=heading('Admin · Maternity File · Print',title,'')+'<div class="no-print" style="display:flex;justify-content:flex-end;gap:10px;margin-bottom:16px">'+(folder?'<button type="button" id="maternityFormBack" style="margin-right:auto;background:#e0e7ff;border-color:#a5b4fc;color:#312e81;font-weight:700">← Back</button>':'')+'<button id="maternityFormPrint" style="background:#2563eb;border-color:#1d4ed8;color:white">Print</button><button id="maternityFormExcel" style="background:#16803c;border-color:#116530;color:white">Excel</button></div><section class="panel" id="maternityFilePrintContent">'+maternitySavedList(folder)+'</section>';}
$('#main').addEventListener('click',async event=>{if(!activePage.startsWith('admin-maternity-form-'))return;if(event.target.closest('#maternityFormBack')){goPage('admin-maternity-print');return;}if(event.target.closest('#maternityFormPrint')){if(!FarnoorAccess.canAction('admin-documents','print'))return toast('Print permission is required.');window.print();}if(event.target.closest('#maternityFormExcel')){const rows=['file-1','file-2','file-3','file-4','file-5','file-6','file-7','staff-3','electrican'].includes(maternityFileSelected)?(maternityCardLookup?maternityCardRows():[]):[{personalEntry:{}}];if(!rows.length)return toast('কোনো মিলে যাওয়া এন্ট্রি নেই।');const title=maternityFileButtons.find(b=>b[0]===maternityFileSelected)?.[1]||'Maternity File',matrix=[[maternityCompanyChoice],[maternityNameChoice],[title],['Field','Value']];for(const row of rows){const e=row.personalEntry||{};for(const [i,field] of maternityEntryFields.entries()){let value=typeof field==='string'?e['field-'+i]||'':field.children?Array.from({length:5},(_,n)=>[0,1,2].map(k=>e['child-'+n+'-'+k]||'').join(' / ')).join('; '):field.fields.map((label,k)=>label+' '+(e['address-'+i+'-'+k]||'')).join(', ');matrix.push([typeof field==='string'?field:field.title,value]);if(i===20)matrix.push(['ফ্যামেলী অন্য জনের মোবাইল নং',e['family-mobile']||'']);}}const name=title+'-'+maternityCardLookup.replace(/[^a-zA-Z0-9০-৯_-]/g,'_')+'.xlsx',data=makeXlsx(matrix,title),mime='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';try{if(window.showSaveFilePicker){const handle=await window.showSaveFilePicker({suggestedName:name,types:[{description:'Excel workbook',accept:{[mime]:['.xlsx']}}]});const stream=await handle.createWritable();await stream.write(new Blob([data],{type:mime}));await stream.close();toast('Excel file saved.');}else{download(name,data,mime);toast('Excel downloaded. ব্রাউজারের Download settings দিয়ে লোকেশন নির্বাচন করুন।');}}catch(error){if(error.name!=='AbortError')toast(error.message);}}});







;
;/* maternity-file-one.js */
'use strict';
function maternityFileOneValue(row,label){const index=maternityEntryFields.findIndex(field=>field===label);return index<0?'':row?.personalEntry?.['field-'+index]||'';}
function maternityFileOneBangla(value){return String(value??'').replace(/[0-9]/g,d=>'০১২৩৪৫৬৭৮৯'[Number(d)]);}
function maternityFileOne(row){
 const company=maternityPrintCompany(),e=row?.personalEntry||{},value=label=>esc(maternityFileOneBangla(maternityFileOneValue(row,label))),red=label=>`<span class="mpf1-red">${value(label)}</span>`,date=label=>`<span class="mpf1-red">${esc(maternityFileOneBangla(maternityReportDate(maternityFileOneValue(row,label))))}</span>`,address=index=>`<div class="mpf1-address-grid">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,col)=>`<div class="mpf1-address-part"><span>${label}</span><span class="mpf1-red">${esc(maternityFileOneBangla(e['address-'+index+'-'+col]))}</span></div>`).join('')}</div>`;
 return `<article class="mpf1-paper" aria-label="File-1 আবেদন ফর্ম"><header class="mpf1-header"><table class="mpf1-card"><tr><td colspan="2" class="mpf1-red">${value('কার্ড নং')}</td></tr><tr><th>সেকশন :</th><td class="mpf1-red">${value('সেকশন বাংলা')}</td></tr></table><div class="mpf1-recipient">বরাবর,<br>ব্যবস্থাপনা পরিচালক সাহেব সমীপেষু<br><strong class="mpf1-red mpf1-company">${esc(company.bn)}</strong><br><span class="mpf1-red">${esc(company.address)}</span></div></header><div class="mpf1-columns"><aside class="mpf1-approvals"><section><b>নিয়োগের তারিখ :</b><div class="mpf1-approval-value">${date('যোগদানের তারিখ')}</div></section><section><b>দক্ষতা :</b></section><section><b>প্রস্তাবিত বেতন :</b><div class="mpf1-approval-value">${red('প্রস্তাবিত বেতন')} /=</div></section>${['হেড সুপারভাইজার/লাইনচীফ:','ফ্লোর ইনচার্জ/ম্যানেজার :','টেক মাঃ ম্যানেজার :','জেনারেল ম্যানেজার :','ব্যবস্থাপনা পরিচালক :'].map(label=>`<section><b>${label}</b></section>`).join('')}</aside><div class="mpf1-body"><div class="mpf1-subject"><b>বিষয় :</b> ${red('পদবী বাংলা')} <span>পদে চাকুরীর আবেদন।</span></div><p>মহোদয়,</p><p>বিশ্বস্ত সূত্রে জানতে পারিলাম যে, আপনার পোশাক তৈরী কারখানায় ${red('পদবী বাংলা')} পদে লোক নিয়োগ করা হইবে। আমি উক্ত পদের জন্য একজন প্রার্থী/প্রার্থিনী। নিম্নে আমার পূর্ণ জীবন বৃত্তান্ত প্রদত্ত হইল।</p><div class="mpf1-details"><div><label>নাম</label><span>:</span>${red('নাম বাংলা')}</div><div><label>পিতার/স্বামীর নাম</label><span>:</span><span class="mpf1-red">${value('পিতার নাম')||value('স্বামী/স্ত্রীর নাম')}</span></div><div><label>স্থায়ী ঠিকানা</label><span>:</span><div>${address(15)}</div></div><div><label>বর্তমান ঠিকানা</label><span>:</span><div>${address(16)}</div></div><div><label>বয়স/জন্ম তারিখ</label><span>:</span><div>${date('জন্ম তারিখ')} &nbsp; ইং</div></div>${['জাতীয়তা','শিক্ষাগত যোগ্যতা','অভিজ্ঞতা','ধর্ম'].map(label=>`<div><label>${label}</label><span>:</span>${red(label)}</div>`).join('')}</div><p class="mpf1-request">অতএব, আমাকে উল্লেখিত পদে নিয়োগ প্রদান করিলে আমি আপনার নিকট চির বাধিত থাকিব।</p><div class="mpf1-signoff"><b>ধন্যবাদান্তে,</b><b>আপনার বিশ্বস্ত</b></div><div class="mpf1-signatures"><div>তারিখ : &nbsp; ${date('যোগদানের তারিখ')} &nbsp; ইং</div><div><b>স্বাক্ষর :</b><br><br><br><b>পূর্ণ নাম :</b></div></div></div></div></article>`;
}
const maternityFileOneOriginalList=maternitySavedList;
maternitySavedList=function(folder){
 
 
 const rows=folder==='file-1'&&maternityCardLookup?maternityCardRows():[];if(folder==='file-1'&&maternityCardLookup&&!rows.length)return '<p>এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।</p>';
 return `<style>.mpf1-paper,.mpf1-paper th,.mpf1-paper td,.mpf1-paper label{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.mpf1-scroll{overflow-x:auto}.mpf1-paper{box-sizing:border-box;width:794px;min-height:1123px;background:#fff;color:#000;padding:75px 38px 40px;margin:0 auto;font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif;font-size:14px;line-height:1.65}.mpf1-red{color:#000;font-size:17px;font-weight:600;overflow-wrap:anywhere}.mpf1-header{display:grid;grid-template-columns:178px 1fr;gap:14px;align-items:start;margin:0 12px 32px}.mpf1-card{border-collapse:collapse;width:100%;margin:0}.mpf1-card td,.mpf1-card th{border:1px solid #111;padding:0 3px;text-align:center;font-size:20px;height:29px}.mpf1-card .mpf1-red{font-size:20px}.mpf1-recipient{font-size:21px;line-height:1.6}.mpf1-company{font-size:21px}.mpf1-columns{display:grid;grid-template-columns:178px 1fr}.mpf1-approvals{font-size:21px;line-height:1.35;border:0;border-right:1px solid #000;background:#fff;padding:0;position:static;width:auto;min-height:0}.mpf1-approvals section{background:#fff;margin:0;border-radius:0;box-shadow:none}.mpf1-approvals section{box-sizing:border-box;min-height:93px;border-bottom:1px solid #000;padding:0 3px}.mpf1-approvals section:first-child{height:126px}.mpf1-approvals section:nth-child(2){min-height:68px}.mpf1-approvals section:nth-child(3){height:112px}.mpf1-approvals section:last-child{border:0}.mpf1-approval-value{text-align:center;margin-top:32px;font-size:18px}.mpf1-body{padding-left:4px;min-width:0;font-size:19px;line-height:1.4}.mpf1-subject{display:flex;gap:12px;align-items:center;justify-content:space-between;min-height:65px;padding:0 10px 0 8px;margin-bottom:20px;font-size:21px}.mpf1-subject .mpf1-red{font-size:22px}.mpf1-body p{margin:14px 0}.mpf1-details{margin-top:24px}.mpf1-details>div{display:grid;grid-template-columns:140px 12px minmax(0,1fr);min-height:35px;align-items:start}.mpf1-address-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);column-gap:12px;row-gap:3px;align-items:start}.mpf1-address-part{display:grid;grid-template-columns:40px minmax(0,1fr);align-items:baseline;min-width:0}.mpf1-address-part>span:last-child{overflow-wrap:anywhere;min-width:0}.mpf1-details>div>label{padding-right:4px}.mpf1-details label{font-size:19px}.mpf1-body .mpf1-red{font-size:22px;line-height:1.4}.mpf1-details .mpf1-red{line-height:1.4}.mpf1-request{margin-top:34px!important}.mpf1-signoff{display:flex;justify-content:space-between;margin-top:40px;padding-right:78px;font-size:16px} .mpf1-signatures{font-size:22px;display:grid;grid-template-columns:1fr 125px;margin-top:55px}.mpf1-paper + .mpf1-paper{margin-top:24px;break-before:page}@page maternityFileOneA4{size:A4 portrait;margin:8mm}@media print{.mpf1-paper .mpf1-approvals{display:block!important}.mpf1-paper .mpf1-columns{display:grid!important;grid-template-columns:42mm minmax(0,1fr)!important;width:100%!important}.mpf1-paper .mpf1-body{grid-column:2!important;width:auto!important;min-width:0!important}.mpf1-paper .mpf1-approvals{grid-column:1!important}.mpf1-paper .mpf1-card th,.mpf1-paper .mpf1-card td{padding:0 3px!important}body:has(.mpf1-paper) #maternityFilePrintContent{border:0!important;border-radius:0!important;overflow:visible!important;width:194mm!important;margin:0!important;padding:0!important}body:has(.mpf1-paper) #main>section:not(:last-of-type),body:has(.mpf1-paper) #main>.page-heading{display:none!important}.mpf1-scroll{overflow:visible!important}.mpf1-paper{page:maternityFileOneA4;box-sizing:border-box;width:190mm;min-height:0;margin:0 0 0 auto;padding:14mm 2mm 2mm 10mm;font-size:10pt;break-inside:avoid;page-break-inside:avoid}.mpf1-paper .mpf1-header{grid-template-columns:42mm minmax(0,1fr);gap:3mm;margin:0 0 5mm}.mpf1-paper .mpf1-columns{grid-template-columns:42mm minmax(0,1fr)}.mpf1-paper .mpf1-recipient{font-size:18px;line-height:1.4}.mpf1-paper .mpf1-company{font-size:19px}.mpf1-paper .mpf1-card td,.mpf1-paper .mpf1-card th,.mpf1-paper .mpf1-card .mpf1-red{font-size:18px;height:25px}.mpf1-paper .mpf1-approvals{font-size:17px}.mpf1-paper .mpf1-approvals section{min-height:18mm}.mpf1-paper .mpf1-approvals section:first-child{height:25mm}.mpf1-paper .mpf1-approvals section:nth-child(2){min-height:14mm}.mpf1-paper .mpf1-approvals section:nth-child(3){height:23mm}.mpf1-paper .mpf1-approval-value{margin-top:6mm}.mpf1-paper .mpf1-body{font-size:17px;line-height:1.35}.mpf1-paper .mpf1-body .mpf1-red{font-size:19px;line-height:1.35}.mpf1-paper .mpf1-subject{font-size:18px;min-height:13mm;margin-bottom:3mm;padding:0 2px;gap:6px}.mpf1-paper .mpf1-body p{margin:3mm 0}.mpf1-paper .mpf1-details{margin-top:4mm}.mpf1-paper .mpf1-details>div{grid-template-columns:31mm 3mm minmax(0,1fr);min-height:7mm}.mpf1-paper .mpf1-details label{font-size:17px}.mpf1-paper .mpf1-address-grid{column-gap:2mm}.mpf1-paper .mpf1-address-part{grid-template-columns:9mm minmax(0,1fr)}.mpf1-paper .mpf1-request{margin-top:6mm!important}.mpf1-paper .mpf1-signoff{margin-top:7mm;padding-right:12mm}.mpf1-paper .mpf1-signatures{font-size:18px;margin-top:9mm}.mpf1-paper + .mpf1-paper{margin-top:0}body:has(.mpf1-paper) #main{width:194mm!important;max-width:194mm!important;padding:0!important;margin:0!important}body:has(.mpf1-paper) #maternityFilePrintContent{margin-bottom:0!important}body:has(.mpf1-paper) #maternityFilePrintContent>.mpf1-scroll{margin:0!important;padding:0!important}body:has(.mpf1-paper) #main>div.no-print{display:none!important}}.mpf1-paper .mpf1-recipient{padding-left:8mm}.mpf1-paper .mpf1-subject{display:block;text-align:left;padding-left:0;min-height:65px}.mpf1-paper .mpf1-subject>b{display:inline-block;margin-right:8px}.mpf1-paper .mpf1-subject>.mpf1-red{margin-right:5px}.mpf1-paper .mpf1-details>div{min-height:38px;padding-bottom:3px}.mpf1-paper .mpf1-signatures{grid-template-columns:minmax(0,1fr) 170px}@media print{.mpf1-paper .mpf1-recipient{padding-left:8mm}.mpf1-paper .mpf1-subject{display:block!important;min-height:13mm;padding-left:0!important}.mpf1-paper .mpf1-details>div{min-height:8mm;padding-bottom:1mm}.mpf1-paper .mpf1-address-grid{row-gap:1.5mm}.mpf1-paper .mpf1-signatures{grid-template-columns:minmax(0,1fr) 45mm}.mpf1-paper .mpf1-details .mpf1-red{line-height:1.4}.mpf1-paper .mpf1-details{line-height:1.4}}.mpf1-paper .mpf1-card{table-layout:auto}.mpf1-paper .mpf1-card th{width:54px;white-space:nowrap!important;font-size:17px}.mpf1-paper .mpf1-card td{white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important;font-size:18px}.mpf1-paper .mpf1-card .mpf1-red{font-size:18px}@media print{.mpf1-paper .mpf1-card th{width:12mm;font-size:15px!important}.mpf1-paper .mpf1-card td,.mpf1-paper .mpf1-card .mpf1-red{font-size:16px!important;white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important}}</style><div class="mpf1-scroll">${rows.length?rows.map(maternityFileOne).join(''):maternityFileOne(null)}</div>`;
};

function maternityPrintOtherForm(folder){const rows=maternityCardLookup?maternityCardRows():[{personalEntry:{}}],title=maternityFileButtons.find(b=>b[0]===folder)?.[1]||folder,c=maternityPrintCompany();if(!rows.length)return '<p>এই কার্ড নম্বরের সেভ করা এন্ট্রি পাওয়া যায়নি।</p>';return rows.map(row=>'<article style="background:white;color:black;padding:20px;break-before:page"><h2 style="text-align:center">'+esc(c.bn)+'</h2><p style="text-align:center">'+esc(c.address)+'</p><h3 style="text-align:center">'+esc(title)+'</h3><table style="width:100%">'+maternityEntryFields.map((field,i)=>{const e=row.personalEntry||{};let value=typeof field==='string'?e['field-'+i]:field.children?Array.from({length:5},(_,n)=>[0,1,2].map(k=>e['child-'+n+'-'+k]||'').join(' / ')).filter(v=>v.replace(/[ /]/g,'')).join('; '):field.fields.map((label,k)=>label+' '+(e['address-'+i+'-'+k]||'')).join(', ');return '<tr><th style="text-align:left;width:35%">'+esc(typeof field==='string'?field:field.title)+'</th><td>'+esc(maternityFileOneBangla(value))+'</td></tr>';}).join('')+'</table></article>').join('');}

;
;/* maternity-file-two.js */
'use strict';
function maternityFileTwo(row){
 const e=row?.personalEntry||{},v=i=>esc(maternityFileOneBangla(e['field-'+i]||'')),red=i=>`<span class="mpf2-value">${v(i)}</span>`,date=i=>`<span class="mpf2-value">${esc(maternityFileOneBangla(maternityReportDate(e['field-'+i]||'')))}</span>`,c=maternityPrintCompany();
 const address=i=>`<div class="mpf2-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<span>${label} <b class="mpf2-value">${esc(maternityFileOneBangla(e['address-'+i+'-'+k]||''))}</b></span>`).join('')}</div>`;
 const line=(n,label,value)=>`<div class="mpf2-row"><span>${maternityFileOneBangla(n)}।</span><b>${label}</b><b>:</b><div>${value}</div></div>`;
 return `<article class="mpf2-paper" aria-label="File-2 ব্যক্তিগত তথ্যাবলী"><header class="mpf2-heading"><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p><h3>ব্যক্তিগত তথ্যাবলী</h3><div class="mpf2-photo">ছবি</div></header>${line(1,'নাম',red(7))}${line(2,'পদবী',red(1))}${line(3,'কার্ড নং/স্টাফ নং',red(0))}${line(4,'সেকশন',red(3))}${line(5,'মাতার নাম',red(10))}${line(6,'পিতার নাম',red(9))}${line(7,'ভাইবোনের সংখ্যা/নিজ অবস্থান',`ভাই - ${red(27)} &nbsp; , বোন - ${red(28)} &nbsp; , নিজ অবস্থান - ${red(29)}`)}${line(8,'জন্ম তারিখ / বয়স',date(17)+' &nbsp; ইং')}${line(9,'স্বামী / স্ত্রীর নাম (তাদের বয়স)',red(12)+' &nbsp; বয়স '+red(13))}${line(10,'স্বামী / স্ত্রীর পেশা',red(14))}${line(11,'বর্তমান ঠিকানা',address(16))}${line(12,'স্থায়ী ঠিকানা',address(15)+`<div>মোবাইল নং : ${red(20)}</div>`)}${line(13,'রক্তের গ্রুপ',red(23))}${line(14,'সন্তানাদির বিবরণ','')}<table class="mpf2-children"><thead><tr><th>ক্রমিক নং</th><th>নাম</th><th>বয়স</th><th>লিঙ্গ</th></tr></thead><tbody>${Array.from({length:Math.max(3,Array.from({length:5},(_,i)=>[0,1,2].some(k=>e['child-'+i+'-'+k])?i+1:0).reduce((a,b)=>Math.max(a,b),0))},(_,i)=>`<tr><td>${[0,1,2].some(k=>e['child-'+i+'-'+k])?maternityFileOneBangla(i+1):''}</td>${[0,1,2].map(k=>`<td class="mpf2-value">${esc(maternityFileOneBangla(e['child-'+i+'-'+k]||''))}</td>`).join('')}</tr>`).join('')}</tbody></table>${line(15,'শিক্ষাগত যোগ্যতা',red(19))}${line(16,'পূর্ববর্তী প্রতিষ্ঠানে চাকুরীর বিবরণ',red(32))}${line(17,'পরিচিত বিশিষ্ট ব্যক্তিবর্গ',red(35))}${line(18,'শারীরিক সনাক্তকরণ চিহ্ন',red(25))}${line(19,'উচ্চতা',red(26))}${line(20,'জাতীয় আইডি কার্ডের নং',red(24))}<footer class="mpf2-footer"><div>তারিখ : &nbsp; ${date(6)} &nbsp; ইং</div><div>স্বাক্ষর :<br><br><br>পূর্ণ নাম :</div></footer></article>`;
}
const maternityFileTwoPreviousList=maternitySavedList;
maternitySavedList=function(folder){if(folder!=='file-2')return maternityFileTwoPreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mpf2-paper,.mpf2-paper th,.mpf2-paper td{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.mpf2-paper{box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto;background:white;color:#000;padding:45px 38px 30px;font-size:18px;line-height:1.35}.mpf2-heading{position:relative;text-align:center;padding:0 105px 20px 40px;min-height:135px}.mpf2-heading h2{font-size:29px;margin:0 0 4px}.mpf2-heading p{font-size:15px;margin:0 0 4px;line-height:1.3}.mpf2-heading h3{font-size:25px;text-decoration:underline}.mpf2-photo{position:absolute;right:0;top:0;border:1px solid #000;width:100px;height:90px;display:grid;place-items:center;font-size:25px}.mpf2-row{display:grid;grid-template-columns:30px 210px 15px minmax(0,1fr);min-height:29px;align-items:start;gap:3px}.mpf2-value{color:#d71920;font-weight:600;overflow-wrap:anywhere}.mpf2-address{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:3px 14px;margin-bottom:4px}.mpf2-children{border-collapse:collapse;width:calc(100% - 40px);margin:0 0 5px 40px;table-layout:fixed}.mpf2-children th,.mpf2-children td{border:1px solid #000;padding:1px 5px;text-align:center;font-size:18px;white-space:normal;height:28px;color:#000;background:white}.mpf2-children th:first-child{width:15%}.mpf2-children th:nth-child(2){width:45%}.mpf2-children td.mpf2-value{color:#d71920}.mpf2-footer{display:grid;grid-template-columns:minmax(0,1fr) 180px;margin-top:35px;font-size:21px;font-weight:bold}.mpf2-paper+.mpf2-paper{break-before:page}@page maternityFileTwoA4{size:A4 portrait;margin:8mm}@media print{body:has(.mpf2-paper) #main>.page-heading,body:has(.mpf2-paper) #main>.no-print{display:none!important}body:has(.mpf2-paper) #main,body:has(.mpf2-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;padding:0!important;margin:0!important;border:0!important;overflow:visible!important}.mpf2-paper{page:maternityFileTwoA4;width:190mm;min-height:0;padding:6mm 4mm 3mm;margin:0 auto;font-size:12pt;line-height:1.3;break-inside:avoid}.mpf2-heading{min-height:29mm;padding:0 27mm 4mm 12mm}.mpf2-heading h2{font-size:21pt}.mpf2-heading p{font-size:11pt}.mpf2-heading h3{font-size:18pt}.mpf2-photo{width:25mm;height:23mm;font-size:18pt}.mpf2-row{grid-template-columns:7mm 50mm 3mm minmax(0,1fr);min-height:6.8mm;gap:1mm}.mpf2-children th,.mpf2-children td{padding:0 1mm!important;height:7mm;font-size:12pt}.mpf2-footer{font-size:14pt;margin-top:9mm;grid-template-columns:minmax(0,1fr) 42mm}}</style>${(rows.length?rows:[null]).map(maternityFileTwo).join('')}`;};

;
;/* maternity-file-three.js */
'use strict';
function maternityFileThreeSalary(value){const gross=Number(String(value||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replace(/[,\s]/g,''));if(!Number.isFinite(gross)||gross<=0)return ['', '', '', '', '', ''];if(gross<2450)return ['', '', '', '', '', gross];const basic=Math.round((gross-2450)/1.5*100)/100,house=Math.round((gross-2450-basic)*100)/100;return [basic,house,750,450,1250,gross];}
function maternityFileThree(row){const e=row?.personalEntry||{},c=maternityPrintCompany(),v=i=>esc(maternityFileOneBangla(e['field-'+i]||'')),red=i=>`<span class="mpf3-value">${v(i)}</span>`,dt=`<span class="mpf3-value">${esc(maternityFileOneBangla(maternityReportDate(e['field-6']||'')))}</span>`,salary=maternityFileThreeSalary(e['field-22']),money=n=>`<span class="mpf3-value">${n===''?'':esc(maternityFileOneBangla(Number(n).toLocaleString('en-IN',{maximumFractionDigits:2})))}</span>`,clause=(n,title,body)=>`<div class="mpf3-clause"><span>${maternityFileOneBangla(n)}।</span><div><b class="mpf3-clause-title">${title}</b>${body}</div></div>`,address=`<div class="mpf3-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<span>${label} <b class="mpf3-value">${esc(maternityFileOneBangla(e['address-16-'+k]||''))}</b></span>`).join('')}</div>`;
return `<article class="mpf3-paper" aria-label="File-3 নিয়োগপত্র প্রথম পাতা"><div class="mpf3-date">তারিখ : ${dt}</div><header class="mpf3-heading"><span class="mpf3-ref">সূত্র :</span><h2 class="mpf3-value">${esc(c.bn)}</h2><p class="mpf3-value">${esc(c.address)}</p><h3>নিয়োগ পত্র।</h3></header><div>প্রতি,</div><div class="mpf3-identity"><span>নাম</span><span>:</span><div>${red(7)}</div><span>পিতা/স্বামীর নাম</span><span>:</span><div class="mpf3-value">${v(9)||v(12)}</div><span>মাতার নাম</span><span>:</span><div>${red(10)}</div><span>ঠিকানা</span><span>:</span>${address}</div><p>জনাব/জনাবা,<br>আপনার ${dt} ইং তারিখের আবেদন পত্রের প্রেক্ষিতে জানানো যাচ্ছে যে, ${esc(c.bn)} নিম্ন লিখিত শর্ত সাপেক্ষে <b>${v(1)}</b> পদে আপনাকে নিয়োগ প্রদান করছে।</p><h3 class="mpf3-terms-title">চাকুরীর শর্তসমূহ</h3>${clause(1,'নিয়োগের কার্যকারিতা :','<p>এই নিয়োগ পত্র চাকুরীতে যোগদানের তারিখ থেকে কার্যকর হবে। সন্তোষজনক ভাবে প্রবেশকাল অতিবাহিত হলে (কাজের মান, দক্ষতা, শৃঙ্খলা এবং উপস্থিতি সাপেক্ষে) আপনাকে স্থায়ী কর্মী হিসাবে গণ্য করা হবে।</p>')}${clause(2,'প্রবেশকাল','<p>চাকুরীতে যোগদানের তারিখ থেকে তিন মাস পর্যন্ত প্রবেশকাল হিসাবে বিবেচনা করা হবে। প্রবেশনার হিসাবে কর্মরত থাকাকালীন সময়ে কর্তৃপক্ষ আপনার কাজে সন্তুষ্ট না হলে প্রবেশনালকাল আরও ৩ মাসের জন্য বর্ধিত করা যেতে পারে এবং আপনাকে নোটিশ প্রদান করা হবে। আপনি প্রবেশকালে ১ মাসের নোটিশ প্রদান করে পদত্যাগ করতে পারবেন। আপনার প্রবেশকাল সন্তোষজনক হলে আপনার চাকুরী স্থায়ী বলে বিবেচিত হবে এবং এ ব্যাপারে আর কোন পত্র দেওয়া হবে না।</p>')}${clause(3,'','<p>প্রবেশকালে কোম্পানী যে কোন সময়ে কোন প্রকার কারণ ছাড়াই আপনাকে চাকুরী থেকে অব্যাহতি দিতে পারবে। এ ক্ষেত্রে কোন ক্ষতিপূরণ প্রদান করা হবে না।</p>')}${clause(4,'আপনার মোট বেতন হবে নিম্নরূপ :',`<table class="mpf3-salary"><tbody>${['মূল মজুরী','বাড়ীভাড়া','চিকিৎসা ভাতা','যাতায়াত ভাতা','খাদ্য ভাতা'].map((label,i)=>`<tr><td>${maternityFileOneBangla(i+1)})</td><td>${label}</td><td>:</td><td>${money(salary[i])}</td><td>টাকা</td></tr>`).join('')}<tr class="mpf3-total"><td colspan="2">সর্বমোট</td><td>:</td><td>${money(salary[5])}</td><td>টাকা</td></tr></tbody></table>`)}${clause(5,'কাজের সময়:',' সাধারণতঃ সকাল ৮.০০ ঘটিকা হতে বিকাল ৫.০০ ঘটিকা পর্যন্ত। উক্ত অনুপস্থিতির জন্য আপনার মজুরীর বেসিক হতে কর্তন করা হবে।')}${clause(6,'মজুরী পরিশোধের তারিখ :','<p>প্রতি মাসের মজুরী পরবর্তী মাসের সাত কর্ম দিবসের মধ্যে পরিশোধ করা হবে।</p>')}${clause(7,'অতিরিক্ত সময়ের কাজের হিসাব :','<p>ক. এক দিনে আট ঘন্টা অথবা সপ্তাহে আটচল্লিশ ঘন্টার বেশি হলে কাজের সময় হিসাবে গণ্য হবে।<br>খ. অতিরিক্ত কাজের মূল মজুরীর দ্বিগুণ হারে প্রদান করা হবে।<br>অতিরিক্ত কাজের মজুরী = (মূল মজুরী × ২ × মোট অতিরিক্ত কাজের সময়) / ২০৮</p>')}</article><article class="mpf3-paper mpf3-second" aria-label="File-3 নিয়োগপত্র দ্বিতীয় পাতা">${clause(8,'ছুটির এবং অবকাশ :',`<p>প্রত্যেক শ্রমিক নিম্নোক্ত হারে ছুটি ভোগ করবে :</p><div class="mpf3-indent">ক. সাপ্তাহিক ছুটি : প্রতি সপ্তাহে একদিন যা সাধারণত ${esc(c.holiday)}।<br>খ. উৎসব ছুটি : বছরে পূর্ণ মজুরী সহ ১৩ দিন।<br>গ. বার্ষিক ছুটি : শ্রম আইন অনুযায়ী প্রদান করা হয়।<br>ঘ. নৈমিত্তিক ছুটি : বছরে পূর্ণ মজুরীসহ ১০ দিন। নৈমিত্তিক ছুটি পরবর্তী বছরে যোগ হবে না।<br>ঙ. অসুস্থতাজনিত ছুটি : বছরে পূর্ণ মজুরীতে ১৪ দিন। অসুস্থতার ছুটি জমা রেখে পরবর্তী বছরে যোগ হয় না।<br>চ. মাতৃত্বকালীন ছুটি : উপ-ধারা (১) এর অধীন নোটিশের ক্ষেত্রে, উক্ত উপধারার নোটিশ প্রদানের তারিখের পরের দিন হইতে প্রাপ্য প্রসূতি কল্যাণ সুবিধাসহ ১২০ (একশত বিশ) দিন পর্যন্ত কাজে অনুপস্থিত থাকিবার জন্য অনুমতি প্রদান করিবেন।<br>উপ-ধারা (২) এর অধীন নোটিশের ক্ষেত্রে, সন্তান প্রসবের তারিখ হইতে প্রাপ্য প্রসূতি কল্যাণ সুবিধাসহ ১২০ (একশত বিশ) দিন পর্যন্ত কাজে অনুপস্থিত থাকিবার জন্য অনুমতি প্রদান করিবেন।</div>`)}${clause(9,'বিশ্রাম ও আহারের জন্য বিরতি :',' প্রতি কার্যদিবসে কমপক্ষে এক ঘন্টা।')}${clause(10,'হাজিরা/ পাঞ্চকার্ড :','<p>প্রত্যেক শ্রমিকের জন্য একটি হাজিরা কার্ড/ পাঞ্চ কার্ড ইস্যু করা থাকে। উক্ত হাজিরা কার্ডে কারখানাতে আসা যাওয়া এবং অতিরিক্ত কর্মঘন্টার সময় লিপিবদ্ধ থাকবে এবং আসা যাওয়া সময় নির্ধারিত মেশিনে পাঞ্চ করতে হবে।</p>')}${clause(11,'পরিচয় পত্র :',' কোম্পানী কর্তৃক পরিচয় পত্র প্রদান করা হবে।')}${clause(12,'বদলী :',' একই মালিকের মালিকানাধীন অন্য যে কোন ফ্যাক্টরীতে প্রয়োজনে আপনাকে সমজাতীয় কাজে বদলী করা যাবে এবং আপনি বদলীকৃত ফ্যাক্টরীতে কাজ করতে অনুগত থাকবেন।')}${clause(13,'চাকুরী হতে পদত্যাগ :','<p>প্রত্যেক স্থায়ী শ্রমিক ৬০ দিনের লিখিত নোটিশ মালিকের নিকট প্রদান করে চাকুরী থেকে পদত্যাগ করতে পারবেন, অন্যথায় নোটিশের পরিবর্তে ক্ষতিপূরণ বাবদ ৬০ দিনের মজুরী মালিককে প্রদান করতে হবে।</p>')}${clause(14,'চাকুরী হতে বরখাস্ত :','<p>সম্পত্তি চুরি, অভ্যাসগত বিলম্ব উপস্থিতি, বিনা ছুটিতে অভ্যাসগত অনুপস্থিতি, অশোভন আচরণ, কাজের বিশৃঙ্খলা সৃষ্টি, নিয়মবহির্ভূত ধ্বংসকারী কোন কাজ, ঊর্ধ্বতন কর্মকর্তার আইনানুগ বা যুক্তিসঙ্গত আদেশ পালন না করা সহ অন্যান্য যে কোন অসদাচরণের জন্য বাংলাদেশ শ্রম আইন, ২০০৬ অনুসরণ করে যে কোন শ্রমিককে বরখাস্ত করা হতে পারে।</p>')}${clause(15,'অন্যান্য সুবিধা ও বিধিনিষেধ :','<div class="mpf3-indent">ক. উৎসব ভাতা : আইন অনুযায়ী প্রতি বৎসরের দুই ঈদে দুইটি উৎসব বোনাস প্রদান করতে হবে।<br>খ. অর্জিত ছুটি টাকা : ০১ (এক) বৎসর এই কারখানাতে চাকুরী করার পর প্রতি ১৮ (আঠার) দিন কার্যদিবসের জন্য ১ (এক) দিন করে পূর্ণ মজুরীতে বেতনসহ বার্ষিক ছুটি ভোগ করতে পারবেন।<br>গ. বেতন বৃদ্ধি : প্রতি বছর সরকারী ঘোষণা অনুযায়ী বেতন বৃদ্ধি করা হয়।<br>ঘ. চিকিৎসা সুবিধা : দক্ষ চিকিৎসক কর্তৃক বিনা মূল্য ব্যবস্থাপত্র ও সামান্য ঔষধ প্রদান করা হবে।<br>ঙ. বিধিনিষেধ : পান, চুইংগাম এবং খৈনী থেকে তৈরি পোশাকে ক্ষতি সাধন করতে পারে এবং কোন রকম নেশা সম্পূর্ণ নিষিদ্ধ। উক্ত দ্রব্যাদি কারো নিকট কারখানার অভ্যন্তরে পাওয়া গেলে কর্তৃপক্ষ সর্বোচ্চ শাস্তিমূলক ব্যবস্থা গ্রহণ করতে পারবে।</div>')}${clause(16,'আত্মরক্ষামূলক সরঞ্জামের ব্যবহার :',' কর্মকালীন সময়ে আত্মরক্ষামূলক সরঞ্জামাদি অবশ্যই ব্যবহার করতে হবে।<p>যদি উপরোল্লিখিত শর্তে আপনি চাকুরীতে যোগদানে সম্মত থাকেন তবে এই নিয়োগ পত্রের অনুলিপিতে স্বাক্ষর করতঃ প্রশাসনিক বিভাগে জমা দেওয়ার জন্য অনুরোধ করা হল।</p>')}<div class="mpf3-manager">ব্যবস্থাপক/মহা-ব্যবস্থাপক</div><p>আমি উপরোক্ত শর্তসমূহ বুঝলাম, স্বেচ্ছায় মেনে অদ্য ${dt} ইং তারিখে চাকুরীতে যোগদান করলাম। প্রশাসনিক বিভাগে জমা দেওয়ার জন্য অনুরোধ করা হল।</p><div class="mpf3-signatures"><div>তারিখ : ${dt} ইং</div><div>স্বাক্ষর : ...............................<br><br>নাম : ..................................<br><br>পিতা/স্বামীর নাম : ...................</div></div></article>`;}
const maternityFileThreePreviousList=maternitySavedList;
maternitySavedList=function(folder){if(folder!=='file-3')return maternityFileThreePreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mpf3-paper,.mpf3-paper td{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.mpf3-paper{box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto 20px;padding:30px 35px;background:white;color:black;font-size:17px;line-height:1.35}.mpf3-value{color:#ed1515;font-weight:600}.mpf3-date{text-align:right}.mpf3-heading{position:relative;text-align:center;margin:12px 0 25px}.mpf3-heading h2{font-size:30px;margin:4px 0}.mpf3-heading p{font-size:16px;margin:5px 0}.mpf3-heading h3,.mpf3-terms-title{font-size:24px;text-align:center;text-decoration:underline;margin:15px 0 6px}.mpf3-ref{position:absolute;left:0;top:8px}.mpf3-identity{display:grid;grid-template-columns:110px 12px minmax(0,1fr);gap:2px}.mpf3-identity>div{border-bottom:1px dotted #333}.mpf3-address{display:grid;grid-template-columns:1fr 1fr;gap:2px 10px}.mpf3-paper p{line-height:1.35;margin:6px 0}.mpf3-clause{display:grid;grid-template-columns:28px minmax(0,1fr);gap:4px;margin:7px 0}.mpf3-clause-title{font-size:18px}.mpf3-clause p{margin:4px 0 0 23px}.mpf3-indent{padding-left:22px}.mpf3-salary{width:auto;margin:5px 0 8px 25px;font-size:18px}.mpf3-salary td{padding:0 6px;border:0;white-space:normal;color:black}.mpf3-total td{border-top:1px solid black;font-weight:bold}.mpf3-manager{width:max-content;margin:18px 0 12px auto;border-top:1px solid black;font-weight:bold}.mpf3-signatures{display:grid;grid-template-columns:1fr 220px;margin-top:20px}.mpf3-second{break-before:page}@media print{body:has(.mpf3-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.mpf3-paper) #main,body:has(.mpf3-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;margin:0!important;padding:0!important;border:0!important;overflow:visible!important}.mpf3-paper{width:190mm;min-height:0;margin:0 auto;padding:4mm 3mm;font-size:11pt;line-height:1.28;break-inside:avoid;page:auto}.mpf3-heading{margin:2mm 0 5mm}.mpf3-heading h2{font-size:22pt}.mpf3-heading p{font-size:11pt}.mpf3-heading h3,.mpf3-terms-title{font-size:17pt;margin:3mm 0 1mm}.mpf3-identity{grid-template-columns:27mm 3mm minmax(0,1fr)}.mpf3-paper p{line-height:1.28;margin:1mm 0}.mpf3-clause{margin:1.5mm 0;grid-template-columns:6mm minmax(0,1fr)}.mpf3-clause-title{font-size:11.5pt}.mpf3-salary{font-size:11pt;margin:1mm 0 1mm 5mm}.mpf3-salary td{padding:0 1mm!important}.mpf3-manager{margin-top:3mm}.mpf3-signatures{margin-top:4mm;font-size:11pt}.mpf3-second{break-before:page;page-break-before:always}}</style>${(rows.length?rows:[null]).map(maternityFileThree).join('')}`;};

;
;/* maternity-file-four.js */
'use strict';
function maternityFileFourAge(birth,date){const parse=s=>{const x=String(s||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).split(/[\/.-]/).map(Number);if(x.length!==3)return null;const [d,m,raw]=x,y=raw<100?2000+raw:raw;const v=new Date(Date.UTC(y,m-1,d));return v.getUTCDate()===d&&v.getUTCMonth()===m-1?v:null;};const b=parse(birth),d=parse(date)||new Date(new Date().toLocaleDateString('en-US',{timeZone:'Asia/Dhaka'}));if(!b||b>d)return '';return d.getUTCFullYear()-b.getUTCFullYear()-(d.getUTCMonth()<b.getUTCMonth()||d.getUTCMonth()===b.getUTCMonth()&&d.getUTCDate()<b.getUTCDate()?1:0);}
function maternityFileFour(row){const e=row?.personalEntry||{},c=maternityPrintCompany(),v=i=>esc(maternityFileOneBangla(e['field-'+i]||'')),red=i=>`<span class="mpf4-value">${v(i)}</span>`,date=i=>`<span class="mpf4-value">${esc(maternityFileOneBangla(maternityReportDate(e['field-'+i]||'')))}</span>`,age=maternityFileFourAge(e['field-17'],e['field-6']),address=i=>`<div class="mpf4-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<div><b>${label}</b><span class="mpf4-value">${esc(maternityFileOneBangla(e['address-'+i+'-'+k]||''))}</span></div>`).join('')}</div>`,header=`<header class="mpf4-header"><img src="Farnoor_New_Logo.png" alt="Farnoor logo"><div><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p></div></header><h3>ফরম- ১৫</h3><p class="mpf4-rule">[ধারা ৩৪, ৩৬, ৩৭ ও ২৭৭ এবং বিধি ৩৪(১) ও ৩৬(৪) দ্রষ্টব্য]</p><h3 class="mpf4-title">বয়স ও সক্ষমতার প্রত্যয়ন পত্র</h3><div class="mpf4-doctor"><b>DR. NAZIA NAHAR SUCHONA</b><br>MBBS.PGT (GYNAE &amp; OBS)<br>MEDICAL OFFICER<br>BMDC Reg No. 67405</div>`,signatures='<footer class="mpf4-signatures"><div><span>সংশ্লিষ্ট ব্যক্তির</span><br>স্বাক্ষর/টিপসহি</div><div><span>রেজিষ্টার্ড চিকিৎসকের</span><br>স্বাক্ষর</div></footer>',top=`<div class="mpf4-box-heading">বয়স ও সক্ষমতার প্রত্যয়ন পত্র</div><div class="mpf4-box-row">১। ক্রমিক নং &nbsp; : &nbsp; ${red(0)}</div><div class="mpf4-box-row" style="text-align:center">তারিখ &nbsp; : &nbsp; ${date(6)}</div>`;
return `<article class="mpf4-paper" aria-label="File-4 বয়স ও সক্ষমতার প্রত্যয়ন পত্র"><section class="mpf4-copy">${header}<div class="mpf4-box">${top}<div class="mpf4-box-row">২। নাম &nbsp; : ${red(7)}</div><div class="mpf4-box-row">৩। পিতার নাম &nbsp; : ${red(9)}</div><div class="mpf4-box-row">৪। মাতার নাম &nbsp; : ${red(10)}</div><div class="mpf4-box-row">৫। লিঙ্গ &nbsp; : ${red(11)}</div><div class="mpf4-box-row">৬। স্থায়ী ঠিকানা ${address(15)}</div><div class="mpf4-box-row">৭। অস্থায়ী/যোগাযোগের ঠিকানা : ${address(16)}</div><div class="mpf4-box-row">৮। জন্মসনদ/ শিক্ষা সনদ অনুসারে<br><div class="mpf4-birth">বয়স/জন্ম তারিখ &nbsp; : &nbsp; ${date(17)}</div></div><div class="mpf4-box-row">৯। দৈহিক সক্ষমতা &nbsp; : ${red(30)}</div><div class="mpf4-box-row mpf4-mark">১০। সনাক্তকরণ চিহ্ন &nbsp; : ${red(25)}</div></div>${signatures}</section><section class="mpf4-copy">${header}<div class="mpf4-box">${top}<div class="mpf4-box-row mpf4-certify">আমি এই মর্মে প্রত্যয়ন করিতেছি যে (নাম)<div class="mpf4-center mpf4-value">${v(7)}</div><div>পিতা &nbsp; : ${red(9)}</div><div>মাতা &nbsp; : ${red(10)}</div><div>ঠিকানা &nbsp; :</div>${address(15)}কে আমি পরীক্ষা করিয়াছি।</div><div class="mpf4-box-row">তিনি প্রতিষ্ঠানে নিযুক্ত হইতে ইচ্ছুক, এবং আমার পরীক্ষা হইতে এইরূপ পাওয়া গিয়াছে যে তাহার বয়স <b class="mpf4-value">${esc(maternityFileOneBangla(age))}</b> বৎসর এবং তিনি প্রতিষ্ঠানে প্রাপ্ত বয়স্ক/কিশোর হিসাবে নিযুক্ত হইবার যোগ্য।</div><div class="mpf4-box-row mpf4-mark">তাহার সনাক্তকরণের চিহ্নঃ &nbsp; ${red(25)}</div><div class="mpf4-blank-lines"><div></div><div></div><div></div></div></div>${signatures}</section></article>`;}
const maternityFileFourPreviousList=maternitySavedList;
maternitySavedList=function(folder){if(folder!=='file-4')return maternityFileFourPreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mpf4-paper,.mpf4-paper section{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.mpf4-paper{box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto;padding:70px 25px 35px;background:white;color:#000;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:56px;font-size:17px;line-height:1.35}.mpf4-copy{min-width:0;display:flex;flex-direction:column}.mpf4-header{display:flex;align-items:center;gap:8px;min-height:60px}.mpf4-header img{width:47px;height:62px;object-fit:contain}.mpf4-header h2{font-size:22px;margin:0;letter-spacing:0}.mpf4-header p{font-size:12px;margin:4px 0;line-height:1.25;border-bottom:1px solid #000;padding-bottom:4px}.mpf4-copy h3{font-size:23px;text-align:center;margin:4px 0}.mpf4-copy .mpf4-title{font-size:22px;text-decoration:underline;margin-bottom:8px}.mpf4-rule{font-size:17px;text-align:center;margin:0 0 5px;line-height:1.3}.mpf4-doctor{font:16px/1.25 'Times New Roman',serif;margin:0 0 12px}.mpf4-value{color:#ed1515;font-weight:bold;overflow-wrap:anywhere}.mpf4-box{border:1px solid #000;flex:1;display:flex;flex-direction:column}.mpf4-box-heading{font-weight:bold;font-size:20px;border-bottom:1px solid #000;padding:3px}.mpf4-box-row{border-bottom:1px solid #000;padding:3px;line-height:1.4}.mpf4-box-row:last-child{border:0}.mpf4-address{padding:7px 12px}.mpf4-address>div{display:grid;grid-template-columns:45px minmax(0,1fr);gap:4px;min-height:28px}.mpf4-birth{padding:6px 0 0 12px}.mpf4-mark{min-height:55px}.mpf4-center{text-align:center;margin:6px 0}.mpf4-certify{line-height:1.7}.mpf4-blank-lines{margin-top:auto}.mpf4-blank-lines>div{border-top:1px solid #000;min-height:26px}.mpf4-signatures{display:flex;justify-content:space-between;gap:14px;text-align:center;margin-top:50px;font-size:15px;font-weight:bold}.mpf4-signatures span{border-top:1px solid #000;padding-top:3px;display:inline-block}.mpf4-paper+.mpf4-paper{break-before:page}@media print{body:has(.mpf4-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.mpf4-paper) #main,body:has(.mpf4-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;padding:0!important;margin:0!important;border:0!important;overflow:visible!important}.mpf4-paper{width:190mm;min-height:0;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:13mm;padding:18mm 2mm 5mm;font-size:10.5pt;line-height:1.3;break-inside:avoid;page:auto}.mpf4-header{gap:2mm;min-height:16mm}.mpf4-header img{width:12mm;height:16mm}.mpf4-header h2{font-size:14pt}.mpf4-header p{font-size:8pt}.mpf4-copy h3{font-size:16pt}.mpf4-copy .mpf4-title{font-size:14pt}.mpf4-rule{font-size:11pt}.mpf4-doctor{font-size:10.5pt}.mpf4-box-heading{font-size:12.5pt}.mpf4-box-row{padding:1mm;line-height:1.35}.mpf4-address{padding:2mm 3mm}.mpf4-address>div{grid-template-columns:11mm minmax(0,1fr);min-height:7mm}.mpf4-mark{min-height:14mm}.mpf4-blank-lines>div{min-height:6mm}.mpf4-signatures{font-size:10pt;margin-top:13mm}.mpf4-certify{line-height:1.6}}</style>${(rows.length?rows:[null]).map(maternityFileFour).join('')}`;};

;
;/* maternity-file-five.js */
'use strict';
function maternityFileFive(row){const e=row?.personalEntry||{},c=maternityPrintCompany(),v=i=>esc(maternityFileOneBangla(e['field-'+i]||'')),red=i=>`<b class="mpf5-value">${v(i)}</b>`,dt=i=>`<b class="mpf5-value">${esc(maternityFileOneBangla(maternityReportDate(e['field-'+i]||'')))}</b>`,addr=i=>`<div class="mpf5-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<span>${label} <b class="mpf5-value">${esc(maternityFileOneBangla(e['address-'+i+'-'+k]||''))}</b></span>`).join('')}</div>`,num=s=>Number(String(s||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c))),year=num(e['field-40']),nomineeAge=year>0&&year<=new Date().getFullYear()?new Date().getFullYear()-year:'',age=typeof maternityFileFourAge==='function'?maternityFileFourAge(e['field-17'],new Date().toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'})):'',line=(n,label,value)=>`<div class="mpf5-line"><span>${maternityFileOneBangla(n)}।</span><div>${label} ${value}</div></div>`;
return `<article class="mpf5-paper" aria-label="File-5 নমিনীর ঘোষণা ফর্ম"><header class="mpf5-heading"><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p><h3>ফরম-৪১</h3><div class="mpf5-photo">নমিনীর<br>সত্যায়িত<br>ছবি</div></header><p class="mpf5-rule">[ধারা ১৯, ১৩১(১)(ক), ১৫৫(২), ২৩৪, ২৬৪, ২৬৫ ও ২৭৩ এবং বিধি ১১৮(১), ১৩৬, ২০২(২), ২০২(১), ২৮৯(১) ও ৩২১(১) দ্রষ্টব্য]</p><p class="mpf5-subtitle">জমা ও বিভিন্ন খাতে প্রাপ্য অর্থ পরিশোধের ঘোষণা ও মনোনয়নের ফরম</p><section class="mpf5-details">${line(1,'কারখানা/প্রতিষ্ঠানের নাম :',`<b class="mpf5-value">${esc(c.bn)}</b>`)}${line(2,'কারখানা/প্রতিষ্ঠানের ঠিকানা :',`<b class="mpf5-value">${esc(c.address)}</b>`)}${line(3,'শ্রমিকের নাম ও ঠিকানা :',`<div class="mpf5-person">${red(7)}${addr(16)}</div><div class="mpf5-gender">লিঙ্গ : ${red(11)}</div>`)}${line(4,'পিতা/মাতা/স্বামী/স্ত্রীর নাম :',red(9))}${line(5,'জন্ম তারিখ :',`${dt(17)} &nbsp; ইং &emsp; বয়স : <b class="mpf5-value">${esc(maternityFileOneBangla(age))}</b>`)}${line(6,'সনাক্তকরণ চিহ্ন (যদি থাকে):',red(25))}${line(7,'স্থায়ী ঠিকানা :',addr(15))}${line(8,'চাকরিতে নিযুক্তির তারিখ :',dt(6))}${line(9,'পদের নাম :',red(1))}</section><p class="mpf5-declaration">আমি এতদ্বারা ঘোষণা করিতেছি যে, আমার মৃত্যু হইলে বা আমার অবর্তমানে, আমার অনুকূলে জমা ও বিভিন্নখাতে প্রাপ্য টাকা গ্রহণের জন্য আমি নিম্নবর্ণিত ব্যক্তিগণকে মনোনয়ন দান করিতেছি এবং নির্দেশ দিচ্ছি যে, উক্ত টাকা নিম্নবর্ণিত পদ্ধতিতে মনোনীত ব্যক্তিদের মধ্যে বণ্টন করিতে হইবে:</p><table class="mpf5-table"><colgroup><col style="width:45%"><col style="width:17%"><col style="width:13%"><col style="width:19%"><col style="width:6%"></colgroup><thead><tr><th>মনোনীত ব্যক্তি বা ব্যক্তিদের নাম, ঠিকানা ও ছবি (নমিনীর ছবি ও স্বাক্ষর শ্রমিক কর্তৃক সত্যায়িত) এন আই ডি নং</th><th>সদস্যদের সহিত মনোনীত ব্যক্তিদের সম্পর্ক</th><th>বয়স</th><th colspan="2">প্রত্যেক মনোনীত ব্যক্তিকে দেয় অংশ</th></tr><tr><th>১</th><th>২</th><th>৩</th><th colspan="2">৪</th></tr></thead><tbody><tr><td>${red(36)}</td><td class="mpf5-center">${red(39)}</td><td class="mpf5-center mpf5-value">${esc(maternityFileOneBangla(nomineeAge))}</td><td>জমাখাত বকেয়া মজুরি</td><td class="mpf5-center">অংশ<br>১০০%</td></tr><tr><td>${red(37)}</td><td></td><td></td><td>প্রভিডেন্ট ফান্ড</td><td class="mpf5-center">নাই</td></tr><tr><td>${red(38)}</td><td></td><td></td><td>বীমা</td><td>১০০%</td></tr><tr><td></td><td></td><td></td><td>দুর্ঘটনার ক্ষতিপূরণ</td><td>আইন অনুযায়ী</td></tr><tr><td></td><td></td><td></td><td>লভ্যাংশ</td><td>ঘ/অ</td></tr><tr><td></td><td></td><td></td><td>অন্যান্য</td><td>১০০%</td></tr></tbody></table><p class="mpf5-witness">প্রত্যয়ন করিতেছি যে, আমার উপস্থিতিতে জনাব &nbsp; <b class="mpf5-value">${esc(maternityNameChoice||'')}</b> &nbsp; লিপিবদ্ধ বিবরণ সমূহ পাঠ করিবার পর উক্ত ঘোষণা স্বাক্ষর করিতেছেন।</p><div class="mpf5-worker-sign">মনোনয়ন প্রদানকারী শ্রমিকের স্বাক্ষর, টিপসহি ও তারিখ</div><footer class="mpf5-footer"><div>.......................................<br>তারিখসহ মনোনীত ব্যক্তিগণের<br>স্বাক্ষর অথবা টিপসহি<br>(শ্রমিক কর্তৃক সত্যায়িত ছবি)</div><div>মালিক বা ক্ষমতাপ্রাপ্ত কর্মকর্তার স্বাক্ষর<br><br>তারিখ : ..........................................</div></footer></article>`;}
const maternityFileFivePreviousList=maternitySavedList;
maternitySavedList=function(folder){if(folder!=='file-5')return maternityFileFivePreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mpf5-paper{box-sizing:border-box;background:#fff;color:#000;width:794px;min-height:1123px;margin:0 auto;padding:42px 28px 32px;font-family:'SutonnyOMJ','Nirmala UI',sans-serif;font-size:17px;line-height:1.4}.mpf5-heading{position:relative;text-align:center;padding:0 90px}.mpf5-heading h2{font-size:29px;margin:0 0 4px}.mpf5-heading p{font-weight:bold;font-size:20px;margin:0}.mpf5-heading h3{font-size:24px;text-decoration:underline;margin:0}.mpf5-photo{position:absolute;right:0;top:0;width:85px;height:76px;border:1px solid #000;display:flex;align-items:center;justify-content:center;font-size:16px;line-height:1.2}.mpf5-rule{text-align:center;font-weight:bold;font-size:15px;margin:5px 0}.mpf5-subtitle{text-align:center;font-weight:bold;margin:6px 0 18px}.mpf5-value{color:red;font-weight:bold;overflow-wrap:anywhere}.mpf5-line{display:grid;grid-template-columns:40px minmax(0,1fr);margin:3px 0}.mpf5-person{display:inline-grid;grid-template-columns:190px minmax(0,1fr);width:calc(100% - 170px);vertical-align:top}.mpf5-address{display:grid;grid-template-columns:1fr 1fr;gap:2px 10px}.mpf5-line>div>.mpf5-address{display:inline-grid;width:70%;vertical-align:top}.mpf5-gender{padding-left:145px}.mpf5-declaration{margin:6px 0;text-align:justify;line-height:1.6}.mpf5-table{border-collapse:collapse;width:100%;table-layout:fixed;font-size:17px}.mpf5-table th,.mpf5-table td{border:1px solid #000;padding:3px;vertical-align:middle;overflow-wrap:anywhere}.mpf5-table th,.mpf5-table td{white-space:normal!important;word-break:normal;text-transform:none;letter-spacing:0;color:#000;background:#fff;font-size:inherit}.mpf5-table th{font-weight:normal;line-height:1.25}.mpf5-table th .mpf5-value,.mpf5-table td .mpf5-value{color:red}.mpf5-table tbody tr{height:43px}.mpf5-center{text-align:center}.mpf5-witness{margin:14px 0 0;line-height:1.5}.mpf5-worker-sign{text-align:right;margin:65px 10px 25px 0}.mpf5-footer{display:flex;justify-content:space-between;align-items:flex-end;margin-top:25px;line-height:1.4}.mpf5-paper+.mpf5-paper{break-before:page}@media print{body:has(.mpf5-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.mpf5-paper) #main,body:has(.mpf5-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;margin:0!important;padding:0!important;border:0!important;overflow:visible!important}.mpf5-paper{width:190mm;min-height:0;padding:6mm 2mm 2mm;font-size:9.5pt;line-height:1.25;page:auto;break-inside:avoid}.mpf5-heading{padding:0 23mm}.mpf5-heading h2{font-size:21pt}.mpf5-heading p{font-size:14pt}.mpf5-heading h3{font-size:17pt}.mpf5-photo{width:22mm;height:20mm;font-size:11pt}.mpf5-rule{font-size:10pt}.mpf5-subtitle{margin:2mm 0 5mm}.mpf5-line{grid-template-columns:10mm minmax(0,1fr);margin:1mm 0}.mpf5-person{grid-template-columns:43mm minmax(0,1fr);width:calc(100% - 43mm)}.mpf5-gender{padding-left:38mm}.mpf5-table{font-size:9.5pt}.mpf5-table tbody tr{height:9mm}.mpf5-table th,.mpf5-table td{padding:1mm}.mpf5-worker-sign{margin-top:10mm;margin-bottom:3mm}.mpf5-footer{margin-top:3mm}.mpf5-witness{margin-top:4mm}}</style>${(rows.length?rows:[null]).map(maternityFileFive).join('')}`;};



;
;/* maternity-file-six.js */
'use strict';
function maternityFileSix(row){const e=row?.personalEntry||{},c=maternityPrintCompany(),v=i=>esc(maternityFileOneBangla(e['field-'+i]||'')),red=i=>`<b class="mpf6-value">${v(i)}</b>`,headings=['বৎসরের প্রারম্ভে জমাকৃত বার্ষিক ছুটি','বার্ষিক','নৈমিত্তিক','অসুস্থতা','প্রত্যাখ্যান বা মুলতবি রাখা হইলে প্রত্যাখ্যানের বা মুলতবির কারণ','ছুটি মঞ্জুরের তারিখ','কত দিন মঞ্জুর করা হইল','বার্ষিক ছুটি নগদায়নের সংখ্যা ও তৎ অর্থ প্রদানের তারিখ','বার্ষিক','নৈমিত্তিক','পীড়া','শ্রমিকের স্বাক্ষর','মালিক/ব্যবস্থাপকের স্বাক্ষর'];
return `<article class="mpf6-paper" aria-label="File-6 ছুটির রেজিস্টার"><header class="mpf6-heading"><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p></header><div class="mpf6-company"><div>কারখানা বা প্রতিষ্ঠানের নাম : &emsp; <b class="mpf6-value">${esc(c.bn)}</b></div><div>বিভাগ বা শাখার নাম : &emsp; <b class="mpf6-value">${v(5)||v(3)}</b></div></div><div class="mpf6-worker"><div>শ্রমিকের নাম : &nbsp; ${red(7)}</div><div>কার্ড নং : ${red(0)}</div><div>পদবি : &nbsp; ${red(1)}</div><div>নিয়োগের তারিখ : &nbsp; <b class="mpf6-value">${esc(maternityFileOneBangla(maternityReportDate(e['field-6']||'')))}</b></div></div><table class="mpf6-table"><colgroup>${[8,5.5,5.5,5.5,11.5,12,8,11,5.5,5.5,5.5,6.5,9].map(w=>`<col style="width:${w}%">`).join('')}</colgroup><thead><tr><th rowspan="2">${headings[0]}</th><th colspan="3">কি ধরনের ছুটি চাওয়া হইয়াছে</th><th rowspan="2">${headings[4]}</th><th rowspan="2">${headings[5]}</th><th rowspan="2">${headings[6]}</th><th rowspan="2">${headings[7]}</th><th colspan="3">অবশিষ্ট পাওনা ছুটির পরিমাণ</th><th rowspan="2">${headings[11]}</th><th rowspan="2">${headings[12]}</th></tr><tr>${[1,2,3,8,9,10].map(i=>`<th>${headings[i]}</th>`).join('')}</tr><tr>${Array.from({length:13},(_,i)=>`<th>(${maternityFileOneBangla(i+1)})</th>`).join('')}</tr></thead><tbody><tr>${headings.map(()=>'<td></td>').join('')}</tr></tbody></table><footer class="mpf6-footer"><p>ফরম - ৯</p><p>[ধারা ১০, ১১৫, ১১৬ ও ১১৭ এবং বিধি ২৪ ও ১০৮(১) দ্রষ্টব্য]</p></footer></article>`;}
const maternityFileSixPreviousList=maternitySavedList;
maternitySavedList=function(folder){if(folder!=='file-6')return maternityFileSixPreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mpf6-paper{box-sizing:border-box;width:1123px;min-height:794px;margin:0 auto;padding:35px 14px 20px;background:#fff;color:#000;font:18px/1.35 'SutonnyOMJ','Nirmala UI',sans-serif}.mpf6-heading{text-align:center}.mpf6-heading h2{font-size:34px;margin:0 0 12px}.mpf6-heading p{font-size:19px;font-weight:bold;margin:0}.mpf6-value{color:red;font-weight:bold;overflow-wrap:anywhere}.mpf6-company{display:grid;grid-template-columns:2fr 1fr;gap:20px;margin:24px 16px 40px}.mpf6-worker{display:grid;grid-template-columns:1.7fr 1fr 1.3fr 1.6fr;gap:16px;margin-bottom:22px}.mpf6-table{width:100%;border-collapse:collapse;table-layout:fixed;font-size:18px}.mpf6-table th,.mpf6-table td{border:1px solid #000;padding:3px;white-space:normal!important;word-break:normal;overflow-wrap:anywhere;background:#fff;color:#000;text-transform:none;letter-spacing:0;font:inherit;text-align:center}.mpf6-table thead tr:first-child{height:85px}.mpf6-table tbody td{height:300px;vertical-align:top}.mpf6-footer p{margin:22px 0 0}.mpf6-paper+.mpf6-paper{break-before:page}@page maternityFileSixLandscape{size:A4 landscape;margin:8mm}@media print{html:has(.mpf6-paper),body:has(.mpf6-paper),body:has(.mpf6-paper) #workspace,body:has(.mpf6-paper) #main,body:has(.mpf6-paper) #maternityFilePrintContent,body:has(.mpf6-paper) .mpf6-paper{page:maternityFileSixLandscape!important}body:has(.mpf6-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.mpf6-paper),body:has(.mpf6-paper) #workspace,body:has(.mpf6-paper) #main,body:has(.mpf6-paper) #maternityFilePrintContent{width:280mm!important;max-width:280mm!important;margin:0!important;padding:0!important;border:0!important;overflow:visible!important;min-height:0!important;height:auto!important}.mpf6-paper{width:280mm;min-height:0;padding:4mm 1mm 0;font-size:11pt;line-height:1.3;page:auto;break-inside:avoid}.mpf6-heading h2{font-size:23pt;margin-bottom:4mm}.mpf6-heading p{font-size:12pt}.mpf6-company{margin:4mm 3mm 7mm;gap:5mm}.mpf6-worker{gap:4mm;margin-bottom:6mm}.mpf6-table{font-size:11pt}.mpf6-table th,.mpf6-table td{padding:0.7mm!important}.mpf6-table thead tr:first-child{height:23mm}.mpf6-table tbody td{height:60mm}.mpf6-footer p{margin-top:3mm}}</style>${(rows.length?rows:[null]).map(maternityFileSix).join('')}`;};

// Print File-6 in an isolated document so unrelated page rules cannot force portrait.
function maternityFileSixPrint(){
 const content=document.getElementById('maternityFilePrintContent');if(!content?.querySelector('.mpf6-paper'))return;
 document.getElementById('maternityFileSixPrintFrame')?.remove();
 const frame=document.createElement('iframe');frame.id='maternityFileSixPrintFrame';frame.title='File-6 Print';frame.style.cssText='position:fixed;left:-10000px;top:0;width:1123px;height:794px;border:0';
 const styles=Array.from(content.querySelectorAll('style')).map(s=>s.textContent).join('\n');
 const papers=Array.from(content.querySelectorAll('.mpf6-paper')).map(p=>p.outerHTML).join('');
 frame.onload=async()=>{const win=frame.contentWindow;if(!win)return;await win.document.fonts.ready;win.focus();win.print();};
 frame.srcdoc='<!doctype html><html lang="bn"><head><meta charset="utf-8"><title>File-6</title><style>'+styles+'\n@page{size:A4 landscape;margin:8mm}@page maternityFileSixLandscape{size:A4 landscape;margin:8mm}html,body{margin:0;padding:0;background:white;page:maternityFileSixLandscape}.mpf6-paper{margin:0;width:280mm;box-sizing:border-box}@media print{html,body,.mpf6-paper{page:maternityFileSixLandscape!important}body{width:280mm!important}.mpf6-paper{break-after:page}.mpf6-paper:last-child{break-after:auto}}</style></head><body>'+papers+'</body></html>';
 document.body.append(frame);
}
document.getElementById('main').addEventListener('click',event=>{if(!event.target.closest('#maternityFormPrint')||!document.querySelector('.mpf6-paper'))return;event.preventDefault();event.stopImmediatePropagation();if(!FarnoorAccess.canAction('admin-documents','print'))return toast('Print permission is required.');maternityFileSixPrint();},true);


;
;/* maternity-file-seven.js */
'use strict';
function maternityFileSeven(row){const e=row?.personalEntry||{},c=maternityPrintCompany(),v=i=>esc(e['field-'+i]||''),red=i=>`<span class="mpf7-value">${v(i)}</span>`,date=esc(maternityReportDate(e['field-6']||'')),rawSalary=String(e['field-22']||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replace(/[,\s]/g,''),salary=rawSalary&&Number.isFinite(Number(rawSalary))?Number(rawSalary).toLocaleString('en-US'):v(22),headings=['SL','Date','Promotion/<br>Increment','Designation','Section','Increment','Salary<br>Re- Fixed','Date Of<br>Effect','Sig','Remarks'];
return `<article class="mpf7-paper" aria-label="File-7 Maternity Information"><header class="mpf7-heading"><h2>${esc(maternityCompanyChoice||'FARNOOR GARMENTS LTD')}</h2><p>${esc(c.en)}</p><h3>Maternity Information</h3></header><table class="mpf7-information"><colgroup><col style="width:26%"><col style="width:38%"><col style="width:12%"><col style="width:24%"></colgroup><tbody><tr><th>Name</th><td colspan="3">${red(8)}</td></tr><tr><th>Card No/ Staff No</th><td colspan="3">${red(0)}</td></tr><tr><th>ID No.</th><td colspan="3">${red(0)}</td></tr><tr><th>Designation</th><td colspan="3">${red(2)}</td></tr><tr><th>Section</th><td colspan="3">${red(4)}</td></tr><tr><th>Salary</th><td><span class="mpf7-value">${salary}</span></td><th>Effective</th><td><span class="mpf7-value">${date}</span></td></tr><tr><th>Date Of Joining</th><td colspan="3"><span class="mpf7-value">${date}</span></td></tr></tbody></table><h3 class="mpf7-promotion-title">Promotion / Increment</h3><table class="mpf7-register"><colgroup>${[5,11,11,12,10,10,10,10,10,11].map(w=>`<col style="width:${w}%">`).join('')}</colgroup><thead><tr>${headings.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${Array.from({length:15},(_,i)=>`<tr><td>${i+1}</td>${Array.from({length:9},()=>'<td></td>').join('')}</tr>`).join('')}</tbody></table></article>`;}
const maternityFileSevenPreviousList=maternitySavedList;
maternitySavedList=function(folder){if(folder!=='file-7')return maternityFileSevenPreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mpf7-paper{box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto;padding:36px 24px 18px;background:white;color:#000;font:17px/1.2 'Times New Roman','Nirmala UI',serif}.mpf7-heading{text-align:center}.mpf7-heading h2{font-size:27px;margin:0 0 3px}.mpf7-heading p{font-size:17px;font-weight:bold;margin:0}.mpf7-heading h3{font-size:25px;text-decoration:underline;margin:6px 0 14px}.mpf7-paper table{border-collapse:collapse;table-layout:fixed;background:white;color:black}.mpf7-paper th,.mpf7-paper td{border:1px solid #000;padding:3px!important;white-space:normal!important;overflow-wrap:anywhere;letter-spacing:0;text-transform:none;background:white;color:black;font:inherit}.mpf7-information{width:84%;margin:0 auto}.mpf7-information th{text-align:left;font-weight:bold}.mpf7-information .mpf7-value{font-family:Arial,'Nirmala UI',sans-serif;font-weight:bold;color:red;font-size:18px}.mpf7-promotion-title{text-align:center;font-size:25px;margin:18px 0 10px}.mpf7-register{width:100%;font-size:15px}.mpf7-register th{text-align:center;font-weight:bold}.mpf7-register td{text-align:center;height:38px}.mpf7-paper+.mpf7-paper{break-before:page}@page maternityFileSevenPortrait{size:A4 portrait;margin:8mm}@media print{html:has(.mpf7-paper),body:has(.mpf7-paper),body:has(.mpf7-paper) #workspace,body:has(.mpf7-paper) #main,body:has(.mpf7-paper) #maternityFilePrintContent{page:maternityFileSevenPortrait!important}body:has(.mpf7-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.mpf7-paper) #main,body:has(.mpf7-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;margin:0!important;padding:0!important;border:0!important;overflow:visible!important}.mpf7-paper{width:190mm;min-height:0;padding:5mm 1mm 0;font-size:11pt;line-height:1.15;page:maternityFileSevenPortrait!important;break-inside:avoid}.mpf7-heading h2{font-size:21pt}.mpf7-heading p{font-size:12pt}.mpf7-heading h3{font-size:18pt;margin:2mm 0 4mm}.mpf7-paper th,.mpf7-paper td{padding:0.8mm!important}.mpf7-information .mpf7-value{font-size:12pt}.mpf7-promotion-title{font-size:18pt;margin:5mm 0 3mm}.mpf7-register{font-size:10pt}.mpf7-register td{height:9mm}}</style>${(rows.length?rows:[null]).map(maternityFileSeven).join('')}`;};

;
;/* maternity-staff-three.js */
'use strict';
function maternityStaffThreeSalary(value){const gross=Number(String(value||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replace(/[,\s]/g,''));if(!Number.isFinite(gross)||gross<=0)return ['', '', '', '', '', ''];if(gross<2450)return ['', '', '', '', '', gross];const basic=Math.round((gross-2450)/1.5*100)/100,house=Math.round((gross-2450-basic)*100)/100;return [basic,house,750,450,1250,gross];}
function maternityStaffThree(row){const e=row?.personalEntry||{},c=maternityPrintCompany(),v=i=>esc(maternityFileOneBangla(e['field-'+i]||'')),red=i=>`<span class="mps3-value">${v(i)}</span>`,dt=`<span class="mps3-value">${esc(maternityFileOneBangla(maternityReportDate(e['field-6']||'')))}</span>`,salary=maternityStaffThreeSalary(e['field-22']),money=n=>`<span class="mps3-value">${n===''?'':esc(maternityFileOneBangla(Number(n).toLocaleString('en-IN',{maximumFractionDigits:2})))}</span>`,clause=(n,title,body)=>`<div class="mps3-clause"><span>${maternityFileOneBangla(n)}।</span><div><b class="mps3-clause-title">${title}</b>${body}</div></div>`,address=`<div class="mps3-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<span>${label} <b class="mps3-value">${esc(maternityFileOneBangla(e['address-16-'+k]||''))}</b></span>`).join('')}</div>`;
return `<article class="mps3-paper" aria-label="Staff-3 নিয়োগপত্র প্রথম পাতা"><div class="mps3-date">তারিখ : ${dt}</div><header class="mps3-heading"><span class="mps3-ref">সূত্র :</span><h2 class="mps3-value">${esc(c.bn)}</h2><p class="mps3-value">${esc(c.address)}</p><h3>নিয়োগ পত্র।</h3></header><div>প্রতি,</div><div class="mps3-identity"><span>নাম</span><span>:</span><div>${red(7)}</div><span>পিতা/স্বামীর নাম</span><span>:</span><div class="mps3-value">${v(9)||v(12)}</div><span>মাতার নাম</span><span>:</span><div>${red(10)}</div><span>ঠিকানা</span><span>:</span>${address}</div><p>জনাব/জনাবা,<br>আপনার ${dt} ইং তারিখের আবেদন পত্রের প্রেক্ষিতে জানানো যাচ্ছে যে, ${esc(c.bn)} নিম্ন লিখিত শর্ত সাপেক্ষে <b>${v(1)}</b> পদে আপনাকে নিয়োগ প্রদান করছে।</p><h3 class="mps3-terms-title">চাকুরীর শর্তসমূহ</h3>${clause(1,'নিয়োগের কার্যকারিতা :','<p>এই নিয়োগ পত্র চাকুরীতে যোগদানের তারিখ থেকে কার্যকর হবে। সন্তোষজনক ভাবে প্রবেশকাল অতিবাহিত হলে (কাজের মান, দক্ষতা, শৃঙ্খলা এবং উপস্থিতি সাপেক্ষে) আপনাকে স্থায়ী কর্মী হিসাবে গণ্য করা হবে।</p>')}${clause(2,'প্রবেশকাল','<p>চাকুরীতে যোগদানের তারিখ থেকে তিন মাস পর্যন্ত প্রবেশকাল হিসাবে বিবেচনা করা হবে। প্রবেশনার হিসাবে কর্মরত থাকাকালীন সময়ে কর্তৃপক্ষ আপনার কাজে সন্তুষ্ট না হলে প্রবেশনালকাল আরও ৩ মাসের জন্য বর্ধিত করা যেতে পারে এবং আপনাকে নোটিশ প্রদান করা হবে। আপনি প্রবেশকালে ১ মাসের নোটিশ প্রদান করে পদত্যাগ করতে পারবেন। আপনার প্রবেশকাল সন্তোষজনক হলে আপনার চাকুরী স্থায়ী বলে বিবেচিত হবে এবং এ ব্যাপারে আর কোন পত্র দেওয়া হবে না।</p>')}${clause(3,'','<p>প্রবেশকালে কোম্পানী যে কোন সময়ে কোন প্রকার কারণ ছাড়াই আপনাকে চাকুরী থেকে অব্যাহতি দিতে পারবে। এ ক্ষেত্রে কোন ক্ষতিপূরণ প্রদান করা হবে না।</p>')}${clause(4,'আপনার মোট বেতন হবে নিম্নরূপ :',`<table class="mps3-salary"><tbody>${['মূল মজুরী','বাড়ীভাড়া','চিকিৎসা ভাতা','যাতায়াত ভাতা','খাদ্য ভাতা'].map((label,i)=>`<tr><td>${maternityFileOneBangla(i+1)})</td><td>${label}</td><td>:</td><td>${money(salary[i])}</td><td>টাকা</td></tr>`).join('')}<tr class="mps3-total"><td colspan="2">সর্বমোট</td><td>:</td><td>${money(salary[5])}</td><td>টাকা</td></tr></tbody></table>`)}${clause(5,'কাজের সময়:',' সাধারণতঃ সকাল ৮.০০ ঘটিকা হতে বিকাল ৫.০০ ঘটিকা পর্যন্ত। উক্ত অনুপস্থিতির জন্য আপনার মজুরী হতে কর্তন করা হবে।')}${clause(6,'মজুরী পরিশোধের তারিখ :','<p>প্রতি মাসের মজুরী পরবর্তী মাসের সাত কর্ম দিবসের মধ্যে পরিশোধ করা হবে।</p>')}</article><article class="mps3-paper mps3-second" aria-label="Staff-3 নিয়োগপত্র দ্বিতীয় পাতা">${clause(7,'ছুটির এবং অবকাশ :',`<p>প্রত্যেক শ্রমিক নিম্নোক্ত হারে ছুটি ভোগ করবে :</p><div class="mps3-indent">ক. সাপ্তাহিক ছুটি : প্রতি সপ্তাহে একদিন যা সাধারণত ${esc(c.holiday)}।<br>খ. উৎসব ছুটি : বছরে পূর্ণ মজুরী সহ ১১ দিন।<br>গ. বার্ষিক ছুটি : চাকুরীর মেয়াদ ন্যূনতম এক বছর পূর্ণ হলে প্রতি ১৮ কর্ম দিবসে একদিন সবেতনে ছুটি প্রাপ্য হবে।<br>ঘ. নৈমিত্তিক ছুটি : বছরে পূর্ণ মজুরীসহ ১০ দিন। নৈমিত্তিক ছুটি পরবর্তী বছরে যোগ হবে না।<br>ঙ. অসুস্থতাজনিত ছুটি : বছরে পূর্ণ মজুরীতে ১৮ দিন। অসুস্থতার ছুটি জমা রেখে পরবর্তী বছরে যোগ হবে না।<br>চ. মাতৃত্বকালীন ছুটি : নারী শ্রমিকদের জন্য সবেতন ১৬ সপ্তাহ। সন্তান প্রসবের পূর্ব ৮ সপ্তাহ এবং পরে ৮ সপ্তাহ।<br>উল্লেখ্য যে, অত্র কারখানায় কমপক্ষে ৬ মাস চাকুরী পূর্ণ হতে হবে।</div>`)}${clause(8,'বিশ্রাম ও আহারের জন্য বিরতি :',' প্রতি কার্যদিবসে কমপক্ষে এক ঘন্টা।')}${clause(9,'হাজিরা/ পাঞ্চকার্ড :','<p>প্রত্যেক শ্রমিকের জন্য একটি হাজিরা কার্ড/ পাঞ্চ কার্ড ইস্যু করা থাকে। উক্ত হাজিরা কার্ডে কারখানাতে আসা যাওয়া এবং অতিরিক্ত কর্মঘন্টার সময় লিপিবদ্ধ থাকবে এবং আসা যাওয়া সময় নির্ধারিত মেশিনে পাঞ্চ করতে হবে।</p>')}${clause(10,'পরিচয় পত্র :',' কোম্পানী কর্তৃক পরিচয় পত্র প্রদান করা হবে।')}${clause(11,'বদলী :',' একই মালিকের মালিকানাধীন অন্য যে কোন ফ্যাক্টরীতে প্রয়োজনে আপনাকে সমজাতীয় কাজে বদলী করা যাবে এবং আপনি বদলীকৃত ফ্যাক্টরীতে কাজ করতে অনুগত থাকবেন।')}${clause(12,'চাকুরী হতে পদত্যাগ :','<p>প্রত্যেক স্থায়ী শ্রমিক ৬০ দিনের লিখিত নোটিশ মালিকের নিকট প্রদান করে চাকুরী থেকে পদত্যাগ করতে পারবেন, অন্যথায় নোটিশের পরিবর্তে ক্ষতিপূরণ বাবদ ৬০ দিনের মজুরী মালিককে প্রদান করতে হবে।</p>')}${clause(13,'চাকুরী হতে বরখাস্ত :','<p>সম্পত্তি চুরি, অভ্যাসগত বিলম্ব উপস্থিতি, বিনা ছুটিতে অভ্যাসগত অনুপস্থিতি, অশোভন আচরণ, কাজের বিশৃঙ্খলা সৃষ্টি, নিয়মবহির্ভূত ধ্বংসকারী কোন কাজ, ঊর্ধ্বতন কর্মকর্তার আইনানুগ বা যুক্তিসঙ্গত আদেশ পালন না করা সহ অন্যান্য যে কোন অসদাচরণের জন্য বাংলাদেশ শ্রম আইন, ২০০৬ অনুসরণ করে যে কোন শ্রমিককে বরখাস্ত করা হতে পারে।</p>')}${clause(14,'অন্যান্য সুবিধা ও বিধিনিষেধ :','<div class="mps3-indent">ক. উৎসব ভাতা : নিয়ম অনুযায়ী প্রতি বৎসরের দুই ঈদে দুইটি উৎসব বোনাস প্রদান করতে হবে।<br>খ. অর্জিত ছুটির টাকা : ০১ (এক) বৎসর এই কারখানাতে চাকুরী করার পর প্রতি ১৮ (আঠার) দিন কার্যদিবসের জন্য ১ (এক) দিন করে পূর্ণ বেতন বার্ষিক ছুটি ভোগ করিতে পারিবেন।<br>গ. হাজিরা বোনাস : পূর্ণমাসের উপস্থিতির উপর হাজিরা বোনাস প্রদান করা হয়।<br>ঘ. হারে বাৎসরিক বেতন বৃদ্ধি : প্রতি বছর সরকারী ঘোষণা অনুযায়ী ৫% করে বেতন বৃদ্ধি করা হয়।<br>ঙ. চিকিৎসা সুবিধা : দক্ষ চিকিৎসক কর্তৃক বিনা মূল্য ব্যবস্থাপত্র ও সামান্য ঔষধ প্রদান করা হবে।<br>চ. বিধিনিষেধ : পান, চুইংগাম ও ধূমপান এবং তৈরী পোশাকের ক্ষতি সাধন করতে পারে এরূপ কোন বস্তু খাওয়া সম্পূর্ণ নিষিদ্ধ। উক্ত দ্রব্যাদি কারো নিকট কারখানার অভ্যন্তরে পাওয়া গেলে কর্তৃপক্ষ সর্বোচ্চ শাস্তিমূলক ব্যবস্থা গ্রহণ করতে পারবে।</div>')}${clause(15,'আত্মরক্ষামূলক সরঞ্জামের ব্যবহার :',' কর্মকালীন সময়ে আত্মরক্ষামূলক সরঞ্জামাদি অবশ্যই ব্যবহার করতে হবে।<p>যদি উপরোল্লিখিত শর্তে আপনি চাকুরীতে যোগদানে সম্মত থাকেন তবে এই নিয়োগ পত্রের অনুলিপিতে স্বাক্ষর করতঃ প্রশাসনিক বিভাগে জমা দেওয়ার জন্য অনুরোধ করা হল।</p>')}<div class="mps3-manager">ব্যবস্থাপক/মহা-ব্যবস্থাপক</div><p>আমি উপরোক্ত শর্তসমূহ বুঝলাম, স্বেচ্ছায় মেনে অদ্য ${dt} ইং তারিখে চাকুরীতে যোগদান করলাম। প্রশাসনিক বিভাগে জমা দেওয়ার জন্য অনুরোধ করা হল।</p><div class="mps3-signatures"><div>তারিখ : ${dt} ইং</div><div>স্বাক্ষর : ...............................<br><br>নাম : ..................................<br><br>পিতা/স্বামীর নাম : ...................</div></div></article>`;}
const maternityStaffThreePreviousList=maternitySavedList;
maternitySavedList=function(folder){if(folder!=='staff-3')return maternityStaffThreePreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mps3-paper,.mps3-paper td{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.mps3-paper{box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto 20px;padding:30px 35px;background:white;color:black;font-size:17px;line-height:1.35}.mps3-value{color:#ed1515;font-weight:600}.mps3-date{text-align:right}.mps3-heading{position:relative;text-align:center;margin:12px 0 25px}.mps3-heading h2{font-size:30px;margin:4px 0}.mps3-heading p{font-size:16px;margin:5px 0}.mps3-heading h3,.mps3-terms-title{font-size:24px;text-align:center;text-decoration:underline;margin:15px 0 6px}.mps3-ref{position:absolute;left:0;top:8px}.mps3-identity{display:grid;grid-template-columns:110px 12px minmax(0,1fr);gap:2px}.mps3-identity>div{border-bottom:1px dotted #333}.mps3-address{display:grid;grid-template-columns:1fr 1fr;gap:2px 10px}.mps3-paper p{line-height:1.35;margin:6px 0}.mps3-clause{display:grid;grid-template-columns:28px minmax(0,1fr);gap:4px;margin:7px 0}.mps3-clause-title{font-size:18px}.mps3-clause p{margin:4px 0 0 23px}.mps3-indent{padding-left:22px}.mps3-salary{width:auto;margin:5px 0 8px 25px;font-size:18px}.mps3-salary td{padding:0 6px;border:0;white-space:normal;color:black}.mps3-total td{border-top:1px solid black;font-weight:bold}.mps3-manager{width:max-content;margin:18px 0 12px auto;border-top:1px solid black;font-weight:bold}.mps3-signatures{display:grid;grid-template-columns:1fr 220px;margin-top:20px}.mps3-second{break-before:page}@media print{body:has(.mps3-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.mps3-paper) #main,body:has(.mps3-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;margin:0!important;padding:0!important;border:0!important;overflow:visible!important}.mps3-paper{width:190mm;min-height:0;margin:0 auto;padding:4mm 3mm;font-size:11pt;line-height:1.28;break-inside:avoid;page:auto}.mps3-heading{margin:2mm 0 5mm}.mps3-heading h2{font-size:22pt}.mps3-heading p{font-size:11pt}.mps3-heading h3,.mps3-terms-title{font-size:17pt;margin:3mm 0 1mm}.mps3-identity{grid-template-columns:27mm 3mm minmax(0,1fr)}.mps3-paper p{line-height:1.28;margin:1mm 0}.mps3-clause{margin:1.5mm 0;grid-template-columns:6mm minmax(0,1fr)}.mps3-clause-title{font-size:11.5pt}.mps3-salary{font-size:11pt;margin:1mm 0 1mm 5mm}.mps3-salary td{padding:0 1mm!important}.mps3-manager{margin-top:3mm}.mps3-signatures{margin-top:4mm;font-size:11pt}.mps3-second{break-before:page;page-break-before:always}}</style>${(rows.length?rows:[null]).map(maternityStaffThree).join('')}`;};

;
;/* maternity-electrican.js */
'use strict';
function maternityElectricanAge(birth,date){const parse=s=>{const x=String(s||'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).split(/[\/.-]/).map(Number);if(x.length!==3)return null;const [d,m,raw]=x,y=raw<100?2000+raw:raw;const v=new Date(Date.UTC(y,m-1,d));return v.getUTCDate()===d&&v.getUTCMonth()===m-1?v:null;};const b=parse(birth),d=parse(date)||new Date(new Date().toLocaleDateString('en-US',{timeZone:'Asia/Dhaka'}));if(!b||b>d)return '';return d.getUTCFullYear()-b.getUTCFullYear()-(d.getUTCMonth()<b.getUTCMonth()||d.getUTCMonth()===b.getUTCMonth()&&d.getUTCDate()<b.getUTCDate()?1:0);}
function maternityElectrican(row){const e=row?.personalEntry||{},c=maternityPrintCompany(),v=i=>esc(maternityFileOneBangla(e['field-'+i]||'')),red=i=>`<span class="mpe-value">${v(i)}</span>`,date=i=>`<span class="mpe-value">${esc(maternityFileOneBangla(maternityReportDate(e['field-'+i]||'')))}</span>`,age=maternityElectricanAge(e['field-17'],e['field-6']),address=i=>`<div class="mpe-address">${['গ্রামঃ','পোঃ','থানাঃ','জেলাঃ'].map((label,k)=>`<div><b>${label}</b><span class="mpe-value">${esc(maternityFileOneBangla(e['address-'+i+'-'+k]||''))}</span></div>`).join('')}</div>`,header=`<header class="mpe-header"><img src="Farnoor_New_Logo.png" alt="Farnoor logo"><div><h2>${esc(c.bn)}</h2><p>${esc(c.address)}</p></div></header><h3>ফরম- ২৬</h3><p class="mpe-rule">[ধারা ৭৯ এবং বিধি ৬৮(৪) দ্রষ্টব্য]</p><h3 class="mpe-title">স্বাস্থ্য পরীক্ষা ও সক্ষমতার প্রত্যয়ন পত্র</h3><div class="mpe-doctor"><b>DR. NAZIA NAHAR SUCHONA</b><br>MBBS.PGT (GYNAE &amp; OBS)<br>MEDICAL OFFICER<br>BMDC Reg No. 67405</div>`,signatures='<footer class="mpe-signatures"><div><span>সংশ্লিষ্ট ব্যক্তির</span><br>স্বাক্ষর/টিপসহি</div><div><span>রেজিষ্টার্ড চিকিৎসকের</span><br>স্বাক্ষর</div></footer>',top=`<div class="mpe-box-heading">বয়স ও সক্ষমতার প্রত্যয়ন পত্র</div><div class="mpe-box-row">১। ক্রমিক নং &nbsp; : &nbsp; ${red(0)}</div><div class="mpe-box-row" style="text-align:center">তারিখ &nbsp; : &nbsp; ${date(6)}</div>`;
return `<article class="mpe-paper" aria-label="Electrican বয়স ও সক্ষমতার প্রত্যয়ন পত্র"><section class="mpe-copy">${header}<div class="mpe-box">${top}<div class="mpe-box-row">২। নাম &nbsp; : ${red(7)}</div><div class="mpe-box-row">৩। পিতার নাম &nbsp; : ${red(9)}</div><div class="mpe-box-row">৪। মাতার নাম &nbsp; : ${red(10)}</div><div class="mpe-box-row">৫। লিঙ্গ &nbsp; : ${red(11)}</div><div class="mpe-box-row">৬। স্থায়ী ঠিকানা ${address(15)}</div><div class="mpe-box-row">৭। অস্থায়ী/যোগাযোগের ঠিকানা : ${address(16)}</div><div class="mpe-box-row">৮। জন্মসনদ/ শিক্ষা সনদ অনুসারে<br><div class="mpe-birth">বয়স/জন্ম তারিখ &nbsp; : &nbsp; ${date(17)}</div></div><div class="mpe-box-row">৯। দৈহিক সক্ষমতা &nbsp; : ${red(30)}</div><div class="mpe-box-row mpe-mark">১০। সনাক্তকরণ চিহ্ন &nbsp; : ${red(25)}</div></div>${signatures}</section><section class="mpe-copy">${header}<div class="mpe-box">${top}<div class="mpe-box-row mpe-certify">আমি এই মর্মে প্রত্যয়ন করিতেছি যে (নাম)<div class="mpe-center mpe-value">${v(7)}</div><div>পিতা &nbsp; : ${red(9)}</div><div>মাতা &nbsp; : ${red(10)}</div><div>ঠিকানা &nbsp; :</div>${address(15)}কে আমি পরীক্ষা করিয়াছি।</div><div class="mpe-box-row">তিনি প্রতিষ্ঠানে বিধি ৬৮ এর তালিকাভুক্ত <b class="mpe-value">${v(1)}</b> কাজে নিযুক্ত রহিয়াছেন এবং পরীক্ষা হইতে এইরূপ পাওয়া গিয়াছে যে তাহার বয়স <b class="mpe-value">${esc(maternityFileOneBangla(age))}</b> বৎসর এবং তিনি প্রতিষ্ঠানের প্রাপ্ত বয়স্ক হিসাবে যোগ্য/উক্ত কাজে নিযুক্ত থাকিবার জন্য সক্ষম/অক্ষম।<br>তিনি <span class="mpe-illness"></span> রোগে ভুগিতেছেন (যদি থাকে)</div><div class="mpe-box-row mpe-mark">তাহার সনাক্তকরণের চিহ্নঃ &nbsp; ${red(25)}</div><div class="mpe-blank-lines"><div></div><div></div><div></div></div></div>${signatures}</section></article>`;}
const maternityElectricanPreviousList=maternitySavedList;
maternitySavedList=function(folder){if(folder!=='electrican')return maternityElectricanPreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mpe-paper,.mpe-paper section{font-family:'SutonnyOMJ','Nirmala UI','Noto Sans Bengali',sans-serif}.mpe-paper{box-sizing:border-box;width:794px;min-height:1123px;margin:0 auto;padding:70px 25px 35px;background:white;color:#000;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:56px;font-size:17px;line-height:1.35}.mpe-copy{min-width:0;display:flex;flex-direction:column}.mpe-header{display:flex;align-items:center;gap:8px;min-height:60px}.mpe-header img{width:47px;height:62px;object-fit:contain}.mpe-header h2{font-size:22px;margin:0;letter-spacing:0}.mpe-header p{font-size:12px;margin:4px 0;line-height:1.25;border-bottom:1px solid #000;padding-bottom:4px}.mpe-copy h3{font-size:23px;text-align:center;margin:4px 0}.mpe-copy .mpe-title{font-size:22px;text-decoration:underline;margin-bottom:8px}.mpe-rule{font-size:17px;text-align:center;margin:0 0 5px;line-height:1.3}.mpe-doctor{font:16px/1.25 'Times New Roman',serif;margin:0 0 12px}.mpe-value{color:#ed1515;font-weight:bold;overflow-wrap:anywhere}.mpe-box{border:1px solid #000;flex:1;display:flex;flex-direction:column}.mpe-box-heading{font-weight:bold;font-size:20px;border-bottom:1px solid #000;padding:3px}.mpe-box-row{border-bottom:1px solid #000;padding:3px;line-height:1.4}.mpe-box-row:last-child{border:0}.mpe-address{padding:7px 12px}.mpe-address>div{display:grid;grid-template-columns:45px minmax(0,1fr);gap:4px;min-height:28px}.mpe-birth{padding:6px 0 0 12px}.mpe-mark{min-height:55px}.mpe-center{text-align:center;margin:6px 0}.mpe-certify{line-height:1.7}.mpe-illness{display:inline-block;min-width:60px}.mpe-blank-lines{margin-top:auto}.mpe-blank-lines>div{border-top:1px solid #000;min-height:26px}.mpe-signatures{display:flex;justify-content:space-between;gap:14px;text-align:center;margin-top:50px;font-size:15px;font-weight:bold}.mpe-signatures span{border-top:1px solid #000;padding-top:3px;display:inline-block}.mpe-paper+.mpe-paper{break-before:page}@media print{body:has(.mpe-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.mpe-paper) #main,body:has(.mpe-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;padding:0!important;margin:0!important;border:0!important;overflow:visible!important}.mpe-paper{width:190mm;min-height:0;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:13mm;padding:18mm 2mm 5mm;font-size:10.5pt;line-height:1.3;break-inside:avoid;page:auto}.mpe-header{gap:2mm;min-height:16mm}.mpe-header img{width:12mm;height:16mm}.mpe-header h2{font-size:14pt}.mpe-header p{font-size:8pt}.mpe-copy h3{font-size:16pt}.mpe-copy .mpe-title{font-size:14pt}.mpe-rule{font-size:11pt}.mpe-doctor{font-size:10.5pt}.mpe-box-heading{font-size:12.5pt}.mpe-box-row{padding:1mm;line-height:1.35}.mpe-address{padding:2mm 3mm}.mpe-address>div{grid-template-columns:11mm minmax(0,1fr);min-height:7mm}.mpe-mark{min-height:14mm}.mpe-blank-lines>div{min-height:6mm}.mpe-signatures{font-size:10pt;margin-top:13mm}.mpe-certify{line-height:1.6}}</style>${(rows.length?rows:[null]).map(maternityElectrican).join('')}`;};

;
;/* maternity-benefit-entry.js */
'use strict';
const maternityBenefitFields=[['cardNo','Card No'],['name','Name'],['designation','Designation'],['section','Section'],['payment','Payment'],['joiningDate','Joining Date'],['salary','Salary'],['calculationMonth','Calculatin Month'],['periodML','Period M/L'],['lastMonth','Last Month'],['daysDividedBy','Days Divided by']];
let maternityBenefitDraft={},maternityBenefitId=null,maternityBenefitBusy=false,maternityBenefitPending=null;
const maternityBenefitChoices={designation:personalEntryOptions['field-2'],section:personalEntryOptions['field-4']};
function maternityBenefitRows(){return(state.records['admin-documents']||[]).filter(row=>row.maternityBenefit===true);}
function renderMaternityBenefitEntry(){const input=(key,label)=>`<div class="maternity-benefit-row"><label for="maternity-benefit-${key}">${label}</label><input id="maternity-benefit-${key}" data-maternity-benefit="${key}" value="${esc(maternityBenefitDraft[key]||'')}" maxlength="500" autocomplete="off" ${maternityBenefitChoices[key]?`list="maternity-benefit-options-${key}"`:''} ${key==='joiningDate'?'placeholder="DD/MM/YYYY"':''}></div>`;$('#main').innerHTML='<div class="page-heading" style="justify-content:center;text-align:center"><div><h2 style="font-size:32px;font-weight:800">Maternity File</h2></div></div><section class="panel"><style>.maternity-benefit-form{max-width:850px;margin:auto}.maternity-benefit-row{display:grid;grid-template-columns:minmax(145px,32%) minmax(0,1fr);align-items:center;gap:20px;padding:9px 0;border-bottom:1px solid #e1ece4}.maternity-benefit-row label{font-size:17px}.maternity-benefit-row input{font-size:17px;min-height:42px}@media(max-width:520px){.maternity-benefit-row{grid-template-columns:130px minmax(0,1fr);gap:10px}.maternity-benefit-row label{font-size:15px}}</style><form id="maternityBenefitForm" class="maternity-benefit-form" aria-label="Maternity File New Entry">'+maternityBenefitFields.map(([key,label])=>input(key,label)).join('')+Object.entries(maternityBenefitChoices).map(([key,choices])=>`<datalist id="maternity-benefit-options-${key}">${choices.map(value=>`<option value="${esc(value)}"></option>`).join('')}</datalist>`).join('')+'<div style="display:flex;justify-content:flex-end;margin-top:22px"><button type="submit" id="maternityBenefitSave" class="primary" data-page-action-required="edit" '+(maternityBenefitBusy?'disabled':'')+'>'+(maternityBenefitBusy?'Saving…':'Save')+'</button></div></form></section>';if(typeof applyActionControls==='function')applyActionControls();}
function renderMaternityBenefitReport(){const rows=maternityBenefitRows();$('#main').innerHTML='<div class="page-heading" style="justify-content:center;text-align:center"><div><h2 style="font-size:28px;font-weight:800">ENTRY REPORT</h2></div></div><section class="panel"><div class="table-wrap"><table id="maternityBenefitReport"><thead><tr><th>SL</th>'+maternityBenefitFields.map(([,label])=>'<th>'+label+'</th>').join('')+'<th class="no-print">Action</th></tr></thead><tbody>'+rows.map((row,i)=>'<tr><td>'+(i+1)+'</td>'+maternityBenefitFields.map(([key])=>'<td>'+esc(row.maternityBenefitEntry?.[key]||'')+'</td>').join('')+'<td class="no-print"><button type="button" data-maternity-benefit-open="'+esc(row.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="13" style="text-align:center">No saved entries.</td></tr>')+'</tbody></table></div></section>';if(typeof applyActionControls==='function')applyActionControls();}
const previousMaternityBenefitRenderPage=renderPage;renderPage=function(...args){if(activePage==='admin-maternity-new-entry')return renderMaternityBenefitEntry();if(activePage==='admin-maternity-entry-report')return renderMaternityBenefitReport();return previousMaternityBenefitRenderPage.apply(this,args);};
$('#main').addEventListener('input',event=>{const key=event.target.dataset.maternityBenefit;if(key)maternityBenefitDraft[key]=event.target.value;});
$('#main').addEventListener('focusout',event=>{if(event.target.dataset.maternityBenefit!=='joiningDate'||!event.target.value.trim())return;try{event.target.value=normalizeDate(event.target.value);maternityBenefitDraft.joiningDate=event.target.value;event.target.setCustomValidity('');}catch(error){event.target.setCustomValidity(error.message);}});
$('#main').addEventListener('keydown',event=>{if(activePage!=='admin-maternity-new-entry'||!event.target.matches('[data-maternity-benefit]')||event.isComposing||event.ctrlKey||event.altKey||event.metaKey||!['Enter','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();const inputs=[...$('#main').querySelectorAll('[data-maternity-benefit]')],index=inputs.indexOf(event.target),next=inputs[index+(event.key==='ArrowUp'?-1:1)];if(next){next.focus();next.select();}else if(event.key==='Enter'&&index===inputs.length-1)$('#maternityBenefitSave').focus();});
async function saveMaternityBenefit(){if(maternityBenefitBusy)return;if(!FarnoorAccess.canAction('admin-documents','edit'))return toast('Documents edit permission is required.');const entry=Object.fromEntries(maternityBenefitFields.map(([key])=>[key,String(document.getElementById('maternity-benefit-'+key)?.value??maternityBenefitDraft[key]??'').trim()]));if(!entry.cardNo||!entry.name)return toast('Card No ও Name লিখুন।');if(entry.cardNo.length>120||entry.name.length>200||Object.values(entry).some(v=>v.length>500))return toast('ঘরের লেখা বেশি বড় হয়েছে।');try{if(entry.joiningDate)entry.joiningDate=normalizeDate(entry.joiningDate);}catch(error){return toast(error.message);}const next=structuredClone(state),rows=next.records['admin-documents']||[],existing=maternityBenefitId&&rows.find(r=>r.id===maternityBenefitId&&r.maternityBenefit);if(maternityBenefitId&&!existing)return toast('Refresh before saving.');const now=new Date(),record={...existing,id:maternityBenefitId||maternityBenefitPending?.id||crypto.randomUUID(),reference:entry.cardNo,name:entry.name,quantity:0,date:now.toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),status:'Completed',maternityBenefit:true,maternityBenefitEntry:entry,createdAt:existing?.createdAt||maternityBenefitPending?.createdAt||now.toISOString(),updatedAt:now.toISOString()};const map={cardNo:0,name:7,designation:2,section:4,payment:41,joiningDate:6,salary:22,calculationMonth:42,periodML:43,lastMonth:44,daysDividedBy:45};record.personalFile=true;record.personalFolder='file-1';record.personalEntry=Object.fromEntries(Object.entries(map).map(([key,index])=>['field-'+index,entry[key]]));if(maternityBenefitPending&&JSON.stringify(maternityBenefitPending.maternityBenefitEntry)===JSON.stringify(entry)){record.date=maternityBenefitPending.date;record.createdAt=maternityBenefitPending.createdAt;record.updatedAt=maternityBenefitPending.updatedAt;}maternityBenefitPending=structuredClone(record);if(existing)rows[rows.indexOf(existing)]=record;else rows.unshift(record);next.records['admin-documents']=rows;maternityBenefitBusy=true;$('#maternityBenefitSave').disabled=true;$('#maternityBenefitSave').textContent='Saving…';try{if(await commit(next,{personalFile:record})){maternityBenefitPending=null;maternityBenefitId=null;maternityBenefitDraft={};toast('Maternity File saved online.');goPage('admin-maternity-entry-report');}else{toast('সেভ হয়নি। লেখা রাখা আছে—আবার Save চাপুন।');}}catch(error){toast(error.message+' লেখা রাখা আছে।');}finally{maternityBenefitBusy=false;if(activePage==='admin-maternity-new-entry')renderPage();}}
$('#main').addEventListener('submit',event=>{if(event.target.id!=='maternityBenefitForm')return;event.preventDefault();void saveMaternityBenefit();});
$('#main').addEventListener('click',event=>{const button=event.target.closest('[data-maternity-benefit-open]');if(!button)return;const record=maternityBenefitRows().find(r=>r.id===button.dataset.maternityBenefitOpen);if(!record)return;maternityBenefitId=record.id;maternityBenefitDraft={...record.maternityBenefitEntry};goPage('admin-maternity-new-entry');});




;
;/* maternity-calculation-month.js */
'use strict';
function maternityCalculationNumber(value){const raw=String(value??'').replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).replace(/[,\s]/g,'');return raw!==''&&Number.isFinite(Number(raw))?Number(raw):null;}
function maternityCalculationAmounts(entry){const salary=maternityCalculationNumber(entry?.salary),days=maternityCalculationNumber(entry?.daysDividedBy);if(salary===null||salary<0||days===null||days<=0)return{salary,days,average:null,first:null,second:null,total:null};const average=salary/days,payment=average*56;return{salary,days,average,first:payment,second:payment,total:payment*2};}
function maternityCalculationPeriod(value){const text=String(value||'').trim(),parts=text.split(/\s+(?:to|থেকে|-)\s+|\s*[–—]\s*/i),format=v=>{try{return normalizeDate(v).replaceAll('/','.');}catch{return v;}};if(parts.length===2)return parts.map(format);const month=text.replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).match(/^(\d{1,2})[/.\-](\d{4})$/);if(month&&+month[1]>=1&&+month[1]<=12){const m=+month[1],y=+month[2],mm=String(m).padStart(2,'0');return['01.'+mm+'.'+y,String(new Date(y,m,0).getDate())+'.'+mm+'.'+y];}return[format(text),''];}
function maternityCalculationForm(row){const e=row?.maternityBenefitEntry||{},c=maternityPrintCompany(),a=maternityCalculationAmounts(e),v=key=>esc(e[key]||''),red=key=>`<span class="mc-value">${v(key)}</span>`,money=n=>n===null?'':Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}),period=maternityCalculationPeriod(e.calculationMonth),leave=maternityCalculationPeriod(e.periodML),line=(label,value)=>`<div class="mc-line"><b>${label}</b><b>:</b><div>${value}</div></div>`,tableRow=total=>`<tr class="${total?'mc-total':''}">${total?'<th colspan="2">Total=</th>':'<td>1</td><td class="mc-value">'+v('lastMonth')+'</td>'}<td class="mc-value">${a.days===null?'':esc(a.days)}</td><td class="mc-value">${money(a.salary)}</td><td class="mc-value">${money(a.average)}</td><td class="mc-value">${money(a.first)}</td><td class="mc-value">${money(a.second)}</td><td class="mc-value">${money(a.total)}</td></tr>`;
return `<article class="mc-paper" aria-label="Calculation of Maternity Benefit"><header class="mc-heading"><h2 class="mc-value">${esc(maternityCompanyChoice||'FARNOOR GARMENTS LTD')}</h2><p class="mc-value">${esc(c.en)}</p><h3>Calculation of Maternity Benefit</h3></header><section class="mc-details">${line('Name',red('name'))}${line('Card No',red('cardNo'))}${line('Designation',red('designation'))}${line('Line/Section',red('section'))}${line('Gross Salary',`<span class="mc-value">${a.salary===null?'':a.salary.toLocaleString('en-US')}</span>`)}${line('Joining Date',`<span class="mc-value">${esc(maternityReportDate(e.joiningDate||'').replaceAll('/','.'))}</span><span class="mc-date-hint">(dd/mm/yyyy)</span>`)}<div class="mc-period"><b>Period of calculation for maternity leave benefit :</b><span class="mc-value">${esc(period[0])}</span><span>to</span><span class="mc-value">${esc(period[1])}</span></div><div class="mc-period mc-leave"><b>Period of M/L</b><b>:</b><span class="mc-value">${esc(leave[0])}</span><span>to</span><span class="mc-value">${esc(leave[1])}</span></div></section><table class="mc-table"><colgroup>${[4,14,16,11,11,13,15,16].map(w=>`<col style="width:${w}%">`).join('')}</colgroup><thead><tr><th>SL.</th><th>Last Month</th><th>Number of days<br>Divided by</th><th>Received<br>Amount<br>Last Month</th><th>Per day<br>Average<br>wages</th><th>1st Payment<br>for<br>56 days</th><th>2nd Payment<br>for<br>56 days</th><th>Total Payable<br>Amount in Tk.</th></tr></thead><tbody>${tableRow(false)}${tableRow(true)}</tbody></table>${row&&a.average===null?'<p class="mc-input-note no-print">Salary এবং শূন্যের বেশি Days Divided by লিখলে হিসাব দেখাবে।</p>':''}<p class="mc-formula">Calculation : Total earnings received during the last month ÷ &nbsp; <b>${a.days===null?'':esc(a.days)}</b> &nbsp; days × 112 days ÷ 2 = 56 days</p><footer class="mc-signatures"><span>Prepared by</span><span>Checked by</span><span>Approved by</span></footer></article>`;}
const maternityCalculationPreviousList=maternitySavedList;maternitySavedList=function(folder){if(folder!=='calculation-month')return maternityCalculationPreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mc-paper{box-sizing:border-box;width:794px;min-height:1123px;padding:72px 24px 40px;margin:0 auto;background:white;color:#000;font:16px/1.3 'Times New Roman',serif;display:flex;flex-direction:column}.mc-heading{text-align:center}.mc-heading h2{font-size:24px;margin:0}.mc-heading p{font-size:18px;margin:0}.mc-heading h3{font-size:21px;text-decoration:underline;margin:20px 0 60px}.mc-value{color:red!important}.mc-details{margin:0 8px 44px;font-weight:bold}.mc-line{display:grid;grid-template-columns:140px 12px minmax(0,1fr);margin:3px 0}.mc-date-hint{font-weight:normal;margin-left:140px}.mc-period{display:flex;gap:20px;align-items:baseline;margin:3px 0}.mc-leave{gap:18px}.mc-leave>b:first-child{width:122px}.mc-table{border-collapse:collapse;table-layout:fixed;width:100%;font-size:15px}.mc-table th,.mc-table td{border:1px solid #000;padding:6px!important;white-space:normal!important;overflow-wrap:anywhere;font:inherit;color:#000;background:white;letter-spacing:0;text-transform:none;text-align:center}.mc-table th{font-weight:bold;height:85px}.mc-table td,.mc-table .mc-total th{height:53px}.mc-table .mc-total{font-weight:bold}.mc-table .mc-total th{text-align:right}.mc-formula{text-align:center;font-size:17px;margin:85px 0 0}.mc-signatures{display:flex;justify-content:space-between;margin-top:auto;padding:100px 16px 0}.mc-signatures span{border-top:1px solid #000;min-width:115px;text-align:center}.mc-paper+.mc-paper{break-before:page}@page maternityCalculationPortrait{size:A4 portrait;margin:8mm}@media print{body:has(.mc-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.mc-paper) #main,body:has(.mc-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;border:0!important;padding:0!important;margin:0!important;overflow:visible!important}.mc-paper{width:190mm;min-height:270mm;padding:15mm 0 8mm;font-size:11pt;line-height:1.2;page:auto;break-inside:avoid}.mc-heading h2{font-size:18pt}.mc-heading p{font-size:13pt}.mc-heading h3{font-size:16pt;margin:5mm 0 20mm}.mc-details{margin:0 1mm 13mm}.mc-line{grid-template-columns:36mm 3mm minmax(0,1fr);margin:1mm 0}.mc-period{gap:5mm;margin:1mm 0}.mc-leave>b:first-child{width:32mm}.mc-date-hint{margin-left:35mm}.mc-table{font-size:10pt}.mc-table th{height:25mm}.mc-table td,.mc-table .mc-total th{height:14mm}.mc-table th,.mc-table td{padding:1mm!important}.mc-formula{font-size:11pt;margin-top:23mm}.mc-signatures{padding:20mm 5mm 0;font-size:11pt}}</style>${(rows.length?rows:[null]).map(maternityCalculationForm).join('')}`;};
function maternityCalculationExcelMatrix(row){const e=row?.maternityBenefitEntry||{},a=maternityCalculationAmounts(e);return[[maternityCompanyChoice],['Calculation of Maternity Benefit'],...maternityBenefitFields.map(([key,label])=>[label,e[key]||'']),[],['Last Month','Number of days Divided by','Received Amount Last Month','Per day Average wages','1st Payment for 56 days','2nd Payment for 56 days','Total Payable Amount in Tk.'],[e.lastMonth||'',a.days??'',a.salary??'',a.average??'',a.first??'',a.second??'',a.total??'']];}
$('#main').addEventListener('click',async event=>{if(activePage!=='admin-maternity-form-calculation-month'||!event.target.closest('#maternityFormExcel'))return;event.preventDefault();event.stopImmediatePropagation();if(!FarnoorAccess.canAction('admin-documents','view'))return;const rows=maternityCardLookup?maternityCardRows():[];if(!rows.length)return toast('এই ID-এর Maternity Entry Report-এর তথ্য পাওয়া যায়নি।');const matrix=rows.flatMap(row=>maternityCalculationExcelMatrix(row)),data=makeXlsx(matrix,'Calculatin Month'),name='Calculatin-Month-'+maternityCardLookup.replace(/[^a-zA-Z0-9০-৯_-]/g,'_')+'.xlsx',mime='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';try{if(window.showSaveFilePicker){const handle=await window.showSaveFilePicker({suggestedName:name,types:[{description:'Excel workbook',accept:{[mime]:['.xlsx']}}]});const stream=await handle.createWritable();await stream.write(new Blob([data],{type:mime}));await stream.close();toast('Excel file saved.');}else download(name,data,mime);}catch(error){if(error.name!=='AbortError')toast(error.message);}},true);

;
;/* maternity-first-payment.js */
'use strict';
function maternityFirstAmounts(entry){const a=maternityCalculationAmounts(entry);if(a.first===null)return{gross:null,stamp:null,total:null};const gross=Math.round(a.first);return{gross,stamp:20,total:gross-20};}
function maternityAmountWords(value){if(value===null||!Number.isFinite(value))return'';const small=['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'],tens=['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];function words(n){if(n<20)return small[n];if(n<100)return tens[Math.floor(n/10)]+(n%10?' '+small[n%10]:'');if(n<1000)return small[Math.floor(n/100)]+' Hundred'+(n%100?' '+words(n%100):'');for(const [unit,name]of [[1e12,'Trillion'],[1e9,'Billion'],[1e6,'Million'],[1000,'Thousand']])if(n>=unit)return words(Math.floor(n/unit))+' '+name+(n%unit?' '+words(n%unit):'');}return(value<0?'Minus ':'')+words(Math.abs(Math.round(value)))+' Only';}
function maternityFirstPaymentForm(row){const e=row?.maternityBenefitEntry||{},c=maternityPrintCompany(),a=maternityFirstAmounts(e),red=key=>`<span class="mfp-value">${esc(e[key]||'')}</span>`,money=n=>n===null?'':n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}),line=(label,value)=>`<div class="mfp-line"><span>${label}</span><b>:</b><div>${value}</div></div>`;
return `<article class="mfp-paper" aria-label="1st Payment Maternity Benefit Payment Voucher"><header class="mfp-heading"><h2 class="mfp-value">${esc(maternityCompanyChoice||'FARNOOR GARMENTS LTD')}</h2><p class="mfp-value">${esc(c.en)}</p><h3>Maternity Benefit Payment Voucher</h3><b class="mfp-badge">1st payment</b></header><section class="mfp-details">${line('Date',`<span class="mfp-value">${esc(maternityReportDate(e.payment||'').replaceAll('/','.'))}</span>`)}<div class="mfp-identity">${line('Name',red('name'))}${line('Designation',red('designation'))}${line('Section',red('section'))}${line('Card Number',red('cardNo'))}</div></section><div class="mfp-table-wrap"><table class="mfp-table"><colgroup><col style="width:18%"><col style="width:12%"><col style="width:32%"><col style="width:23%"><col style="width:15%"></colgroup><thead><tr><th>Mode of Payment</th><th>Accounts<br>Code</th><th>Accounts Title</th><th>Amount (Taka)</th><th>Folio No.</th></tr></thead><tbody><tr><th>Cash</th><td></td><td>Maternity Benefit</td><td class="mfp-value mfp-money">${money(a.gross)}</td><td></td></tr>${Array.from({length:5},()=>'<tr><td></td><td></td><td></td><td></td><td></td></tr>').join('')}<tr><th colspan="3">Stamp</th><td class="mfp-value mfp-money">${a.stamp===null?'':a.stamp}</td><td></td></tr><tr><th colspan="3">Total Taka =</th><td class="mfp-value mfp-money"><b>${money(a.total)}</b></td><td></td></tr></tbody></table><svg class="mfp-diagonal" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="5" y1="100" x2="95" y2="0" stroke="#000" stroke-width="1" vector-effect="non-scaling-stroke" /></svg></div><p class="mfp-inwords"><b>Inword: &nbsp; Taka &nbsp; <span class="mfp-value">${esc(maternityAmountWords(a.total))}</span></b></p><div class="mfp-recipient"><span>Recipient's Signature</span></div><footer class="mfp-signatures"><span>Prepared by</span><span>Checked by</span><span>Approved by</span></footer></article>`;}
const maternityFirstPreviousList=maternitySavedList;maternitySavedList=function(folder){if(folder!=='first-payment')return maternityFirstPreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.mfp-paper{box-sizing:border-box;width:794px;min-height:1123px;padding:52px 24px 28px;margin:0 auto;background:#fff;color:#000;font:16px/1.3 'Times New Roman',serif;display:flex;flex-direction:column}.mfp-heading{text-align:center;position:relative}.mfp-heading h2{font-size:24px;margin:0}.mfp-heading p{font-size:18px;margin:0}.mfp-heading h3{font-size:21px;text-decoration:underline;margin:25px 0 28px}.mfp-badge{position:absolute;right:8px;bottom:0;border:1px solid #000;padding:1px 15px}.mfp-value{color:red!important}.mfp-details{margin:20px 4px 45px}.mfp-line{display:grid;grid-template-columns:120px 12px minmax(0,1fr);margin:4px 0}.mfp-identity{margin-top:24px}.mfp-table-wrap{position:relative}.mfp-table{width:100%;border-collapse:collapse;table-layout:fixed;font-size:15px}.mfp-table th,.mfp-table td{border:1px solid #000;padding:5px!important;white-space:normal!important;overflow-wrap:anywhere;font:inherit;background:#fff;color:black;text-transform:none;letter-spacing:0;text-align:center;height:39px}.mfp-table th{font-weight:bold}.mfp-table .mfp-money{text-align:right}.mfp-diagonal{pointer-events:none;position:absolute;right:16%;top:25%;width:17%;bottom:24%;height:51%;overflow:visible}.mfp-inwords{font-family:Arial,sans-serif;font-size:16px;margin:40px 10px 0}.mfp-recipient{margin:115px 30px 0}.mfp-recipient span{display:inline-block;border-top:1px solid black;padding:1px 18px}.mfp-signatures{display:flex;justify-content:space-between;margin-top:auto;padding:100px 12px 0}.mfp-signatures span{border-top:1px solid #000;min-width:110px;text-align:center}.mfp-paper+.mfp-paper{break-before:page}@page maternityFirstPortrait{size:A4 portrait;margin:8mm}@media print{body:has(.mfp-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.mfp-paper) #main,body:has(.mfp-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;border:0!important;padding:0!important;margin:0!important;overflow:visible!important}.mfp-paper{width:190mm;min-height:270mm;padding:10mm 8mm 5mm;font-size:11pt;line-height:1.2;page:auto;break-inside:avoid}.mfp-heading h2{font-size:18pt}.mfp-heading p{font-size:13pt}.mfp-heading h3{font-size:16pt;margin:7mm 0 8mm}.mfp-badge{font-size:11pt;padding:0 4mm}.mfp-details{margin:6mm 0 12mm}.mfp-line{grid-template-columns:31mm 3mm minmax(0,1fr);margin:1mm 0}.mfp-identity{margin-top:7mm}.mfp-table{font-size:10.5pt}.mfp-table th,.mfp-table td{height:10mm;padding:1mm!important}.mfp-inwords{font-size:11pt;margin:10mm 2mm 0}.mfp-recipient{margin:30mm 6mm 0}.mfp-signatures{padding:20mm 3mm 0;font-size:11pt}}</style>${(rows.length?rows:[null]).map(maternityFirstPaymentForm).join('')}`;};
function maternityFirstExcelMatrix(row){const e=row?.maternityBenefitEntry||{},a=maternityFirstAmounts(e);return[[maternityCompanyChoice],[maternityPrintCompany().en],['Maternity Benefit Payment Voucher','1st payment'],['Date',e.payment||''],['Name',e.name||''],['Designation',e.designation||''],['Section',e.section||''],['Card Number',e.cardNo||''],[],['Mode of Payment','Accounts Code','Accounts Title','Amount (Taka)','Folio No.'],['Cash','','Maternity Benefit',a.gross??'',''],['Stamp','','',a.stamp??'',''],['Total Taka','','',a.total??'',''],['Inword: Taka',maternityAmountWords(a.total)]];}
$('#main').addEventListener('click',async event=>{if(activePage!=='admin-maternity-form-first-payment'||!event.target.closest('#maternityFormExcel'))return;event.preventDefault();event.stopImmediatePropagation();if(!FarnoorAccess.canAction('admin-documents','view'))return;const rows=maternityCardLookup?maternityCardRows():[];if(!rows.length)return toast('এই ID-এর Maternity Entry Report-এর তথ্য পাওয়া যায়নি।');const data=makeXlsx(rows.flatMap(maternityFirstExcelMatrix),'1st Payment'),name='1st-Payment-'+maternityCardLookup.replace(/[^a-zA-Z0-9০-৯_-]/g,'_')+'.xlsx',mime='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';try{if(window.showSaveFilePicker){const handle=await window.showSaveFilePicker({suggestedName:name,types:[{description:'Excel workbook',accept:{[mime]:['.xlsx']}}]});const stream=await handle.createWritable();await stream.write(new Blob([data],{type:mime}));await stream.close();toast('Excel file saved.');}else download(name,data,mime);}catch(error){if(error.name!=='AbortError')toast(error.message);}},true);

;
;/* maternity-second-payment.js */
'use strict';
function maternitySecondAmounts(entry){const a=maternityCalculationAmounts(entry);if(a.second===null)return{gross:null,stamp:null,total:null};const gross=Math.round(a.second*100)/100;return{gross,stamp:20,total:Math.round((gross-20)*100)/100};}
function maternitySecondWords(value){if(value===null||!Number.isFinite(value))return '';const cents=Math.round(Math.abs(value)*100),whole=Math.floor(cents/100),paise=cents%100;return(value<0?'Minus ':'')+maternityAmountWords(whole).replace(/ Only$/,'')+(paise?' and Paise '+maternityAmountWords(paise).replace(/ Only$/,''):'')+' Only';}
function maternitySecondPaymentForm(row){const e=row?.maternityBenefitEntry||{},c=maternityPrintCompany(),a=maternitySecondAmounts(e),red=key=>`<span class="msp-value">${esc(e[key]||'')}</span>`,money=n=>n===null?'':n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}),line=(label,value)=>`<div class="msp-line"><span>${label}</span><b>:</b><div>${value}</div></div>`;
return `<article class="msp-paper" aria-label="2nd Payment Maternity Benefit Payment Voucher"><header class="msp-heading"><h2 class="msp-value">${esc(maternityCompanyChoice||'FARNOOR GARMENTS LTD')}</h2><p class="msp-value">${esc(c.en)}</p><h3>Maternity Benefit Payment Voucher</h3><b class="msp-badge">2nd payment</b></header><section class="msp-details">${line('Date',`<span class="msp-value">${esc(maternityReportDate(e.payment||'').replaceAll('/','.'))}</span>`)}<div class="msp-identity">${line('Name',red('name'))}${line('Designation',red('designation'))}${line('Section',red('section'))}${line('Card Number',red('cardNo'))}</div></section><div class="msp-table-wrap"><table class="msp-table"><colgroup><col style="width:18%"><col style="width:12%"><col style="width:32%"><col style="width:23%"><col style="width:15%"></colgroup><thead><tr><th>Mode of Payment</th><th>Accounts<br>Code</th><th>Accounts Title</th><th>Amount (Taka)</th><th>Folio No.</th></tr></thead><tbody><tr><th>Cash</th><td></td><td>Maternity Benefit</td><td class="msp-value msp-money">${money(a.gross)}</td><td></td></tr>${Array.from({length:5},()=>'<tr><td></td><td></td><td></td><td></td><td></td></tr>').join('')}<tr><th colspan="3">Stamp</th><td class="msp-value msp-money">${money(a.stamp)}</td><td></td></tr><tr><th colspan="3">Total Taka =</th><td class="msp-value msp-money"><b>${money(a.total)}</b></td><td></td></tr></tbody></table><svg class="msp-diagonal" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="5" y1="100" x2="95" y2="0" stroke="#000" stroke-width="1" vector-effect="non-scaling-stroke" /></svg></div><p class="msp-inwords"><b>Inword: &nbsp; Taka &nbsp; <span class="msp-value">${esc(maternitySecondWords(a.total))}</span></b></p><div class="msp-recipient"><span>Recipient's Signature</span></div><footer class="msp-signatures"><span>Prepared by</span><span>Checked by</span><span>Approved by</span></footer></article>`;}
const maternitySecondPreviousList=maternitySavedList;maternitySavedList=function(folder){if(folder!=='second-payment')return maternitySecondPreviousList(folder);const rows=maternityCardLookup?maternityCardRows():[];return `<style>.msp-paper{box-sizing:border-box;width:794px;min-height:1123px;padding:52px 24px 28px;margin:0 auto;background:#fff;color:#000;font:16px/1.3 'Times New Roman',serif;display:flex;flex-direction:column}.msp-heading{text-align:center;position:relative}.msp-heading h2{font-size:24px;margin:0}.msp-heading p{font-size:18px;margin:0}.msp-heading h3{font-size:21px;text-decoration:underline;margin:25px 0 28px}.msp-badge{position:absolute;right:8px;bottom:0;border:1px solid #000;padding:1px 15px}.msp-value{color:red!important}.msp-details{margin:20px 4px 45px}.msp-line{display:grid;grid-template-columns:120px 12px minmax(0,1fr);margin:4px 0}.msp-identity{margin-top:24px}.msp-table-wrap{position:relative}.msp-table{width:100%;border-collapse:collapse;table-layout:fixed;font-size:15px}.msp-table th,.msp-table td{border:1px solid #000;padding:5px!important;white-space:normal!important;overflow-wrap:anywhere;font:inherit;background:#fff;color:black;text-transform:none;letter-spacing:0;text-align:center;height:39px}.msp-table th{font-weight:bold}.msp-table .msp-money{text-align:right}.msp-diagonal{pointer-events:none;position:absolute;right:16%;top:25%;width:17%;bottom:24%;height:51%;overflow:visible}.msp-inwords{font-family:Arial,sans-serif;font-size:16px;margin:40px 10px 0}.msp-recipient{margin:115px 30px 0}.msp-recipient span{display:inline-block;border-top:1px solid black;padding:1px 18px}.msp-signatures{display:flex;justify-content:space-between;margin-top:auto;padding:100px 12px 0}.msp-signatures span{border-top:1px solid #000;min-width:110px;text-align:center}.msp-paper+.msp-paper{break-before:page}@page maternitySecondPortrait{size:A4 portrait;margin:8mm}@media print{body:has(.msp-paper) #main>:not(#maternityFilePrintContent){display:none!important}body:has(.msp-paper) #main,body:has(.msp-paper) #maternityFilePrintContent{width:194mm!important;max-width:194mm!important;border:0!important;padding:0!important;margin:0!important;overflow:visible!important}.msp-paper{width:190mm;min-height:270mm;padding:10mm 8mm 5mm;font-size:11pt;line-height:1.2;page:auto;break-inside:avoid}.msp-heading h2{font-size:18pt}.msp-heading p{font-size:13pt}.msp-heading h3{font-size:16pt;margin:7mm 0 8mm}.msp-badge{font-size:11pt;padding:0 4mm}.msp-details{margin:6mm 0 12mm}.msp-line{grid-template-columns:31mm 3mm minmax(0,1fr);margin:1mm 0}.msp-identity{margin-top:7mm}.msp-table{font-size:10.5pt}.msp-table th,.msp-table td{height:10mm;padding:1mm!important}.msp-inwords{font-size:11pt;margin:10mm 2mm 0}.msp-recipient{margin:30mm 6mm 0}.msp-signatures{padding:20mm 3mm 0;font-size:11pt}}</style>${(rows.length?rows:[null]).map(maternitySecondPaymentForm).join('')}`;};
function maternitySecondExcelMatrix(row){const e=row?.maternityBenefitEntry||{},a=maternitySecondAmounts(e);return[[maternityCompanyChoice],[maternityPrintCompany().en],['Maternity Benefit Payment Voucher','2nd payment'],['Date',e.payment||''],['Name',e.name||''],['Designation',e.designation||''],['Section',e.section||''],['Card Number',e.cardNo||''],[],['Mode of Payment','Accounts Code','Accounts Title','Amount (Taka)','Folio No.'],['Cash','','Maternity Benefit',a.gross??'',''],['Stamp','','',a.stamp??'',''],['Total Taka','','',a.total??'',''],['Inword: Taka',maternitySecondWords(a.total)]];}
$('#main').addEventListener('click',async event=>{if(activePage!=='admin-maternity-form-second-payment'||!event.target.closest('#maternityFormExcel'))return;event.preventDefault();event.stopImmediatePropagation();if(!FarnoorAccess.canAction('admin-documents','view'))return;const rows=maternityCardLookup?maternityCardRows():[];if(!rows.length)return toast('এই ID-এর Maternity Entry Report-এর তথ্য পাওয়া যায়নি।');const data=makeXlsx(rows.flatMap(maternitySecondExcelMatrix),'2nd Payment'),name='2nd-Payment-'+maternityCardLookup.replace(/[^a-zA-Z0-9০-৯_-]/g,'_')+'.xlsx',mime='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';try{if(window.showSaveFilePicker){const handle=await window.showSaveFilePicker({suggestedName:name,types:[{description:'Excel workbook',accept:{[mime]:['.xlsx']}}]});const stream=await handle.createWritable();await stream.write(new Blob([data],{type:mime}));await stream.close();toast('Excel file saved.');}else download(name,data,mime);}catch(error){if(error.name!=='AbortError')toast(error.message);}},true);

;
;/* service-benefit-entry.js */
'use strict';
const serviceBenefitFields=[['cardNo','ID NO'],['name','Name'],['designation','Designation'],['joiningDate','Date Of Joining'],['salary','Salary'],['release','Release']];
const serviceBenefitReportFields=[...serviceBenefitFields.slice(0,5),['basic','Basic'],...serviceBenefitFields.slice(5)];
let serviceBenefitDraft={},serviceBenefitId=null,serviceBenefitBusy=false,serviceBenefitPending=null;
let serviceBenefitSearchText='',serviceBenefitSearchFilter=null;
const serviceBenefitChoices={designation:personalEntryOptions['field-2']};
function serviceBenefitNavigation(){return '<nav class="service-benefit-navigation no-print" aria-label="Service Benefit pages"><button type="button" data-service-nav="admin-service-new-entry" aria-pressed="'+(activePage==='admin-service-new-entry')+'"><span aria-hidden="true">✎</span> New Input</button><button type="button" data-service-nav="admin-service-print" aria-pressed="'+(activePage==='admin-service-print')+'"><span aria-hidden="true">🖨</span> Print</button><button type="button" data-service-nav="admin-service-entry-report" aria-pressed="'+(activePage==='admin-service-entry-report')+'"><span aria-hidden="true">▤</span> Input Report</button></nav>';}
$('#main').addEventListener('click',event=>{const button=event.target.closest('[data-service-nav]');if(button){if(button.dataset.serviceNav==='admin-service-new-entry'){serviceBenefitId=null;serviceBenefitPending=null;serviceBenefitDraft={};serviceProfileLastValues={};}if(button.dataset.serviceNav==='admin-service-entry-report'){serviceBenefitSearchText='';serviceBenefitSearchFilter=null;}goPage(button.dataset.serviceNav);}});
function serviceBenefitRows(){return(state.records['admin-documents']||[]).filter(row=>row.serviceBenefit===true&&!row.deletedAt);}
function renderServiceBenefitEntry(){const input=(key,label)=>`<div class="service-benefit-row"><label for="service-benefit-${key}">${label}</label><input id="service-benefit-${key}" data-service-benefit="${key}" value="${esc(serviceBenefitDraft[key]||'')}" maxlength="500" autocomplete="off" ${serviceBenefitChoices[key]?`list="service-benefit-options-${key}"`:''} ${['joiningDate','release'].includes(key)?'placeholder="DD/MM/YYYY"':''}></div>`;$('#main').innerHTML=serviceBenefitNavigation()+'<div class="page-heading" style="justify-content:center;text-align:center"><div><h2 style="font-size:32px;font-weight:800">Service Benefit</h2></div></div><section class="panel service-benefit-entry-panel"><style>.service-benefit-entry-panel{width:100%;max-width:900px;margin:0 auto;box-sizing:border-box}.service-benefit-form{max-width:850px;margin:auto}.service-benefit-row{display:grid;grid-template-columns:145px minmax(0,1fr);align-items:center;gap:20px;padding:9px 0;border-bottom:1px solid #e1ece4}.service-benefit-row label{font-size:17px}.service-benefit-row input{font-size:17px;min-height:42px}@media(max-width:520px){.service-benefit-row{grid-template-columns:130px minmax(0,1fr);gap:10px}.service-benefit-row label{font-size:15px}}</style><form id="serviceBenefitForm" class="service-benefit-form" aria-label="Service Benefit New Input">'+serviceBenefitFields.map(([key,label])=>input(key,label)).join('')+Object.entries(serviceBenefitChoices).map(([key,choices])=>`<datalist id="service-benefit-options-${key}">${choices.map(value=>`<option value="${esc(value)}"></option>`).join('')}</datalist>`).join('')+'<div style="display:flex;justify-content:flex-end;margin-top:22px"><button type="submit" id="serviceBenefitSave" class="primary" data-page-action-required="edit" '+(serviceBenefitBusy?'disabled':'')+'>'+(serviceBenefitBusy?'Saving…':'Save')+'</button></div></form></section>';if(typeof applyActionControls==='function')applyActionControls();}
function serviceBenefitSearchKey(value){return String(value??'').trim().replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c)).toLowerCase();}
function serviceBenefitBasic(salary){
 const text=serviceBenefitSearchKey(salary).replace(/,/g,'');
 if(!text||!/^\d+(?:\.\d+)?$/.test(text))return '';
 const amount=Number(text);if(!Number.isFinite(amount))return '';
 return String(Number(((amount-2450)/1.5).toFixed(2)));
}
function serviceBenefitSearchDate(value){const [day,month,year]=normalizeDate(value).split('/');return Number(year+month+day);}
function serviceBenefitNormalizeSearch(value){return String(value).replace(/[^\s,，]+/g,token=>{if(!/[\/]/.test(token))return token;try{return normalizeDate(token);}catch{return token;}});}
function serviceBenefitParseSearch(value){
 const text=serviceBenefitNormalizeSearch(value),tokens=text.trim().split(/[\s,，]+/).filter(Boolean),dates=[],ids=new Set();
 for(const token of tokens){if(token.includes('/')){try{dates.push(serviceBenefitSearchDate(token));}catch{throw Error('সঠিক তারিখ লিখুন, যেমন 01/10/2026।');}}else ids.add(serviceBenefitSearchKey(token));}
 if(dates.length>2)throw Error('শুরুর ও শেষের—সর্বোচ্চ দুটি তারিখ দিন।');
 if(dates.length===2&&dates[0]>dates[1])throw Error('শুরুর তারিখ শেষের তারিখের পরে হতে পারবে না।');
 return {text,start:dates[0]??null,end:dates[1]??dates[0]??null,ids};
}
function serviceBenefitFilterReport(rows,filter){if(!filter)return rows;return rows.filter(row=>{
 const card=serviceBenefitSearchKey(row.serviceBenefitEntry?.cardNo||row.reference);
 if(filter.ids.size&&!filter.ids.has(card))return false;
 if(filter.start!==null){let saved;try{saved=serviceBenefitSearchDate(row.date);}catch{return false;}if(saved<filter.start||saved>filter.end)return false;}
 return true;
});}
function serviceBenefitSearchControls(count,total){return '<form id="serviceBenefitSearchForm" class="service-benefit-search no-print" aria-label="Search Service Benefit inputs"><label for="serviceBenefitSearch">সেভের তারিখ / আইডি নং</label><div class="service-benefit-search-row"><input id="serviceBenefitSearch" value="'+esc(serviceBenefitSearchText)+'" placeholder="1/10/26 30/10/26 1,5,7" aria-describedby="serviceBenefitSearchHelp" autocomplete="off"><button type="submit" class="service-benefit-search-button"><span aria-hidden="true">⌕</span> Search</button><button type="button" id="serviceBenefitSearchAll"><span aria-hidden="true">▦</span> ALL</button></div><small id="serviceBenefitSearchHelp">তারিখের মাঝে স্পেস এবং একাধিক আইডির মাঝে কমা দিন। শুধু তারিখ বা আইডি দিয়েও খোঁজা যাবে।</small><p role="status">'+count+' / '+total+' ইনপুট</p></form>';}
$('#main').addEventListener('input',event=>{if(event.target.id!=='serviceBenefitSearch')return;const input=event.target;if(/\s$/.test(input.value)){const atEnd=input.selectionStart===input.value.length;if(atEnd)input.value=serviceBenefitNormalizeSearch(input.value);}serviceBenefitSearchText=input.value;input.setCustomValidity('');});
$('#main').addEventListener('focusout',event=>{if(event.target.id==='serviceBenefitSearch'){event.target.value=serviceBenefitNormalizeSearch(event.target.value);serviceBenefitSearchText=event.target.value;}});
$('#main').addEventListener('submit',event=>{if(event.target.id!=='serviceBenefitSearchForm')return;event.preventDefault();const input=document.getElementById('serviceBenefitSearch');try{const filter=serviceBenefitParseSearch(input.value);serviceBenefitSearchText=filter.text;serviceBenefitSearchFilter=filter;if(activePage==='admin-service-file')goPage('admin-service-entry-report');else renderServiceBenefitReport();}catch(error){input.setCustomValidity(error.message);input.reportValidity();}});
$('#main').addEventListener('click',event=>{if(!event.target.closest('#serviceBenefitSearchAll'))return;serviceBenefitSearchText='';serviceBenefitSearchFilter=null;if(activePage==='admin-service-file')goPage('admin-service-entry-report');else renderServiceBenefitReport();});
let serviceBenefitDeleteObserver=null;
function serviceBenefitAlignDeleteButtons(){
 const table=document.getElementById('serviceBenefitReport'),rail=document.getElementById('serviceBenefitDeleteRail');if(!table||!rail)return;
 const bounds=rail.getBoundingClientRect(),rows=[...table.querySelectorAll('tbody tr[data-service-report-row]')];
 rail.style.height=Math.max(table.getBoundingClientRect().bottom-bounds.top,0)+'px';
 for(const button of rail.querySelectorAll('[data-service-benefit-delete]')){const row=rows.find(item=>item.dataset.serviceReportRow===button.dataset.serviceBenefitDelete);if(!row)continue;const rect=row.getBoundingClientRect();button.style.top=(rect.top-bounds.top+(rect.height-button.offsetHeight)/2)+'px';}
}
function renderServiceBenefitReport(){
 serviceBenefitDeleteObserver?.disconnect();
 const allRows=serviceBenefitRows(),rows=serviceBenefitFilterReport(allRows,serviceBenefitSearchFilter);
 $('#main').innerHTML=serviceBenefitNavigation()+serviceBenefitSearchControls(rows.length,allRows.length)+'<div class="service-benefit-report-layout"><section class="panel" aria-label="Service Benefit Input Report"><div class="table-wrap"><table id="serviceBenefitReport"><thead><tr><th>SL</th>'+serviceBenefitReportFields.map(([,label])=>'<th>'+label+'</th>').join('')+'<th class="no-print">Action</th></tr></thead><tbody>'+rows.map((row,i)=>'<tr data-service-report-row="'+esc(row.id)+'"><td>'+(i+1)+'</td>'+serviceBenefitReportFields.map(([key])=>'<td>'+esc(key==='basic'?serviceBenefitBasic(row.serviceBenefitEntry?.salary):row.serviceBenefitEntry?.[key]||'')+'</td>').join('')+'<td class="no-print"><button type="button" data-service-benefit-open="'+esc(row.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="9" style="text-align:center">No matching inputs.</td></tr>')+'</tbody></table></div></section><div id="serviceBenefitDeleteRail" class="service-benefit-delete-rail no-print" aria-label="Delete inputs">'+rows.map(row=>'<button type="button" class="danger" data-page-action-required="edit" data-service-benefit-delete="'+esc(row.id)+'"><span aria-hidden="true">🗑</span> Delete</button>').join('')+'</div></div>';
 if(typeof applyActionControls==='function')applyActionControls();
 serviceBenefitAlignDeleteButtons();serviceBenefitDeleteObserver=new ResizeObserver(serviceBenefitAlignDeleteButtons);serviceBenefitDeleteObserver.observe(document.getElementById('serviceBenefitReport'));requestAnimationFrame(serviceBenefitAlignDeleteButtons);
}
const previousServiceBenefitRenderPage=renderPage;renderPage=function(...args){if(activePage!=='admin-service-entry-report')serviceBenefitDeleteObserver?.disconnect();if(activePage==='admin-service-file'){$('#main').innerHTML='<div class="service-benefit-landing">'+serviceBenefitNavigation()+'</div>';if(typeof applyActionControls==='function')applyActionControls();return;}if(activePage==='admin-service-new-entry')return renderServiceBenefitEntry();if(activePage==='admin-service-entry-report')return renderServiceBenefitReport();return previousServiceBenefitRenderPage.apply(this,args);};
$('#main').addEventListener('input',event=>{const key=event.target.dataset.serviceBenefit;if(key)serviceBenefitDraft[key]=event.target.value;});
$('#main').addEventListener('focusout',event=>{const dateKey=event.target.dataset.serviceBenefit;if(!['joiningDate','release'].includes(dateKey)||!event.target.value.trim())return;try{event.target.value=normalizeDate(event.target.value);serviceBenefitDraft[dateKey]=event.target.value;event.target.setCustomValidity('');}catch(error){event.target.setCustomValidity(error.message);}});
$('#main').addEventListener('keydown',event=>{if(activePage!=='admin-service-new-entry'||!event.target.matches('[data-service-benefit]')||event.isComposing||event.ctrlKey||event.altKey||event.metaKey||!['Enter','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();const inputs=[...$('#main').querySelectorAll('[data-service-benefit]')],index=inputs.indexOf(event.target),next=inputs[index+(event.key==='ArrowUp'?-1:1)];if(next){next.focus();next.select();}else if(event.key==='Enter'&&index===inputs.length-1)$('#serviceBenefitSave').focus();});
function serviceBenefitResolveExisting(entry,editingId,rows=serviceBenefitRows()){
 const candidates=rows.filter(row=>row.serviceBenefit===true&&!row.deletedAt),key=serviceBenefitSearchKey(entry.cardNo),editing=candidates.find(row=>row.id===editingId);
 if(editing&&serviceBenefitSearchKey(editing.serviceBenefitEntry?.cardNo||editing.reference)===key)return editing;
 const matches=candidates.filter(row=>serviceBenefitSearchKey(row.serviceBenefitEntry?.cardNo||row.reference)===key).sort((a,b)=>String(b.updatedAt||b.createdAt||'').localeCompare(String(a.updatedAt||a.createdAt||'')));
 return matches[0]||editing||null;
}
function serviceBenefitConfirmDelete(id,trigger){
 if(!FarnoorAccess.canAction('admin-documents','edit'))return toast('Documents edit permission is required.');
 const row=serviceBenefitRows().find(item=>item.id===id);if(!row)return;
 document.getElementById('serviceBenefitDeleteDialog')?.remove();const dialog=document.createElement('dialog');dialog.id='serviceBenefitDeleteDialog';dialog.className='service-benefit-delete-dialog';dialog.setAttribute('aria-labelledby','serviceBenefitDeleteTitle');dialog.setAttribute('aria-describedby','serviceBenefitDeleteDescription');
 dialog.innerHTML='<h3 id="serviceBenefitDeleteTitle">এই ইনপুট ডিলেক্ট করবেন?</h3><p id="serviceBenefitDeleteDescription">ID No: <strong>'+esc(row.serviceBenefitEntry?.cardNo||row.reference)+'</strong><br>'+esc(row.serviceBenefitEntry?.name||row.name)+'</p><p data-delete-error role="alert"></p><div class="service-benefit-delete-buttons"><button type="button" class="danger" data-confirm-delete>Delete</button><button type="button" data-cancel-delete autofocus>Cancel</button></div>';
 let busy=false;const close=()=>{if(busy)return;dialog.close();dialog.remove();if(trigger?.isConnected)trigger.focus();};
 dialog.addEventListener('cancel',event=>{event.preventDefault();close();});dialog.querySelector('[data-cancel-delete]').onclick=close;
 dialog.querySelector('[data-confirm-delete]').onclick=async()=>{
  if(busy)return;if(!FarnoorAccess.canAction('admin-documents','edit'))return toast('Documents edit permission is required.');
  if(!serviceBenefitRows().some(item=>item.id===id)){close();renderServiceBenefitReport();return;}
  busy=true;dialog.querySelectorAll('button').forEach(button=>button.disabled=true);dialog.querySelector('[data-confirm-delete]').textContent='Deleting…';
  const next={...state,records:{...state.records,'admin-documents':(state.records['admin-documents']||[]).filter(item=>item.id!==id)}};
  try{if(await commit(next,{serviceBenefitDelete:id})){
   if(serviceBenefitId===id){serviceBenefitId=null;serviceBenefitPending=null;serviceBenefitDraft={};}
   if(typeof servicePrintRecordId!=='undefined'&&servicePrintRecordId===id){servicePrintRecordId='';servicePrintReady=false;}
   busy=false;close();renderServiceBenefitReport();toast('Service Benefit input deleted.');
  }else dialog.querySelector('[data-delete-error]').textContent='ডিলেক্ট হয়নি। রেকর্ড রাখা আছে। আবার চেষ্টা করুন।';}
  catch(error){dialog.querySelector('[data-delete-error]').textContent=error.message;}
  finally{busy=false;if(dialog.isConnected){dialog.querySelectorAll('button').forEach(button=>button.disabled=false);dialog.querySelector('[data-confirm-delete]').textContent='Delete';}}
 };
 document.body.append(dialog);dialog.showModal();dialog.querySelector('[data-cancel-delete]').focus();
}
$('#main').addEventListener('click',event=>{const button=event.target.closest('[data-service-benefit-delete]');if(button)serviceBenefitConfirmDelete(button.dataset.serviceBenefitDelete,button);});
async function saveServiceBenefit(){if(serviceBenefitBusy)return;if(!FarnoorAccess.canAction('admin-documents','edit'))return toast('Documents edit permission is required.');const entry=Object.fromEntries(serviceBenefitFields.map(([key])=>[key,String(document.getElementById('service-benefit-'+key)?.value??serviceBenefitDraft[key]??'').trim()]));if(!entry.cardNo||!entry.name)return toast('Card No ও Name লিখুন।');if(entry.cardNo.length>120||entry.name.length>200||Object.values(entry).some(v=>v.length>500))return toast('ঘরের লেখা বেশি বড় হয়েছে।');try{for(const key of ['joiningDate','release'])if(entry[key])entry[key]=normalizeDate(entry[key]);}catch(error){return toast(error.message);}const next=structuredClone(state),rows=next.records['admin-documents']||[],existing=serviceBenefitResolveExisting(entry,serviceBenefitId,rows);if(serviceBenefitId&&!existing)return toast('Refresh before saving.');const now=new Date(),record={...existing,id:existing?.id||serviceBenefitPending?.id||crypto.randomUUID(),reference:entry.cardNo,name:entry.name,quantity:0,date:now.toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),status:'Completed',serviceBenefit:true,serviceBenefitEntry:entry,createdAt:existing?.createdAt||serviceBenefitPending?.createdAt||now.toISOString(),updatedAt:now.toISOString()};const map={cardNo:0,name:7,designation:2,joiningDate:6,salary:22,release:56};record.personalFile=true;record.personalFolder='file-1';record.personalEntry=Object.fromEntries(Object.entries(map).map(([key,index])=>['field-'+index,entry[key]]));if(serviceBenefitPending&&serviceBenefitPending.id===record.id&&JSON.stringify(serviceBenefitPending.serviceBenefitEntry)===JSON.stringify(entry)){record.date=serviceBenefitPending.date;record.createdAt=serviceBenefitPending.createdAt;record.updatedAt=serviceBenefitPending.updatedAt;}serviceBenefitPending=structuredClone(record);if(existing)rows[rows.indexOf(existing)]=record;else rows.unshift(record);next.records['admin-documents']=rows;serviceBenefitBusy=true;$('#serviceBenefitSave').disabled=true;$('#serviceBenefitSave').textContent='Saving…';try{if(await commit(next,{personalFile:record})){serviceBenefitPending=null;serviceBenefitId=null;serviceBenefitDraft={};toast('Service Benefit saved online.');goPage('admin-service-entry-report');}else{toast('সেভ হয়নি। লেখা রাখা আছে—আবার Save চাপুন।');}}catch(error){toast(error.message+' লেখা রাখা আছে।');}finally{serviceBenefitBusy=false;if(activePage==='admin-service-new-entry')renderPage();}}
$('#main').addEventListener('submit',event=>{if(event.target.id!=='serviceBenefitForm')return;event.preventDefault();void saveServiceBenefit();});
$('#main').addEventListener('click',event=>{const button=event.target.closest('[data-service-benefit-open]');if(!button)return;const record=serviceBenefitRows().find(r=>r.id===button.dataset.serviceBenefitOpen);if(!record)return;serviceBenefitId=record.id;serviceBenefitDraft={...record.serviceBenefitEntry};goPage('admin-service-new-entry');});




function serviceProfileKey(value){return String(value??'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)).trim().toLowerCase();}
let serviceProfileLastValues={};
function serviceFillProfile(){if(!['admin-service-file','admin-service-new-entry'].includes(activePage)||!FarnoorAccess.canPage('employees'))return;const input=document.getElementById('service-benefit-cardNo');if(!input)return;const key=serviceProfileKey(input.value),row=key?(state.records.employees||[]).find(row=>[row.reference,row.hrDetails?.['ID No'],row.hrDetails?.['Punch ID']].some(v=>serviceProfileKey(v)===key)):null;for(const [field,value]of Object.entries(serviceProfileLastValues)){const node=document.getElementById('service-benefit-'+field);if(node&&node.value===String(value)){node.value='';serviceBenefitDraft[field]='';}}serviceProfileLastValues={};if(!row)return;const d=row.hrDetails||{},values={name:d['Name (Eng)']||row.name||d['Name (Bn)']||'',designation:d.Designation||'',joiningDate:d['Date of Join']||'',salary:d.Salary??'',release:d['Date of Release']||''};for(const field of ['joiningDate','release'])if(values[field])try{values[field]=normalizeDate(values[field]);}catch{}for(const [field,value]of Object.entries(values)){const node=document.getElementById('service-benefit-'+field);if(node){node.value=String(value);serviceBenefitDraft[field]=String(value);}}serviceProfileLastValues=values;}
document.getElementById('main').addEventListener('input',event=>{if(event.target.id==='service-benefit-cardNo')serviceFillProfile();});

;
;/* service-benefit-print.js */
'use strict';
const servicePrintCompanies={
 'FARNOOR GARMENTS LTD.':{bn:'ফারনূর গার্মেন্টস লিঃ',bnAddress:'১২০৮/১/২ মালিবাগ বাজার রোড, ঢাকা-১২১৭',enAddress:'1028/1/2 Malibagh Bazar Road, Dhaka-1217',holiday:'রবিবার'},
 'FARNOOR GARMENTS LTD. UNIT-2':{bn:'ফারনূর গার্মেন্টস লিঃ-ইউনিট-২',bnAddress:'৪৫৪, বাবুরচালা, পিরুজালী, আলীমপাড়া, গাজীপুর সদর, গাজীপুর',enAddress:'454, BaburChala, Alimpara, Pirujali, Gazipur',holiday:'শুক্রবার'}
};
let servicePrintCard='',servicePrintCompany='FARNOOR GARMENTS LTD.',servicePrintRecordId='',servicePrintReady=false,servicePrintError='';
function servicePrintMoney(value){
 const text=serviceBenefitSearchKey(value).replace(/,/g,'');
 if(!text||!/^[-+]?\d+(?:\.\d+)?$/.test(text))return '';
 const amount=Number(text);if(!Number.isFinite(amount))return '';
 const cents=Math.round(Math.abs(amount)*100),rounded=Math.floor((cents+51)/100)*(amount<0?-1:1);
 return rounded.toLocaleString('en-US',{maximumFractionDigits:0});
}
function servicePrintDate(value){const [day,month,year]=normalizeDate(value).split('/').map(Number);return {day,month,year,key:year*10000+month*100+day};}
function servicePrintBenefitRate(start,end){
 const anniversaryKey=years=>{const year=start.year+years,day=Math.min(start.day,new Date(Date.UTC(year,start.month,0)).getUTCDate());return year*10000+start.month*100+day;};
 return end.key<anniversaryKey(3)?0:end.key>anniversaryKey(10)?30:end.key>anniversaryKey(4)?15:7;
}
function servicePrintYearRows(joining,release){
 const start=servicePrintDate(joining),end=servicePrintDate(release);
 if(end.key<start.key)throw Error('Release তারিখ যোগদানের তারিখের আগে হতে পারবে না।');
 const rate=servicePrintBenefitRate(start,end),result=[];
 if(rate===0)return result;
 for(let year=start.year;year<=end.year;year++){
  const first=year===start.year,last=year===end.year,yearStart=Date.UTC(year,0,1),yearEnd=Date.UTC(year+1,0,1);
  const from=first?Date.UTC(year,start.month-1,start.day):yearStart,to=last?Date.UTC(year,end.month-1,end.day+1):yearEnd;
  const days=Number((rate*(to-from)/(yearEnd-yearStart)).toFixed(2));
  let months=last?end.month-1:first?13-start.month:12;
  if(first&&last){months=end.month-start.month;if(end.day-start.day+1<0)months--;months=Math.max(0,months);}
  result.push({year,months,days});
 }
 return result;
}
function servicePrintMatches(){const key=serviceBenefitSearchKey(servicePrintCard);return key?serviceBenefitRows().filter(row=>serviceBenefitSearchKey(row.serviceBenefitEntry?.cardNo||row.reference)===key).slice().sort((a,b)=>String(b.updatedAt||b.createdAt||'').localeCompare(String(a.updatedAt||a.createdAt||''))):[];}
function servicePrintBuildPaper(row,companyName){
 const entry=row.serviceBenefitEntry||{},basic=serviceBenefitBasic(entry.salary),company=servicePrintCompanies[companyName],rows=servicePrintYearRows(entry.joiningDate,entry.release),totalDays=Number(rows.reduce((sum,item)=>sum+item.days,0).toFixed(2)),totalMonths=rows.reduce((sum,item)=>sum+item.months,0);
 if(!company)throw Error('Company নির্বাচন করুন।');
 if(!rows.length)return '<article class="service-benefit-paper service-benefit-empty" aria-label="Service benefit tenure notice" style="min-height:281mm"><div role="status" style="padding:12mm 6mm;font-size:16px;line-height:1.7;text-align:left;color:#000"><p lang="en" style="margin:0 0 8mm;font-weight:700">You have not yet completed three years of service. Therefore, you are currently not eligible for service benefits. You will become eligible for service benefits once you complete the required service period.</p><p lang="bn" style="margin:0">আপনার চাকরির মেয়াদ এখনো ৩ বছর পূর্ণ হয়নি। তাই আপনি বর্তমানে সার্ভিস বেনিফিট পাওয়ার জন্য যোগ্য নন। নির্ধারিত চাকরির মেয়াদ পূর্ণ হলে আপনি সার্ভিস বেনিফিটের জন্য যোগ্য বলে বিবেচিত হবেন।</p></div></article>';
 const amounts=rows.map(item=>basic===''?'':servicePrintMoney(Number(basic)/30*item.days)),totalAmount=basic===''?'':servicePrintMoney(amounts.reduce((sum,amount)=>sum+Number(amount.replace(/,/g,'')),0));
 return '<article class="service-benefit-paper" aria-label="Service benefit statement"><header class="service-benefit-paper-heading"><h1>'+esc(companyName)+'</h1><div>'+esc(company.enAddress)+'</div><h3>Service benefit</h3></header><dl class="service-benefit-print-details">'+[['Name',entry.name],['Designation',entry.designation],['Card/Staff No',entry.cardNo],['Date Of Joining',normalizeDate(entry.joiningDate).replaceAll('/','.')],['Salary',servicePrintMoney(entry.salary)],['Basic',servicePrintMoney(basic)]].map(([label,value])=>'<dt>'+esc(label)+'</dt><dd><span aria-hidden="true">:</span> <b>'+esc(value||'')+'</b></dd>').join('')+'</dl><table class="service-benefit-year-table"><colgroup><col style="width:10%"><col style="width:23%"><col style="width:22%"><col style="width:22%"><col style="width:23%"></colgroup><thead><tr><th>SL.</th><th>Year</th><th>Month</th><th>Days</th><th>Amount</th></tr></thead><tbody>'+rows.map((item,index)=>'<tr><td>'+String(index+1).padStart(2,'0')+'</td><td>'+item.year+'</td><td>'+item.months+' Month</td><td>'+item.days+' Days</td><td>'+esc(amounts[index])+'</td></tr>').join('')+'</tbody><tfoot><tr><th colspan="2">Total =</th><td>'+totalMonths+' Month</td><td>'+totalDays+' Days</td><td>'+esc(totalAmount)+'</td></tr></tfoot></table><footer class="service-benefit-signatures"><strong>Received Sign</strong><strong>Authorised Sign</strong></footer></article>';
}
function renderServiceBenefitPrint(){
 const matches=servicePrintMatches(),selected=servicePrintReady?matches.find(row=>row.id===servicePrintRecordId):null;
 let paper='';if(selected)try{paper=servicePrintBuildPaper(selected,servicePrintCompany);}catch(error){servicePrintError=error.message;}
 const controls='<form id="serviceBenefitPrintForm" class="service-print-controls no-print" aria-label="Service Benefit Print selection"><div><label for="servicePrintCard">ID No</label><input id="servicePrintCard" value="'+esc(servicePrintCard)+'" placeholder="ID No" autocomplete="off" required></div><div><label for="servicePrintCompany">Company</label><select id="servicePrintCompany">'+Object.keys(servicePrintCompanies).map(name=>'<option '+(name===servicePrintCompany?'selected':'')+'>'+esc(name)+'</option>').join('')+'</select></div><button type="submit" class="service-print-save"><span aria-hidden="true">⌕</span> Search</button><button type="button" data-page-action="print" '+(!paper?'hidden':'')+'><span aria-hidden="true">🖨</span> Print</button>'+'<p role="status" class="service-print-status" '+(!servicePrintError?'hidden':'')+'> '+esc(servicePrintError)+'</p></form>';
 $('#main').innerHTML=serviceBenefitNavigation()+controls+(paper?'<section id="serviceBenefitPrintContent" class="service-benefit-print-surround">'+paper+'</section>':'');if(typeof applyActionControls==='function')applyActionControls();
}
const servicePrintPreviousRender=renderPage;renderPage=function(...args){if(activePage==='admin-service-print')return renderServiceBenefitPrint();return servicePrintPreviousRender.apply(this,args);};
$('#main').addEventListener('input',event=>{if(event.target.id!=='servicePrintCard')return;servicePrintCard=event.target.value;servicePrintReady=false;servicePrintRecordId='';servicePrintError='';document.getElementById('serviceBenefitPrintContent')?.remove();const button=document.querySelector('#serviceBenefitPrintForm [data-page-action="print"]');if(button)button.hidden=true;});
$('#main').addEventListener('change',event=>{if(event.target.id==='servicePrintCompany'){servicePrintCompany=event.target.value;servicePrintReady=false;renderServiceBenefitPrint();}});
$('#main').addEventListener('submit',event=>{
 if(event.target.id!=='serviceBenefitPrintForm')return;event.preventDefault();servicePrintCard=document.getElementById('servicePrintCard').value.trim();servicePrintCompany=document.getElementById('servicePrintCompany').value;const matches=servicePrintMatches();servicePrintError='';servicePrintReady=false;
 if(!matches.length)servicePrintError='এই ID No-এর সেভ করা ইনপুট পাওয়া যায়নি।';
 else{const row=matches[0];try{if(!row.serviceBenefitEntry?.joiningDate||!row.serviceBenefitEntry?.release)throw Error('Input Report-এর রেকর্ডে Date Of Joining ও Release তারিখ পূরণ করুন।');servicePrintYearRows(row.serviceBenefitEntry.joiningDate,row.serviceBenefitEntry.release);servicePrintRecordId=row.id;servicePrintReady=true;}catch(error){servicePrintError=error.message;}}
 renderServiceBenefitPrint();
});

;
;/* warning-letter-entry.js */
'use strict';
const warningBenefitFields=[['cardNo','ID No.'],['name','Name'],['designation','Designation'],['section','Section'],['fatherName','Father’s Name'],['presentAddress','Present Addres'],['absenceDate','Date of Absence'],['firstLetter','1st Letter'],['secondLetter','2nd Letter'],['thirdLetter','3rd Letter'],['village','Village'],['postOffice','Post Office'],['policeStation','Police Station'],['district','District']];
let warningBenefitDraft={},warningBenefitId=null,warningBenefitBusy=false,warningBenefitPending=null;
const warningBenefitChoices={designation:personalEntryOptions['field-2'],section:personalEntryOptions['field-4']};
function warningBenefitRows(){return(state.records['admin-documents']||[]).filter(row=>row.warningBenefit===true);}
function renderWarningBenefitEntry(){const input=(key,label)=>`<div class="warning-benefit-row"><label for="warning-benefit-${key}">${label}</label><input id="warning-benefit-${key}" data-warning-benefit="${key}" value="${esc(warningBenefitDraft[key]||'')}" maxlength="500" autocomplete="off" ${warningBenefitChoices[key]?`list="warning-benefit-options-${key}"`:''} ${key==='absenceDate'?'placeholder="DD/MM/YYYY"':''}></div>`;$('#main').innerHTML='<div class="page-heading" style="justify-content:center;text-align:center"><div><h2 style="font-size:32px;font-weight:800">Warning Letter</h2></div></div><section class="panel"><style>.warning-benefit-form{max-width:850px;margin:auto}.warning-benefit-row{display:grid;grid-template-columns:145px minmax(0,1fr);align-items:stretch;gap:20px;padding:0;border-bottom:1px solid #e1ece4}.warning-benefit-row label{font-size:17px;background:#001f3f;color:#fff;display:flex;align-items:center;padding:9px 12px;margin:0;box-sizing:border-box}.warning-benefit-row input{font-size:17px;min-height:42px;margin:9px 0}@media(max-width:520px){.warning-benefit-row{grid-template-columns:130px minmax(0,1fr);gap:10px}.warning-benefit-row label{font-size:15px}}</style><form id="warningBenefitForm" class="warning-benefit-form" aria-label="Warning Letter New Entry">'+warningBenefitFields.map(([key,label])=>input(key,label)).join('')+Object.entries(warningBenefitChoices).map(([key,choices])=>`<datalist id="warning-benefit-options-${key}">${choices.map(value=>`<option value="${esc(value)}"></option>`).join('')}</datalist>`).join('')+'<div style="display:flex;justify-content:flex-end;margin-top:22px"><button type="submit" id="warningBenefitSave" class="primary" data-page-action-required="edit" '+(warningBenefitBusy?'disabled':'')+'>'+(warningBenefitBusy?'Saving…':'Save')+'</button></div></form></section>';warningHrLastCard=warningHrKey(warningBenefitDraft.cardNo);if(typeof applyActionControls==='function')applyActionControls();}
function renderWarningBenefitReport(){const rows=warningBenefitRows();$('#main').innerHTML='<div class="page-heading" style="justify-content:center;text-align:center"><div><h2 style="font-size:28px;font-weight:800">ENTRY REPORT</h2></div></div><section class="panel"><div class="table-wrap"><table id="warningBenefitReport"><thead><tr><th>SL</th>'+warningBenefitFields.map(([,label])=>'<th>'+label+'</th>').join('')+'<th class="no-print">Action</th></tr></thead><tbody>'+rows.map((row,i)=>'<tr><td>'+(i+1)+'</td>'+warningBenefitFields.map(([key])=>'<td>'+esc(row.warningBenefitEntry?.[key]||'')+'</td>').join('')+'<td class="no-print"><button type="button" data-warning-benefit-open="'+esc(row.id)+'">Open</button></td></tr>').join('')+(rows.length?'':'<tr><td colspan="16" style="text-align:center">No saved entries.</td></tr>')+'</tbody></table></div></section>';if(typeof applyActionControls==='function')applyActionControls();}
const previousWarningBenefitRenderPage=renderPage;renderPage=function(...args){if(activePage==='admin-warning-letter')return renderWarningHome();if(activePage==='admin-warning-new-entry')return renderWarningBenefitEntry();if(['admin-warning-first-letter','admin-warning-second-letter','admin-warning-third-letter'].includes(activePage)){document.getElementById('main').innerHTML='';return;}if(activePage==='admin-warning-entry-report')return renderWarningBenefitReport();if(activePage==='admin-warning-print'){ $('#main').innerHTML=heading('Admin · Warning Letter','Print','')+'<section class="panel"><p>No letter templates added yet.</p></section>';if(typeof applyActionControls==='function')applyActionControls();return;}return previousWarningBenefitRenderPage.apply(this,args);};
$('#main').addEventListener('input',event=>{const key=event.target.dataset.warningBenefit;if(key)warningBenefitDraft[key]=event.target.value;});
$('#main').addEventListener('focusout',event=>{if(event.target.dataset.warningBenefit!=='absenceDate'||!event.target.value.trim())return;try{event.target.value=normalizeDate(event.target.value);warningBenefitDraft.absenceDate=event.target.value;event.target.setCustomValidity('');}catch(error){event.target.setCustomValidity(error.message);}});
$('#main').addEventListener('keydown',event=>{if(activePage!=='admin-warning-new-entry'||!event.target.matches('[data-warning-benefit]')||event.isComposing||event.ctrlKey||event.altKey||event.metaKey||!['Enter','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();const inputs=[...$('#main').querySelectorAll('[data-warning-benefit]')],index=inputs.indexOf(event.target),next=inputs[index+(event.key==='ArrowUp'?-1:1)];if(next){next.focus();next.select();}else if(event.key==='Enter'&&index===inputs.length-1)$('#warningBenefitSave').focus();});
async function saveWarningBenefit(){if(warningBenefitBusy)return;if(!FarnoorAccess.canAction('admin-documents','edit'))return toast('Documents edit permission is required.');const entry=Object.fromEntries(warningBenefitFields.map(([key])=>[key,String(document.getElementById('warning-benefit-'+key)?.value??warningBenefitDraft[key]??'').trim()]));if(!entry.cardNo||!entry.name)return toast('ID No. ও Name লিখুন।');if(entry.cardNo.length>120||entry.name.length>200||Object.values(entry).some(v=>v.length>500))return toast('ঘরের লেখা বেশি বড় হয়েছে।');try{if(entry.absenceDate)entry.absenceDate=normalizeDate(entry.absenceDate);}catch(error){return toast(error.message);}const next=structuredClone(state),rows=next.records['admin-documents']||[],existing=warningBenefitId&&rows.find(r=>r.id===warningBenefitId&&r.warningBenefit);if(warningBenefitId&&!existing)return toast('Refresh before saving.');const now=new Date(),record={...existing,id:warningBenefitId||warningBenefitPending?.id||crypto.randomUUID(),reference:entry.cardNo,name:entry.name,quantity:0,date:now.toLocaleDateString('en-GB',{timeZone:'Asia/Dhaka'}),status:'Completed',warningBenefit:true,warningBenefitEntry:entry,createdAt:existing?.createdAt||warningBenefitPending?.createdAt||now.toISOString(),updatedAt:now.toISOString()};const map={cardNo:0,name:7,designation:2,section:4,fatherName:9,presentAddress:46,absenceDate:47,firstLetter:48,secondLetter:49,thirdLetter:50,village:51,postOffice:52,policeStation:53,district:54};record.personalFile=true;record.personalFolder='file-1';record.personalEntry=Object.fromEntries(Object.entries(map).map(([key,index])=>['field-'+index,entry[key]]));if(warningBenefitPending&&JSON.stringify(warningBenefitPending.warningBenefitEntry)===JSON.stringify(entry)){record.date=warningBenefitPending.date;record.createdAt=warningBenefitPending.createdAt;record.updatedAt=warningBenefitPending.updatedAt;}warningBenefitPending=structuredClone(record);if(existing)rows[rows.indexOf(existing)]=record;else rows.unshift(record);next.records['admin-documents']=rows;warningBenefitBusy=true;$('#warningBenefitSave').disabled=true;$('#warningBenefitSave').textContent='Saving…';try{if(await commit(next,{personalFile:record})){warningBenefitPending=null;warningBenefitId=null;warningBenefitDraft={};toast('Warning Letter saved online.');goPage('admin-warning-entry-report');}else{toast('সেভ হয়নি। লেখা রাখা আছে—আবার Save চাপুন।');}}catch(error){toast(error.message+' লেখা রাখা আছে।');}finally{warningBenefitBusy=false;if(activePage==='admin-warning-new-entry')renderPage();}}
$('#main').addEventListener('submit',event=>{if(event.target.id!=='warningBenefitForm')return;event.preventDefault();void saveWarningBenefit();});
$('#main').addEventListener('click',event=>{const button=event.target.closest('[data-warning-benefit-open]');if(!button)return;const record=warningBenefitRows().find(r=>r.id===button.dataset.warningBenefitOpen);if(!record)return;warningBenefitId=record.id;warningBenefitDraft={...record.warningBenefitEntry};goPage('admin-warning-new-entry');});




const warningTopPreviousRender=renderPage;renderPage=function(...args){const result=warningTopPreviousRender.apply(this,args);if(!activePage?.startsWith('admin-warning-'))return result;const nav=document.createElement('nav');nav.className='no-print';nav.setAttribute('aria-label','Warning Letter pages');nav.style.cssText='display:flex;flex-wrap:wrap;gap:9px;margin-bottom:20px';nav.innerHTML=[['admin-warning-new-entry','✚ New Entry','#e1f4e6','#216243'],['admin-warning-entry-report','▤ Entry Report','#fce3ed','#a02b60']].filter(([id])=>FarnoorAccess.canPage(id)).map(([id,label,bg,color])=>'<button type="button" data-warning-top="'+id+'" aria-current="'+(activePage===id||(activePage==='admin-warning-letter'&&id==='admin-warning-new-entry')?'page':'false')+'" style="background:'+bg+';color:'+color+';border-color:'+color+';font-weight:700">'+label+'</button>').join('')+[['admin-warning-first-letter','1st Letter','#e1edff','#245ba2'],['admin-warning-second-letter','2nd Letter','#e1f5e7','#246c3b'],['admin-warning-third-letter','3rd Letter','#eee2ff','#7042a1']].map(([key,label,bg,color])=>'<button type="button" data-warning-top="'+key+'" style="background:'+bg+';color:'+color+';border-color:'+color+';font-weight:700">'+label+'</button>').join('');const report=nav.querySelector('[data-warning-top="admin-warning-entry-report"]');if(report)nav.append(report);document.getElementById('main').prepend(nav);return result;};
document.getElementById('main').addEventListener('click',event=>{const button=event.target.closest('[data-warning-top]');if(button)goPage(button.dataset.warningTop);});


let warningHomeCard='',warningHomeCompany='FARNOOR GARMENTS LTD',warningHomeName='';
function renderWarningHome(){const options=(items,current)=>items.map(item=>'<option value="'+esc(item)+'"'+(item===current?' selected':'')+'>'+esc(item)+'</option>').join('');document.getElementById('main').innerHTML='<form id="warningHomeSelection" style="display:flex;flex-wrap:wrap;align-items:end;gap:10px;margin-bottom:20px"><label style="display:grid;gap:4px;width:170px">ID No.<input name="card" aria-label="ID No." placeholder="Card No." maxlength="120" value="'+esc(warningHomeCard)+'"></label><label style="display:grid;gap:4px;min-width:240px">Company<select name="company" aria-label="Company"><option value="">Select company</option>'+options(['FARNOOR GARMENTS LTD','FARNOOR GARMENTS LTD. UNIT-2'],warningHomeCompany)+'</select></label><label style="display:grid;gap:4px;min-width:220px">Name<select name="signer" aria-label="Name"><option value="">Select name</option>'+options(['সৈয়দ আশরাফুল হক','মোঃ মাসুদ রানা','মোঃ রাফে-উজ-জামান','লামুসা আলী'],warningHomeName)+'</select></label><button type="submit" class="primary">Save</button></form>';}
document.getElementById('main').addEventListener('input',event=>{if(event.target.form?.id==='warningHomeSelection'&&event.target.name==='card')warningHomeCard=event.target.value;});
document.getElementById('main').addEventListener('change',event=>{if(event.target.form?.id!=='warningHomeSelection')return;if(event.target.name==='company')warningHomeCompany=event.target.value;if(event.target.name==='signer')warningHomeName=event.target.value;});
document.getElementById('main').addEventListener('submit',event=>{if(event.target.id!=='warningHomeSelection')return;event.preventDefault();if(!warningHomeCompany||!warningHomeName)return toast('Company ও Name নির্বাচন করুন।');const key=serviceProfileKey(warningHomeCard),record=key?warningBenefitRows().find(row=>serviceProfileKey(row.warningBenefitEntry?.cardNo||row.reference)===key):null;if(key&&!record)return toast('এই কার্ড নম্বরের সেভ করা Warning Letter এন্ট্রি পাওয়া যায়নি।');if(record){warningBenefitId=record.id;warningBenefitDraft={...record.warningBenefitEntry};}toast('Warning Letter নির্বাচন রাখা হয়েছে।');});

function warningHrKey(value){return String(value??'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)).trim().toLowerCase();}
function warningHrValues(row){const d=row.hrDetails||{},pick=(...keys)=>{for(const key of keys){const actual=Object.keys(d).find(k=>k.toLowerCase().replace(/[^a-z0-9]/g,'')===key.toLowerCase().replace(/[^a-z0-9]/g,''));if(actual&&String(d[actual]??'').trim())return String(d[actual]);}return '';};return {name:pick('Name (Eng)')||row.name||pick('Name (Bn)'),designation:pick('Designation'),section:pick('Section','Working Section'),fatherName:pick('Father Name',"Father's Name",'Father'),presentAddress:pick('Present Address','Present Address (Eng)','Address'),village:pick('Permanent Village','Permanent Village (Eng)','Village'),postOffice:pick('Permanent Post Office','Post Office'),policeStation:pick('Permanent Police Station','Police Station'),district:pick('Permanent District','District')};}
let warningHrLastCard='',warningHrLastValues={};
function warningFillHr(){if(activePage!=='admin-warning-new-entry'||!FarnoorAccess.canPage('employees'))return;const input=document.getElementById('warning-benefit-cardNo');if(!input)return;const key=warningHrKey(input.value);if(key===warningHrLastCard)return;warningHrLastCard=key;for(const field of Object.keys(warningHrValues({}))){const node=document.getElementById('warning-benefit-'+field);if(node){node.value='';warningBenefitDraft[field]='';}}warningBenefitId=null;warningBenefitPending=null;for(const field of ['absenceDate','firstLetter','secondLetter','thirdLetter']){const node=document.getElementById('warning-benefit-'+field);if(node){node.value='';warningBenefitDraft[field]='';}}const row=key?(state.records.employees||[]).find(row=>[row.reference,row.hrDetails?.['ID No'],row.hrDetails?.['Punch ID']].some(value=>warningHrKey(value)===key)):null;warningHrLastValues=row?warningHrValues(row):{};for(const [field,value]of Object.entries(warningHrLastValues)){const node=document.getElementById('warning-benefit-'+field);if(node){node.value=value;warningBenefitDraft[field]=value;}}}
document.getElementById('main').addEventListener('input',event=>{if(event.target.id==='warning-benefit-cardNo')warningFillHr();});
document.getElementById('main').addEventListener('change',event=>{if(event.target.id==='warning-benefit-cardNo')warningFillHr();});

;
;/* maternity-profile-link.js */
'use strict';
function maternityProfileKey(value){return String(value??'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)).trim().toLowerCase();}
function maternityProfileMatch(id){const key=maternityProfileKey(id);if(!key)return null;return(state.records.employees||[]).find(row=>[row.reference,row.hrDetails?.['ID No'],row.hrDetails?.['Punch ID']].some(value=>maternityProfileKey(value)===key))||null;}
function maternityProfileValues(row){const d=row.hrDetails||{};return{name:d['Name (Eng)']||row.name||d['Name (Bn)']||'',designation:d.Designation||'',section:d.Section||'',joiningDate:d['Date of Join']||'',salary:d.Salary??d['Gross Salary']??''};}
function maternityProfileIsWoman(row){return ['female','woman','women','মহিলা','নারী','স্ত্রী'].includes(String(row?.hrDetails?.Gender||row?.hrDetails?.['লিঙ্গ']||'').trim().toLowerCase());}
let maternityProfileLastValues={};
function maternityFillProfile(){if(activePage!=='admin-maternity-new-entry'||!FarnoorAccess.canPage('employees'))return;const input=document.getElementById('maternity-benefit-cardNo');if(!input)return;const row=maternityProfileMatch(input.value);for(const [key,value]of Object.entries(maternityProfileLastValues)){const node=document.getElementById('maternity-benefit-'+key);if(node&&node.value===String(value)){node.value='';maternityBenefitDraft[key]='';}}maternityProfileLastValues={};if(!row)return;if(!maternityProfileIsWoman(row)){toast('শুধু মহিলা/Woman কর্মীর তথ্য এই ফর্মে আসবে।');return;}const values=maternityProfileValues(row);for(const [key,value]of Object.entries(values)){const node=document.getElementById('maternity-benefit-'+key);if(node){node.value=String(value);maternityBenefitDraft[key]=String(value);}}maternityProfileLastValues=values;}
document.getElementById('main').addEventListener('input',event=>{if(event.target.id==='maternity-benefit-cardNo')maternityFillProfile();});
document.getElementById('main').addEventListener('change',event=>{if(event.target.id==='maternity-benefit-cardNo')maternityFillProfile();});

;
;/* maternity-top-navigation.js */
'use strict';
const maternityTopPages=[['admin-maternity-new-entry','✚ New Entry','#e1f4e6','#216243'],['admin-maternity-print','▧ Print','#fff0d5','#855615'],['admin-maternity-form-calculation-month','▦ Calculatin Month','#e1edff','#245ba2'],['admin-maternity-form-first-payment','① 1st Payment','#e1f5e7','#246c3b'],['admin-maternity-form-second-payment','② 2nd Payment','#eee2ff','#7042a1'],['admin-maternity-entry-report','▤ Entry Report','#fce3ed','#a02b60']];
const maternityTopPreviousRender=renderPage;renderPage=function(...args){const result=maternityTopPreviousRender.apply(this,args);if(activePage?.startsWith('admin-maternity-')){const nav=document.createElement('nav');nav.className='no-print';nav.setAttribute('aria-label','Maternity File pages');nav.style.cssText='display:flex;flex-wrap:wrap;gap:9px;margin-bottom:20px';nav.innerHTML=maternityTopPages.filter(([id])=>FarnoorAccess.canPage(id)).map(([id,label,bg,color])=>'<button type="button" data-maternity-top="'+id+'" aria-current="'+(activePage===id?'page':'false')+'" style="background:'+bg+';color:'+color+';border-color:'+color+';font-weight:700;'+(activePage===id?'box-shadow:inset 0 0 0 1px '+color:'')+'">'+label+'</button>').join('');document.getElementById('main').prepend(nav);}return result;};
document.getElementById('main').addEventListener('click',event=>{const button=event.target.closest('[data-maternity-top]');if(button)goPage(button.dataset.maternityTop);});

;
;/* personal-top-navigation.js */
'use strict';
const personalAllPreviousRender=renderPage;renderPage=function(...args){const result=personalAllPreviousRender.apply(this,args);if(!activePage?.startsWith('admin-personal-'))return result;const main=document.getElementById('main');if(activePage==='admin-personal-entry-report')main.querySelector('.page-heading')?.remove();if(activePage.startsWith('admin-personal-form-')){const heading=main.querySelector('.page-heading'),title=heading?.querySelector('h2'),toolbar=main.querySelector('#personalFormBack')?.parentElement;if(title&&toolbar){title.style.cssText='margin:0;position:absolute;left:50%;transform:translateX(-50%);font-size:26px;font-weight:800';toolbar.style.position='relative';toolbar.style.alignItems='center';toolbar.append(title);heading.remove();}}const existing=main.querySelector('[data-personal-top]')?.parentElement;if(existing)existing.remove();const nav=document.createElement('nav');nav.className='no-print';nav.setAttribute('aria-label','Personal file pages');nav.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px';const pages=[['admin-personal-new-entry','✚ New Entry','#e1f4e6','#216243'],...personalFileButtons.filter(b=>b[0]!=='new').map(([id,label,icon,bg,fg])=>['admin-personal-form-'+id,icon+' '+label,bg,fg]),['admin-personal-entry-report','▤ Entry Report','#fce3ed','#a02b60']];nav.innerHTML=pages.filter(([id])=>id!==activePage&&FarnoorAccess.canPage(id)).map(([id,label,bg,fg])=>'<button type="button" data-personal-nav="'+id+'" style="padding:8px 14px;background:'+bg+';color:'+fg+';border:1px solid '+fg+'55;border-radius:7px;font-weight:700">'+esc(label)+'</button>').join('');main.prepend(nav);return result;};document.getElementById('main').addEventListener('click',event=>{const button=event.target.closest('[data-personal-nav]');if(button)goPage(button.dataset.personalNav);});

;
;/* print-a4.js */
'use strict';
function ensureAllPortraitPrint(){let style=document.getElementById('allPagesA4Portrait');if(!style){style=document.createElement('style');style.id='allPagesA4Portrait';document.head.append(style);}style.textContent='@page{size:A4 '+(document.querySelector('.pf6-paper')?'landscape':'portrait')+'!important;margin:8mm!important}@page productionPortrait{size:A4 portrait!important;margin:8mm!important}@page farnoorScheduleA4{size:A4 portrait!important;margin:8mm!important}@page bookingLandscape{size:A4 portrait!important;margin:8mm!important}@media print{body:has(#personalFilePrintContent) #main> :not(#personalFilePrintContent){display:none!important}body:has(#personalFilePrintContent) #workspaceRefreshNotice,body:has(#personalFilePrintContent) .footer-note{display:none!important}body:has(#personalFilePrintContent),body:has(#personalFilePrintContent) #workspace,body:has(#personalFilePrintContent) #main,body:has(#personalFilePrintContent) #personalFilePrintContent,body:has(#personalFilePrintContent) .pf1-scroll{height:auto!important;min-height:0!important;margin-top:0!important;margin-bottom:0!important;padding-bottom:0!important;page:auto!important;break-after:auto!important;page-break-after:auto!important}body:has(#personalFilePrintContent) #workspace{display:block!important}body:has(#personalFilePrintContent) .pf1-paper,body:has(#personalFilePrintContent) .pf2-paper{page:auto!important;min-height:0!important;break-after:auto!important;page-break-after:auto!important}body:has(#personalFilePrintContent) .pf1-paper:last-child,body:has(#personalFilePrintContent) .pf2-paper:last-child{margin-bottom:0!important}}';style.textContent+=style.textContent.replaceAll('personalFilePrintContent','maternityFilePrintContent').replaceAll('.pf1-','.mpf1-').replaceAll('.pf2-','.mpf2-');if(document.querySelector('.pf6-paper'))style.textContent+='@page personalFileSixLandscape{size:297mm 210mm!important;margin:8mm!important}@media print{html,body,body #workspace,body #main,body #personalFilePrintContent,body .pf6-paper{page:personalFileSixLandscape!important}}';}
const previousAllPortraitPrint=window.print.bind(window);window.print=()=>{ensureAllPortraitPrint();previousAllPortraitPrint();};window.addEventListener('beforeprint',ensureAllPortraitPrint);window.addEventListener('afterprint',()=>document.getElementById('allPagesA4Portrait')?.remove());



;
;/* admin-hr-autofill.js */
'use strict';
// One exact HR ID lookup for all three Admin forms. No saved records are mutated.
function adminHrLookupKey(value){return String(value??'').replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d)).trim().toLowerCase();}
function adminHrRead(row,...names){const details=row.hrDetails||{},keyOf=value=>String(value).toLowerCase().replace(/[^a-z0-9]/g,'');for(const name of names){const key=Object.keys(details).find(key=>keyOf(key)===keyOf(name));if(key&&String(details[key]??'').trim())return String(window.FarnoorBangla?.displayProfile?.(row,key)||details[key]);}return '';}
function adminHrMatch(card){const key=adminHrLookupKey(card);return key?(state.records.employees||[]).find(row=>[row.reference,adminHrRead(row,'ID No','IDNo'),adminHrRead(row,'Punch ID')].some(value=>adminHrLookupKey(value)===key)):null;}
const adminHrForms={service:{pages:['admin-service-file','admin-service-new-entry'],prefix:'service-benefit-',fields:()=>serviceBenefitFields,draft:()=>serviceBenefitDraft,detach:()=>{serviceBenefitId=null;serviceBenefitPending=null;}},warning:{pages:['admin-warning-new-entry'],prefix:'warning-benefit-',fields:()=>warningBenefitFields,draft:()=>warningBenefitDraft,detach:()=>{warningBenefitId=null;warningBenefitPending=null;}},maternity:{pages:['admin-maternity-new-entry'],prefix:'maternity-benefit-',fields:()=>maternityBenefitFields,draft:()=>maternityBenefitDraft,detach:()=>{maternityBenefitId=null;maternityBenefitPending=null;}}};
function adminHrFormValues(row,type){const read=(...keys)=>adminHrRead(row,...keys),values={name:read('Name (Eng)','Name')||row.name||read('Name (Bn)'),designation:read('Designation'),joiningDate:read('Date of Join','Joining Date'),salary:read('Salary','Gross Salary')};if(type==='service')values.release=read('Date of Release','Release Date');if(type==='maternity')values.section=read('Section','Working Section');if(type==='warning'){delete values.joiningDate;delete values.salary;Object.assign(values,{section:read('Section','Working Section'),fatherName:read("Father's Name",'Father Name','Father'),presentAddress:read('Present Address','Present Address (Eng)','Address'),village:read('Permanent Village','Village'),postOffice:read('Permanent Post Office','Post Office'),policeStation:read('Permanent Police Station','Police Station'),district:read('Permanent District','District')});}for(const key of ['joiningDate','release'])if(values[key])try{values[key]=normalizeDate(values[key]);}catch{}return values;}
async function adminHrAutofill(type){const form=adminHrForms[type];if(!form.pages.includes(activePage))return;const input=document.getElementById(form.prefix+'cardNo');if(!input)return;const key=adminHrLookupKey(input.value);if(input.dataset.hrLoadedCard===key)return;input.dataset.hrLoadedCard=key;const draft=form.draft();draft.cardNo=input.value;for(const [field]of form.fields()){if(field==='cardNo')continue;draft[field]='';const node=document.getElementById(form.prefix+field);if(node)node.value='';}form.detach();let status=document.getElementById(form.prefix+'hr-status');if(!status){status=document.createElement('small');status.id=form.prefix+'hr-status';status.setAttribute('role','status');status.style.cssText='grid-column:2;color:#315c4c';input.parentElement.append(status);}status.hidden=false;if(!key){status.textContent='';status.hidden=true;return;}let row;if(FarnoorAccess.canPage('employees')||FarnoorAccess.canPage('hr-profile-search')){row=adminHrMatch(key);}if(!row){const stillCurrent=()=>form.pages.includes(activePage)&&document.getElementById(form.prefix+'cardNo')===input&&adminHrLookupKey(input.value)===key;status.textContent='';status.hidden=true;await new Promise(resolve=>setTimeout(resolve,350));if(!stillCurrent())return;try{const response=await FarnoorAPI.request('/api/admin/form-hr-lookup',{method:'POST',payload:{card:input.value.trim(),form:type}}),body=await response.json();if(!stillCurrent())return;status.hidden=false;if(!response.ok){status.textContent=body.error||'তথ্য আনা যায়নি।';return;}if(body.femaleOnly){status.textContent='শুধু মহিলা/Woman কর্মীর তথ্য এই ফর্মে আসবে।';return;}row=body.row;}catch{if(stillCurrent()){status.hidden=false;status.textContent='তথ্য আনা যায়নি। আইডি আবার লিখুন।';}return;}}if(!row){status.textContent='এই ID No.-এর HR Profile পাওয়া যায়নি।';return;}if(type==='maternity'&&!maternityProfileIsWoman(row)){status.textContent='শুধু মহিলা/Woman কর্মীর তথ্য এই ফর্মে আসবে।';return;}for(const [field,value]of Object.entries(adminHrFormValues(row,type))){const node=document.getElementById(form.prefix+field);if(node){node.value=String(value);draft[field]=String(value);}}status.textContent='';status.hidden=true;}
serviceFillProfile=function(){adminHrAutofill('service');};warningFillHr=function(){adminHrAutofill('warning');};maternityFillProfile=function(){adminHrAutofill('maternity');};
const adminHrPreviousRender=renderPage;renderPage=function(...args){const result=adminHrPreviousRender.apply(this,args);for(const form of Object.values(adminHrForms)){if(!form.pages.includes(activePage))continue;const input=document.getElementById(form.prefix+'cardNo');if(input)input.dataset.hrLoadedCard=adminHrLookupKey(input.value);}return result;};
document.getElementById('main').addEventListener('change',event=>{if(event.target.id==='service-benefit-cardNo')serviceFillProfile();});

;
;/* personal-entry-tools.js */
'use strict';
const personalChildAges=Array.from({length:20},(_,i)=>String(i+1).replace(/[0-9]/g,d=>'০১২৩৪৫৬৭৮৯'[Number(d)])+' বছর');for(let child=0;child<5;child++)personalEntryOptions['child-'+child+'-1']=personalChildAges;

// Entry labels keep the saved field keys and existing record mappings unchanged.
Object.assign(personalEntryFields,{0:'কার্ড নং/আই ডি নং',1:'পদবী',2:'Designation',4:'Section',7:'নাম',8:'Name'});
function personalNomineeYear(value){const text=String(value??'').trim().replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));if(!/^\d{2}$/.test(text))return text;const short=Number(text),pivot=Number(new Intl.DateTimeFormat('en',{timeZone:'Asia/Dhaka',year:'numeric'}).format(new Date()).slice(-2));return String((short<=pivot?2000:1900)+short);}
function personalPhone(value){let text=String(value??'').trim();if(!text||text==='+88')return '';text=text.replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));return text.startsWith('+88')?text:text.startsWith('88')?'+'+text:'+88'+text;}
function personalEntryEnhance(){if(activePage!=='admin-personal-new-entry')return;if(!document.getElementById('personalCalendarStyle')){const style=document.createElement('style');style.id='personalCalendarStyle';style.textContent='@media screen{body:has(.personal-entry-form) #main{background:linear-gradient(135deg,#fff2df 0%,#f1ddd2 55%,#e9d8d5 100%)!important}#main .panel:has(.personal-entry-form){background:linear-gradient(135deg,#102b50,#155e75 55%,#30456d)!important;border-color:#234966!important}.personal-entry-form{background:#fbfffc;box-shadow:0 4px 20px #0003}}.personal-entry-form .personal-entry-row{padding:0;gap:12px;align-items:stretch}.personal-entry-form .personal-entry-row>label{background:#001f3f;color:#fff;font-size:19px;font-weight:600;line-height:1.35;padding:7px 10px;display:flex;align-items:center;align-self:stretch;margin:0}.personal-entry-form .personal-entry-row>.personal-choice-wrap{padding:3px 0}.personal-entry-form .personal-entry-row>.personal-choice-wrap>.personal-choice-toggle{top:5px}.personal-entry-form .personal-entry-row>.personal-choice-wrap>.personal-calendar-picker{top:5px!important}.personal-entry-form .personal-entry-row>input{align-self:center;margin:3px 0}@media(max-width:520px){.personal-entry-form .personal-entry-row>label{font-size:17px;padding:7px 8px}}.personal-entry-form .personal-entry-row input,.personal-entry-form .personal-entry-row select{min-height:35px;padding-top:7px;padding-bottom:7px}.personal-entry-form h4{margin-top:16px;padding:8px}.personal-entry-children{width:100%;table-layout:fixed}.personal-entry-children th:first-child{width:32%;text-align:right;padding-right:12px}.personal-entry-children th:nth-child(2){width:34%}.personal-entry-children th:nth-child(3),.personal-entry-children th:nth-child(4){width:17%}.personal-entry-children td:first-child{text-align:right;padding-right:12px;font-size:15px}.personal-entry-children th:not(:first-child){text-align:left;padding-left:7px}.personal-entry-children .personal-choice-wrap{min-width:0!important}.personal-entry-children input{min-width:0!important}.personal-entry-children .personal-suggestions{min-width:100px}@media(max-width:520px){.personal-entry-children th:first-child{width:22%}.personal-entry-children th:nth-child(2){width:38%}.personal-entry-children th:nth-child(3),.personal-entry-children th:nth-child(4){width:20%}}.personal-entry-form .personal-choice-toggle{top:2px;min-height:30px;height:30px}.personal-entry-form .personal-calendar-picker{top:2px!important;height:30px!important;min-height:30px!important}.personal-date-text{border-color:var(--date-border,#bdd0df)!important;background:var(--date-surface,#fbfdff)!important;transition:border-color .18s,box-shadow .18s}.personal-date-text:focus{outline:none!important;border-color:var(--date-accent,#5679a0)!important;box-shadow:0 0 0 3px var(--date-ring,#244f8120)}.personal-calendar-picker{transition:background-color .18s,box-shadow .18s,transform .18s}.personal-calendar-picker:hover{box-shadow:0 3px 9px #173c682b!important;transform:translateY(-1px)}.personal-calendar-picker:focus-visible{outline:2px solid #244f81!important;outline-offset:2px}.personal-calendar-picker::-webkit-calendar-picker-indicator{position:absolute;inset:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:pointer}.personal-calendar-picker::-webkit-datetime-edit{opacity:0}';document.head.append(style);}for(const key of ['field-20','family-mobile']){const input=document.querySelector('[data-personal-field="'+key+'"]');if(input){input.type='tel';input.inputMode='tel';input.value=personalPhone(input.value)||'+88';}}
 for(const key of ['field-6','field-17']){const input=document.getElementById('personal-'+key);if(!input||input.parentElement.querySelector('[data-personal-calendar]'))continue;input.style.paddingRight='58px';input.classList.add('personal-date-text');const birth=key==='field-17',accent=birth?'#7540b8':'#087f72';input.style.setProperty('--date-accent',accent);input.style.setProperty('--date-border',birth?'#d8c5ee':'#b5dfd3');input.style.setProperty('--date-surface',birth?'#fdfaff':'#f8fefa');input.style.setProperty('--date-ring',birth?'#7540b824':'#087f7224');const picker=document.createElement('input');picker.type='button';picker.className='personal-calendar-picker';picker.dataset.personalCalendar=key;picker.setAttribute('aria-label',personalEntryFields[Number(key.slice(6))]+' ক্যালেন্ডার');picker.title='তারিখ নির্বাচন করুন';const calendarIcon=encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="'+accent+'" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="4"/><path d="M7 3v4M17 3v4M3 10h18"/><path d="M8 14h1M15 14h1M8 17h1M15 17h1"/></svg>');picker.style.cssText='position:absolute;right:5px;top:4px;width:43px;height:32px;min-height:32px;padding:0;color:transparent;background-color:'+(birth?'#efe3ff':'#dff5ec')+';background-image:url("data:image/svg+xml,'+calendarIcon+'"),linear-gradient(145deg,'+(birth?'#f8efff,#e4d0fa':'#ecfff5,#cbeee0')+');background-position:center;background-repeat:no-repeat;border:1px solid '+(birth?'#d4b7ed':'#a5d6c3')+';border-radius:11px;box-shadow:0 2px 5px '+(birth?'#7540b81c':'#087f721c')+';cursor:pointer';try{const d=normalizeDate(input.value).split('/');picker.value=d.reverse().join('-');}catch{}picker.addEventListener('change',()=>{if(!picker.value)return;const [y,m,d]=picker.value.split('-');input.value=d+'/'+m+'/'+y;personalEntryDraft[key]=input.value;input.setCustomValidity('');if(key==='field-17')personalSyncBirthYear();});picker.value='';picker.setAttribute('aria-haspopup','dialog');picker.addEventListener('click',()=>personalShowCalendar(input,key,picker));input.parentElement.append(picker);}
}
const personalEnhancedRender=renderPage;renderPage=function(...args){const result=personalEnhancedRender.apply(this,args);personalEntryEnhance();if(activePage?.startsWith('admin-personal-form-')){if(!document.getElementById('personalPaperSurroundStyle')){const style=document.createElement('style');style.id='personalPaperSurroundStyle';style.textContent='@media screen{body:has(#personalFormPreview) #personalFilePrintContent{background:linear-gradient(135deg,#102b50,#155e75 55%,#30456d)!important;border:1px solid #234966!important;padding:24px 16px!important;border-radius:12px}body:has(#personalFormPreview) #personalFilePrintContent :is(.pf1-paper,.pf2-paper,.pf3-paper,.pf4-paper,.pf5-paper,.pf6-paper,.pf7-paper,.ps3-paper,.pe-paper){background:#fff!important;box-shadow:0 5px 22px #0005}}';document.head.append(style);}const excel=document.getElementById('personalFormExcel');if(excel&&!document.getElementById('personalFormPreview'))excel.insertAdjacentHTML('beforebegin','<button type="button" id="personalFormPreview" data-page-action-required="print" style="background:#e6ecff;color:#263b79">Print Preview</button>');if(typeof applyActionControls==='function')applyActionControls();}return result;};
document.getElementById('main').addEventListener('focusout',event=>{const input=event.target,key=input.dataset.personalField;if(key==='field-40'){input.value=personalNomineeYear(input.value);personalEntryDraft[key]=input.value;}if(['field-20','family-mobile'].includes(key)){const value=personalPhone(input.value);personalEntryDraft[key]=value;input.value=value||'+88';}});
const personalEnhancedSave=personalSaveEntry;personalSaveEntry=async function(){if(personalEntryDraft['field-40'])personalEntryDraft['field-40']=personalNomineeYear(personalEntryDraft['field-40']);for(const key of ['field-20','family-mobile'])if(personalEntryDraft[key])personalEntryDraft[key]=personalPhone(personalEntryDraft[key]);return personalEnhancedSave();};
function personalLoadPdfLibrary(target=window){if(target.html2pdf)return Promise.resolve();if(target.personalPdfLibrary)return target.personalPdfLibrary;target.personalPdfLibrary=new Promise((resolve,reject)=>{const script=target.document.createElement('script');script.src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';script.integrity='sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==';script.crossOrigin='anonymous';script.referrerPolicy='no-referrer';script.onload=()=>resolve();script.onerror=()=>{script.remove();target.personalPdfLibrary=null;reject(Error('PDF প্রস্তুত করা যায়নি। ইন্টারনেট সংযোগ দেখে আবার চেষ্টা করুন।'));};target.document.head.append(script);});return target.personalPdfLibrary;}
function personalPrintStyles(){const rules=[];function collect(list,print=false){for(const rule of list){if(rule.type===CSSRule.MEDIA_RULE){if(rule.conditionText.includes('print'))collect(rule.cssRules,true);else if(!print)rules.push(rule.cssText);}else if(rule.type===CSSRule.PAGE_RULE){}else rules.push(rule.cssText);}}for(const sheet of document.styleSheets)try{collect(sheet.cssRules);}catch{}return rules.join('\n');}
async function personalOpenPreview(pdf=false){const permission=pdf?'pdf':'print';if(!FarnoorAccess.canAction('admin-documents',permission))return toast(permission.toUpperCase()+' permission is required.');const content=document.getElementById('personalFilePrintContent');if(!content)return;document.getElementById('personalPreviewDialog')?.remove();const landscape=!!content.querySelector('.pf6-paper'),width=landscape?281:194,title=personalFileButtons.find(b=>b[0]===personalFileSelected)?.[1]||'Personal file';const dialog=document.createElement('dialog');dialog.id='personalPreviewDialog';dialog.style.cssText='position:fixed;inset:0;margin:0;width:100vw;height:100dvh;max-width:none;max-height:none;box-sizing:border-box;padding:12px;border:0;border-radius:0;background:linear-gradient(135deg,#102b50,#155e75 55%,#30456d);color:#fff;display:flex;flex-direction:column;overflow:hidden';dialog.innerHTML='<style>#personalPreviewDialog::backdrop{background:#102b50;backdrop-filter:none}#personalPreviewDialog .preview-toolbar{display:flex;position:relative;justify-content:center;flex-wrap:wrap;gap:8px;align-items:center;flex-shrink:0;min-height:38px}#personalPreviewDialog .preview-toolbar>strong{position:absolute;left:0;margin:0!important;font-size:13px}@media(max-width:600px){#personalPreviewDialog .preview-toolbar>strong{position:static;flex-basis:100%;text-align:center}}#personalPreviewDialog .preview-stage{flex:1;min-height:0;position:relative;overflow:hidden}#personalPreviewDialog .preview-stage iframe{position:absolute;top:50%;left:50%;max-width:none!important;max-height:none!important;border:0;box-shadow:0 4px 24px #0006;transform-origin:center center;background:white}</style><div class="preview-toolbar" style="margin-bottom:8px"><strong style="margin:0">'+esc(title)+' · A4 '+(landscape?'Landscape':'Portrait')+'</strong><button type="button" data-preview-pdf>Save PDF</button><button type="button" data-preview-print>Print</button><button type="button" data-preview-close>Close</button></div><p data-preview-status role="status" hidden style="font-size:13px;margin:2px 0 8px;text-align:center">PDF সেভের সময় লোকেশন বেছে নিন।</p><div class="preview-stage"><iframe title="'+esc(title)+' Print Preview"></iframe></div>';document.body.append(dialog);const frame=dialog.querySelector('iframe'),css=personalPrintStyles(),previewContent=content.cloneNode(true);previewContent.querySelectorAll('style').forEach(style=>style.remove());const loaded=new Promise(resolve=>frame.onload=resolve);frame.srcdoc='<!doctype html><html lang="bn"><head><meta charset="utf-8"><base href="'+esc(document.baseURI)+'"><title>'+esc(title)+'</title><style>'+css+'\nhtml,body{background:white!important;margin:0!important;padding:0!important;width:'+width+'mm!important;min-width:0!important;min-height:'+(landscape?194:281)+'mm!important}#workspace,#main{display:block!important;width:'+width+'mm!important;max-width:none!important;padding:0!important;margin:0!important}#personalFilePrintContent{border:0!important;margin:0!important;padding:0!important;overflow:visible!important}.no-print{display:none!important} .pf6-paper{width:280mm!important} @page{size:A4 '+(landscape?'landscape':'portrait')+';margin:8mm}</style></head><body><div id="workspace"><main id="main">'+previewContent.outerHTML+'</main></div></body></html>';dialog.showModal();await loaded;await frame.contentDocument.fonts.ready;await Promise.all([...frame.contentDocument.images].map(img=>img.complete?Promise.resolve():new Promise(resolve=>{img.onload=resolve;img.onerror=resolve;})));const stage=dialog.querySelector('.preview-stage'),paperWidth=(landscape?297:210)*96/25.4,paperHeight=(landscape?210:297)*96/25.4,doc=frame.contentDocument,main=doc.getElementById('main'),pages=[...doc.querySelectorAll('.pf3-paper,.ps3-paper')];let pageIndex=0,pageStyle=null;frame.style.width=paperWidth+'px';frame.style.height=paperHeight+'px';let documentHeight=Math.max(paperHeight,main.scrollHeight);const fit=()=>{frame.style.height=documentHeight+'px';const scale=Math.min(1,(stage.clientWidth-12)/paperWidth,(stage.clientHeight-12)/documentHeight);frame.style.transform='translate(-50%,-50%) scale('+Math.max(.01,scale)+')';};if(pages.length>1){pageStyle=doc.createElement('style');pageStyle.textContent='@media screen{html,body{height:297mm!important;overflow:hidden!important}#main{height:281mm!important;overflow:visible!important}#main article.pf3-paper,#main article.ps3-paper{display:none!important;margin:0!important;min-height:0!important;break-before:auto!important;transform-origin:top left}#main article.preview-current-page{display:block!important;transform:scale(var(--preview-page-scale,1))}}';doc.head.append(pageStyle);const pager=document.createElement('div');pager.className='preview-pager';pager.hidden=true;pager.style.cssText='display:none';pager.innerHTML='<button type="button" data-preview-prev aria-label="আগের পাতা">‹ আগের পাতা</button><strong aria-live="polite" data-preview-page></strong><button type="button" data-preview-next aria-label="পরের পাতা">পরের পাতা ›</button>';stage.before(pager);const renderPage=()=>{pages.forEach((page,i)=>page.classList.toggle('preview-current-page',i===pageIndex));const page=pages[pageIndex];page.style.setProperty('--preview-page-scale',String(Math.min(1,(281*96/25.4)/page.scrollHeight,(194*96/25.4)/page.scrollWidth)));pager.querySelector('[data-preview-page]').textContent='পাতা '+(pageIndex+1)+' / '+pages.length;pager.querySelector('[data-preview-prev]').disabled=pageIndex===0;pager.querySelector('[data-preview-next]').disabled=pageIndex===pages.length-1;documentHeight=paperHeight;fit();};pager.querySelector('[data-preview-prev]').onclick=()=>{if(pageIndex>0){pageIndex--;renderPage();}};pager.querySelector('[data-preview-next]').onclick=()=>{if(pageIndex<pages.length-1){pageIndex++;renderPage();}};let wheelTotal=0,lastWheel=0,lastChange=0;const wheelPage=event=>{if(Math.abs(event.deltaX)>Math.abs(event.deltaY))return;event.preventDefault();const now=performance.now();if(now-lastChange<550)return;if(now-lastWheel>180)wheelTotal=0;lastWheel=now;wheelTotal+=event.deltaY;if(Math.abs(wheelTotal)<35)return;const next=Math.max(0,Math.min(pages.length-1,pageIndex+(wheelTotal>0?1:-1)));wheelTotal=0;if(next!==pageIndex){pageIndex=next;lastChange=now;renderPage();}};dialog.addEventListener('wheel',wheelPage,{passive:false});doc.addEventListener('wheel',wheelPage,{passive:false});const keyPage=event=>{if(!['PageDown','PageUp','ArrowDown','ArrowUp'].includes(event.key))return;event.preventDefault();const next=Math.max(0,Math.min(pages.length-1,pageIndex+(['PageDown','ArrowDown'].includes(event.key)?1:-1)));if(next!==pageIndex){pageIndex=next;renderPage();}};dialog.addEventListener('keydown',keyPage);doc.addEventListener('keydown',keyPage);renderPage();}const observer=new ResizeObserver(fit);observer.observe(stage);fit();dialog.addEventListener('close',()=>observer.disconnect(),{once:true});const close=()=>{dialog.close();dialog.remove();};dialog.querySelector('[data-preview-close]').onclick=close;dialog.addEventListener('cancel',()=>dialog.remove());dialog.querySelector('[data-preview-print]').onclick=()=>{if(!FarnoorAccess.canAction('admin-documents','print'))return toast('PRINT permission is required.');frame.contentWindow.focus();frame.contentWindow.print();};let busy=false;
const filename=title+'-'+(personalCardLookup||'form').replace(/[^a-zA-Z0-9০-৯_-]/g,'_')+'.pdf';let generatedBlob=null,generatedUrl=null;const generate=async()=>{if(generatedBlob)return generatedBlob;await personalLoadPdfLibrary(frame.contentWindow);if(pageStyle)pageStyle.disabled=true;try{const worker=frame.contentWindow.html2pdf().set({margin:8,filename,image:{type:'jpeg',quality:.98},html2canvas:{scale:2,useCORS:true,logging:false,windowWidth:landscape?1123:794},jsPDF:{unit:'mm',format:'a4',orientation:landscape?'landscape':'portrait'},pagebreak:{mode:['css','legacy'],avoid:['tr','.pf1-signatures','.pf2-footer','.pf3-signatures','.pf5-footer']}}).from(frame.contentDocument.getElementById('main'));await worker.toPdf();const canvas=await worker.get('canvas'),pdf=await worker.get('pdf'),size=await worker.get('pageSize'),pageHeight=Math.floor(canvas.width*size.inner.ratio),ctx=canvas.getContext('2d');while(pdf.internal.getNumberOfPages()>1){const number=pdf.internal.getNumberOfPages(),top=(number-1)*pageHeight,height=Math.min(pageHeight,canvas.height-top);let ink=false;if(height>0){const pixels=ctx.getImageData(0,top,canvas.width,height).data;for(let i=0,count=0;i<pixels.length;i+=4){if(pixels[i+3]>20&&(pixels[i]<240||pixels[i+1]<240||pixels[i+2]<240)&&++count>8){ink=true;break;}}}if(ink)break;pdf.deletePage(number);}const blob=pdf.output('blob');generatedBlob=blob;return blob;}finally{if(pageStyle)pageStyle.disabled=false;}};dialog.addEventListener('close',()=>{if(generatedUrl)URL.revokeObjectURL(generatedUrl);});
 const save=async()=>{if(busy)return;if(!FarnoorAccess.canAction('admin-documents','pdf'))return toast('PDF permission is required.');busy=true;const button=dialog.querySelector('[data-preview-pdf]'),status=dialog.querySelector('[data-preview-status]');button.disabled=true;status.hidden=false;let handle;try{const filename=title+'-'+(personalCardLookup||'form').replace(/[^a-zA-Z0-9০-৯_-]/g,'_')+'.pdf';if(window.showSaveFilePicker)handle=await window.showSaveFilePicker({suggestedName:filename,types:[{description:'PDF document',accept:{'application/pdf':['.pdf']}}]});status.textContent='PDF প্রস্তুত হচ্ছে…';const blob=await generate();if(handle){const stream=await handle.createWritable();await stream.write(blob);await stream.close();}else{const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=filename;link.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}status.textContent='PDF সেভ হয়েছে।';}catch(error){status.textContent=error.name==='AbortError'?'PDF সেভ বাতিল করা হয়েছে।':error.message;}finally{busy=false;button.disabled=false;}};
 dialog.querySelector('[data-preview-pdf]').onclick=save;if(pdf){const status=dialog.querySelector('[data-preview-status]');status.textContent='PDF প্রস্তুত হচ্ছে…';try{const blob=await generate();generatedUrl=URL.createObjectURL(blob);const viewer=document.createElement('iframe');viewer.title=title+' PDF';viewer.style.cssText=frame.style.cssText;viewer.src=generatedUrl;frame.hidden=true;dialog.append(viewer);const link=document.createElement('a');link.href=generatedUrl;link.download=filename;link.textContent='Download PDF';link.style.marginLeft='12px';status.textContent='ফাইল ও লোকেশন বেছে নিতে Save PDF চাপুন।';status.append(link);}catch(error){status.textContent=error.message;}}
}
document.getElementById('main').addEventListener('click',event=>{if(event.target.closest('#personalFormPdf'))personalOpenPreview(true);if(event.target.closest('#personalFormPreview'))personalOpenPreview(false);});

// Illustrated calendar: red month banner, navy dates, and direct month/year selection.
function personalShowCalendar(input,key,trigger){
 document.getElementById('personalDateDialog')?.remove();
 const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
 const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Dhaka',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date()).split('/').map(Number),today={year:parts[2],month:parts[1]-1,day:parts[0]};let selected=null;try{const [d,m,y]=normalizeDate(input.value).split('/').map(Number);selected={year:y,month:m-1,day:d};}catch{}
 let year=selected?.year||today.year,month=selected?.month??today.month;
 const dialog=document.createElement('dialog');dialog.id='personalDateDialog';dialog.setAttribute('aria-label',personalEntryFields[Number(key.slice(6))]+' নির্বাচন');dialog.style.cssText='width:364px;max-width:calc(100vw - 24px);padding:12px;border:2px solid #cbd1e2;border-radius:15px;background:#fffdfd;color:#231550;box-shadow:0 18px 70px #06152950';
 dialog.innerHTML='<style>#personalDateDialog::backdrop{background:#08213e55;backdrop-filter:blur(2px)}#personalDateDialog *{box-sizing:border-box}#personalDateDialog button,#personalDateDialog select{font-family:Arial,sans-serif}#personalDateDialog .pc-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:9px;gap:8px}#personalDateDialog .pc-label{font-size:14px;font-weight:700;color:#34235f}#personalDateDialog .pc-close{border:0;background:#f1eef7;color:#35205b;border-radius:50%;width:30px;height:30px;padding:0;font-size:21px}#personalDateDialog .pc-banner{display:grid;grid-template-columns:30px minmax(0,1fr) 78px 30px;gap:5px;align-items:center;padding:5px 0 8px;border-bottom:2px solid #d5d5e6}#personalDateDialog .pc-month-wrap{background:linear-gradient(135deg,#f01326,#bf0019);border-radius:20px 4px 20px 4px;padding:3px 9px;box-shadow:0 2px 0 #730915}#personalDateDialog .pc-month{font-size:20px;font-weight:900;color:white;background:transparent;border:0;padding:5px 0;min-height:32px;text-transform:uppercase;appearance:auto;cursor:pointer}#personalDateDialog .pc-month option{background:white;color:#20134c;font-size:16px}#personalDateDialog .pc-year{font-size:19px;font-weight:900;color:#d40720;background:#f7f4fb;border:1px solid #ddd7e7;border-radius:8px;padding:4px 1px;height:35px;cursor:pointer}#personalDateDialog .pc-arrow{padding:0;width:30px;height:34px;border:1px solid #dcd6e8;border-radius:8px;background:#f7f4fb;color:#291459;font-size:23px}#personalDateDialog .pc-week,#personalDateDialog .pc-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px}#personalDateDialog .pc-week{padding:8px 0 6px;text-align:center;font:bold italic 10px Arial,sans-serif;color:#322451}#personalDateDialog .pc-week span:first-child{color:#d40720}#personalDateDialog .pc-day{display:grid;place-items:center;width:100%;min-height:43px;padding:0;border:1px solid #e0ddec;border-radius:6px;background:linear-gradient(#fff,#f1f0f7);font-family:Arial,sans-serif;font-size:25px;font-weight:900;line-height:1;color:#28135c;box-shadow:0 1px 1px #28135c0a}#personalDateDialog .pc-day.pc-sunday{color:#df001c}#personalDateDialog .pc-day.pc-today{border:2px solid #df001c}#personalDateDialog .pc-day.pc-selected{background:linear-gradient(#ef1933,#bc001b);color:white;border-color:#ae0016;box-shadow:0 3px 6px #d4072030}#personalDateDialog .pc-day:hover{background:#eae2fb;border-color:#9d87bb}#personalDateDialog .pc-day.pc-selected:hover{background:#b8001b}#personalDateDialog button:focus-visible,#personalDateDialog select:focus-visible{outline:3px solid #9373c7;outline-offset:1px}#personalDateDialog .pc-empty{min-height:43px}#personalDateDialog .pc-footer{display:flex;justify-content:space-between;gap:8px;margin-top:11px;padding-top:9px;border-top:1px solid #e4deec}#personalDateDialog .pc-footer button{padding:6px 13px;font-size:13px;border-radius:7px;background:#f1edf9;color:#37205f;border:1px solid #ded4ee}</style><div class="pc-top"><span class="pc-label">'+esc(personalEntryFields[Number(key.slice(6))])+'</span><button type="button" class="pc-close" aria-label="ক্যালেন্ডার বন্ধ করুন">×</button></div><div class="pc-banner"><button type="button" class="pc-arrow" data-cal-prev aria-label="আগের মাস">‹</button><div class="pc-month-wrap"><select class="pc-month" aria-label="মাস">'+months.map((m,i)=>'<option value="'+i+'">'+m+'</option>').join('')+'</select></div><select class="pc-year" aria-label="সাল">'+Array.from({length:300},(_,i)=>1900+i).map(y=>'<option value="'+y+'">'+y+'</option>').join('')+'</select><button type="button" class="pc-arrow" data-cal-next aria-label="পরের মাস">›</button></div><div class="pc-week" aria-hidden="true">'+['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].map(d=>'<span>'+d.slice(0,3)+'</span>').join('')+'</div><div class="pc-grid" role="group" aria-label="তারিখ নির্বাচন"></div><div class="pc-footer"><button type="button" data-cal-clear>Clear</button><button type="button" data-cal-today>Today</button></div>';
 const close=()=>{dialog.close();dialog.remove();trigger?.focus();};
 const choose=value=>{input.value=value;personalEntryDraft[key]=value;input.setCustomValidity('');if(key==='field-17')personalSyncBirthYear();close();};
 const render=()=>{dialog.querySelector('.pc-month').value=String(month);dialog.querySelector('.pc-year').value=String(year);const first=new Date(year,month,1).getDay(),days=new Date(year,month+1,0).getDate();dialog.querySelector('.pc-grid').innerHTML=Array.from({length:first},()=>'<span class="pc-empty"></span>').join('')+Array.from({length:days},(_,i)=>{const day=i+1,isSelected=selected&&selected.year===year&&selected.month===month&&selected.day===day,isToday=today.year===year&&today.month===month&&today.day===day;return '<button type="button" class="pc-day'+((first+i)%7===0?' pc-sunday':'')+(isSelected?' pc-selected':'')+(isToday?' pc-today':'')+'" data-cal-day="'+day+'" aria-label="'+day+' '+months[month]+' '+year+'" aria-pressed="'+!!isSelected+'"'+(isToday?' aria-current="date"':'')+'>'+day+'</button>';}).join('');};
 dialog.addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;if(button.classList.contains('pc-close'))return close();if(button.hasAttribute('data-cal-day'))return choose(String(button.dataset.calDay).padStart(2,'0')+'/'+String(month+1).padStart(2,'0')+'/'+year);if(button.hasAttribute('data-cal-clear'))return choose('');if(button.hasAttribute('data-cal-today')){year=today.year;month=today.month;render();return;}if(button.hasAttribute('data-cal-prev')||button.hasAttribute('data-cal-next')){const value=new Date(year,month+(button.hasAttribute('data-cal-prev')?-1:1),1);if(value.getFullYear()<1900||value.getFullYear()>2199)return;year=value.getFullYear();month=value.getMonth();render();}});
 dialog.querySelector('.pc-month').onchange=event=>{month=Number(event.target.value);render();};dialog.querySelector('.pc-year').onchange=event=>{year=Number(event.target.value);render();};dialog.addEventListener('cancel',event=>{event.preventDefault();close();});document.body.append(dialog);render();dialog.showModal();dialog.querySelector('.pc-selected,.pc-today,.pc-day')?.focus();
}

;