import { html, css, LitElement } from 'lit-element';
import '@material/mwc-icon-button';

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
      }
      .hoz {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }

      .border {
        border: 1px solid #dce3ea;
        border-radius: 3px;
      }
      .padding {
        padding: 0.5em;
      }
      mwc-icon-button {
        align-self: flex-end;
      }
    `;
  }

  static get properties() {
    return {
      thing_overline: { type: String },
      thing_title: { type: String },
      thing_dateStamp: { type: String },
      thing_state: { type: String },
    };
  }

  render() {
    return html`
      <div class="hoz border">
        <div class="hoz padding">
          <div class="vert">
            <span class="mdc-typography--overline">${this.thing_overline}</span>
            <span class="mdc-typography--headline5">${this.thing_title}</span>
            <p class="mdc-typography--body2">${this.thing_dateStamp}</p>
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
            <span class="mdc-typography--body2">${this.thing_state}</span>
          </div>
        </div>
      </div>
    `;
  }
}
