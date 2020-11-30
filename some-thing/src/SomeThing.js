import { html, css, LitElement } from 'lit-element';
import '@material/mwc-icon-button';
import '@authentic/mwc-chips/mwc-chip';
import '@authentic/mwc-chips/mwc-chip-set';

export class SomeThing extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-grow: 1;
        padding: 1em;
        color: var(--some-thing-text-color, #000);
        max-width: 650px;
      }
      .mdc-typography--headline5 {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        /* @alternate */
        font-family: var(
          --mdc-typography-headline5-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        font-size: 1.5rem;
        /* @alternate */
        font-size: var(--mdc-typography-headline5-font-size, 1.5rem);
        line-height: 2rem;
        /* @alternate */
        line-height: var(--mdc-typography-headline5-line-height, 2rem);
        font-weight: 400;
        /* @alternate */
        font-weight: var(--mdc-typography-headline5-font-weight, 400);
        letter-spacing: normal;
        /* @alternate */
        letter-spacing: var(--mdc-typography-headline5-letter-spacing, normal);
        text-decoration: inherit;
        /* @alternate */
        -webkit-text-decoration: var(
          --mdc-typography-headline5-text-decoration,
          inherit
        );
        text-decoration: var(
          --mdc-typography-headline5-text-decoration,
          inherit
        );
        text-transform: inherit;
        /* @alternate */
        text-transform: var(--mdc-typography-headline5-text-transform, inherit);
      }

      .mdc-typography--body2 {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        /* @alternate */
        font-family: var(
          --mdc-typography-body2-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        font-size: 0.875rem;
        /* @alternate */
        font-size: var(--mdc-typography-body2-font-size, 0.875rem);
        line-height: 1.25rem;
        /* @alternate */
        line-height: var(--mdc-typography-body2-line-height, 1.25rem);
        font-weight: 400;
        /* @alternate */
        font-weight: var(--mdc-typography-body2-font-weight, 400);
        letter-spacing: 0.0178571429em;
        /* @alternate */
        letter-spacing: var(
          --mdc-typography-body2-letter-spacing,
          0.0178571429em
        );
        text-decoration: inherit;
        /* @alternate */
        -webkit-text-decoration: var(
          --mdc-typography-body2-text-decoration,
          inherit
        );
        text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
        text-transform: inherit;
        /* @alternate */
        text-transform: var(--mdc-typography-body2-text-transform, inherit);
      }

      .mdc-typography--overline {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        /* @alternate */
        font-family: var(
          --mdc-typography-overline-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );
        font-size: 0.75rem;
        /* @alternate */
        font-size: var(--mdc-typography-overline-font-size, 0.75rem);
        line-height: 2rem;
        /* @alternate */
        line-height: var(--mdc-typography-overline-line-height, 2rem);
        font-weight: 500;
        /* @alternate */
        font-weight: var(--mdc-typography-overline-font-weight, 500);
        letter-spacing: 0.1666666667em;
        /* @alternate */
        letter-spacing: var(
          --mdc-typography-overline-letter-spacing,
          0.1666666667em
        );
        text-decoration: none;
        /* @alternate */
        -webkit-text-decoration: var(
          --mdc-typography-overline-text-decoration,
          none
        );
        text-decoration: var(--mdc-typography-overline-text-decoration, none);
        text-transform: uppercase;
        /* @alternate */
        text-transform: var(
          --mdc-typography-overline-text-transform,
          uppercase
        );
      }

      .vert {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .hoz {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

      }

      .border {
        border: 1px solid #dce3ea;
        border-radius: 3px;
      }
      .padding {
        padding: 1em;
      }
      mwc-icon-button {
        align-self: flex-end;
      }
      .baseline {
        align-items: baseline;
      }
      .card{

        background-color: white;
        box-shadow: 0px 1px 8px -4px;
        border-radius: 5px;

      }

      .fullWidth{
        width: 100%;
      }

      .mdc-typography--headline6 {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        /* @alternate */
        font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        font-size: 1.25rem;
        /* @alternate */
        font-size: var(--mdc-typography-headline6-font-size, 1.25rem);
        line-height: 2rem;
        /* @alternate */
        line-height: var(--mdc-typography-headline6-line-height, 2rem);
        font-weight: 500;
        /* @alternate */
        font-weight: var(--mdc-typography-headline6-font-weight, 500);
        letter-spacing: 0.0125em;
        /* @alternate */
        letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);
        text-decoration: inherit;
        /* @alternate */
        -webkit-text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
                text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
        text-transform: inherit;
        /* @alternate */
        text-transform: var(--mdc-typography-headline6-text-transform, inherit);
      }

      .mdc-typography--caption {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        /* @alternate */
        font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
        font-size: 0.75rem;
        /* @alternate */
        font-size: var(--mdc-typography-caption-font-size, 0.75rem);
        line-height: 1.25rem;
        /* @alternate */
        line-height: var(--mdc-typography-caption-line-height, 1.25rem);
        font-weight: 400;
        /* @alternate */
        font-weight: var(--mdc-typography-caption-font-weight, 400);
        letter-spacing: 0.0333333333em;
        /* @alternate */
        letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);
        text-decoration: inherit;
        /* @alternate */
        -webkit-text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
                text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
        text-transform: inherit;
        /* @alternate */
        text-transform: var(--mdc-typography-caption-text-transform, inherit);
      }
      .sep{
        border-top: #f2eee9 1px solid;
        border-radius: 2px;
        padding: 1em 0;'
      }
    `;
  }

  static get properties() {
    return {
      thing_overline: { type: String },
      thing_title: { type: String },
      thing_dateStamp: { type: String },
      thing_state: { type: String },
      thing_attrs: { type: Object },
      thing_groups: { type: Array },
    };
  }

  constructor() {
    super();
    this.thing_attrs = {};
    this.thing_groups = [];
  }

  render() {
    return html`
      <div class="hoz card fullWidth">
        <div class="vert padding">
          <div class="hoz">
            <div class="vert">
              <span class="mdc-typography--overline"
                >${this.thing_overline}</span
              >
              <span class="mdc-typography--headline5">${this.thing_title}</span>
            </div>
            <div class="vert">
              <mwc-icon-button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  />
                </svg>
              </mwc-icon-button>
            </div>
          </div>
          <div class="hoz baseline">
            <p class="mdc-typography--body2">${this.thing_dateStamp}</p>
            <span class="mdc-typography--body2">${this.thing_state}</span>
          </div>
          <ul class="vert sep">
            ${Object.keys(this.thing_attrs).map(
              item =>
                html`<li
                  class="hoz mdc-typography--body2"
                  style="align-items: center"
                >
                  <div
                    class="vert mdc-typography--caption"
                    style="width:100%; align-items:flex-end; padding-right: 1em;"
                  >
                    ${item}:
                  </div>
                  <div
                    class="vert mdc-typography--headline6"
                    style="width:100%; padding-left: 1em;"
                  >
                    ${this.thing_attrs[item]}&nbsp;
                  </div>
                </li> `
            )}
          </ul>
          <div class="hoz sep">
            <mwc-chip-set filter>
              ${this.thing_groups.map(
                item => html`<mwc-chip label="${item}&nbsp;"></mwc-chip>`
              )}
            </mwc-chip-set>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
