<?php
$class  = ( isset( $class ) && '' !== trim( $class ) ) ? $class . ' ' : '';
$class .= 'sui-button';
$class .= isset( $color ) ? ' sui-button-' . $color : '';
$class .= ( isset( $ghost ) && true === is_bool( $ghost ) ) ? ' sui-button-ghost' : '';
?>

<?php if ( isset( $compound ) && true === is_bool( $compound ) ) {
	$class .= ' sui-button-compound';
	?>

	<button
		class="<?php echo $class; ?>"
		<?php if ( isset( $attrs ) ) {
			foreach( $attrs as $data => $val ) {
				echo $data . '="' . $val . '"';
			}
		}
		if ( isset( $disabled ) && $disabled ) {
			echo 'disabled="' . $disabled . '"';
		} ?>
	>

		<span class="sui-loading-text" aria-hidden="true">

			<span class="sui-compound-desktop">
				<i class="sui-icon-<?php echo $icon; ?>"></i>
				<?php echo $label; ?>
			</span>

			<span class="sui-compound-mobile">
			<span class="sui-icon-<?php echo $icon; ?>"></span>
			</span>

		</span>

		<span class="sui-icon-loader sui-loading" aria-hidden="true"></span>

		<span class="sui-screen-reader-text"><?php echo $label; ?></span>

	</button>

<?php } else { ?>

	<button
		class="<?php echo $class; ?>"
		<?php if ( isset( $attrs ) ) {
			foreach( $attrs as $data => $val ) {
				echo $data . '="' . $val . '"';
			}
		}
		if ( isset( $disabled ) && $disabled ) {
			echo 'disabled="' . $disabled . '"';
		} ?>
	>

		<span class="sui-loading-text">
			<?php
			if ( isset( $icon ) && '' !== trim( $icon ) ) {
				echo '<i class="sui-icon-' . $icon . '" aria-hidden="true"></i> ' . $label;
			} else {
				echo $label;
			}
			?>
		</span>

		<span class="sui-icon-loader sui-loading" aria-hidden="true"></span>

	</button>

<?php } ?>