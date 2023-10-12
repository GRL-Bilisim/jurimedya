<?php
/**
 * Checkout Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

do_action( 'woocommerce_before_checkout_form', $checkout );

// If checkout registration is disabled and not logged in, the user cannot checkout.
if ( ! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() ) {
	echo esc_html( apply_filters( 'woocommerce_checkout_must_be_logged_in_message', __( 'You must be logged in to checkout.', 'grocerybook' ) ) );
	return;
}

//
$getText = \Grocerybook\Inc\Text::getText();
?>

<form name="checkout" id="deneme" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( wc_get_checkout_url() ); ?>" enctype="multipart/form-data">

	<?php if ( $checkout->get_checkout_fields() ) : ?>

	<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>

	<div class="fb-checkout-form-inner">

	<div class="col2-set" id="customer_details">
		<div class="col-1">
			<?php do_action( 'woocommerce_checkout_billing' ); ?>
		</div>

		<div class="col-2">
			<?php do_action( 'woocommerce_checkout_shipping' ); ?>
		</div>
	</div>

	<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>

	<?php endif; ?>
	
	<?php do_action( 'woocommerce_checkout_before_order_review_heading' ); ?>
		
	<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>

	<div id="order_review" class="woocommerce-checkout-review-order">
		<!-- Single Form -->
		<?php
		//
		$deliveryTime = get_option('grocerybook_options');

		if( !empty( $deliveryTime['checkout-delivery-option'] ) ) :
		?>
		<div class="fb_single_form fb_delivery fb_self_pickup_info fb_card">
		<?php
		// Branch Name
		if( grocerybook_is_multi_branch() ):
		$selectedBranch = isset( $_COOKIE['fb_branch_id'] ) ? $_COOKIE['fb_branch_id'] : '';

		if( !empty( grocerybook_branch_list_html() ) ):
		?>
		<p class="form-row fb_mb_20">
			<label for="fb_pickup_branch" class="fb_input_label"><?php esc_html_e( 'Deliver/Pickup Branch Name', 'grocerybook' ) ?><span class="fb-required">*</span> </label>
			<select
				name="fb_pickup_branch"
				id="fb_pickup_branch"
				class="fb_input_style"
			>
			<?php
			echo grocerybook_branch_list_html( esc_html__( 'Select Branch', 'grocerybook' ),'',$selectedBranch );
			?>
			</select>
		</p>
		<?php
		endif;
		endif;
		//
		?>
		<div class="fb_multiform">
          <!-- Form Selector Group -->  
          	<label for="fb_delivery_type" class="fb_input_label fb_mb_0">
				<?php esc_html_e( 'Delivery Type', 'grocerybook' ) ?><span class="fb-required">*</span>
			</label>        
         	<ul class="fb_list_unstyled fb_form_selector_list fb_mt_5">
			<?php 
			if( $deliveryTime['delivery-options'] == 'delivery' || $deliveryTime['delivery-options'] == 'all'  ):
			?>
            <li class="fb_single_form_selector">
              	<span class="fb_custom_checkbox">
	                <label>
	                  <input type="radio" value="Delivery" class="shipping_method delivery-type-delivery" name="fb_delivery_options" checked>
	                  <span class="fb_label_title"><?php esc_html_e( 'Delivery', 'grocerybook' ); ?></span>
	                  <span class="fb_custom_checkmark"></span>
	                </label>
              	</span>
            </li>
			<?php 
			endif;
			//
			if( $deliveryTime['delivery-options'] == 'pickup' || $deliveryTime['delivery-options'] == 'all'  ):
				$checked = $deliveryTime['delivery-options'] == 'pickup' ? 'checked' : '';
			?>
            <li class="fb_single_form_selector">
              	<span class="fb_custom_checkbox">
	                <label>
	                  <input type="radio" value="Pickup" class="shipping_method delivery-type-pickup" name="fb_delivery_options" <?php echo esc_attr( $checked ); ?>>
	                  <span class="fb_label_title"><?php esc_html_e( 'Pickup by me', 'grocerybook' ); ?></span>
	                  <span class="fb_custom_checkmark"></span>
	                </label>
              	</span>
            </li>
            <?php 
            endif;
            ?>
         	</ul>
          <!-- End Form Selector Group -->
        </div>

        <?php
    	//
		if( !empty( $deliveryTime['pickup-time-switch'] ) && $deliveryTime['pickup-time-switch'] == 'yes' ):
        ?>
        <div class="fb_multiform">
          <!-- Form Selector Group -->  
          	<label for="fb_delivery_type" class="fb_input_label fb_mb_0">
				<?php esc_html_e( 'Delivery Schedule Type', 'grocerybook' ) ?><span class="fb-required">*</span>
			</label>        
         	<ul class="fb_list_unstyled fb_form_selector_list fb_mt_5">
            <li class="fb_single_form_selector">
              	<span class="fb_custom_checkbox">
	                <label>
	                  <input type="radio" value="todayDelivery" class="shipping_method" name="fb_delivery_schedule_options" checked>
	                  <span class="fb_label_title"><?php echo esc_html( $getText ['dp_today_text'] ); ?></span>
	                  <span class="fb_custom_checkmark"></span>
	                </label>
              	</span>
            </li>
            <?php 
        	if( !empty( $deliveryTime['pre-order-active'] ) && 'yes' == $deliveryTime['pre-order-active'] ):
        	?>
            <li class="fb_single_form_selector">
              	<span class="fb_custom_checkbox">
	                <label>
	                  <input type="radio" value="scheduleDelivery" class="shipping_method" name="fb_delivery_schedule_options">
	                  <span class="fb_label_title"><?php echo esc_html( $getText ['dp_schedule_text'] ); ?></span>
	                  <span class="fb_custom_checkmark"></span>
	                </label>
              	</span>
            </li>
            <?php 
	    	endif;
	    	?>
         	</ul>
          <!-- End Form Selector Group -->
        </div>
        	<?php 
        	if( !empty( $deliveryTime['pre-order-active'] ) && 'yes' == $deliveryTime['pre-order-active'] ):
        	?>
			<p class="form-row dp-date-wrapper">
				<label
				for="fb_delivery_date"
				class="fb_input_label"
				>
				<?php echo esc_html( $getText ['dp_date_text'] ); ?>
				</label>
	    		<select
					name="fb_delivery_date"
					id="fb_delivery_date"
					class="fb_input_style">
				<?php 
				$dateList = \GroceryBook\Date_Time_Map::getNaxtDaysDateList();
				foreach ($dateList as $date ) {
					echo '<option value="'.esc_html( $date['date'] ).'">'.grocerybook_display_day_by_date( $date['date'] ).' - '.esc_html( grocerybook_display_date( $date['date'] ) ).'</option>';
				}
				?>
				</select>
	    	</p>
	    	<?php
	    	endif;
	    	?>
			<p class="form-row fb-delivery-time-wrapper">
				<label for="fb_delivery_time" class="fb_input_label">
				<?php echo esc_html( $getText ['dp_time_text'] ); ?><span class="fb-required">*</span>
				</label>
				<select name="fb_delivery_time" id="fb_delivery_time" class="fb_input_style" required>
				<?php
				$timeList = \GroceryBook\Date_Time_Map::getTimes();
				grocerybook_time_solt_options_html( $timeList );
				?>
				</select>
			</p>
			<?php 
			endif;

			// Delivery Availability Checker Active
			if( !empty( $deliveryTime['availability-checker-active'] ) && $deliveryTime['availability-checker-active'] == 'yes' ):
			// Checkout page delivery location checker ON|OFF
			if( !empty( $deliveryTime['checkout-location-active'] ) && $deliveryTime['checkout-location-active'] == 'yes' ):
			?>
			<div class="fb-checkout-availability-checker-wrapper">
				<a href="#" class="fb-show-availability-check-modal"><?php esc_html_e( 'Check Delivery Availability', 'grocerybook' ); ?></a>
				<?php 
				\Grocerybook\Inc\Ability_Checker_Form::checkoutStatus();
				?>
				<div class="fb-checkout-delivery-availability-checker fb_delivery_availability_checker">
					<?php
		            // Form
		            \Grocerybook\Inc\Ability_Checker_Form::form();
		            ?>
	        	</div>
        	</div>
        	<?php 
        	endif; // End Checkout page delivery location checker ON|OFF
        	endif; // End Delivery Availability Checker Active
        	?>

		</div>
		<?php 
		endif;
		?>
		<!-- End Single Form -->
	  	<div class="fb_card fb-checkout-order-place-area">
			  <div class="fb_card_title">
				  <h3><?php esc_html_e( 'Your order', 'grocerybook' ); ?></h3>
			  </div>
			<?php do_action( 'woocommerce_checkout_order_review' ); ?>
		</div>
	</div>

	<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>

	</div>

</form>

<?php do_action( 'woocommerce_after_checkout_form', $checkout ); ?>
