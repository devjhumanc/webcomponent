function u(t) {
  const e = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && e === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || e === "[object Number]" || typeof t == "string" || e === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
function p(t, e) {
  return t instanceof Date ? new t.constructor(e) : new Date(e);
}
const L = 6048e5, Q = 864e5, v = 43200, E = 1440;
let j = {};
function k() {
  return j;
}
function P(t, e) {
  var i, d, f, l;
  const n = k(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((d = (i = e == null ? void 0 : e.locale) == null ? void 0 : i.options) == null ? void 0 : d.weekStartsOn) ?? n.weekStartsOn ?? ((l = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : l.weekStartsOn) ?? 0, a = u(t), o = a.getDay(), s = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function S(t) {
  return P(t, { weekStartsOn: 1 });
}
function _(t) {
  const e = u(t), n = e.getFullYear(), r = p(t, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = S(r), o = p(t, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = S(o);
  return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= s.getTime() ? n : n - 1;
}
function F(t) {
  const e = u(t);
  return e.setHours(0, 0, 0, 0), e;
}
function W(t) {
  const e = u(t), n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), +t - +n;
}
function B(t, e) {
  const n = F(t), r = F(e), a = +n - W(n), o = +r - W(r);
  return Math.round((a - o) / Q);
}
function G(t) {
  const e = _(t), n = p(t, 0);
  return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), S(n);
}
function T(t, e) {
  const n = u(t), r = u(e), a = n.getTime() - r.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function V(t) {
  return p(t, Date.now());
}
function $(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function J(t) {
  if (!$(t) && typeof t != "number")
    return !1;
  const e = u(t);
  return !isNaN(Number(e));
}
function U(t, e) {
  const n = u(t), r = u(e), a = n.getFullYear() - r.getFullYear(), o = n.getMonth() - r.getMonth();
  return a * 12 + o;
}
function z(t) {
  return (e) => {
    const r = (t ? Math[t] : Math.trunc)(e);
    return r === 0 ? 0 : r;
  };
}
function K(t, e) {
  return +u(t) - +u(e);
}
function Z(t) {
  const e = u(t);
  return e.setHours(23, 59, 59, 999), e;
}
function tt(t) {
  const e = u(t), n = e.getMonth();
  return e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(23, 59, 59, 999), e;
}
function et(t) {
  const e = u(t);
  return +Z(e) == +tt(e);
}
function nt(t, e) {
  const n = u(t), r = u(e), a = T(n, r), o = Math.abs(
    U(n, r)
  );
  let s;
  if (o < 1)
    s = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30), n.setMonth(n.getMonth() - a * o);
    let i = T(n, r) === -a;
    et(u(t)) && o === 1 && T(t, r) === 1 && (i = !1), s = a * (o - Number(i));
  }
  return s === 0 ? 0 : s;
}
function rt(t, e, n) {
  const r = K(t, e) / 1e3;
  return z(n == null ? void 0 : n.roundingMethod)(r);
}
function at(t) {
  const e = u(t), n = p(t, 0);
  return n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const ot = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, it = (t, e, n) => {
  let r;
  const a = ot[t];
  return typeof a == "string" ? r = a : e === 1 ? r = a.one : r = a.other.replace("{{count}}", e.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function C(t) {
  return (e = {}) => {
    const n = e.width ? String(e.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
const st = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ct = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ut = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, dt = {
  date: C({
    formats: st,
    defaultWidth: "full"
  }),
  time: C({
    formats: ct,
    defaultWidth: "full"
  }),
  dateTime: C({
    formats: ut,
    defaultWidth: "full"
  })
}, ft = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, lt = (t, e, n, r) => ft[t];
function D(t) {
  return (e, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && t.formattingValues) {
      const s = t.defaultFormattingWidth || t.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      a = t.formattingValues[i] || t.formattingValues[s];
    } else {
      const s = t.defaultWidth, i = n != null && n.width ? String(n.width) : t.defaultWidth;
      a = t.values[i] || t.values[s];
    }
    const o = t.argumentCallback ? t.argumentCallback(e) : e;
    return a[o];
  };
}
const ht = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, mt = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, gt = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, wt = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, bt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, yt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, pt = (t, e) => {
  const n = Number(t), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, xt = {
  ordinalNumber: pt,
  era: D({
    values: ht,
    defaultWidth: "wide"
  }),
  quarter: D({
    values: mt,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: D({
    values: gt,
    defaultWidth: "wide"
  }),
  day: D({
    values: wt,
    defaultWidth: "wide"
  }),
  dayPeriod: D({
    values: bt,
    defaultWidth: "wide",
    formattingValues: yt,
    defaultFormattingWidth: "wide"
  })
};
function O(t) {
  return (e, n = {}) => {
    const r = n.width, a = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth], o = e.match(a);
    if (!o)
      return null;
    const s = o[0], i = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], d = Array.isArray(i) ? Dt(i, (w) => w.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Mt(i, (w) => w.test(s))
    );
    let f;
    f = t.valueCallback ? t.valueCallback(d) : d, f = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(f)
    ) : f;
    const l = e.slice(s.length);
    return { value: f, rest: l };
  };
}
function Mt(t, e) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
      return n;
}
function Dt(t, e) {
  for (let n = 0; n < t.length; n++)
    if (e(t[n]))
      return n;
}
function Ot(t) {
  return (e, n = {}) => {
    const r = e.match(t.matchPattern);
    if (!r) return null;
    const a = r[0], o = e.match(t.parsePattern);
    if (!o) return null;
    let s = t.valueCallback ? t.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = e.slice(a.length);
    return { value: s, rest: i };
  };
}
const Pt = /^(\d+)(th|st|nd|rd)?/i, kt = /\d+/i, vt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Tt = {
  any: [/^b/i, /^(a|c)/i]
}, St = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Wt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Yt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ct = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Et = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ft = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Nt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, qt = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Xt = {
  ordinalNumber: Ot({
    matchPattern: Pt,
    parsePattern: kt,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: O({
    matchPatterns: vt,
    defaultMatchWidth: "wide",
    parsePatterns: Tt,
    defaultParseWidth: "any"
  }),
  quarter: O({
    matchPatterns: St,
    defaultMatchWidth: "wide",
    parsePatterns: Wt,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: O({
    matchPatterns: Yt,
    defaultMatchWidth: "wide",
    parsePatterns: Ct,
    defaultParseWidth: "any"
  }),
  day: O({
    matchPatterns: Et,
    defaultMatchWidth: "wide",
    parsePatterns: Ft,
    defaultParseWidth: "any"
  }),
  dayPeriod: O({
    matchPatterns: Nt,
    defaultMatchWidth: "any",
    parsePatterns: qt,
    defaultParseWidth: "any"
  })
}, R = {
  code: "en-US",
  formatDistance: it,
  formatLong: dt,
  formatRelative: lt,
  localize: xt,
  match: Xt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ht(t) {
  const e = u(t);
  return B(e, at(e)) + 1;
}
function Lt(t) {
  const e = u(t), n = +S(e) - +G(e);
  return Math.round(n / L) + 1;
}
function A(t, e) {
  var l, w, m, b;
  const n = u(t), r = n.getFullYear(), a = k(), o = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((w = (l = e == null ? void 0 : e.locale) == null ? void 0 : l.options) == null ? void 0 : w.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (m = a.locale) == null ? void 0 : m.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = p(t, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const i = P(s, e), d = p(t, 0);
  d.setFullYear(r, 0, o), d.setHours(0, 0, 0, 0);
  const f = P(d, e);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= f.getTime() ? r : r - 1;
}
function _t(t, e) {
  var i, d, f, l;
  const n = k(), r = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((d = (i = e == null ? void 0 : e.locale) == null ? void 0 : i.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((l = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, a = A(t, e), o = p(t, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), P(o, e);
}
function Rt(t, e) {
  const n = u(t), r = +P(n, e) - +_t(n, e);
  return Math.round(r / L) + 1;
}
function c(t, e) {
  const n = t < 0 ? "-" : "", r = Math.abs(t).toString().padStart(e, "0");
  return n + r;
}
const y = {
  // Year
  y(t, e) {
    const n = t.getFullYear(), r = n > 0 ? n : 1 - n;
    return c(e === "yy" ? r % 100 : r, e.length);
  },
  // Month
  M(t, e) {
    const n = t.getMonth();
    return e === "M" ? String(n + 1) : c(n + 1, 2);
  },
  // Day of the month
  d(t, e) {
    return c(t.getDate(), e.length);
  },
  // AM or PM
  a(t, e) {
    const n = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(t, e) {
    return c(t.getHours() % 12 || 12, e.length);
  },
  // Hour [0-23]
  H(t, e) {
    return c(t.getHours(), e.length);
  },
  // Minute
  m(t, e) {
    return c(t.getMinutes(), e.length);
  },
  // Second
  s(t, e) {
    return c(t.getSeconds(), e.length);
  },
  // Fraction of second
  S(t, e) {
    const n = e.length, r = t.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return c(a, e.length);
  }
}, M = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, N = {
  // Era
  G: function(t, e, n) {
    const r = t.getFullYear() > 0 ? 1 : 0;
    switch (e) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(t, e, n) {
    if (e === "yo") {
      const r = t.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return y.y(t, e);
  },
  // Local week-numbering year
  Y: function(t, e, n, r) {
    const a = A(t, r), o = a > 0 ? a : 1 - a;
    if (e === "YY") {
      const s = o % 100;
      return c(s, 2);
    }
    return e === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : c(o, e.length);
  },
  // ISO week-numbering year
  R: function(t, e) {
    const n = _(t);
    return c(n, e.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, e) {
    const n = t.getFullYear();
    return c(n, e.length);
  },
  // Quarter
  Q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      case "Q":
        return String(r);
      case "QQ":
        return c(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, e, n) {
    const r = Math.ceil((t.getMonth() + 1) / 3);
    switch (e) {
      case "q":
        return String(r);
      case "qq":
        return c(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "M":
      case "MM":
        return y.M(t, e);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(t, e, n) {
    const r = t.getMonth();
    switch (e) {
      case "L":
        return String(r + 1);
      case "LL":
        return c(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(t, e, n, r) {
    const a = Rt(t, r);
    return e === "wo" ? n.ordinalNumber(a, { unit: "week" }) : c(a, e.length);
  },
  // ISO week of year
  I: function(t, e, n) {
    const r = Lt(t);
    return e === "Io" ? n.ordinalNumber(r, { unit: "week" }) : c(r, e.length);
  },
  // Day of the month
  d: function(t, e, n) {
    return e === "do" ? n.ordinalNumber(t.getDate(), { unit: "date" }) : y.d(t, e);
  },
  // Day of year
  D: function(t, e, n) {
    const r = Ht(t);
    return e === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : c(r, e.length);
  },
  // Day of week
  E: function(t, e, n) {
    const r = t.getDay();
    switch (e) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, e, n, r) {
    const a = t.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "e":
        return String(o);
      case "ee":
        return c(o, 2);
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, e, n, r) {
    const a = t.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (e) {
      case "c":
        return String(o);
      case "cc":
        return c(o, e.length);
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, e, n) {
    const r = t.getDay(), a = r === 0 ? 7 : r;
    switch (e) {
      case "i":
        return String(a);
      case "ii":
        return c(a, e.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, e, n) {
    const a = t.getHours() / 12 >= 1 ? "pm" : "am";
    switch (e) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r === 12 ? a = M.noon : r === 0 ? a = M.midnight : a = r / 12 >= 1 ? "pm" : "am", e) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, e, n) {
    const r = t.getHours();
    let a;
    switch (r >= 17 ? a = M.evening : r >= 12 ? a = M.afternoon : r >= 4 ? a = M.morning : a = M.night, e) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, e, n) {
    if (e === "ho") {
      let r = t.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return y.h(t, e);
  },
  // Hour [0-23]
  H: function(t, e, n) {
    return e === "Ho" ? n.ordinalNumber(t.getHours(), { unit: "hour" }) : y.H(t, e);
  },
  // Hour [0-11]
  K: function(t, e, n) {
    const r = t.getHours() % 12;
    return e === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : c(r, e.length);
  },
  // Hour [1-24]
  k: function(t, e, n) {
    let r = t.getHours();
    return r === 0 && (r = 24), e === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : c(r, e.length);
  },
  // Minute
  m: function(t, e, n) {
    return e === "mo" ? n.ordinalNumber(t.getMinutes(), { unit: "minute" }) : y.m(t, e);
  },
  // Second
  s: function(t, e, n) {
    return e === "so" ? n.ordinalNumber(t.getSeconds(), { unit: "second" }) : y.s(t, e);
  },
  // Fraction of second
  S: function(t, e) {
    return y.S(t, e);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, e, n) {
    const r = t.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (e) {
      case "X":
        return X(r);
      case "XXXX":
      case "XX":
        return x(r);
      case "XXXXX":
      case "XXX":
      default:
        return x(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      case "x":
        return X(r);
      case "xxxx":
      case "xx":
        return x(r);
      case "xxxxx":
      case "xxx":
      default:
        return x(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + q(r, ":");
      case "OOOO":
      default:
        return "GMT" + x(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, e, n) {
    const r = t.getTimezoneOffset();
    switch (e) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + q(r, ":");
      case "zzzz":
      default:
        return "GMT" + x(r, ":");
    }
  },
  // Seconds timestamp
  t: function(t, e, n) {
    const r = Math.trunc(t.getTime() / 1e3);
    return c(r, e.length);
  },
  // Milliseconds timestamp
  T: function(t, e, n) {
    const r = t.getTime();
    return c(r, e.length);
  }
};
function q(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + e + c(o, 2);
}
function X(t, e) {
  return t % 60 === 0 ? (t > 0 ? "-" : "+") + c(Math.abs(t) / 60, 2) : x(t, e);
}
function x(t, e = "") {
  const n = t > 0 ? "-" : "+", r = Math.abs(t), a = c(Math.trunc(r / 60), 2), o = c(r % 60, 2);
  return n + a + e + o;
}
const H = (t, e) => {
  switch (t) {
    case "P":
      return e.date({ width: "short" });
    case "PP":
      return e.date({ width: "medium" });
    case "PPP":
      return e.date({ width: "long" });
    case "PPPP":
    default:
      return e.date({ width: "full" });
  }
}, I = (t, e) => {
  switch (t) {
    case "p":
      return e.time({ width: "short" });
    case "pp":
      return e.time({ width: "medium" });
    case "ppp":
      return e.time({ width: "long" });
    case "pppp":
    default:
      return e.time({ width: "full" });
  }
}, At = (t, e) => {
  const n = t.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return H(t, e);
  let o;
  switch (r) {
    case "P":
      o = e.dateTime({ width: "short" });
      break;
    case "PP":
      o = e.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = e.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = e.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", H(r, e)).replace("{{time}}", I(a, e));
}, It = {
  p: I,
  P: At
}, Qt = /^D+$/, jt = /^Y+$/, Bt = ["D", "DD", "YY", "YYYY"];
function Gt(t) {
  return Qt.test(t);
}
function Vt(t) {
  return jt.test(t);
}
function $t(t, e, n) {
  const r = Jt(t, e, n);
  if (console.warn(r), Bt.includes(t)) throw new RangeError(r);
}
function Jt(t, e, n) {
  const r = t[0] === "Y" ? "years" : "days of the month";
  return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ut = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, zt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Kt = /^'([^]*?)'?$/, Zt = /''/g, te = /[a-zA-Z]/;
function ee(t, e, n) {
  var l, w, m, b;
  const r = k(), a = r.locale ?? R, o = r.firstWeekContainsDate ?? ((w = (l = r.locale) == null ? void 0 : l.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, s = r.weekStartsOn ?? ((b = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : b.weekStartsOn) ?? 0, i = u(t);
  if (!J(i))
    throw new RangeError("Invalid time value");
  let d = e.match(zt).map((h) => {
    const g = h[0];
    if (g === "p" || g === "P") {
      const Y = It[g];
      return Y(h, a.formatLong);
    }
    return h;
  }).join("").match(Ut).map((h) => {
    if (h === "''")
      return { isToken: !1, value: "'" };
    const g = h[0];
    if (g === "'")
      return { isToken: !1, value: ne(h) };
    if (N[g])
      return { isToken: !0, value: h };
    if (g.match(te))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
      );
    return { isToken: !1, value: h };
  });
  a.localize.preprocessor && (d = a.localize.preprocessor(i, d));
  const f = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a
  };
  return d.map((h) => {
    if (!h.isToken) return h.value;
    const g = h.value;
    (Vt(g) || Gt(g)) && $t(g, e, String(t));
    const Y = N[g[0]];
    return Y(i, g, a.localize, f);
  }).join("");
}
function ne(t) {
  const e = t.match(Kt);
  return e ? e[1].replace(Zt, "'") : t;
}
function re(t, e, n) {
  const r = k(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? R, o = 2520, s = T(t, e);
  if (isNaN(s))
    throw new RangeError("Invalid time value");
  const i = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: s
  });
  let d, f;
  s > 0 ? (d = u(e), f = u(t)) : (d = u(t), f = u(e));
  const l = rt(f, d), w = (W(f) - W(d)) / 1e3, m = Math.round((l - w) / 60);
  let b;
  if (m < 2)
    return n != null && n.includeSeconds ? l < 5 ? a.formatDistance("lessThanXSeconds", 5, i) : l < 10 ? a.formatDistance("lessThanXSeconds", 10, i) : l < 20 ? a.formatDistance("lessThanXSeconds", 20, i) : l < 40 ? a.formatDistance("halfAMinute", 0, i) : l < 60 ? a.formatDistance("lessThanXMinutes", 1, i) : a.formatDistance("xMinutes", 1, i) : m === 0 ? a.formatDistance("lessThanXMinutes", 1, i) : a.formatDistance("xMinutes", m, i);
  if (m < 45)
    return a.formatDistance("xMinutes", m, i);
  if (m < 90)
    return a.formatDistance("aboutXHours", 1, i);
  if (m < E) {
    const h = Math.round(m / 60);
    return a.formatDistance("aboutXHours", h, i);
  } else {
    if (m < o)
      return a.formatDistance("xDays", 1, i);
    if (m < v) {
      const h = Math.round(m / E);
      return a.formatDistance("xDays", h, i);
    } else if (m < v * 2)
      return b = Math.round(m / v), a.formatDistance("aboutXMonths", b, i);
  }
  if (b = nt(f, d), b < 12) {
    const h = Math.round(m / v);
    return a.formatDistance("xMonths", h, i);
  } else {
    const h = b % 12, g = Math.trunc(b / 12);
    return h < 3 ? a.formatDistance("aboutXYears", g, i) : h < 9 ? a.formatDistance("overXYears", g, i) : a.formatDistance("almostXYears", g + 1, i);
  }
}
function ae(t, e) {
  return re(t, V(t), e);
}
class oe extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.lastUpdateTime = /* @__PURE__ */ new Date();
    const e = document.createElement("style");
    e.textContent = `
      :host {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
      }
      
      .container {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }
      
      .input-wrapper {
        margin-bottom: 20px;
      }
      
      label {
        display: block;
        color: #ffffff;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      input {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.95);
        font-size: 16px;
        color: #333;
        box-sizing: border-box;
        transition: all 0.3s ease;
      }
      
      input:focus {
        outline: none;
        border-color: #ffffff;
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
      }
      
      .display-wrapper {
        margin-top: 20px;
      }
      
      .display-label {
        display: block;
        color: #ffffff;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .display-area {
        min-height: 60px;
        padding: 16px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.95);
        color: #333;
        font-size: 16px;
        line-height: 1.6;
        word-wrap: break-word;
        border: 2px solid rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
      }
      
      .display-area:empty::before {
        content: 'Your text will appear here...';
        color: #999;
        font-style: italic;
      }
      
      .display-area.has-content {
        background: #ffffff;
        border-color: rgba(255, 255, 255, 0.5);
      }
      
      .timestamp {
        margin-top: 8px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
        font-style: italic;
      }
    `;
    const n = document.createElement("div");
    n.className = "container";
    const r = document.createElement("div");
    r.className = "input-wrapper";
    const a = document.createElement("label");
    a.textContent = "Enter Text", a.setAttribute("for", "text-input");
    const o = document.createElement("input");
    o.type = "text", o.id = "text-input", o.placeholder = "Type something here...";
    const s = document.createElement("div");
    s.className = "display-wrapper";
    const i = document.createElement("label");
    i.className = "display-label", i.textContent = "Output";
    const d = document.createElement("div");
    d.className = "display-area";
    const f = document.createElement("div");
    f.className = "timestamp", f.textContent = "", r.appendChild(a), r.appendChild(o), s.appendChild(i), s.appendChild(d), s.appendChild(f), n.appendChild(r), n.appendChild(s), this.input = o, this.displayArea = d, this.timestamp = f, o.addEventListener("input", (l) => {
      const w = l.target.value;
      this.updateDisplay(w);
    }), this.shadowRoot.appendChild(e), this.shadowRoot.appendChild(n);
  }
  updateDisplay(e) {
    if (this.displayArea.textContent = e, e.trim()) {
      this.displayArea.classList.add("has-content"), this.lastUpdateTime = /* @__PURE__ */ new Date();
      const n = ee(this.lastUpdateTime, "HH:mm:ss"), r = ae(this.lastUpdateTime, { addSuffix: !0 });
      this.timestamp.textContent = `Last updated: ${n} (${r})`;
    } else
      this.displayArea.classList.remove("has-content"), this.timestamp.textContent = "";
  }
  // Optional: Handle attribute changes
  static get observedAttributes() {
    return ["placeholder", "label"];
  }
  attributeChangedCallback(e, n, r) {
    if (n === r) return;
    const a = this.shadowRoot;
    if (a && (e === "placeholder" && this.input && (this.input.placeholder = r || "Type something here..."), e === "label")) {
      const o = a.querySelector(".input-wrapper label");
      o && (o.textContent = r || "Enter Text");
    }
  }
}
customElements.define("input-display-component", oe);
