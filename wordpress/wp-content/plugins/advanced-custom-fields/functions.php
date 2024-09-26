<?php
if( function_exists('acf_add_local_field_group') ):

function my_acf_add_local_field_groups() {

    acf_add_local_field_group(array(
        'key' => 'group_dynamic_text',
        'title' => 'Dynamic Text Component',
        'fields' => array(
            array(
                'key' => 'field_dynamic_text',
                'label' => 'Dynamic Text',
                'name' => 'dynamic_text',
                'type' => 'text',
                'instructions' => 'Enter the full text. Use {query} as a placeholder for the dynamic word.',
                'required' => 1,
            ),
            array(
                'key' => 'field_default_word',
                'label' => 'Default Word',
                'name' => 'default_word',
                'type' => 'text',
                'instructions' => 'Enter the default word to use if no query is provided.',
                'required' => 1,
            ),
            array(
                'key' => 'field_highlight_color',
                'label' => 'Highlight Color',
                'name' => 'highlight_color',
                'type' => 'color_picker',
                'instructions' => 'Choose the highlight color for the dynamic word.',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'page',
                ),
            ),
        ),
    ));
}

add_action('acf/init', 'my_acf_add_local_field_groups');

endif;
?>