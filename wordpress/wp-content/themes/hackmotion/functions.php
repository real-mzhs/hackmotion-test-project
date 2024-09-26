<?php

function theme_customizer_settings($wp_customize) {
    // Add a section for theme settings
    $wp_customize->add_section('theme_settings', array(
        'title' => 'Theme Settings',
        'priority' => 30,
    ));

    // Primary Color
    $wp_customize->add_setting('primary_color', array(
        'default' => '#007bff',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label' => 'Primary Color',
        'section' => 'theme_settings',
    )));

    // Secondary Color
    $wp_customize->add_setting('secondary_color', array(
        'default' => '#6c757d',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'secondary_color', array(
        'label' => 'Secondary Color',
        'section' => 'theme_settings',
    )));

    // Text Color
    $wp_customize->add_setting('text_color', array(
        'default' => '#333333',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'text_color', array(
        'label' => 'Text Color',
        'section' => 'theme_settings',
    )));

    // Font Size
    $wp_customize->add_setting('font_size', array(
        'default' => '16px',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('font_size', array(
        'label' => 'Font Size',
        'section' => 'theme_settings',
        'type' => 'text',
    ));

    // Line Height
    $wp_customize->add_setting('line_height', array(
        'default' => '1.5',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('line_height', array(
        'label' => 'Line Height',
        'section' => 'theme_settings',
        'type' => 'text',
    ));
}
add_action('customize_register', 'theme_customizer_settings');

function register_graphql_theme_settings() {
    register_graphql_object_type('ThemeSettings', [
        'description' => 'Custom theme settings',
        'fields' => [
            'primaryColor' => ['type' => 'String'],
            'secondaryColor' => ['type' => 'String'],
            'textColor' => ['type' => 'String'],
            'fontSize' => ['type' => 'String'],
            'lineHeight' => ['type' => 'String'],
        ],
    ]);

    register_graphql_field('RootQuery', 'themeSettings', [
        'type' => 'ThemeSettings',
        'resolve' => function() {
            return [
                'primaryColor' => get_theme_mod('primary_color', '#007bff'),
                'secondaryColor' => get_theme_mod('secondary_color', '#6c757d'),
                'textColor' => get_theme_mod('text_color', '#333333'),
                'fontSize' => get_theme_mod('font_size', '16px'),
                'lineHeight' => get_theme_mod('line_height', '1.5'),
            ];
        },
    ]);
}
add_action('graphql_register_types', 'register_graphql_theme_settings');