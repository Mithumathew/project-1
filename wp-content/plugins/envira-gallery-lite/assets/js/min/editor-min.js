jQuery(document).ready(function($){$(document).on("click","a.envira-gallery-choose-gallery, a.envira-albums-choose-album, .envira-gallery-modal-trigger",function(e){e.preventDefault();var a=$(this).data("action");EnviraGalleryModalWindow.content(new EnviraGallerySelectionView({action:a,multiple:!0,modal_title:envira_gallery_editor.modal_title,insert_button_label:envira_gallery_editor.insert_button_label})),EnviraGalleryModalWindow.open()})});
