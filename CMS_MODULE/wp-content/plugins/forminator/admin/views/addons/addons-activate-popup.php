<?php if ( ! isset( $addons ) ) {
    return;
} ?>
<div
	tabindex="-1"
	id="forminator-activate-popup-<?php echo esc_attr( $addons->pid ); ?>"
	class="sui-dialog sui-dialog-sm sui-dialog-alt fui-dialog-publish"
	aria-hidden="true"
>
	
    <div
        class="sui-dialog-content sui-fade-in"
        aria-labelledby="fui-addons--install-title-<?php echo esc_attr( $addons->pid ); ?>"
        aria-describedby="fui-addons--install-description-<?php echo esc_attr( $addons->pid ); ?>"
        role="dialog"
    >

        <div role="document" class="sui-box">

            <div class="sui-box-header sui-block-content-center">

                <button
                    class="sui-dialog-close"
                    data-addon="<?php echo esc_attr( $addons->pid ); ?>"
                    data-element="forminator-activate-popup"
                    aria-label="Close this dialog window"
                ></button>

                <h3 id="fui-addons--install-title-<?php echo esc_attr( $addons->pid ); ?>" class="sui-box-title"><?php printf( esc_html__( '%s installed!', 'forminator' ), $addons->name ); ?></h3>

                <p id="fui-addons--install-description-<?php echo esc_attr( $addons->pid ); ?>" class="sui-description" style="margin-top: 15px;"><?php esc_html_e( 'Would you like to activate it now?', 'forminator' ); ?></p>

            </div>

            <div class="sui-box-footer sui-flatten sui-box-footer-center">

                <button
                    class="sui-button addons-modal-close"
                    data-addon="<?php echo esc_attr( $addons->pid ); ?>"
                    data-element="forminator-activate-popup"
                >
                    <?php esc_html_e( 'Close', 'forminator' ); ?>
                </button>

                <button
                    class="sui-button sui-button-blue addons-actions"
                    data-action="addons-activate"
                    data-popup="true"
                    data-nonce="<?php echo esc_attr( wp_create_nonce( 'forminator_popup_addons_actions' ) ); ?>"
                    data-addon="<?php echo esc_attr( $addons->pid ); ?>"
                >
                    <span class="sui-loading-text">
                        <?php esc_html_e( 'Activate', 'forminator' ); ?>
                    </span>
                    <span class="sui-icon-loader sui-loading" aria-hidden="true"></span>
                </button>

            </div><!-- END .sui-box -->

            <img
                src="<?php echo esc_url( forminator_plugin_url() . 'assets/images/forminator-prompt.png' ); ?>"
                srcset="<?php echo esc_url( forminator_plugin_url() . 'assets/images/forminator-prompt.png' ); ?> 1x, <?php echo esc_url( forminator_plugin_url() . 'assets/images/forminator-prompt@2x.png' ); ?> 2x"
                class="sui-image sui-image-center"
                style="margin-top: 20px;"
            />

        </div><!-- END .sui-box -->

    </div><!-- END .sui-dialog-content -->
</div><!-- END .sui-dialog -->