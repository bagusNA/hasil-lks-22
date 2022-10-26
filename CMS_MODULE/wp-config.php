<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lks_animer' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Odv=5bXl1v~~N)gBf18kmq+Pa,<^NF]fH14D_uv4GfN3=xg9-LHphic)#DXmJJFn' );
define( 'SECURE_AUTH_KEY',  'jMl$.UU3%~|~c|;%uLd_N[;)z*6<Lqe{,mzl<xe&.4U%jgg4;)zCN=6~|?-2|$%U' );
define( 'LOGGED_IN_KEY',    'rRt-55*bk$RCl,}N%Y6^@|iRHja?6Gz]Bb4QqF+1,K3WM~@O)Eq*rElMOTYQ2PG#' );
define( 'NONCE_KEY',        '5zq@Qfgm,!kp|J7[C]=KD8DJK459V-WM1)US/p?YXkkzOlCW07!`q0E^dqtju@o)' );
define( 'AUTH_SALT',        ';.x?}*E,`DTXEHiDN4V_OtB2.7:f8wCgUaANV%*D260_6g*}Dy9oF#;KKeA)rYb/' );
define( 'SECURE_AUTH_SALT', '=}yN hC^i}=0|B:3k_^  dX6u?oK(v5B#6g8+{mov! lb+j*q!<?#d[XHm2<gR/Q' );
define( 'LOGGED_IN_SALT',   '2W#9kEkmc4Z [!a~zL<fnZ>Q4mz.r65Q$Hye%oV*t/5=iLR43rK$N3i=GEM.x/MV' );
define( 'NONCE_SALT',       '9]g?VF:c3Qc~_Dz4`qO7~7EuM CZrxK*>&rg|T}fc;5ruN^(Io(M#nsVrz?51;-f' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
