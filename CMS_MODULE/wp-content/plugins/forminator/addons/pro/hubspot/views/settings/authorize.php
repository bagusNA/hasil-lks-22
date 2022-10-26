<?php
// defaults
$vars = array(
	'auth_url' => '',
	'token'    => '',
	'user'     => '',
);

/** @var array $template_vars */
foreach ( $template_vars as $key => $val ) {
	$vars[ $key ] = $val;
} ?>

<div class="integration-header">

	<h3 id="dialogTitle2" class="sui-box-title">
		<?php
			/* translators: ... */
			echo esc_html( sprintf( __( 'Connect %1$s', 'forminator' ), 'HubSpot' ) );
		?>
	</h3>

	<?php if ( ! empty( $vars['token'] ) ) : ?>

		<span class="sui-description" style="color: #666666; margin-top: 20px; line-height: 22px;"><?php esc_html_e( 'You are already connected to the HubSpot. You can disconnect your HubSpot Integration (if you need to) using the button below.', 'forminator' ); ?></span>

		<div class="sui-notice sui-notice-success" style="margin-bottom: -30px;">
			<p>
				<?php
					/* translators: ... */
					echo sprintf( esc_html__( 'You are connected to %2$s%1$s%3$s.', 'forminator' ), esc_html( $vars['user'] ), '<strong>', '</strong>' );
				?>
			</p>
		</div>

	<?php else : ?>

		<span class="sui-description" style="color: #666666; margin-top: 20px; line-height: 22px;"><?php esc_html_e( "Authenticate your HubSpot account using the button below. Note that you'll be taken to the HubSpot website to grant access to Forminator and then redirected back.", 'forminator' ); ?></span>

	<?php endif; ?>

</div>

<?php if ( empty( $vars['token'] ) ) : ?>

	<div class="sui-form-field">

		<label class="sui-label"><?php esc_html_e( 'Identifier', 'forminator' ); ?></label>

		<input name="identifier"
			placeholder="<?php esc_attr_e( 'E.g., Business Account', 'forminator' ); ?>"
			value=""
			class="sui-form-control" />

		<span class="sui-description"><?php esc_html_e( 'Helps distinguish between integrations if connecting to the same third-party app with multiple accounts.', 'forminator' ); ?></span>

	</div>

	<div class="sui-block-content-center" style="margin-top: -10px; margin-bottom: -20px;">

		<a href="<?php echo esc_attr( $vars['auth_url'] ); ?>" target="_blank" class="sui-button sui-button-primary forminator-addon-connect"><?php esc_html_e( 'Authenticate', 'forminator' ); ?></a>

	</div>

<script>
	(function ($) {
		$('input[name="identifier"]').on( 'change', function (e) {
			var parent = $(this).closest('.sui-box-body'),
				val = $(this).val(),
				link = $('.forminator-addon-connect', parent),
				href = link.prop('href');
			if ( href ) {
				var index = href.indexOf('identifier');

				if ( index ) {
					href = href.slice(0, index);
				}
				href += encodeURIComponent( 'identifier=' + val );
				link.prop('href', href);
			}
		});
	})(jQuery);
</script>

<?php endif; ?>
