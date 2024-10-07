<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'n_mota' );

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
define( 'AUTH_KEY',         'M3O-3NGayiSjZPc_ZMw6*IF$z@_SA#RO hAzU]N]|o16,4}2.8{on(^-(0PRv!0c' );
define( 'SECURE_AUTH_KEY',  '|[`#]Fe&[?/;.L*iv|)NY}#B(i>5/+g+#Mu-&yfnzb[bn4GH{fuMktQx%A0OY71Y' );
define( 'LOGGED_IN_KEY',    'ts0-9xX;NH}V7w0KrnP` pX-M8d]y#G+W.WXW@>kMprjQnbTvBo>j5_5xPC=E([I' );
define( 'NONCE_KEY',        '%U#?AjPS61B/Am7T>$pQU(5Evm#DFW.efin =&E,dFs{^HB9l)yacX{lB>m@@2tG' );
define( 'AUTH_SALT',        '7iz2KDjf]UB=c_sn^Z,bbvwiAh{V/e4v<NzX`Lsl!}=A7i4E34)Wlbup7FazJk!G' );
define( 'SECURE_AUTH_SALT', 'SKR3}U7ZZ,w3j;JX`[N23w2uE;cV= zZ4cK/qA;zml&I}|_=r00n72d{XdFC:.#4' );
define( 'LOGGED_IN_SALT',   '8Pp[ Df+?h.redHn2nN;MGgK>#`,L^)|0xuDXBPw9]&7 kU kGnNN>y~MOYw lYR' );
define( 'NONCE_SALT',       'w.3Ra:1$pCsWGG5mbc,X!mLXs3rSK`B;lv,b(;H4GJTjBE]-C!nVrEf2|z{03M4-' );

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define('FS_METHOD', 'direct');
define ('FS_CHMOD_DIR', 0755); define ('FS_CHMOD_FILE', 0644);

