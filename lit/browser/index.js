var lit = function (t) {
    var e = {};

    function l(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {i: o, l: !1, exports: {}};
        return t[o].call(r.exports, r, r.exports, l), r.l = !0, r.exports
    }

    return l.m = t, l.c = e, l.d = function (t, e, o) {
        l.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: o})
    }, l.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, l.t = function (t, e) {
        if (1 & e && (t = l(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (l.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var r in t) l.d(o, r, function (e) {
            return t[e]
        }.bind(null, r));
        return o
    }, l.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return l.d(e, "a", e), e
    }, l.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, l.p = "", l(l.s = 0)
}([function (t, e, l) {
    "use strict";
    l.r(e), l.d(e, "XStickyScroll", (function () {
        return o
    }));

    class o {
        static topOffset(t) {
            return t.getBoundingClientRect().top + pageYOffset
        }

        static bottomOffset(t) {
            return t.getBoundingClientRect().bottom + pageYOffset
        }

        static insertNodeAfter(t, e) {
            e.parentNode && e.parentNode.insertBefore(t, e.nextSibling)
        }

        static updateScroll(t, e) {
            return e.scrollLeft = t.scrollLeft
        }

        constructor(t, e) {
            this.host = t, this.scrollBarClass = e, this.init()
        }

        init() {
            this.onResize = () => {
                this.fitScrollBar(), this.controlWithinArea()
            }, this.onScroll = () => {
                this.controlWithinArea(), this.fitScrollBar()
            }, window.addEventListener("scroll", this.onScroll, !1), window.addEventListener("resize", this.onResize, !1), this.onViewScroll = t => {
                t.target === this.scrollView ? o.updateScroll(this.scrollView, this.scrollbar) : o.updateScroll(this.scrollbar, this.scrollView)
            }, this.scrollView = this.host, this.scrollView.style.overflowY = "hidden", this.scrollView.style.whiteSpace = "pre", this.scrollbar = document.createElement("div"), this.scrollbar.className = "sticky-scrollbar " + this.scrollBarClass, this.scrollbar.style.overflowX = "auto", this.scrollbar.style.position = "fixed", this.scrollbar.style.bottom = "0", this.scrollbar.style.zIndex = "999", this.fakeContent = document.createElement("div"), this.scrollbar.appendChild(this.fakeContent), this.fakeContent.className = "fake-content", this.fakeContent.style.height = "1px", o.insertNodeAfter(this.scrollbar, this.scrollView), this.scrollView.addEventListener("scroll", this.onViewScroll), this.scrollbar.addEventListener("scroll", this.onViewScroll), this.onResize()
        }

        controlWithinArea() {
            let t, e, l, r;
            t = o.topOffset(this.scrollbar), e = o.bottomOffset(this.scrollbar), l = o.topOffset(this.scrollView), r = o.bottomOffset(this.scrollView), console.log("fakeScrollbarTopOffset=" + t, "viewTopOffset=" + l), console.log("fakeScrollbarBottomOffset=" + e, "viewBottomOffset=" + r), this.scrollbar.style.display = t > l && e < r ? "" : "none"
        }

        fitScrollBar() {
            this.fakeContent && this.scrollbar && this.scrollView && (this.fakeContent.style.width = this.scrollView.scrollWidth + "px", this.scrollbar.style.width = this.scrollView.offsetWidth + "px")
        }

        destroy() {
            if (this.fakeContent && this.scrollbar && this.scrollView) {
                console.log("Killing DOM elements...");
                try {
                    this.scrollView.removeEventListener("scroll", this.onViewScroll), this.scrollbar.removeEventListener("scroll", this.onViewScroll), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResize), this.scrollView.style.overflowY = "", this.scrollView.style.whiteSpace = "", this.scrollbar.remove(), this.fakeContent.remove(), delete this.scrollbar, delete this.fakeContent, console.log("Have killed DOM elements...")
                } catch (t) {
                    console.error(t)
                }
            }
        }
    }
}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXQvbWFpbi5qcyJdLCJuYW1lcyI6WyJsaXQiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fd2VicGFja19leHBvcnRzX18iLCJYU3RpY2t5U2Nyb2xsIiwiW29iamVjdCBPYmplY3RdIiwiZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0IiwiYm90dG9tIiwibmV3Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJzb3VyY2UiLCJ0YXJnZXQiLCJzY3JvbGxMZWZ0IiwiaG9zdCIsInNjcm9sbEJhckNsYXNzIiwidGhpcyIsImluaXQiLCJvblJlc2l6ZSIsImZpdFNjcm9sbEJhciIsImNvbnRyb2xXaXRoaW5BcmVhIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib25WaWV3U2Nyb2xsIiwiZXYiLCJzY3JvbGxWaWV3IiwidXBkYXRlU2Nyb2xsIiwic2Nyb2xsYmFyIiwic3R5bGUiLCJvdmVyZmxvd1kiLCJ3aGl0ZVNwYWNlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib3ZlcmZsb3dYIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJmYWtlQ29udGVudCIsImFwcGVuZENoaWxkIiwiaGVpZ2h0IiwiaW5zZXJ0Tm9kZUFmdGVyIiwiZmFrZVNjcm9sbGJhclRvcE9mZnNldCIsImZha2VTY3JvbGxiYXJCb3R0b21PZmZzZXQiLCJ2aWV3VG9wT2Zmc2V0Iiwidmlld0JvdHRvbU9mZnNldCIsInRvcE9mZnNldCIsImJvdHRvbU9mZnNldCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5Iiwid2lkdGgiLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxJQUNLLFNBQVVDLEdBRVQsSUFBSUMsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFKLEVBQVFHLEdBQVVLLEtBQUtILEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBMERmLE9BckRBRixFQUFvQk8sRUFBSVQsRUFHeEJFLEVBQW9CUSxFQUFJVCxFQUd4QkMsRUFBb0JTLEVBQUksU0FBU1AsRUFBU1EsRUFBTUMsR0FDM0NYLEVBQW9CWSxFQUFFVixFQUFTUSxJQUNsQ0csT0FBT0MsZUFBZVosRUFBU1EsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWCxFQUFvQmlCLEVBQUksU0FBU2YsR0FDWCxvQkFBWGdCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZVosRUFBU2dCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZVosRUFBUyxhQUFjLENBQUVrQixPQUFPLEtBUXZEcEIsRUFBb0JxQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXBCLEVBQW9Cb0IsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdBRkF6QixFQUFvQmlCLEVBQUVPLEdBQ3RCWCxPQUFPQyxlQUFlVSxFQUFJLFVBQVcsQ0FBRVQsWUFBWSxFQUFNSyxNQUFPQSxJQUN0RCxFQUFQRSxHQUE0QixpQkFBVEYsRUFBbUIsSUFBSSxJQUFJTSxLQUFPTixFQUFPcEIsRUFBb0JTLEVBQUVlLEVBQUlFLEVBQUssU0FBU0EsR0FBTyxPQUFPTixFQUFNTSxJQUFRQyxLQUFLLEtBQU1ELElBQzlJLE9BQU9GLEdBSVJ4QixFQUFvQjRCLEVBQUksU0FBU3pCLEdBQ2hDLElBQUlRLEVBQVNSLEdBQVVBLEVBQU9vQixXQUM3QixXQUF3QixPQUFPcEIsRUFBZ0IsU0FDL0MsV0FBOEIsT0FBT0EsR0FFdEMsT0FEQUgsRUFBb0JTLEVBQUVFLEVBQVEsSUFBS0EsR0FDNUJBLEdBSVJYLEVBQW9CWSxFQUFJLFNBQVNpQixFQUFRQyxHQUFZLE9BQU9qQixPQUFPa0IsVUFBVUMsZUFBZTFCLEtBQUt1QixFQUFRQyxJQUd6RzlCLEVBQW9CaUMsRUFBSSxHQUlqQmpDLEVBQW9CQSxFQUFvQmtDLEVBQUksR0FuRnBELENBc0ZDLENBRUosU0FBVS9CLEVBQVFnQyxFQUFxQm5DLEdBRTdDLGFBRUFBLEVBQW9CaUIsRUFBRWtCLEdBR3RCbkMsRUFBb0JTLEVBQUUwQixFQUFxQixpQkFBaUIsV0FBYSxPQUFzQkMsS0FHL0YsTUFBTUEsRUFFSkMsaUJBQWlCQyxHQUNmLE9BQU9BLEVBQUVDLHdCQUF3QkMsSUFBTUMsWUFJekNKLG9CQUFvQkMsR0FDbEIsT0FBT0EsRUFBRUMsd0JBQXdCRyxPQUFTRCxZQUk1Q0osdUJBQXVCTSxFQUFTQyxHQUMxQkEsRUFBY0MsWUFBWUQsRUFBY0MsV0FBV0MsYUFBYUgsRUFBU0MsRUFBY0csYUFJN0ZWLG9CQUFvQlcsRUFBUUMsR0FDMUIsT0FBT0EsRUFBT0MsV0FBYUYsRUFBT0UsV0FJcENiLFlBQVljLEVBQU1DLEdBQ2hCQyxLQUFLRixLQUFPQSxFQUNaRSxLQUFLRCxlQUFpQkEsRUFDdEJDLEtBQUtDLE9BSVBqQixPQUVFZ0IsS0FBS0UsU0FBVyxLQUNkRixLQUFLRyxlQUNMSCxLQUFLSSxxQkFJUEosS0FBS0ssU0FBVyxLQUNkTCxLQUFLSSxvQkFDTEosS0FBS0csZ0JBSVBHLE9BQU9DLGlCQUFpQixTQUFVUCxLQUFLSyxVQUFVLEdBRWpEQyxPQUFPQyxpQkFBaUIsU0FBVVAsS0FBS0UsVUFBVSxHQUVqREYsS0FBS1EsYUFBZUMsSUFDbEJBLEVBQUdiLFNBQVdJLEtBQUtVLFdBQWEzQixFQUFjNEIsYUFBYVgsS0FBS1UsV0FBWVYsS0FBS1ksV0FBYTdCLEVBQWM0QixhQUFhWCxLQUFLWSxVQUFXWixLQUFLVSxhQUtoSlYsS0FBS1UsV0FBYVYsS0FBS0YsS0FDdkJFLEtBQUtVLFdBQVdHLE1BQU1DLFVBQVksU0FDbENkLEtBQUtVLFdBQVdHLE1BQU1FLFdBQWEsTUFDbkNmLEtBQUtZLFVBQVlJLFNBQVNDLGNBQWMsT0FDeENqQixLQUFLWSxVQUFVTSxVQUFZLG9CQUFzQmxCLEtBQUtELGVBQ3REQyxLQUFLWSxVQUFVQyxNQUFNTSxVQUFZLE9BQ2pDbkIsS0FBS1ksVUFBVUMsTUFBTU8sU0FBVyxRQUNoQ3BCLEtBQUtZLFVBQVVDLE1BQU14QixPQUFTLElBQzlCVyxLQUFLWSxVQUFVQyxNQUFNUSxPQUFTLE1BQzlCckIsS0FBS3NCLFlBQWNOLFNBQVNDLGNBQWMsT0FDMUNqQixLQUFLWSxVQUFVVyxZQUFZdkIsS0FBS3NCLGFBQ2hDdEIsS0FBS3NCLFlBQVlKLFVBQVksZUFDN0JsQixLQUFLc0IsWUFBWVQsTUFBTVcsT0FBUyxNQUNoQ3pDLEVBQWMwQyxnQkFBZ0J6QixLQUFLWSxVQUFXWixLQUFLVSxZQUNuRFYsS0FBS1UsV0FBV0gsaUJBQWlCLFNBQVVQLEtBQUtRLGNBQ2hEUixLQUFLWSxVQUFVTCxpQkFBaUIsU0FBVVAsS0FBS1EsY0FFL0NSLEtBQUtFLFdBS1BsQixvQkFDRSxJQUFJMEMsRUFDQUMsRUFDQUMsRUFDQUMsRUFDSkgsRUFBeUIzQyxFQUFjK0MsVUFBVTlCLEtBQUtZLFdBQ3REZSxFQUE0QjVDLEVBQWNnRCxhQUFhL0IsS0FBS1ksV0FDNURnQixFQUFnQjdDLEVBQWMrQyxVQUFVOUIsS0FBS1UsWUFDN0NtQixFQUFtQjlDLEVBQWNnRCxhQUFhL0IsS0FBS1UsWUFDbkRzQixRQUFRQyxJQUFJLDBCQUE0QlAsRUFBd0IsaUJBQW1CRSxHQUNuRkksUUFBUUMsSUFBSSw2QkFBK0JOLEVBQTJCLG9CQUFzQkUsR0FJMUY3QixLQUFLWSxVQUFVQyxNQUFNcUIsUUFGbkJSLEVBQXlCRSxHQUFpQkQsRUFBNEJFLEVBRXpDLEdBR0EsT0FLbkM3QyxlQUNNZ0IsS0FBS3NCLGFBQWV0QixLQUFLWSxXQUFhWixLQUFLVSxhQUM3Q1YsS0FBS3NCLFlBQVlULE1BQU1zQixNQUFRbkMsS0FBS1UsV0FBVzBCLFlBQWMsS0FDN0RwQyxLQUFLWSxVQUFVQyxNQUFNc0IsTUFBUW5DLEtBQUtVLFdBQVcyQixZQUFjLE1BSy9EckQsVUFFRSxHQUFJZ0IsS0FBS3NCLGFBQWV0QixLQUFLWSxXQUFhWixLQUFLVSxXQUFZLENBQ3pEc0IsUUFBUUMsSUFBSSwyQkFFWixJQUVFakMsS0FBS1UsV0FBVzRCLG9CQUFvQixTQUFVdEMsS0FBS1EsY0FFbkRSLEtBQUtZLFVBQVUwQixvQkFBb0IsU0FBVXRDLEtBQUtRLGNBRWxERixPQUFPZ0Msb0JBQW9CLFNBQVV0QyxLQUFLSyxVQUUxQ0MsT0FBT2dDLG9CQUFvQixTQUFVdEMsS0FBS0UsVUFDMUNGLEtBQUtVLFdBQVdHLE1BQU1DLFVBQVksR0FDbENkLEtBQUtVLFdBQVdHLE1BQU1FLFdBQWEsR0FDbkNmLEtBQUtZLFVBQVUyQixTQUNmdkMsS0FBS3NCLFlBQVlpQixnQkFDVnZDLEtBQUtZLGlCQUNMWixLQUFLc0IsWUFDWlUsUUFBUUMsSUFBSSwrQkFDWixNQUFPTyxHQUNQUixRQUFRUyxNQUFNRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIifQ==