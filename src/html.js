const htm =
  (new Map(),
  function (n) {
    for (
      var e,
        l,
        s = arguments,
        t = 1,
        u = '',
        r = '',
        o = [0],
        f = function (n) {
          1 === t && (n || (u = u.replace(/^\s*\n\s*|\s*\n\s*$/g, '')))
            ? o.push(n ? s[n] : u)
            : 3 === t && (n || u)
              ? ((o[1] = n ? s[n] : u), (t = 2))
              : 2 === t && '...' === u && n
                ? (o[2] = Object.assign(o[2] || {}, s[n]))
                : 2 === t && u && !n
                  ? ((o[2] = o[2] || {})[u] = !0)
                  : t >= 5 &&
                    (5 === t
                      ? (((o[2] = o[2] || {})[l] = n
                          ? u
                            ? u + s[n]
                            : s[n]
                          : u),
                        (t = 6))
                      : (n || u) && (o[2][l] += n ? u + s[n] : u)),
            (u = '')
        },
        i = 0;
      i < n.length;
      i++
    ) {
      i && (1 === t && f(), f(i))
      for (var p = 0; p < n[i].length; p++)
        (e = n[i][p]),
          1 === t
            ? '<' === e
              ? (f(), (o = [o, '', null]), (t = 3))
              : (u += e)
            : 4 === t
              ? '--' === u && '>' === e
                ? ((t = 1), (u = ''))
                : (u = e + u[0])
              : r
                ? e === r
                  ? (r = '')
                  : (u += e)
                : '"' === e || "'" === e
                  ? (r = e)
                  : '>' === e
                    ? (f(), (t = 1))
                    : t &&
                      ('=' === e
                        ? ((t = 5), (l = u), (u = ''))
                        : '/' === e && (t < 5 || '>' === n[i][p + 1])
                          ? (f(),
                            3 === t && (o = o[0]),
                            (t = o),
                            (o = o[0]).push(this.apply(null, t.slice(1))),
                            (t = 0))
                          : ' ' === e || '\t' === e || '\n' === e || '\r' === e
                            ? (f(), (t = 2))
                            : (u += e)),
          3 === t && '!--' === u && ((t = 4), (o = o[0]))
    }
    return f(), o.length > 2 ? o.slice(1) : o[1]
  })

function h(type, props, ...children) {
  return { type, props, children }
}

/**
 * For htm license information please see ./vendors/htm/LICENSE.txt
 * @license Apache <https://www.apache.org/licenses/LICENSE-2.0>
 * @author Jason Miller <jason@developit.ca>
 */
export const html = htm.bind(h)
