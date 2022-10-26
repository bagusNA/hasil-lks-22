<?php
// Defaults
$vars = array(
	'account_id'   => 0,
	'auth_url'     => '',
	'is_connected' => false,
);

/** @var array $template_vars */
foreach ( $template_vars as $key => $val ) {
	$vars[ $key ] = $val;
} ?>

<div class="integration-header">

	<h3 class="sui-box-title" id="dialogTitle2">
		<?php
			/* translators: ... */
			echo esc_html( sprintf( __( 'Connect %1$s', 'forminator' ), 'AWeber' ) );
		?>
	</h3>

	<?php if ( ! empty( $vars['account_id'] ) ) : ?>
		<div class="sui-notice sui-notice-success">
			<p>
				<?php
					/* translators: ... */
					echo esc_html( sprintf( __( 'Your %1$s account is already authorized.', 'forminator' ), 'AWeber' ) );
				?>
			</p>
		</div>
	<?php else : ?>
		<span class="sui-description" style="margin-top: 20px;"><?php esc_html_e( 'Authorize Forminator to connect with your AWeber account in order to send data from your forms.', 'forminator' ); ?></span>
	<?php endif; ?>

</div>

<?php if ( empty( $vars['account_id'] ) ) : ?>

	<div class="sui-form-field">

		<label class="sui-label"><?php esc_html_e( 'Identifier', 'forminator' ); ?></label>

		<input name="identifier"
			placeholder="<?php esc_attr_e( 'E.g., Business Account', 'forminator' ); ?>"
			value=""
			class="sui-form-control" />

		<span class="sui-description"><?php esc_html_e( 'Helps distinguish between integrations if connecting to the same third-party app with multiple accounts.', 'forminator' ); ?></span>

	</div>

	<div class="sui-block-content-center">

		<a href="<?php echo esc_attr( $vars['auth_url'] ); ?>"
			target="_blank"
			class="sui-button sui-button-blue forminator-addon-connect">
			<?php esc_html_e( 'Authorize', 'forminator' ); ?>
		</a>

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

<?php if ( $vars['is_connected'] ) : ?>
	<div class="sui-block-content-center">
		<button class="sui-button sui-button-ghost forminator-addon-disconnect"><?php esc_html_e( 'Disconnect', 'forminator' ); ?></button>
	</div>
<?php endif; ?>
