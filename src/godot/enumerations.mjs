// Tool generated file DO NOT modify manually
// Add this script as first autoload to your project to bind enumerations for release build of godot engine

if (!godot.DEBUG_ENABLED) {
	function bind(cls, enumerations) {
		if (cls) Object.defineProperties(cls, enumerations);
	};

	bind(godot.AESContext, {
		Mode: { value: {MODE_ECB_ENCRYPT: 0, MODE_ECB_DECRYPT: 1, MODE_CBC_ENCRYPT: 2, MODE_CBC_DECRYPT: 3, MODE_MAX: 4 } }
	});
	bind(godot.AStar2D, {});
	bind(godot.AStar3D, {});
	bind(godot.AStarGrid2D, {
		Heuristic: { value: {HEURISTIC_EUCLIDEAN: 0, HEURISTIC_MANHATTAN: 1, HEURISTIC_OCTILE: 2, HEURISTIC_CHEBYSHEV: 3, HEURISTIC_MAX: 4 } }, 
		DiagonalMode: { value: {DIAGONAL_MODE_ALWAYS: 0, DIAGONAL_MODE_NEVER: 1, DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE: 2, DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES: 3, DIAGONAL_MODE_MAX: 4 } }
	});
	bind(godot.AcceptDialog, {});
	bind(godot.AnimatableBody2D, {});
	bind(godot.AnimatableBody3D, {});
	bind(godot.AnimatedSprite2D, {});
	bind(godot.AnimatedSprite3D, {});
	bind(godot.AnimatedTexture, {});
	bind(godot.Animation, {
		TrackType: { value: {TYPE_VALUE: 0, TYPE_POSITION_3D: 1, TYPE_ROTATION_3D: 2, TYPE_SCALE_3D: 3, TYPE_BLEND_SHAPE: 4, TYPE_METHOD: 5, TYPE_BEZIER: 6, TYPE_AUDIO: 7, TYPE_ANIMATION: 8 } }, 
		InterpolationType: { value: {INTERPOLATION_NEAREST: 0, INTERPOLATION_LINEAR: 1, INTERPOLATION_CUBIC: 2, INTERPOLATION_LINEAR_ANGLE: 3, INTERPOLATION_CUBIC_ANGLE: 4 } }, 
		UpdateMode: { value: {UPDATE_CONTINUOUS: 0, UPDATE_DISCRETE: 1, UPDATE_CAPTURE: 2 } }, 
		LoopMode: { value: {LOOP_NONE: 0, LOOP_LINEAR: 1, LOOP_PINGPONG: 2 } }, 
		LoopedFlag: { value: {LOOPED_FLAG_NONE: 0, LOOPED_FLAG_END: 1, LOOPED_FLAG_START: 2 } }, 
		FindMode: { value: {FIND_MODE_NEAREST: 0, FIND_MODE_APPROX: 1, FIND_MODE_EXACT: 2 } }
	});
	bind(godot.AnimationLibrary, {});
	bind(godot.AnimationNode, {
		FilterAction: { value: {FILTER_IGNORE: 0, FILTER_PASS: 1, FILTER_STOP: 2, FILTER_BLEND: 3 } }
	});
	bind(godot.AnimationNodeAdd2, {});
	bind(godot.AnimationNodeAdd3, {});
	bind(godot.AnimationNodeAnimation, {
		PlayMode: { value: {PLAY_MODE_FORWARD: 0, PLAY_MODE_BACKWARD: 1 } }
	});
	bind(godot.AnimationNodeBlend2, {});
	bind(godot.AnimationNodeBlend3, {});
	bind(godot.AnimationNodeBlendSpace1D, {
		BlendMode: { value: {BLEND_MODE_INTERPOLATED: 0, BLEND_MODE_DISCRETE: 1, BLEND_MODE_DISCRETE_CARRY: 2 } }
	});
	bind(godot.AnimationNodeBlendSpace2D, {
		BlendMode: { value: {BLEND_MODE_INTERPOLATED: 0, BLEND_MODE_DISCRETE: 1, BLEND_MODE_DISCRETE_CARRY: 2 } }
	});
	bind(godot.AnimationNodeBlendTree, {});
	bind(godot.AnimationNodeOneShot, {
		OneShotRequest: { value: {ONE_SHOT_REQUEST_NONE: 0, ONE_SHOT_REQUEST_FIRE: 1, ONE_SHOT_REQUEST_ABORT: 2, ONE_SHOT_REQUEST_FADE_OUT: 3 } }, 
		MixMode: { value: {MIX_MODE_BLEND: 0, MIX_MODE_ADD: 1 } }
	});
	bind(godot.AnimationNodeOutput, {});
	bind(godot.AnimationNodeStateMachine, {
		StateMachineType: { value: {STATE_MACHINE_TYPE_ROOT: 0, STATE_MACHINE_TYPE_NESTED: 1, STATE_MACHINE_TYPE_GROUPED: 2 } }
	});
	bind(godot.AnimationNodeStateMachinePlayback, {});
	bind(godot.AnimationNodeStateMachineTransition, {
		SwitchMode: { value: {SWITCH_MODE_IMMEDIATE: 0, SWITCH_MODE_SYNC: 1, SWITCH_MODE_AT_END: 2 } }, 
		AdvanceMode: { value: {ADVANCE_MODE_DISABLED: 0, ADVANCE_MODE_ENABLED: 1, ADVANCE_MODE_AUTO: 2 } }
	});
	bind(godot.AnimationNodeSub2, {});
	bind(godot.AnimationNodeSync, {});
	bind(godot.AnimationNodeTimeScale, {});
	bind(godot.AnimationNodeTimeSeek, {});
	bind(godot.AnimationNodeTransition, {});
	bind(godot.AnimationPlayer, {
		AnimationProcessCallback: { value: {ANIMATION_PROCESS_PHYSICS: 0, ANIMATION_PROCESS_IDLE: 1, ANIMATION_PROCESS_MANUAL: 2 } }, 
		AnimationMethodCallMode: { value: {ANIMATION_METHOD_CALL_DEFERRED: 0, ANIMATION_METHOD_CALL_IMMEDIATE: 1 } }
	});
	bind(godot.AnimationRootNode, {});
	bind(godot.AnimationTree, {
		AnimationProcessCallback: { value: {ANIMATION_PROCESS_PHYSICS: 0, ANIMATION_PROCESS_IDLE: 1, ANIMATION_PROCESS_MANUAL: 2 } }
	});
	bind(godot.Area2D, {
		SpaceOverride: { value: {SPACE_OVERRIDE_DISABLED: 0, SPACE_OVERRIDE_COMBINE: 1, SPACE_OVERRIDE_COMBINE_REPLACE: 2, SPACE_OVERRIDE_REPLACE: 3, SPACE_OVERRIDE_REPLACE_COMBINE: 4 } }
	});
	bind(godot.Area3D, {
		SpaceOverride: { value: {SPACE_OVERRIDE_DISABLED: 0, SPACE_OVERRIDE_COMBINE: 1, SPACE_OVERRIDE_COMBINE_REPLACE: 2, SPACE_OVERRIDE_REPLACE: 3, SPACE_OVERRIDE_REPLACE_COMBINE: 4 } }
	});
	bind(godot.ArrayMesh, {});
	bind(godot.ArrayOccluder3D, {});
	bind(godot.AspectRatioContainer, {
		StretchMode: { value: {STRETCH_WIDTH_CONTROLS_HEIGHT: 0, STRETCH_HEIGHT_CONTROLS_WIDTH: 1, STRETCH_FIT: 2, STRETCH_COVER: 3 } }, 
		AlignmentMode: { value: {ALIGNMENT_BEGIN: 0, ALIGNMENT_CENTER: 1, ALIGNMENT_END: 2 } }
	});
	bind(godot.AtlasTexture, {});
	bind(godot.AudioBusLayout, {});
	bind(godot.AudioEffect, {});
	bind(godot.AudioEffectAmplify, {});
	bind(godot.AudioEffectBandLimitFilter, {});
	bind(godot.AudioEffectBandPassFilter, {});
	bind(godot.AudioEffectCapture, {});
	bind(godot.AudioEffectChorus, {});
	bind(godot.AudioEffectCompressor, {});
	bind(godot.AudioEffectDelay, {});
	bind(godot.AudioEffectDistortion, {
		Mode: { value: {MODE_CLIP: 0, MODE_ATAN: 1, MODE_LOFI: 2, MODE_OVERDRIVE: 3, MODE_WAVESHAPE: 4 } }
	});
	bind(godot.AudioEffectEQ, {});
	bind(godot.AudioEffectEQ10, {});
	bind(godot.AudioEffectEQ21, {});
	bind(godot.AudioEffectEQ6, {});
	bind(godot.AudioEffectFilter, {
		FilterDB: { value: {FILTER_6DB: 0, FILTER_12DB: 1, FILTER_18DB: 2, FILTER_24DB: 3 } }
	});
	bind(godot.AudioEffectHighPassFilter, {});
	bind(godot.AudioEffectHighShelfFilter, {});
	bind(godot.AudioEffectInstance, {});
	bind(godot.AudioEffectLimiter, {});
	bind(godot.AudioEffectLowPassFilter, {});
	bind(godot.AudioEffectLowShelfFilter, {});
	bind(godot.AudioEffectNotchFilter, {});
	bind(godot.AudioEffectPanner, {});
	bind(godot.AudioEffectPhaser, {});
	bind(godot.AudioEffectPitchShift, {
		FFTSize: { value: {FFT_SIZE_256: 0, FFT_SIZE_512: 1, FFT_SIZE_1024: 2, FFT_SIZE_2048: 3, FFT_SIZE_4096: 4, FFT_SIZE_MAX: 5 } }
	});
	bind(godot.AudioEffectRecord, {});
	bind(godot.AudioEffectReverb, {});
	bind(godot.AudioEffectSpectrumAnalyzer, {
		FFTSize: { value: {FFT_SIZE_256: 0, FFT_SIZE_512: 1, FFT_SIZE_1024: 2, FFT_SIZE_2048: 3, FFT_SIZE_4096: 4, FFT_SIZE_MAX: 5 } }
	});
	bind(godot.AudioEffectSpectrumAnalyzerInstance, {
		MagnitudeMode: { value: {MAGNITUDE_AVERAGE: 0, MAGNITUDE_MAX: 1 } }
	});
	bind(godot.AudioEffectStereoEnhance, {});
	bind(godot.AudioListener2D, {});
	bind(godot.AudioListener3D, {});
	bind(godot.AudioServer, {
		SpeakerMode: { value: {SPEAKER_MODE_STEREO: 0, SPEAKER_SURROUND_31: 1, SPEAKER_SURROUND_51: 2, SPEAKER_SURROUND_71: 3 } }
	});
	bind(godot.AudioStream, {});
	bind(godot.AudioStreamGenerator, {});
	bind(godot.AudioStreamGeneratorPlayback, {});
	bind(godot.AudioStreamMP3, {});
	bind(godot.AudioStreamMicrophone, {});
	bind(godot.AudioStreamOggVorbis, {});
	bind(godot.AudioStreamPlayback, {});
	bind(godot.AudioStreamPlaybackOggVorbis, {});
	bind(godot.AudioStreamPlaybackPolyphonic, {});
	bind(godot.AudioStreamPlaybackResampled, {});
	bind(godot.AudioStreamPlayer, {
		MixTarget: { value: {MIX_TARGET_STEREO: 0, MIX_TARGET_SURROUND: 1, MIX_TARGET_CENTER: 2 } }
	});
	bind(godot.AudioStreamPlayer2D, {});
	bind(godot.AudioStreamPlayer3D, {
		AttenuationModel: { value: {ATTENUATION_INVERSE_DISTANCE: 0, ATTENUATION_INVERSE_SQUARE_DISTANCE: 1, ATTENUATION_LOGARITHMIC: 2, ATTENUATION_DISABLED: 3 } }, 
		DopplerTracking: { value: {DOPPLER_TRACKING_DISABLED: 0, DOPPLER_TRACKING_IDLE_STEP: 1, DOPPLER_TRACKING_PHYSICS_STEP: 2 } }
	});
	bind(godot.AudioStreamPolyphonic, {});
	bind(godot.AudioStreamRandomizer, {
		PlaybackMode: { value: {PLAYBACK_RANDOM_NO_REPEATS: 0, PLAYBACK_RANDOM: 1, PLAYBACK_SEQUENTIAL: 2 } }
	});
	bind(godot.AudioStreamWAV, {
		Format: { value: {FORMAT_8_BITS: 0, FORMAT_16_BITS: 1, FORMAT_IMA_ADPCM: 2 } }, 
		LoopMode: { value: {LOOP_DISABLED: 0, LOOP_FORWARD: 1, LOOP_PINGPONG: 2, LOOP_BACKWARD: 3 } }
	});
	bind(godot.BackBufferCopy, {
		CopyMode: { value: {COPY_MODE_DISABLED: 0, COPY_MODE_RECT: 1, COPY_MODE_VIEWPORT: 2 } }
	});
	bind(godot.BaseButton, {
		DrawMode: { value: {DRAW_NORMAL: 0, DRAW_PRESSED: 1, DRAW_HOVER: 2, DRAW_DISABLED: 3, DRAW_HOVER_PRESSED: 4 } }, 
		ActionMode: { value: {ACTION_MODE_BUTTON_PRESS: 0, ACTION_MODE_BUTTON_RELEASE: 1 } }
	});
	bind(godot.BaseMaterial3D, {
		TextureParam: { value: {TEXTURE_ALBEDO: 0, TEXTURE_METALLIC: 1, TEXTURE_ROUGHNESS: 2, TEXTURE_EMISSION: 3, TEXTURE_NORMAL: 4, TEXTURE_RIM: 5, TEXTURE_CLEARCOAT: 6, TEXTURE_FLOWMAP: 7, TEXTURE_AMBIENT_OCCLUSION: 8, TEXTURE_HEIGHTMAP: 9, TEXTURE_SUBSURFACE_SCATTERING: 10, TEXTURE_SUBSURFACE_TRANSMITTANCE: 11, TEXTURE_BACKLIGHT: 12, TEXTURE_REFRACTION: 13, TEXTURE_DETAIL_MASK: 14, TEXTURE_DETAIL_ALBEDO: 15, TEXTURE_DETAIL_NORMAL: 16, TEXTURE_ORM: 17, TEXTURE_MAX: 18 } }, 
		TextureFilter: { value: {TEXTURE_FILTER_NEAREST: 0, TEXTURE_FILTER_LINEAR: 1, TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: 2, TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: 3, TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC: 4, TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC: 5, TEXTURE_FILTER_MAX: 6 } }, 
		DetailUV: { value: {DETAIL_UV_1: 0, DETAIL_UV_2: 1 } }, 
		Transparency: { value: {TRANSPARENCY_DISABLED: 0, TRANSPARENCY_ALPHA: 1, TRANSPARENCY_ALPHA_SCISSOR: 2, TRANSPARENCY_ALPHA_HASH: 3, TRANSPARENCY_ALPHA_DEPTH_PRE_PASS: 4, TRANSPARENCY_MAX: 5 } }, 
		ShadingMode: { value: {SHADING_MODE_UNSHADED: 0, SHADING_MODE_PER_PIXEL: 1, SHADING_MODE_PER_VERTEX: 2, SHADING_MODE_MAX: 3 } }, 
		Feature: { value: {FEATURE_EMISSION: 0, FEATURE_NORMAL_MAPPING: 1, FEATURE_RIM: 2, FEATURE_CLEARCOAT: 3, FEATURE_ANISOTROPY: 4, FEATURE_AMBIENT_OCCLUSION: 5, FEATURE_HEIGHT_MAPPING: 6, FEATURE_SUBSURFACE_SCATTERING: 7, FEATURE_SUBSURFACE_TRANSMITTANCE: 8, FEATURE_BACKLIGHT: 9, FEATURE_REFRACTION: 10, FEATURE_DETAIL: 11, FEATURE_MAX: 12 } }, 
		BlendMode: { value: {BLEND_MODE_MIX: 0, BLEND_MODE_ADD: 1, BLEND_MODE_SUB: 2, BLEND_MODE_MUL: 3 } }, 
		AlphaAntiAliasing: { value: {ALPHA_ANTIALIASING_OFF: 0, ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE: 1, ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE: 2 } }, 
		DepthDrawMode: { value: {DEPTH_DRAW_OPAQUE_ONLY: 0, DEPTH_DRAW_ALWAYS: 1, DEPTH_DRAW_DISABLED: 2 } }, 
		CullMode: { value: {CULL_BACK: 0, CULL_FRONT: 1, CULL_DISABLED: 2 } }, 
		Flags: { value: {FLAG_DISABLE_DEPTH_TEST: 0, FLAG_ALBEDO_FROM_VERTEX_COLOR: 1, FLAG_SRGB_VERTEX_COLOR: 2, FLAG_USE_POINT_SIZE: 3, FLAG_FIXED_SIZE: 4, FLAG_BILLBOARD_KEEP_SCALE: 5, FLAG_UV1_USE_TRIPLANAR: 6, FLAG_UV2_USE_TRIPLANAR: 7, FLAG_UV1_USE_WORLD_TRIPLANAR: 8, FLAG_UV2_USE_WORLD_TRIPLANAR: 9, FLAG_AO_ON_UV2: 10, FLAG_EMISSION_ON_UV2: 11, FLAG_ALBEDO_TEXTURE_FORCE_SRGB: 12, FLAG_DONT_RECEIVE_SHADOWS: 13, FLAG_DISABLE_AMBIENT_LIGHT: 14, FLAG_USE_SHADOW_TO_OPACITY: 15, FLAG_USE_TEXTURE_REPEAT: 16, FLAG_INVERT_HEIGHTMAP: 17, FLAG_SUBSURFACE_MODE_SKIN: 18, FLAG_PARTICLE_TRAILS_MODE: 19, FLAG_ALBEDO_TEXTURE_MSDF: 20, FLAG_MAX: 21 } }, 
		DiffuseMode: { value: {DIFFUSE_BURLEY: 0, DIFFUSE_LAMBERT: 1, DIFFUSE_LAMBERT_WRAP: 2, DIFFUSE_TOON: 3 } }, 
		SpecularMode: { value: {SPECULAR_SCHLICK_GGX: 0, SPECULAR_TOON: 1, SPECULAR_DISABLED: 2 } }, 
		BillboardMode: { value: {BILLBOARD_DISABLED: 0, BILLBOARD_ENABLED: 1, BILLBOARD_FIXED_Y: 2, BILLBOARD_PARTICLES: 3 } }, 
		TextureChannel: { value: {TEXTURE_CHANNEL_RED: 0, TEXTURE_CHANNEL_GREEN: 1, TEXTURE_CHANNEL_BLUE: 2, TEXTURE_CHANNEL_ALPHA: 3, TEXTURE_CHANNEL_GRAYSCALE: 4 } }, 
		EmissionOperator: { value: {EMISSION_OP_ADD: 0, EMISSION_OP_MULTIPLY: 1 } }, 
		DistanceFadeMode: { value: {DISTANCE_FADE_DISABLED: 0, DISTANCE_FADE_PIXEL_ALPHA: 1, DISTANCE_FADE_PIXEL_DITHER: 2, DISTANCE_FADE_OBJECT_DITHER: 3 } }
	});
	bind(godot.BitMap, {});
	bind(godot.Bone2D, {});
	bind(godot.BoneAttachment3D, {});
	bind(godot.BoneMap, {});
	bind(godot.BoxContainer, {
		AlignmentMode: { value: {ALIGNMENT_BEGIN: 0, ALIGNMENT_CENTER: 1, ALIGNMENT_END: 2 } }
	});
	bind(godot.BoxMesh, {});
	bind(godot.BoxOccluder3D, {});
	bind(godot.BoxShape3D, {});
	bind(godot.Button, {});
	bind(godot.ButtonGroup, {});
	bind(godot.CPUParticles2D, {
		DrawOrder: { value: {DRAW_ORDER_INDEX: 0, DRAW_ORDER_LIFETIME: 1 } }, 
		Parameter: { value: {PARAM_INITIAL_LINEAR_VELOCITY: 0, PARAM_ANGULAR_VELOCITY: 1, PARAM_ORBIT_VELOCITY: 2, PARAM_LINEAR_ACCEL: 3, PARAM_RADIAL_ACCEL: 4, PARAM_TANGENTIAL_ACCEL: 5, PARAM_DAMPING: 6, PARAM_ANGLE: 7, PARAM_SCALE: 8, PARAM_HUE_VARIATION: 9, PARAM_ANIM_SPEED: 10, PARAM_ANIM_OFFSET: 11, PARAM_MAX: 12 } }, 
		ParticleFlags: { value: {PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY: 0, PARTICLE_FLAG_ROTATE_Y: 1, PARTICLE_FLAG_DISABLE_Z: 2, PARTICLE_FLAG_MAX: 3 } }, 
		EmissionShape: { value: {EMISSION_SHAPE_POINT: 0, EMISSION_SHAPE_SPHERE: 1, EMISSION_SHAPE_SPHERE_SURFACE: 2, EMISSION_SHAPE_RECTANGLE: 3, EMISSION_SHAPE_POINTS: 4, EMISSION_SHAPE_DIRECTED_POINTS: 5, EMISSION_SHAPE_MAX: 6 } }
	});
	bind(godot.CPUParticles3D, {
		DrawOrder: { value: {DRAW_ORDER_INDEX: 0, DRAW_ORDER_LIFETIME: 1, DRAW_ORDER_VIEW_DEPTH: 2 } }, 
		Parameter: { value: {PARAM_INITIAL_LINEAR_VELOCITY: 0, PARAM_ANGULAR_VELOCITY: 1, PARAM_ORBIT_VELOCITY: 2, PARAM_LINEAR_ACCEL: 3, PARAM_RADIAL_ACCEL: 4, PARAM_TANGENTIAL_ACCEL: 5, PARAM_DAMPING: 6, PARAM_ANGLE: 7, PARAM_SCALE: 8, PARAM_HUE_VARIATION: 9, PARAM_ANIM_SPEED: 10, PARAM_ANIM_OFFSET: 11, PARAM_MAX: 12 } }, 
		ParticleFlags: { value: {PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY: 0, PARTICLE_FLAG_ROTATE_Y: 1, PARTICLE_FLAG_DISABLE_Z: 2, PARTICLE_FLAG_MAX: 3 } }, 
		EmissionShape: { value: {EMISSION_SHAPE_POINT: 0, EMISSION_SHAPE_SPHERE: 1, EMISSION_SHAPE_SPHERE_SURFACE: 2, EMISSION_SHAPE_BOX: 3, EMISSION_SHAPE_POINTS: 4, EMISSION_SHAPE_DIRECTED_POINTS: 5, EMISSION_SHAPE_RING: 6, EMISSION_SHAPE_MAX: 7 } }
	});
	bind(godot.CSGBox3D, {});
	bind(godot.CSGCombiner3D, {});
	bind(godot.CSGCylinder3D, {});
	bind(godot.CSGMesh3D, {});
	bind(godot.CSGPolygon3D, {
		Mode: { value: {MODE_DEPTH: 0, MODE_SPIN: 1, MODE_PATH: 2 } }, 
		PathRotation: { value: {PATH_ROTATION_POLYGON: 0, PATH_ROTATION_PATH: 1, PATH_ROTATION_PATH_FOLLOW: 2 } }, 
		PathIntervalType: { value: {PATH_INTERVAL_DISTANCE: 0, PATH_INTERVAL_SUBDIVIDE: 1 } }
	});
	bind(godot.CSGPrimitive3D, {});
	bind(godot.CSGShape3D, {
		Operation: { value: {OPERATION_UNION: 0, OPERATION_INTERSECTION: 1, OPERATION_SUBTRACTION: 2 } }
	});
	bind(godot.CSGSphere3D, {});
	bind(godot.CSGTorus3D, {});
	bind(godot.CallbackTweener, {});
	bind(godot.Camera2D, {
		AnchorMode: { value: {ANCHOR_MODE_FIXED_TOP_LEFT: 0, ANCHOR_MODE_DRAG_CENTER: 1 } }, 
		Camera2DProcessCallback: { value: {CAMERA2D_PROCESS_PHYSICS: 0, CAMERA2D_PROCESS_IDLE: 1 } }
	});
	bind(godot.Camera3D, {
		ProjectionType: { value: {PROJECTION_PERSPECTIVE: 0, PROJECTION_ORTHOGONAL: 1, PROJECTION_FRUSTUM: 2 } }, 
		KeepAspect: { value: {KEEP_WIDTH: 0, KEEP_HEIGHT: 1 } }, 
		DopplerTracking: { value: {DOPPLER_TRACKING_DISABLED: 0, DOPPLER_TRACKING_IDLE_STEP: 1, DOPPLER_TRACKING_PHYSICS_STEP: 2 } }
	});
	bind(godot.CameraAttributes, {});
	bind(godot.CameraAttributesPhysical, {});
	bind(godot.CameraAttributesPractical, {});
	bind(godot.CameraFeed, {
		FeedDataType: { value: {FEED_NOIMAGE: 0, FEED_RGB: 1, FEED_YCBCR: 2, FEED_YCBCR_SEP: 3 } }, 
		FeedPosition: { value: {FEED_UNSPECIFIED: 0, FEED_FRONT: 1, FEED_BACK: 2 } }
	});
	bind(godot.CameraServer, {
		FeedImage: { value: {FEED_RGBA_IMAGE: 0, FEED_YCBCR_IMAGE: 0, FEED_Y_IMAGE: 0, FEED_CBCR_IMAGE: 1 } }
	});
	bind(godot.CameraTexture, {});
	bind(godot.CanvasGroup, {});
	bind(godot.CanvasItem, {
		TextureFilter: { value: {TEXTURE_FILTER_PARENT_NODE: 0, TEXTURE_FILTER_NEAREST: 1, TEXTURE_FILTER_LINEAR: 2, TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: 3, TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: 4, TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC: 5, TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC: 6, TEXTURE_FILTER_MAX: 7 } }, 
		TextureRepeat: { value: {TEXTURE_REPEAT_PARENT_NODE: 0, TEXTURE_REPEAT_DISABLED: 1, TEXTURE_REPEAT_ENABLED: 2, TEXTURE_REPEAT_MIRROR: 3, TEXTURE_REPEAT_MAX: 4 } }, 
		ClipChildrenMode: { value: {CLIP_CHILDREN_DISABLED: 0, CLIP_CHILDREN_ONLY: 1, CLIP_CHILDREN_AND_DRAW: 2, CLIP_CHILDREN_MAX: 3 } }
	});
	bind(godot.CanvasItemMaterial, {
		BlendMode: { value: {BLEND_MODE_MIX: 0, BLEND_MODE_ADD: 1, BLEND_MODE_SUB: 2, BLEND_MODE_MUL: 3, BLEND_MODE_PREMULT_ALPHA: 4 } }, 
		LightMode: { value: {LIGHT_MODE_NORMAL: 0, LIGHT_MODE_UNSHADED: 1, LIGHT_MODE_LIGHT_ONLY: 2 } }
	});
	bind(godot.CanvasLayer, {});
	bind(godot.CanvasModulate, {});
	bind(godot.CanvasTexture, {});
	bind(godot.CapsuleMesh, {});
	bind(godot.CapsuleShape2D, {});
	bind(godot.CapsuleShape3D, {});
	bind(godot.CenterContainer, {});
	bind(godot.CharFXTransform, {});
	bind(godot.CharacterBody2D, {
		MotionMode: { value: {MOTION_MODE_GROUNDED: 0, MOTION_MODE_FLOATING: 1 } }, 
		PlatformOnLeave: { value: {PLATFORM_ON_LEAVE_ADD_VELOCITY: 0, PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY: 1, PLATFORM_ON_LEAVE_DO_NOTHING: 2 } }
	});
	bind(godot.CharacterBody3D, {
		MotionMode: { value: {MOTION_MODE_GROUNDED: 0, MOTION_MODE_FLOATING: 1 } }, 
		PlatformOnLeave: { value: {PLATFORM_ON_LEAVE_ADD_VELOCITY: 0, PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY: 1, PLATFORM_ON_LEAVE_DO_NOTHING: 2 } }
	});
	bind(godot.CheckBox, {});
	bind(godot.CheckButton, {});
	bind(godot.CircleShape2D, {});
	bind(godot.ClassDB, {});
	bind(godot.CodeEdit, {
		CodeCompletionKind: { value: {KIND_CLASS: 0, KIND_FUNCTION: 1, KIND_SIGNAL: 2, KIND_VARIABLE: 3, KIND_MEMBER: 4, KIND_ENUM: 5, KIND_CONSTANT: 6, KIND_NODE_PATH: 7, KIND_FILE_PATH: 8, KIND_PLAIN_TEXT: 9 } }, 
		CodeCompletionLocation: { value: {LOCATION_LOCAL: 0, LOCATION_PARENT_MASK: 256, LOCATION_OTHER_USER_CODE: 512, LOCATION_OTHER: 1024 } }
	});
	bind(godot.CodeHighlighter, {});
	bind(godot.CollisionObject2D, {
		DisableMode: { value: {DISABLE_MODE_REMOVE: 0, DISABLE_MODE_MAKE_STATIC: 1, DISABLE_MODE_KEEP_ACTIVE: 2 } }
	});
	bind(godot.CollisionObject3D, {
		DisableMode: { value: {DISABLE_MODE_REMOVE: 0, DISABLE_MODE_MAKE_STATIC: 1, DISABLE_MODE_KEEP_ACTIVE: 2 } }
	});
	bind(godot.CollisionPolygon2D, {
		BuildMode: { value: {BUILD_SOLIDS: 0, BUILD_SEGMENTS: 1 } }
	});
	bind(godot.CollisionPolygon3D, {});
	bind(godot.CollisionShape2D, {});
	bind(godot.CollisionShape3D, {});
	bind(godot.ColorPicker, {
		ColorModeType: { value: {MODE_RGB: 0, MODE_HSV: 1, MODE_RAW: 2, MODE_OKHSL: 3 } }, 
		PickerShapeType: { value: {SHAPE_HSV_RECTANGLE: 0, SHAPE_HSV_WHEEL: 1, SHAPE_VHS_CIRCLE: 2, SHAPE_OKHSL_CIRCLE: 3, SHAPE_NONE: 4 } }
	});
	bind(godot.ColorPickerButton, {});
	bind(godot.ColorRect, {});
	bind(godot.CompressedCubemap, {});
	bind(godot.CompressedCubemapArray, {});
	bind(godot.CompressedTexture2D, {});
	bind(godot.CompressedTexture2DArray, {});
	bind(godot.CompressedTexture3D, {});
	bind(godot.CompressedTextureLayered, {});
	bind(godot.ConcavePolygonShape2D, {});
	bind(godot.ConcavePolygonShape3D, {});
	bind(godot.ConeTwistJoint3D, {
		Param: { value: {PARAM_SWING_SPAN: 0, PARAM_TWIST_SPAN: 1, PARAM_BIAS: 2, PARAM_SOFTNESS: 3, PARAM_RELAXATION: 4, PARAM_MAX: 5 } }
	});
	bind(godot.ConfigFile, {});
	bind(godot.ConfirmationDialog, {});
	bind(godot.Container, {});
	bind(godot.Control, {
		FocusMode: { value: {FOCUS_NONE: 0, FOCUS_CLICK: 1, FOCUS_ALL: 2 } }, 
		CursorShape: { value: {CURSOR_ARROW: 0, CURSOR_IBEAM: 1, CURSOR_POINTING_HAND: 2, CURSOR_CROSS: 3, CURSOR_WAIT: 4, CURSOR_BUSY: 5, CURSOR_DRAG: 6, CURSOR_CAN_DROP: 7, CURSOR_FORBIDDEN: 8, CURSOR_VSIZE: 9, CURSOR_HSIZE: 10, CURSOR_BDIAGSIZE: 11, CURSOR_FDIAGSIZE: 12, CURSOR_MOVE: 13, CURSOR_VSPLIT: 14, CURSOR_HSPLIT: 15, CURSOR_HELP: 16 } }, 
		LayoutPreset: { value: {PRESET_TOP_LEFT: 0, PRESET_TOP_RIGHT: 1, PRESET_BOTTOM_LEFT: 2, PRESET_BOTTOM_RIGHT: 3, PRESET_CENTER_LEFT: 4, PRESET_CENTER_TOP: 5, PRESET_CENTER_RIGHT: 6, PRESET_CENTER_BOTTOM: 7, PRESET_CENTER: 8, PRESET_LEFT_WIDE: 9, PRESET_TOP_WIDE: 10, PRESET_RIGHT_WIDE: 11, PRESET_BOTTOM_WIDE: 12, PRESET_VCENTER_WIDE: 13, PRESET_HCENTER_WIDE: 14, PRESET_FULL_RECT: 15 } }, 
		LayoutPresetMode: { value: {PRESET_MODE_MINSIZE: 0, PRESET_MODE_KEEP_WIDTH: 1, PRESET_MODE_KEEP_HEIGHT: 2, PRESET_MODE_KEEP_SIZE: 3 } }, 
		SizeFlags: { value: {SIZE_SHRINK_BEGIN: 0, SIZE_FILL: 1, SIZE_EXPAND: 2, SIZE_EXPAND_FILL: 3, SIZE_SHRINK_CENTER: 4, SIZE_SHRINK_END: 8 } }, 
		MouseFilter: { value: {MOUSE_FILTER_STOP: 0, MOUSE_FILTER_PASS: 1, MOUSE_FILTER_IGNORE: 2 } }, 
		GrowDirection: { value: {GROW_DIRECTION_BEGIN: 0, GROW_DIRECTION_END: 1, GROW_DIRECTION_BOTH: 2 } }, 
		Anchor: { value: {ANCHOR_BEGIN: 0, ANCHOR_END: 1 } }, 
		LayoutDirection: { value: {LAYOUT_DIRECTION_INHERITED: 0, LAYOUT_DIRECTION_LOCALE: 1, LAYOUT_DIRECTION_LTR: 2, LAYOUT_DIRECTION_RTL: 3 } }, 
		TextDirection: { value: {TEXT_DIRECTION_INHERITED: 3, TEXT_DIRECTION_AUTO: 0, TEXT_DIRECTION_LTR: 1, TEXT_DIRECTION_RTL: 2 } }
	});
	bind(godot.ConvexPolygonShape2D, {});
	bind(godot.ConvexPolygonShape3D, {});
	bind(godot.Crypto, {});
	bind(godot.CryptoKey, {});
	bind(godot.Cubemap, {});
	bind(godot.CubemapArray, {});
	bind(godot.Curve, {
		TangentMode: { value: {TANGENT_FREE: 0, TANGENT_LINEAR: 1, TANGENT_MODE_COUNT: 2 } }
	});
	bind(godot.Curve2D, {});
	bind(godot.Curve3D, {});
	bind(godot.CurveTexture, {
		TextureMode: { value: {TEXTURE_MODE_RGB: 0, TEXTURE_MODE_RED: 1 } }
	});
	bind(godot.CurveXYZTexture, {});
	bind(godot.CylinderMesh, {});
	bind(godot.CylinderShape3D, {});
	bind(godot.DTLSServer, {});
	bind(godot.DampedSpringJoint2D, {});
	bind(godot.Decal, {
		DecalTexture: { value: {TEXTURE_ALBEDO: 0, TEXTURE_NORMAL: 1, TEXTURE_ORM: 2, TEXTURE_EMISSION: 3, TEXTURE_MAX: 4 } }
	});
	bind(godot.DirAccess, {});
	bind(godot.DirectionalLight2D, {});
	bind(godot.DirectionalLight3D, {
		ShadowMode: { value: {SHADOW_ORTHOGONAL: 0, SHADOW_PARALLEL_2_SPLITS: 1, SHADOW_PARALLEL_4_SPLITS: 2 } }, 
		SkyMode: { value: {SKY_MODE_LIGHT_AND_SKY: 0, SKY_MODE_LIGHT_ONLY: 1, SKY_MODE_SKY_ONLY: 2 } }
	});
	bind(godot.DisplayServer, {
		Feature: { value: {FEATURE_GLOBAL_MENU: 0, FEATURE_SUBWINDOWS: 1, FEATURE_TOUCHSCREEN: 2, FEATURE_MOUSE: 3, FEATURE_MOUSE_WARP: 4, FEATURE_CLIPBOARD: 5, FEATURE_VIRTUAL_KEYBOARD: 6, FEATURE_CURSOR_SHAPE: 7, FEATURE_CUSTOM_CURSOR_SHAPE: 8, FEATURE_NATIVE_DIALOG: 9, FEATURE_IME: 10, FEATURE_WINDOW_TRANSPARENCY: 11, FEATURE_HIDPI: 12, FEATURE_ICON: 13, FEATURE_NATIVE_ICON: 14, FEATURE_ORIENTATION: 15, FEATURE_SWAP_BUFFERS: 16, FEATURE_CLIPBOARD_PRIMARY: 18, FEATURE_TEXT_TO_SPEECH: 19, FEATURE_EXTEND_TO_TITLE: 20, FEATURE_SCREEN_CAPTURE: 21 } }, 
		MouseMode: { value: {MOUSE_MODE_VISIBLE: 0, MOUSE_MODE_HIDDEN: 1, MOUSE_MODE_CAPTURED: 2, MOUSE_MODE_CONFINED: 3, MOUSE_MODE_CONFINED_HIDDEN: 4 } }, 
		ScreenOrientation: { value: {SCREEN_LANDSCAPE: 0, SCREEN_PORTRAIT: 1, SCREEN_REVERSE_LANDSCAPE: 2, SCREEN_REVERSE_PORTRAIT: 3, SCREEN_SENSOR_LANDSCAPE: 4, SCREEN_SENSOR_PORTRAIT: 5, SCREEN_SENSOR: 6 } }, 
		VirtualKeyboardType: { value: {KEYBOARD_TYPE_DEFAULT: 0, KEYBOARD_TYPE_MULTILINE: 1, KEYBOARD_TYPE_NUMBER: 2, KEYBOARD_TYPE_NUMBER_DECIMAL: 3, KEYBOARD_TYPE_PHONE: 4, KEYBOARD_TYPE_EMAIL_ADDRESS: 5, KEYBOARD_TYPE_PASSWORD: 6, KEYBOARD_TYPE_URL: 7 } }, 
		CursorShape: { value: {CURSOR_ARROW: 0, CURSOR_IBEAM: 1, CURSOR_POINTING_HAND: 2, CURSOR_CROSS: 3, CURSOR_WAIT: 4, CURSOR_BUSY: 5, CURSOR_DRAG: 6, CURSOR_CAN_DROP: 7, CURSOR_FORBIDDEN: 8, CURSOR_VSIZE: 9, CURSOR_HSIZE: 10, CURSOR_BDIAGSIZE: 11, CURSOR_FDIAGSIZE: 12, CURSOR_MOVE: 13, CURSOR_VSPLIT: 14, CURSOR_HSPLIT: 15, CURSOR_HELP: 16, CURSOR_MAX: 17 } }, 
		WindowMode: { value: {WINDOW_MODE_WINDOWED: 0, WINDOW_MODE_MINIMIZED: 1, WINDOW_MODE_MAXIMIZED: 2, WINDOW_MODE_FULLSCREEN: 3, WINDOW_MODE_EXCLUSIVE_FULLSCREEN: 4 } }, 
		WindowFlags: { value: {WINDOW_FLAG_RESIZE_DISABLED: 0, WINDOW_FLAG_BORDERLESS: 1, WINDOW_FLAG_ALWAYS_ON_TOP: 2, WINDOW_FLAG_TRANSPARENT: 3, WINDOW_FLAG_NO_FOCUS: 4, WINDOW_FLAG_POPUP: 5, WINDOW_FLAG_EXTEND_TO_TITLE: 6, WINDOW_FLAG_MOUSE_PASSTHROUGH: 7, WINDOW_FLAG_MAX: 8 } }, 
		WindowEvent: { value: {WINDOW_EVENT_MOUSE_ENTER: 0, WINDOW_EVENT_MOUSE_EXIT: 1, WINDOW_EVENT_FOCUS_IN: 2, WINDOW_EVENT_FOCUS_OUT: 3, WINDOW_EVENT_CLOSE_REQUEST: 4, WINDOW_EVENT_GO_BACK_REQUEST: 5, WINDOW_EVENT_DPI_CHANGE: 6, WINDOW_EVENT_TITLEBAR_CHANGE: 7 } }, 
		VSyncMode: { value: {VSYNC_DISABLED: 0, VSYNC_ENABLED: 1, VSYNC_ADAPTIVE: 2, VSYNC_MAILBOX: 3 } }, 
		HandleType: { value: {DISPLAY_HANDLE: 0, WINDOW_HANDLE: 1, WINDOW_VIEW: 2, OPENGL_CONTEXT: 3 } }, 
		TTSUtteranceEvent: { value: {TTS_UTTERANCE_STARTED: 0, TTS_UTTERANCE_ENDED: 1, TTS_UTTERANCE_CANCELED: 2, TTS_UTTERANCE_BOUNDARY: 3 } }
	});
	bind(godot.ENetConnection, {
		CompressionMode: { value: {COMPRESS_NONE: 0, COMPRESS_RANGE_CODER: 1, COMPRESS_FASTLZ: 2, COMPRESS_ZLIB: 3, COMPRESS_ZSTD: 4 } }, 
		EventType: { value: {EVENT_ERROR: -1, EVENT_NONE: 0, EVENT_CONNECT: 1, EVENT_DISCONNECT: 2, EVENT_RECEIVE: 3 } }, 
		HostStatistic: { value: {HOST_TOTAL_SENT_DATA: 0, HOST_TOTAL_SENT_PACKETS: 1, HOST_TOTAL_RECEIVED_DATA: 2, HOST_TOTAL_RECEIVED_PACKETS: 3 } }
	});
	bind(godot.ENetMultiplayerPeer, {});
	bind(godot.ENetPacketPeer, {
		PeerState: { value: {STATE_DISCONNECTED: 0, STATE_CONNECTING: 1, STATE_ACKNOWLEDGING_CONNECT: 2, STATE_CONNECTION_PENDING: 3, STATE_CONNECTION_SUCCEEDED: 4, STATE_CONNECTED: 5, STATE_DISCONNECT_LATER: 6, STATE_DISCONNECTING: 7, STATE_ACKNOWLEDGING_DISCONNECT: 8, STATE_ZOMBIE: 9 } }, 
		PeerStatistic: { value: {PEER_PACKET_LOSS: 0, PEER_PACKET_LOSS_VARIANCE: 1, PEER_PACKET_LOSS_EPOCH: 2, PEER_ROUND_TRIP_TIME: 3, PEER_ROUND_TRIP_TIME_VARIANCE: 4, PEER_LAST_ROUND_TRIP_TIME: 5, PEER_LAST_ROUND_TRIP_TIME_VARIANCE: 6, PEER_PACKET_THROTTLE: 7, PEER_PACKET_THROTTLE_LIMIT: 8, PEER_PACKET_THROTTLE_COUNTER: 9, PEER_PACKET_THROTTLE_EPOCH: 10, PEER_PACKET_THROTTLE_ACCELERATION: 11, PEER_PACKET_THROTTLE_DECELERATION: 12, PEER_PACKET_THROTTLE_INTERVAL: 13 } }
	});
	bind(godot.EditorCommandPalette, {});
	bind(godot.EditorDebuggerPlugin, {});
	bind(godot.EditorDebuggerSession, {});
	bind(godot.EditorExportPlatform, {});
	bind(godot.EditorExportPlatformAndroid, {});
	bind(godot.EditorExportPlatformIOS, {});
	bind(godot.EditorExportPlatformLinuxBSD, {});
	bind(godot.EditorExportPlatformMacOS, {});
	bind(godot.EditorExportPlatformPC, {});
	bind(godot.EditorExportPlatformWeb, {});
	bind(godot.EditorExportPlatformWindows, {});
	bind(godot.EditorExportPlugin, {});
	bind(godot.EditorFeatureProfile, {
		Feature: { value: {FEATURE_3D: 0, FEATURE_SCRIPT: 1, FEATURE_ASSET_LIB: 2, FEATURE_SCENE_TREE: 3, FEATURE_NODE_DOCK: 4, FEATURE_FILESYSTEM_DOCK: 5, FEATURE_IMPORT_DOCK: 6, FEATURE_HISTORY_DOCK: 7, FEATURE_MAX: 8 } }
	});
	bind(godot.EditorFileDialog, {
		FileMode: { value: {FILE_MODE_OPEN_FILE: 0, FILE_MODE_OPEN_FILES: 1, FILE_MODE_OPEN_DIR: 2, FILE_MODE_OPEN_ANY: 3, FILE_MODE_SAVE_FILE: 4 } }, 
		Access: { value: {ACCESS_RESOURCES: 0, ACCESS_USERDATA: 1, ACCESS_FILESYSTEM: 2 } }, 
		DisplayMode: { value: {DISPLAY_THUMBNAILS: 0, DISPLAY_LIST: 1 } }
	});
	bind(godot.EditorFileSystem, {});
	bind(godot.EditorFileSystemDirectory, {});
	bind(godot.EditorFileSystemImportFormatSupportQuery, {});
	bind(godot.EditorImportPlugin, {});
	bind(godot.EditorInspector, {});
	bind(godot.EditorInspectorPlugin, {});
	bind(godot.EditorInterface, {});
	bind(godot.EditorNode3DGizmo, {});
	bind(godot.EditorNode3DGizmoPlugin, {});
	bind(godot.EditorPaths, {});
	bind(godot.EditorPlugin, {
		CustomControlContainer: { value: {CONTAINER_TOOLBAR: 0, CONTAINER_SPATIAL_EDITOR_MENU: 1, CONTAINER_SPATIAL_EDITOR_SIDE_LEFT: 2, CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT: 3, CONTAINER_SPATIAL_EDITOR_BOTTOM: 4, CONTAINER_CANVAS_EDITOR_MENU: 5, CONTAINER_CANVAS_EDITOR_SIDE_LEFT: 6, CONTAINER_CANVAS_EDITOR_SIDE_RIGHT: 7, CONTAINER_CANVAS_EDITOR_BOTTOM: 8, CONTAINER_INSPECTOR_BOTTOM: 9, CONTAINER_PROJECT_SETTING_TAB_LEFT: 10, CONTAINER_PROJECT_SETTING_TAB_RIGHT: 11 } }, 
		DockSlot: { value: {DOCK_SLOT_LEFT_UL: 0, DOCK_SLOT_LEFT_BL: 1, DOCK_SLOT_LEFT_UR: 2, DOCK_SLOT_LEFT_BR: 3, DOCK_SLOT_RIGHT_UL: 4, DOCK_SLOT_RIGHT_BL: 5, DOCK_SLOT_RIGHT_UR: 6, DOCK_SLOT_RIGHT_BR: 7, DOCK_SLOT_MAX: 8 } }, 
		AfterGUIInput: { value: {AFTER_GUI_INPUT_PASS: 0, AFTER_GUI_INPUT_STOP: 1, AFTER_GUI_INPUT_CUSTOM: 2 } }
	});
	bind(godot.EditorProperty, {});
	bind(godot.EditorResourceConversionPlugin, {});
	bind(godot.EditorResourcePicker, {});
	bind(godot.EditorResourcePreview, {});
	bind(godot.EditorResourcePreviewGenerator, {});
	bind(godot.EditorResourceTooltipPlugin, {});
	bind(godot.EditorSceneFormatImporter, {});
	bind(godot.EditorSceneFormatImporterBlend, {});
	bind(godot.EditorSceneFormatImporterFBX, {});
	bind(godot.EditorSceneFormatImporterGLTF, {});
	bind(godot.EditorScenePostImport, {});
	bind(godot.EditorScenePostImportPlugin, {
		InternalImportCategory: { value: {INTERNAL_IMPORT_CATEGORY_NODE: 0, INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE: 1, INTERNAL_IMPORT_CATEGORY_MESH: 2, INTERNAL_IMPORT_CATEGORY_MATERIAL: 3, INTERNAL_IMPORT_CATEGORY_ANIMATION: 4, INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE: 5, INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE: 6, INTERNAL_IMPORT_CATEGORY_MAX: 7 } }
	});
	bind(godot.EditorScript, {});
	bind(godot.EditorScriptPicker, {});
	bind(godot.EditorSelection, {});
	bind(godot.EditorSettings, {});
	bind(godot.EditorSpinSlider, {});
	bind(godot.EditorSyntaxHighlighter, {});
	bind(godot.EditorTranslationParserPlugin, {});
	bind(godot.EditorUndoRedoManager, {
		SpecialHistory: { value: {GLOBAL_HISTORY: 0, REMOTE_HISTORY: -9, INVALID_HISTORY: -99 } }
	});
	bind(godot.EditorVCSInterface, {
		ChangeType: { value: {CHANGE_TYPE_NEW: 0, CHANGE_TYPE_MODIFIED: 1, CHANGE_TYPE_RENAMED: 2, CHANGE_TYPE_DELETED: 3, CHANGE_TYPE_TYPECHANGE: 4, CHANGE_TYPE_UNMERGED: 5 } }, 
		TreeArea: { value: {TREE_AREA_COMMIT: 0, TREE_AREA_STAGED: 1, TREE_AREA_UNSTAGED: 2 } }
	});
	bind(godot.EncodedObjectAsID, {});
	bind(godot.Engine, {});
	bind(godot.EngineDebugger, {});
	bind(godot.EngineProfiler, {});
	bind(godot.Environment, {
		BGMode: { value: {BG_CLEAR_COLOR: 0, BG_COLOR: 1, BG_SKY: 2, BG_CANVAS: 3, BG_KEEP: 4, BG_CAMERA_FEED: 5, BG_MAX: 6 } }, 
		AmbientSource: { value: {AMBIENT_SOURCE_BG: 0, AMBIENT_SOURCE_DISABLED: 1, AMBIENT_SOURCE_COLOR: 2, AMBIENT_SOURCE_SKY: 3 } }, 
		ReflectionSource: { value: {REFLECTION_SOURCE_BG: 0, REFLECTION_SOURCE_DISABLED: 1, REFLECTION_SOURCE_SKY: 2 } }, 
		ToneMapper: { value: {TONE_MAPPER_LINEAR: 0, TONE_MAPPER_REINHARDT: 1, TONE_MAPPER_FILMIC: 2, TONE_MAPPER_ACES: 3 } }, 
		GlowBlendMode: { value: {GLOW_BLEND_MODE_ADDITIVE: 0, GLOW_BLEND_MODE_SCREEN: 1, GLOW_BLEND_MODE_SOFTLIGHT: 2, GLOW_BLEND_MODE_REPLACE: 3, GLOW_BLEND_MODE_MIX: 4 } }, 
		SDFGIYScale: { value: {SDFGI_Y_SCALE_50_PERCENT: 0, SDFGI_Y_SCALE_75_PERCENT: 1, SDFGI_Y_SCALE_100_PERCENT: 2 } }
	});
	bind(godot.Expression, {});
	bind(godot.FastNoiseLite, {
		NoiseType: { value: {TYPE_VALUE: 5, TYPE_VALUE_CUBIC: 4, TYPE_PERLIN: 3, TYPE_CELLULAR: 2, TYPE_SIMPLEX: 0, TYPE_SIMPLEX_SMOOTH: 1 } }, 
		FractalType: { value: {FRACTAL_NONE: 0, FRACTAL_FBM: 1, FRACTAL_RIDGED: 2, FRACTAL_PING_PONG: 3 } }, 
		CellularDistanceFunction: { value: {DISTANCE_EUCLIDEAN: 0, DISTANCE_EUCLIDEAN_SQUARED: 1, DISTANCE_MANHATTAN: 2, DISTANCE_HYBRID: 3 } }, 
		CellularReturnType: { value: {RETURN_CELL_VALUE: 0, RETURN_DISTANCE: 1, RETURN_DISTANCE2: 2, RETURN_DISTANCE2_ADD: 3, RETURN_DISTANCE2_SUB: 4, RETURN_DISTANCE2_MUL: 5, RETURN_DISTANCE2_DIV: 6 } }, 
		DomainWarpType: { value: {DOMAIN_WARP_SIMPLEX: 0, DOMAIN_WARP_SIMPLEX_REDUCED: 1, DOMAIN_WARP_BASIC_GRID: 2 } }, 
		DomainWarpFractalType: { value: {DOMAIN_WARP_FRACTAL_NONE: 0, DOMAIN_WARP_FRACTAL_PROGRESSIVE: 1, DOMAIN_WARP_FRACTAL_INDEPENDENT: 2 } }
	});
	bind(godot.FileAccess, {
		ModeFlags: { value: {READ: 1, WRITE: 2, READ_WRITE: 3, WRITE_READ: 7 } }, 
		CompressionMode: { value: {COMPRESSION_FASTLZ: 0, COMPRESSION_DEFLATE: 1, COMPRESSION_ZSTD: 2, COMPRESSION_GZIP: 3, COMPRESSION_BROTLI: 4 } }
	});
	bind(godot.FileDialog, {
		FileMode: { value: {FILE_MODE_OPEN_FILE: 0, FILE_MODE_OPEN_FILES: 1, FILE_MODE_OPEN_DIR: 2, FILE_MODE_OPEN_ANY: 3, FILE_MODE_SAVE_FILE: 4 } }, 
		Access: { value: {ACCESS_RESOURCES: 0, ACCESS_USERDATA: 1, ACCESS_FILESYSTEM: 2 } }
	});
	bind(godot.FileSystemDock, {});
	bind(godot.FlowContainer, {
		AlignmentMode: { value: {ALIGNMENT_BEGIN: 0, ALIGNMENT_CENTER: 1, ALIGNMENT_END: 2 } }
	});
	bind(godot.FogMaterial, {});
	bind(godot.FogVolume, {});
	bind(godot.Font, {});
	bind(godot.FontFile, {});
	bind(godot.FontVariation, {});
	bind(godot.GDExtension, {
		InitializationLevel: { value: {INITIALIZATION_LEVEL_CORE: 0, INITIALIZATION_LEVEL_SERVERS: 1, INITIALIZATION_LEVEL_SCENE: 2, INITIALIZATION_LEVEL_EDITOR: 3 } }
	});
	bind(godot.GDExtensionManager, {
		LoadStatus: { value: {LOAD_STATUS_OK: 0, LOAD_STATUS_FAILED: 1, LOAD_STATUS_ALREADY_LOADED: 2, LOAD_STATUS_NOT_LOADED: 3, LOAD_STATUS_NEEDS_RESTART: 4 } }
	});
	bind(godot.GDScript, {});
	bind(godot.GLTFAccessor, {});
	bind(godot.GLTFAnimation, {});
	bind(godot.GLTFBufferView, {});
	bind(godot.GLTFCamera, {});
	bind(godot.GLTFDocument, {});
	bind(godot.GLTFDocumentExtension, {});
	bind(godot.GLTFDocumentExtensionConvertImporterMesh, {});
	bind(godot.GLTFLight, {});
	bind(godot.GLTFMesh, {});
	bind(godot.GLTFNode, {});
	bind(godot.GLTFPhysicsBody, {});
	bind(godot.GLTFPhysicsShape, {});
	bind(godot.GLTFSkeleton, {});
	bind(godot.GLTFSkin, {});
	bind(godot.GLTFSpecGloss, {});
	bind(godot.GLTFState, {});
	bind(godot.GLTFTexture, {});
	bind(godot.GLTFTextureSampler, {});
	bind(godot.GPUParticles2D, {
		DrawOrder: { value: {DRAW_ORDER_INDEX: 0, DRAW_ORDER_LIFETIME: 1, DRAW_ORDER_REVERSE_LIFETIME: 2 } }, 
		EmitFlags: { value: {EMIT_FLAG_POSITION: 1, EMIT_FLAG_ROTATION_SCALE: 2, EMIT_FLAG_VELOCITY: 4, EMIT_FLAG_COLOR: 8, EMIT_FLAG_CUSTOM: 16 } }
	});
	bind(godot.GPUParticles3D, {
		DrawOrder: { value: {DRAW_ORDER_INDEX: 0, DRAW_ORDER_LIFETIME: 1, DRAW_ORDER_REVERSE_LIFETIME: 2, DRAW_ORDER_VIEW_DEPTH: 3 } }, 
		EmitFlags: { value: {EMIT_FLAG_POSITION: 1, EMIT_FLAG_ROTATION_SCALE: 2, EMIT_FLAG_VELOCITY: 4, EMIT_FLAG_COLOR: 8, EMIT_FLAG_CUSTOM: 16 } }, 
		TransformAlign: { value: {TRANSFORM_ALIGN_DISABLED: 0, TRANSFORM_ALIGN_Z_BILLBOARD: 1, TRANSFORM_ALIGN_Y_TO_VELOCITY: 2, TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY: 3 } }
	});
	bind(godot.GPUParticlesAttractor3D, {});
	bind(godot.GPUParticlesAttractorBox3D, {});
	bind(godot.GPUParticlesAttractorSphere3D, {});
	bind(godot.GPUParticlesAttractorVectorField3D, {});
	bind(godot.GPUParticlesCollision3D, {});
	bind(godot.GPUParticlesCollisionBox3D, {});
	bind(godot.GPUParticlesCollisionHeightField3D, {
		Resolution: { value: {RESOLUTION_256: 0, RESOLUTION_512: 1, RESOLUTION_1024: 2, RESOLUTION_2048: 3, RESOLUTION_4096: 4, RESOLUTION_8192: 5, RESOLUTION_MAX: 6 } }, 
		UpdateMode: { value: {UPDATE_MODE_WHEN_MOVED: 0, UPDATE_MODE_ALWAYS: 1 } }
	});
	bind(godot.GPUParticlesCollisionSDF3D, {
		Resolution: { value: {RESOLUTION_16: 0, RESOLUTION_32: 1, RESOLUTION_64: 2, RESOLUTION_128: 3, RESOLUTION_256: 4, RESOLUTION_512: 5, RESOLUTION_MAX: 6 } }
	});
	bind(godot.GPUParticlesCollisionSphere3D, {});
	bind(godot.Generic6DOFJoint3D, {
		Param: { value: {PARAM_LINEAR_LOWER_LIMIT: 0, PARAM_LINEAR_UPPER_LIMIT: 1, PARAM_LINEAR_LIMIT_SOFTNESS: 2, PARAM_LINEAR_RESTITUTION: 3, PARAM_LINEAR_DAMPING: 4, PARAM_LINEAR_MOTOR_TARGET_VELOCITY: 5, PARAM_LINEAR_MOTOR_FORCE_LIMIT: 6, PARAM_LINEAR_SPRING_STIFFNESS: 7, PARAM_LINEAR_SPRING_DAMPING: 8, PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT: 9, PARAM_ANGULAR_LOWER_LIMIT: 10, PARAM_ANGULAR_UPPER_LIMIT: 11, PARAM_ANGULAR_LIMIT_SOFTNESS: 12, PARAM_ANGULAR_DAMPING: 13, PARAM_ANGULAR_RESTITUTION: 14, PARAM_ANGULAR_FORCE_LIMIT: 15, PARAM_ANGULAR_ERP: 16, PARAM_ANGULAR_MOTOR_TARGET_VELOCITY: 17, PARAM_ANGULAR_MOTOR_FORCE_LIMIT: 18, PARAM_ANGULAR_SPRING_STIFFNESS: 19, PARAM_ANGULAR_SPRING_DAMPING: 20, PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT: 21, PARAM_MAX: 22 } }, 
		Flag: { value: {FLAG_ENABLE_LINEAR_LIMIT: 0, FLAG_ENABLE_ANGULAR_LIMIT: 1, FLAG_ENABLE_LINEAR_SPRING: 3, FLAG_ENABLE_ANGULAR_SPRING: 2, FLAG_ENABLE_MOTOR: 4, FLAG_ENABLE_LINEAR_MOTOR: 5, FLAG_MAX: 6 } }
	});
	bind(godot.Geometry2D, {
		PolyBooleanOperation: { value: {OPERATION_UNION: 0, OPERATION_DIFFERENCE: 1, OPERATION_INTERSECTION: 2, OPERATION_XOR: 3 } }, 
		PolyJoinType: { value: {JOIN_SQUARE: 0, JOIN_ROUND: 1, JOIN_MITER: 2 } }, 
		PolyEndType: { value: {END_POLYGON: 0, END_JOINED: 1, END_BUTT: 2, END_SQUARE: 3, END_ROUND: 4 } }
	});
	bind(godot.Geometry3D, {});
	bind(godot.GeometryInstance3D, {
		ShadowCastingSetting: { value: {SHADOW_CASTING_SETTING_OFF: 0, SHADOW_CASTING_SETTING_ON: 1, SHADOW_CASTING_SETTING_DOUBLE_SIDED: 2, SHADOW_CASTING_SETTING_SHADOWS_ONLY: 3 } }, 
		GIMode: { value: {GI_MODE_DISABLED: 0, GI_MODE_STATIC: 1, GI_MODE_DYNAMIC: 2 } }, 
		LightmapScale: { value: {LIGHTMAP_SCALE_1X: 0, LIGHTMAP_SCALE_2X: 1, LIGHTMAP_SCALE_4X: 2, LIGHTMAP_SCALE_8X: 3, LIGHTMAP_SCALE_MAX: 4 } }, 
		VisibilityRangeFadeMode: { value: {VISIBILITY_RANGE_FADE_DISABLED: 0, VISIBILITY_RANGE_FADE_SELF: 1, VISIBILITY_RANGE_FADE_DEPENDENCIES: 2 } }
	});
	bind(godot.Gradient, {
		InterpolationMode: { value: {GRADIENT_INTERPOLATE_LINEAR: 0, GRADIENT_INTERPOLATE_CONSTANT: 1, GRADIENT_INTERPOLATE_CUBIC: 2 } }, 
		ColorSpace: { value: {GRADIENT_COLOR_SPACE_SRGB: 0, GRADIENT_COLOR_SPACE_LINEAR_SRGB: 1, GRADIENT_COLOR_SPACE_OKLAB: 2 } }
	});
	bind(godot.GradientTexture1D, {});
	bind(godot.GradientTexture2D, {
		Fill: { value: {FILL_LINEAR: 0, FILL_RADIAL: 1, FILL_SQUARE: 2 } }, 
		Repeat: { value: {REPEAT_NONE: 0, REPEAT: 1, REPEAT_MIRROR: 2 } }
	});
	bind(godot.GraphEdit, {
		PanningScheme: { value: {SCROLL_ZOOMS: 0, SCROLL_PANS: 1 } }
	});
	bind(godot.GraphNode, {
		Overlay: { value: {OVERLAY_DISABLED: 0, OVERLAY_BREAKPOINT: 1, OVERLAY_POSITION: 2 } }
	});
	bind(godot.GridContainer, {});
	bind(godot.GridMap, {});
	bind(godot.GrooveJoint2D, {});
	bind(godot.HBoxContainer, {});
	bind(godot.HFlowContainer, {});
	bind(godot.HMACContext, {});
	bind(godot.HScrollBar, {});
	bind(godot.HSeparator, {});
	bind(godot.HSlider, {});
	bind(godot.HSplitContainer, {});
	bind(godot.HTTPClient, {
		Method: { value: {METHOD_GET: 0, METHOD_HEAD: 1, METHOD_POST: 2, METHOD_PUT: 3, METHOD_DELETE: 4, METHOD_OPTIONS: 5, METHOD_TRACE: 6, METHOD_CONNECT: 7, METHOD_PATCH: 8, METHOD_MAX: 9 } }, 
		Status: { value: {STATUS_DISCONNECTED: 0, STATUS_RESOLVING: 1, STATUS_CANT_RESOLVE: 2, STATUS_CONNECTING: 3, STATUS_CANT_CONNECT: 4, STATUS_CONNECTED: 5, STATUS_REQUESTING: 6, STATUS_BODY: 7, STATUS_CONNECTION_ERROR: 8, STATUS_TLS_HANDSHAKE_ERROR: 9 } }, 
		ResponseCode: { value: {RESPONSE_CONTINUE: 100, RESPONSE_SWITCHING_PROTOCOLS: 101, RESPONSE_PROCESSING: 102, RESPONSE_OK: 200, RESPONSE_CREATED: 201, RESPONSE_ACCEPTED: 202, RESPONSE_NON_AUTHORITATIVE_INFORMATION: 203, RESPONSE_NO_CONTENT: 204, RESPONSE_RESET_CONTENT: 205, RESPONSE_PARTIAL_CONTENT: 206, RESPONSE_MULTI_STATUS: 207, RESPONSE_ALREADY_REPORTED: 208, RESPONSE_IM_USED: 226, RESPONSE_MULTIPLE_CHOICES: 300, RESPONSE_MOVED_PERMANENTLY: 301, RESPONSE_FOUND: 302, RESPONSE_SEE_OTHER: 303, RESPONSE_NOT_MODIFIED: 304, RESPONSE_USE_PROXY: 305, RESPONSE_SWITCH_PROXY: 306, RESPONSE_TEMPORARY_REDIRECT: 307, RESPONSE_PERMANENT_REDIRECT: 308, RESPONSE_BAD_REQUEST: 400, RESPONSE_UNAUTHORIZED: 401, RESPONSE_PAYMENT_REQUIRED: 402, RESPONSE_FORBIDDEN: 403, RESPONSE_NOT_FOUND: 404, RESPONSE_METHOD_NOT_ALLOWED: 405, RESPONSE_NOT_ACCEPTABLE: 406, RESPONSE_PROXY_AUTHENTICATION_REQUIRED: 407, RESPONSE_REQUEST_TIMEOUT: 408, RESPONSE_CONFLICT: 409, RESPONSE_GONE: 410, RESPONSE_LENGTH_REQUIRED: 411, RESPONSE_PRECONDITION_FAILED: 412, RESPONSE_REQUEST_ENTITY_TOO_LARGE: 413, RESPONSE_REQUEST_URI_TOO_LONG: 414, RESPONSE_UNSUPPORTED_MEDIA_TYPE: 415, RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE: 416, RESPONSE_EXPECTATION_FAILED: 417, RESPONSE_IM_A_TEAPOT: 418, RESPONSE_MISDIRECTED_REQUEST: 421, RESPONSE_UNPROCESSABLE_ENTITY: 422, RESPONSE_LOCKED: 423, RESPONSE_FAILED_DEPENDENCY: 424, RESPONSE_UPGRADE_REQUIRED: 426, RESPONSE_PRECONDITION_REQUIRED: 428, RESPONSE_TOO_MANY_REQUESTS: 429, RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE: 431, RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS: 451, RESPONSE_INTERNAL_SERVER_ERROR: 500, RESPONSE_NOT_IMPLEMENTED: 501, RESPONSE_BAD_GATEWAY: 502, RESPONSE_SERVICE_UNAVAILABLE: 503, RESPONSE_GATEWAY_TIMEOUT: 504, RESPONSE_HTTP_VERSION_NOT_SUPPORTED: 505, RESPONSE_VARIANT_ALSO_NEGOTIATES: 506, RESPONSE_INSUFFICIENT_STORAGE: 507, RESPONSE_LOOP_DETECTED: 508, RESPONSE_NOT_EXTENDED: 510, RESPONSE_NETWORK_AUTH_REQUIRED: 511 } }
	});
	bind(godot.HTTPRequest, {
		Result: { value: {RESULT_SUCCESS: 0, RESULT_CHUNKED_BODY_SIZE_MISMATCH: 1, RESULT_CANT_CONNECT: 2, RESULT_CANT_RESOLVE: 3, RESULT_CONNECTION_ERROR: 4, RESULT_TLS_HANDSHAKE_ERROR: 5, RESULT_NO_RESPONSE: 6, RESULT_BODY_SIZE_LIMIT_EXCEEDED: 7, RESULT_BODY_DECOMPRESS_FAILED: 8, RESULT_REQUEST_FAILED: 9, RESULT_DOWNLOAD_FILE_CANT_OPEN: 10, RESULT_DOWNLOAD_FILE_WRITE_ERROR: 11, RESULT_REDIRECT_LIMIT_REACHED: 12, RESULT_TIMEOUT: 13 } }
	});
	bind(godot.HashingContext, {
		HashType: { value: {HASH_MD5: 0, HASH_SHA1: 1, HASH_SHA256: 2 } }
	});
	bind(godot.HeightMapShape3D, {});
	bind(godot.HingeJoint3D, {
		Param: { value: {PARAM_BIAS: 0, PARAM_LIMIT_UPPER: 1, PARAM_LIMIT_LOWER: 2, PARAM_LIMIT_BIAS: 3, PARAM_LIMIT_SOFTNESS: 4, PARAM_LIMIT_RELAXATION: 5, PARAM_MOTOR_TARGET_VELOCITY: 6, PARAM_MOTOR_MAX_IMPULSE: 7, PARAM_MAX: 8 } }, 
		Flag: { value: {FLAG_USE_LIMIT: 0, FLAG_ENABLE_MOTOR: 1, FLAG_MAX: 2 } }
	});
	bind(godot.IP, {
		ResolverStatus: { value: {RESOLVER_STATUS_NONE: 0, RESOLVER_STATUS_WAITING: 1, RESOLVER_STATUS_DONE: 2, RESOLVER_STATUS_ERROR: 3 } }, 
		Type: { value: {TYPE_NONE: 0, TYPE_IPV4: 1, TYPE_IPV6: 2, TYPE_ANY: 3 } }
	});
	bind(godot.Image, {
		Format: { value: {FORMAT_L8: 0, FORMAT_LA8: 1, FORMAT_R8: 2, FORMAT_RG8: 3, FORMAT_RGB8: 4, FORMAT_RGBA8: 5, FORMAT_RGBA4444: 6, FORMAT_RGB565: 7, FORMAT_RF: 8, FORMAT_RGF: 9, FORMAT_RGBF: 10, FORMAT_RGBAF: 11, FORMAT_RH: 12, FORMAT_RGH: 13, FORMAT_RGBH: 14, FORMAT_RGBAH: 15, FORMAT_RGBE9995: 16, FORMAT_DXT1: 17, FORMAT_DXT3: 18, FORMAT_DXT5: 19, FORMAT_RGTC_R: 20, FORMAT_RGTC_RG: 21, FORMAT_BPTC_RGBA: 22, FORMAT_BPTC_RGBF: 23, FORMAT_BPTC_RGBFU: 24, FORMAT_ETC: 25, FORMAT_ETC2_R11: 26, FORMAT_ETC2_R11S: 27, FORMAT_ETC2_RG11: 28, FORMAT_ETC2_RG11S: 29, FORMAT_ETC2_RGB8: 30, FORMAT_ETC2_RGBA8: 31, FORMAT_ETC2_RGB8A1: 32, FORMAT_ETC2_RA_AS_RG: 33, FORMAT_DXT5_RA_AS_RG: 34, FORMAT_ASTC_4x4: 35, FORMAT_ASTC_4x4_HDR: 36, FORMAT_ASTC_8x8: 37, FORMAT_ASTC_8x8_HDR: 38, FORMAT_MAX: 39 } }, 
		Interpolation: { value: {INTERPOLATE_NEAREST: 0, INTERPOLATE_BILINEAR: 1, INTERPOLATE_CUBIC: 2, INTERPOLATE_TRILINEAR: 3, INTERPOLATE_LANCZOS: 4 } }, 
		AlphaMode: { value: {ALPHA_NONE: 0, ALPHA_BIT: 1, ALPHA_BLEND: 2 } }, 
		CompressMode: { value: {COMPRESS_S3TC: 0, COMPRESS_ETC: 1, COMPRESS_ETC2: 2, COMPRESS_BPTC: 3, COMPRESS_ASTC: 4, COMPRESS_MAX: 5 } }, 
		UsedChannels: { value: {USED_CHANNELS_L: 0, USED_CHANNELS_LA: 1, USED_CHANNELS_R: 2, USED_CHANNELS_RG: 3, USED_CHANNELS_RGB: 4, USED_CHANNELS_RGBA: 5 } }, 
		CompressSource: { value: {COMPRESS_SOURCE_GENERIC: 0, COMPRESS_SOURCE_SRGB: 1, COMPRESS_SOURCE_NORMAL: 2 } }, 
		ASTCFormat: { value: {ASTC_FORMAT_4x4: 0, ASTC_FORMAT_8x8: 1 } }
	});
	bind(godot.ImageFormatLoader, {
		LoaderFlags: { value: {FLAG_NONE: 0, FLAG_FORCE_LINEAR: 1, FLAG_CONVERT_COLORS: 2 } }
	});
	bind(godot.ImageFormatLoaderExtension, {});
	bind(godot.ImageTexture, {});
	bind(godot.ImageTexture3D, {});
	bind(godot.ImageTextureLayered, {});
	bind(godot.ImmediateMesh, {});
	bind(godot.ImporterMesh, {});
	bind(godot.ImporterMeshInstance3D, {});
	bind(godot.Input, {
		MouseMode: { value: {MOUSE_MODE_VISIBLE: 0, MOUSE_MODE_HIDDEN: 1, MOUSE_MODE_CAPTURED: 2, MOUSE_MODE_CONFINED: 3, MOUSE_MODE_CONFINED_HIDDEN: 4 } }, 
		CursorShape: { value: {CURSOR_ARROW: 0, CURSOR_IBEAM: 1, CURSOR_POINTING_HAND: 2, CURSOR_CROSS: 3, CURSOR_WAIT: 4, CURSOR_BUSY: 5, CURSOR_DRAG: 6, CURSOR_CAN_DROP: 7, CURSOR_FORBIDDEN: 8, CURSOR_VSIZE: 9, CURSOR_HSIZE: 10, CURSOR_BDIAGSIZE: 11, CURSOR_FDIAGSIZE: 12, CURSOR_MOVE: 13, CURSOR_VSPLIT: 14, CURSOR_HSPLIT: 15, CURSOR_HELP: 16 } }
	});
	bind(godot.InputEvent, {});
	bind(godot.InputEventAction, {});
	bind(godot.InputEventFromWindow, {});
	bind(godot.InputEventGesture, {});
	bind(godot.InputEventJoypadButton, {});
	bind(godot.InputEventJoypadMotion, {});
	bind(godot.InputEventKey, {});
	bind(godot.InputEventMIDI, {});
	bind(godot.InputEventMagnifyGesture, {});
	bind(godot.InputEventMouse, {});
	bind(godot.InputEventMouseButton, {});
	bind(godot.InputEventMouseMotion, {});
	bind(godot.InputEventPanGesture, {});
	bind(godot.InputEventScreenDrag, {});
	bind(godot.InputEventScreenTouch, {});
	bind(godot.InputEventShortcut, {});
	bind(godot.InputEventWithModifiers, {});
	bind(godot.InputMap, {});
	bind(godot.InstancePlaceholder, {});
	bind(godot.IntervalTweener, {});
	bind(godot.ItemList, {
		IconMode: { value: {ICON_MODE_TOP: 0, ICON_MODE_LEFT: 1 } }, 
		SelectMode: { value: {SELECT_SINGLE: 0, SELECT_MULTI: 1 } }
	});
	bind(godot.JNISingleton, {});
	bind(godot.JSON, {});
	bind(godot.JSONRPC, {
		ErrorCode: { value: {PARSE_ERROR: -32700, INVALID_REQUEST: -32600, METHOD_NOT_FOUND: -32601, INVALID_PARAMS: -32602, INTERNAL_ERROR: -32603 } }
	});
	bind(godot.JavaClass, {});
	bind(godot.JavaClassWrapper, {});
	bind(godot.JavaScript, {});
	bind(godot.JavaScriptBridge, {});
	bind(godot.JavaScriptModule, {});
	bind(godot.JavaScriptObject, {});
	bind(godot.Joint2D, {});
	bind(godot.Joint3D, {});
	bind(godot.KinematicCollision2D, {});
	bind(godot.KinematicCollision3D, {});
	bind(godot.Label, {});
	bind(godot.Label3D, {
		DrawFlags: { value: {FLAG_SHADED: 0, FLAG_DOUBLE_SIDED: 1, FLAG_DISABLE_DEPTH_TEST: 2, FLAG_FIXED_SIZE: 3, FLAG_MAX: 4 } }, 
		AlphaCutMode: { value: {ALPHA_CUT_DISABLED: 0, ALPHA_CUT_DISCARD: 1, ALPHA_CUT_OPAQUE_PREPASS: 2, ALPHA_CUT_HASH: 3 } }
	});
	bind(godot.LabelSettings, {});
	bind(godot.Light2D, {
		ShadowFilter: { value: {SHADOW_FILTER_NONE: 0, SHADOW_FILTER_PCF5: 1, SHADOW_FILTER_PCF13: 2 } }, 
		BlendMode: { value: {BLEND_MODE_ADD: 0, BLEND_MODE_SUB: 1, BLEND_MODE_MIX: 2 } }
	});
	bind(godot.Light3D, {
		Param: { value: {PARAM_ENERGY: 0, PARAM_INDIRECT_ENERGY: 1, PARAM_VOLUMETRIC_FOG_ENERGY: 2, PARAM_SPECULAR: 3, PARAM_RANGE: 4, PARAM_SIZE: 5, PARAM_ATTENUATION: 6, PARAM_SPOT_ANGLE: 7, PARAM_SPOT_ATTENUATION: 8, PARAM_SHADOW_MAX_DISTANCE: 9, PARAM_SHADOW_SPLIT_1_OFFSET: 10, PARAM_SHADOW_SPLIT_2_OFFSET: 11, PARAM_SHADOW_SPLIT_3_OFFSET: 12, PARAM_SHADOW_FADE_START: 13, PARAM_SHADOW_NORMAL_BIAS: 14, PARAM_SHADOW_BIAS: 15, PARAM_SHADOW_PANCAKE_SIZE: 16, PARAM_SHADOW_OPACITY: 17, PARAM_SHADOW_BLUR: 18, PARAM_TRANSMITTANCE_BIAS: 19, PARAM_INTENSITY: 20, PARAM_MAX: 21 } }, 
		BakeMode: { value: {BAKE_DISABLED: 0, BAKE_STATIC: 1, BAKE_DYNAMIC: 2 } }
	});
	bind(godot.LightOccluder2D, {});
	bind(godot.LightmapGI, {
		BakeQuality: { value: {BAKE_QUALITY_LOW: 0, BAKE_QUALITY_MEDIUM: 1, BAKE_QUALITY_HIGH: 2, BAKE_QUALITY_ULTRA: 3 } }, 
		GenerateProbes: { value: {GENERATE_PROBES_DISABLED: 0, GENERATE_PROBES_SUBDIV_4: 1, GENERATE_PROBES_SUBDIV_8: 2, GENERATE_PROBES_SUBDIV_16: 3, GENERATE_PROBES_SUBDIV_32: 4 } }, 
		BakeError: { value: {BAKE_ERROR_OK: 0, BAKE_ERROR_NO_SCENE_ROOT: 1, BAKE_ERROR_FOREIGN_DATA: 2, BAKE_ERROR_NO_LIGHTMAPPER: 3, BAKE_ERROR_NO_SAVE_PATH: 4, BAKE_ERROR_NO_MESHES: 5, BAKE_ERROR_MESHES_INVALID: 6, BAKE_ERROR_CANT_CREATE_IMAGE: 7, BAKE_ERROR_USER_ABORTED: 8, BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL: 9 } }, 
		EnvironmentMode: { value: {ENVIRONMENT_MODE_DISABLED: 0, ENVIRONMENT_MODE_SCENE: 1, ENVIRONMENT_MODE_CUSTOM_SKY: 2, ENVIRONMENT_MODE_CUSTOM_COLOR: 3 } }
	});
	bind(godot.LightmapGIData, {});
	bind(godot.LightmapProbe, {});
	bind(godot.Lightmapper, {});
	bind(godot.LightmapperRD, {});
	bind(godot.Line2D, {
		LineJointMode: { value: {LINE_JOINT_SHARP: 0, LINE_JOINT_BEVEL: 1, LINE_JOINT_ROUND: 2 } }, 
		LineCapMode: { value: {LINE_CAP_NONE: 0, LINE_CAP_BOX: 1, LINE_CAP_ROUND: 2 } }, 
		LineTextureMode: { value: {LINE_TEXTURE_NONE: 0, LINE_TEXTURE_TILE: 1, LINE_TEXTURE_STRETCH: 2 } }
	});
	bind(godot.LineEdit, {
		MenuItems: { value: {MENU_CUT: 0, MENU_COPY: 1, MENU_PASTE: 2, MENU_CLEAR: 3, MENU_SELECT_ALL: 4, MENU_UNDO: 5, MENU_REDO: 6, MENU_SUBMENU_TEXT_DIR: 7, MENU_DIR_INHERITED: 8, MENU_DIR_AUTO: 9, MENU_DIR_LTR: 10, MENU_DIR_RTL: 11, MENU_DISPLAY_UCC: 12, MENU_SUBMENU_INSERT_UCC: 13, MENU_INSERT_LRM: 14, MENU_INSERT_RLM: 15, MENU_INSERT_LRE: 16, MENU_INSERT_RLE: 17, MENU_INSERT_LRO: 18, MENU_INSERT_RLO: 19, MENU_INSERT_PDF: 20, MENU_INSERT_ALM: 21, MENU_INSERT_LRI: 22, MENU_INSERT_RLI: 23, MENU_INSERT_FSI: 24, MENU_INSERT_PDI: 25, MENU_INSERT_ZWJ: 26, MENU_INSERT_ZWNJ: 27, MENU_INSERT_WJ: 28, MENU_INSERT_SHY: 29, MENU_MAX: 30 } }, 
		VirtualKeyboardType: { value: {KEYBOARD_TYPE_DEFAULT: 0, KEYBOARD_TYPE_MULTILINE: 1, KEYBOARD_TYPE_NUMBER: 2, KEYBOARD_TYPE_NUMBER_DECIMAL: 3, KEYBOARD_TYPE_PHONE: 4, KEYBOARD_TYPE_EMAIL_ADDRESS: 5, KEYBOARD_TYPE_PASSWORD: 6, KEYBOARD_TYPE_URL: 7 } }
	});
	bind(godot.LinkButton, {
		UnderlineMode: { value: {UNDERLINE_MODE_ALWAYS: 0, UNDERLINE_MODE_ON_HOVER: 1, UNDERLINE_MODE_NEVER: 2 } }
	});
	bind(godot.MainLoop, {});
	bind(godot.MarginContainer, {});
	bind(godot.Marker2D, {});
	bind(godot.Marker3D, {});
	bind(godot.Marshalls, {});
	bind(godot.Material, {});
	bind(godot.MenuBar, {});
	bind(godot.MenuButton, {});
	bind(godot.Mesh, {
		PrimitiveType: { value: {PRIMITIVE_POINTS: 0, PRIMITIVE_LINES: 1, PRIMITIVE_LINE_STRIP: 2, PRIMITIVE_TRIANGLES: 3, PRIMITIVE_TRIANGLE_STRIP: 4 } }, 
		ArrayType: { value: {ARRAY_VERTEX: 0, ARRAY_NORMAL: 1, ARRAY_TANGENT: 2, ARRAY_COLOR: 3, ARRAY_TEX_UV: 4, ARRAY_TEX_UV2: 5, ARRAY_CUSTOM0: 6, ARRAY_CUSTOM1: 7, ARRAY_CUSTOM2: 8, ARRAY_CUSTOM3: 9, ARRAY_BONES: 10, ARRAY_WEIGHTS: 11, ARRAY_INDEX: 12, ARRAY_MAX: 13 } }, 
		ArrayCustomFormat: { value: {ARRAY_CUSTOM_RGBA8_UNORM: 0, ARRAY_CUSTOM_RGBA8_SNORM: 1, ARRAY_CUSTOM_RG_HALF: 2, ARRAY_CUSTOM_RGBA_HALF: 3, ARRAY_CUSTOM_R_FLOAT: 4, ARRAY_CUSTOM_RG_FLOAT: 5, ARRAY_CUSTOM_RGB_FLOAT: 6, ARRAY_CUSTOM_RGBA_FLOAT: 7, ARRAY_CUSTOM_MAX: 8 } }, 
		ArrayFormat: { value: {ARRAY_FORMAT_VERTEX: 1, ARRAY_FORMAT_NORMAL: 2, ARRAY_FORMAT_TANGENT: 4, ARRAY_FORMAT_COLOR: 8, ARRAY_FORMAT_TEX_UV: 16, ARRAY_FORMAT_TEX_UV2: 32, ARRAY_FORMAT_CUSTOM0: 64, ARRAY_FORMAT_CUSTOM1: 128, ARRAY_FORMAT_CUSTOM2: 256, ARRAY_FORMAT_CUSTOM3: 512, ARRAY_FORMAT_BONES: 1024, ARRAY_FORMAT_WEIGHTS: 2048, ARRAY_FORMAT_INDEX: 4096, ARRAY_FORMAT_BLEND_SHAPE_MASK: 7, ARRAY_FORMAT_CUSTOM_BASE: 13, ARRAY_FORMAT_CUSTOM_BITS: 3, ARRAY_FORMAT_CUSTOM0_SHIFT: 13, ARRAY_FORMAT_CUSTOM1_SHIFT: 16, ARRAY_FORMAT_CUSTOM2_SHIFT: 19, ARRAY_FORMAT_CUSTOM3_SHIFT: 22, ARRAY_FORMAT_CUSTOM_MASK: 7, ARRAY_COMPRESS_FLAGS_BASE: 25, ARRAY_FLAG_USE_2D_VERTICES: 33554432, ARRAY_FLAG_USE_DYNAMIC_UPDATE: 67108864, ARRAY_FLAG_USE_8_BONE_WEIGHTS: 134217728, ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY: 268435456 } }, 
		BlendShapeMode: { value: {BLEND_SHAPE_MODE_NORMALIZED: 0, BLEND_SHAPE_MODE_RELATIVE: 1 } }
	});
	bind(godot.MeshConvexDecompositionSettings, {
		Mode: { value: {CONVEX_DECOMPOSITION_MODE_VOXEL: 0, CONVEX_DECOMPOSITION_MODE_TETRAHEDRON: 1 } }
	});
	bind(godot.MeshDataTool, {});
	bind(godot.MeshInstance2D, {});
	bind(godot.MeshInstance3D, {});
	bind(godot.MeshLibrary, {});
	bind(godot.MeshTexture, {});
	bind(godot.MethodTweener, {});
	bind(godot.MissingNode, {});
	bind(godot.MissingResource, {});
	bind(godot.MobileVRInterface, {});
	bind(godot.MovieWriter, {});
	bind(godot.MultiMesh, {
		TransformFormat: { value: {TRANSFORM_2D: 0, TRANSFORM_3D: 1 } }
	});
	bind(godot.MultiMeshInstance2D, {});
	bind(godot.MultiMeshInstance3D, {});
	bind(godot.MultiplayerAPI, {
		RPCMode: { value: {RPC_MODE_DISABLED: 0, RPC_MODE_ANY_PEER: 1, RPC_MODE_AUTHORITY: 2 } }
	});
	bind(godot.MultiplayerAPIExtension, {});
	bind(godot.MultiplayerPeer, {
		ConnectionStatus: { value: {CONNECTION_DISCONNECTED: 0, CONNECTION_CONNECTING: 1, CONNECTION_CONNECTED: 2 } }, 
		TransferMode: { value: {TRANSFER_MODE_UNRELIABLE: 0, TRANSFER_MODE_UNRELIABLE_ORDERED: 1, TRANSFER_MODE_RELIABLE: 2 } }
	});
	bind(godot.MultiplayerPeerExtension, {});
	bind(godot.MultiplayerSpawner, {});
	bind(godot.MultiplayerSynchronizer, {
		VisibilityUpdateMode: { value: {VISIBILITY_PROCESS_IDLE: 0, VISIBILITY_PROCESS_PHYSICS: 1, VISIBILITY_PROCESS_NONE: 2 } }
	});
	bind(godot.NavigationAgent2D, {});
	bind(godot.NavigationAgent3D, {});
	bind(godot.NavigationLink2D, {});
	bind(godot.NavigationLink3D, {});
	bind(godot.NavigationMesh, {
		SamplePartitionType: { value: {SAMPLE_PARTITION_WATERSHED: 0, SAMPLE_PARTITION_MONOTONE: 1, SAMPLE_PARTITION_LAYERS: 2, SAMPLE_PARTITION_MAX: 3 } }, 
		ParsedGeometryType: { value: {PARSED_GEOMETRY_MESH_INSTANCES: 0, PARSED_GEOMETRY_STATIC_COLLIDERS: 1, PARSED_GEOMETRY_BOTH: 2, PARSED_GEOMETRY_MAX: 3 } }, 
		SourceGeometryMode: { value: {SOURCE_GEOMETRY_ROOT_NODE_CHILDREN: 0, SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN: 1, SOURCE_GEOMETRY_GROUPS_EXPLICIT: 2, SOURCE_GEOMETRY_MAX: 3 } }
	});
	bind(godot.NavigationMeshGenerator, {});
	bind(godot.NavigationMeshSourceGeometryData3D, {});
	bind(godot.NavigationObstacle2D, {});
	bind(godot.NavigationObstacle3D, {});
	bind(godot.NavigationPathQueryParameters2D, {
		PathfindingAlgorithm: { value: {PATHFINDING_ALGORITHM_ASTAR: 0 } }, 
		PathPostProcessing: { value: {PATH_POSTPROCESSING_CORRIDORFUNNEL: 0, PATH_POSTPROCESSING_EDGECENTERED: 1 } }, 
		PathMetadataFlags: { value: {PATH_METADATA_INCLUDE_NONE: 0, PATH_METADATA_INCLUDE_TYPES: 1, PATH_METADATA_INCLUDE_RIDS: 2, PATH_METADATA_INCLUDE_OWNERS: 4, PATH_METADATA_INCLUDE_ALL: 7 } }
	});
	bind(godot.NavigationPathQueryParameters3D, {
		PathfindingAlgorithm: { value: {PATHFINDING_ALGORITHM_ASTAR: 0 } }, 
		PathPostProcessing: { value: {PATH_POSTPROCESSING_CORRIDORFUNNEL: 0, PATH_POSTPROCESSING_EDGECENTERED: 1 } }, 
		PathMetadataFlags: { value: {PATH_METADATA_INCLUDE_NONE: 0, PATH_METADATA_INCLUDE_TYPES: 1, PATH_METADATA_INCLUDE_RIDS: 2, PATH_METADATA_INCLUDE_OWNERS: 4, PATH_METADATA_INCLUDE_ALL: 7 } }
	});
	bind(godot.NavigationPathQueryResult2D, {
		PathSegmentType: { value: {PATH_SEGMENT_TYPE_REGION: 0, PATH_SEGMENT_TYPE_LINK: 1 } }
	});
	bind(godot.NavigationPathQueryResult3D, {
		PathSegmentType: { value: {PATH_SEGMENT_TYPE_REGION: 0, PATH_SEGMENT_TYPE_LINK: 1 } }
	});
	bind(godot.NavigationPolygon, {});
	bind(godot.NavigationRegion2D, {});
	bind(godot.NavigationRegion3D, {});
	bind(godot.NavigationServer2D, {});
	bind(godot.NavigationServer3D, {
		ProcessInfo: { value: {INFO_ACTIVE_MAPS: 0, INFO_REGION_COUNT: 1, INFO_AGENT_COUNT: 2, INFO_LINK_COUNT: 3, INFO_POLYGON_COUNT: 4, INFO_EDGE_COUNT: 5, INFO_EDGE_MERGE_COUNT: 6, INFO_EDGE_CONNECTION_COUNT: 7, INFO_EDGE_FREE_COUNT: 8 } }
	});
	bind(godot.NinePatchRect, {
		AxisStretchMode: { value: {AXIS_STRETCH_MODE_STRETCH: 0, AXIS_STRETCH_MODE_TILE: 1, AXIS_STRETCH_MODE_TILE_FIT: 2 } }
	});
	bind(godot.Node, {
		ProcessMode: { value: {PROCESS_MODE_INHERIT: 0, PROCESS_MODE_PAUSABLE: 1, PROCESS_MODE_WHEN_PAUSED: 2, PROCESS_MODE_ALWAYS: 3, PROCESS_MODE_DISABLED: 4 } }, 
		ProcessThreadGroup: { value: {PROCESS_THREAD_GROUP_INHERIT: 0, PROCESS_THREAD_GROUP_MAIN_THREAD: 1, PROCESS_THREAD_GROUP_SUB_THREAD: 2 } }, 
		ProcessThreadMessages: { value: {FLAG_PROCESS_THREAD_MESSAGES: 1, FLAG_PROCESS_THREAD_MESSAGES_PHYSICS: 2, FLAG_PROCESS_THREAD_MESSAGES_ALL: 3 } }, 
		DuplicateFlags: { value: {DUPLICATE_SIGNALS: 1, DUPLICATE_GROUPS: 2, DUPLICATE_SCRIPTS: 4, DUPLICATE_USE_INSTANTIATION: 8 } }, 
		InternalMode: { value: {INTERNAL_MODE_DISABLED: 0, INTERNAL_MODE_FRONT: 1, INTERNAL_MODE_BACK: 2 } }
	});
	bind(godot.Node2D, {});
	bind(godot.Node3D, {
		RotationEditMode: { value: {ROTATION_EDIT_MODE_EULER: 0, ROTATION_EDIT_MODE_QUATERNION: 1, ROTATION_EDIT_MODE_BASIS: 2 } }
	});
	bind(godot.Node3DGizmo, {});
	bind(godot.Noise, {});
	bind(godot.NoiseTexture2D, {});
	bind(godot.NoiseTexture3D, {});
	bind(godot.ORMMaterial3D, {});
	bind(godot.OS, {
		RenderingDriver: { value: {RENDERING_DRIVER_VULKAN: 0, RENDERING_DRIVER_OPENGL3: 1 } }, 
		SystemDir: { value: {SYSTEM_DIR_DESKTOP: 0, SYSTEM_DIR_DCIM: 1, SYSTEM_DIR_DOCUMENTS: 2, SYSTEM_DIR_DOWNLOADS: 3, SYSTEM_DIR_MOVIES: 4, SYSTEM_DIR_MUSIC: 5, SYSTEM_DIR_PICTURES: 6, SYSTEM_DIR_RINGTONES: 7 } }
	});
	bind(godot.Object, {
		ConnectFlags: { value: {CONNECT_DEFERRED: 1, CONNECT_PERSIST: 2, CONNECT_ONE_SHOT: 4, CONNECT_REFERENCE_COUNTED: 8 } }
	});
	bind(godot.Occluder3D, {});
	bind(godot.OccluderInstance3D, {});
	bind(godot.OccluderPolygon2D, {
		CullMode: { value: {CULL_DISABLED: 0, CULL_CLOCKWISE: 1, CULL_COUNTER_CLOCKWISE: 2 } }
	});
	bind(godot.OfflineMultiplayerPeer, {});
	bind(godot.OggPacketSequence, {});
	bind(godot.OggPacketSequencePlayback, {});
	bind(godot.OmniLight3D, {
		ShadowMode: { value: {SHADOW_DUAL_PARABOLOID: 0, SHADOW_CUBE: 1 } }
	});
	bind(godot.OpenXRAction, {
		ActionType: { value: {OPENXR_ACTION_BOOL: 0, OPENXR_ACTION_FLOAT: 1, OPENXR_ACTION_VECTOR2: 2, OPENXR_ACTION_POSE: 3 } }
	});
	bind(godot.OpenXRActionMap, {});
	bind(godot.OpenXRActionSet, {});
	bind(godot.OpenXRHand, {
		Hands: { value: {HAND_LEFT: 0, HAND_RIGHT: 1, HAND_MAX: 2 } }, 
		MotionRange: { value: {MOTION_RANGE_UNOBSTRUCTED: 0, MOTION_RANGE_CONFORM_TO_CONTROLLER: 1, MOTION_RANGE_MAX: 2 } }
	});
	bind(godot.OpenXRIPBinding, {});
	bind(godot.OpenXRInteractionProfile, {});
	bind(godot.OpenXRInteractionProfileMetadata, {});
	bind(godot.OpenXRInterface, {});
	bind(godot.OptimizedTranslation, {});
	bind(godot.OptionButton, {});
	bind(godot.PCKPacker, {});
	bind(godot.PackedDataContainer, {});
	bind(godot.PackedDataContainerRef, {});
	bind(godot.PackedScene, {
		GenEditState: { value: {GEN_EDIT_STATE_DISABLED: 0, GEN_EDIT_STATE_INSTANCE: 1, GEN_EDIT_STATE_MAIN: 2, GEN_EDIT_STATE_MAIN_INHERITED: 3 } }
	});
	bind(godot.PacketPeer, {});
	bind(godot.PacketPeerDTLS, {
		Status: { value: {STATUS_DISCONNECTED: 0, STATUS_HANDSHAKING: 1, STATUS_CONNECTED: 2, STATUS_ERROR: 3, STATUS_ERROR_HOSTNAME_MISMATCH: 4 } }
	});
	bind(godot.PacketPeerExtension, {});
	bind(godot.PacketPeerStream, {});
	bind(godot.PacketPeerUDP, {});
	bind(godot.Panel, {});
	bind(godot.PanelContainer, {});
	bind(godot.PanoramaSkyMaterial, {});
	bind(godot.ParallaxBackground, {});
	bind(godot.ParallaxLayer, {});
	bind(godot.ParticleProcessMaterial, {
		Parameter: { value: {PARAM_INITIAL_LINEAR_VELOCITY: 0, PARAM_ANGULAR_VELOCITY: 1, PARAM_ORBIT_VELOCITY: 2, PARAM_LINEAR_ACCEL: 3, PARAM_RADIAL_ACCEL: 4, PARAM_TANGENTIAL_ACCEL: 5, PARAM_DAMPING: 6, PARAM_ANGLE: 7, PARAM_SCALE: 8, PARAM_HUE_VARIATION: 9, PARAM_ANIM_SPEED: 10, PARAM_ANIM_OFFSET: 11, PARAM_MAX: 15, PARAM_TURB_VEL_INFLUENCE: 13, PARAM_TURB_INIT_DISPLACEMENT: 14, PARAM_TURB_INFLUENCE_OVER_LIFE: 12 } }, 
		ParticleFlags: { value: {PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY: 0, PARTICLE_FLAG_ROTATE_Y: 1, PARTICLE_FLAG_DISABLE_Z: 2, PARTICLE_FLAG_MAX: 3 } }, 
		EmissionShape: { value: {EMISSION_SHAPE_POINT: 0, EMISSION_SHAPE_SPHERE: 1, EMISSION_SHAPE_SPHERE_SURFACE: 2, EMISSION_SHAPE_BOX: 3, EMISSION_SHAPE_POINTS: 4, EMISSION_SHAPE_DIRECTED_POINTS: 5, EMISSION_SHAPE_RING: 6, EMISSION_SHAPE_MAX: 7 } }, 
		SubEmitterMode: { value: {SUB_EMITTER_DISABLED: 0, SUB_EMITTER_CONSTANT: 1, SUB_EMITTER_AT_END: 2, SUB_EMITTER_AT_COLLISION: 3, SUB_EMITTER_MAX: 4 } }, 
		CollisionMode: { value: {COLLISION_DISABLED: 0, COLLISION_RIGID: 1, COLLISION_HIDE_ON_CONTACT: 2, COLLISION_MAX: 3 } }
	});
	bind(godot.Path2D, {});
	bind(godot.Path3D, {});
	bind(godot.PathFollow2D, {});
	bind(godot.PathFollow3D, {
		RotationMode: { value: {ROTATION_NONE: 0, ROTATION_Y: 1, ROTATION_XY: 2, ROTATION_XYZ: 3, ROTATION_ORIENTED: 4 } }
	});
	bind(godot.Performance, {
		Monitor: { value: {TIME_FPS: 0, TIME_PROCESS: 1, TIME_PHYSICS_PROCESS: 2, TIME_NAVIGATION_PROCESS: 3, MEMORY_STATIC: 4, MEMORY_STATIC_MAX: 5, MEMORY_MESSAGE_BUFFER_MAX: 6, OBJECT_COUNT: 7, OBJECT_RESOURCE_COUNT: 8, OBJECT_NODE_COUNT: 9, OBJECT_ORPHAN_NODE_COUNT: 10, RENDER_TOTAL_OBJECTS_IN_FRAME: 11, RENDER_TOTAL_PRIMITIVES_IN_FRAME: 12, RENDER_TOTAL_DRAW_CALLS_IN_FRAME: 13, RENDER_VIDEO_MEM_USED: 14, RENDER_TEXTURE_MEM_USED: 15, RENDER_BUFFER_MEM_USED: 16, PHYSICS_2D_ACTIVE_OBJECTS: 17, PHYSICS_2D_COLLISION_PAIRS: 18, PHYSICS_2D_ISLAND_COUNT: 19, PHYSICS_3D_ACTIVE_OBJECTS: 20, PHYSICS_3D_COLLISION_PAIRS: 21, PHYSICS_3D_ISLAND_COUNT: 22, AUDIO_OUTPUT_LATENCY: 23, NAVIGATION_ACTIVE_MAPS: 24, NAVIGATION_REGION_COUNT: 25, NAVIGATION_AGENT_COUNT: 26, NAVIGATION_LINK_COUNT: 27, NAVIGATION_POLYGON_COUNT: 28, NAVIGATION_EDGE_COUNT: 29, NAVIGATION_EDGE_MERGE_COUNT: 30, NAVIGATION_EDGE_CONNECTION_COUNT: 31, NAVIGATION_EDGE_FREE_COUNT: 32, MONITOR_MAX: 33 } }
	});
	bind(godot.PhysicalBone2D, {});
	bind(godot.PhysicalBone3D, {
		DampMode: { value: {DAMP_MODE_COMBINE: 0, DAMP_MODE_REPLACE: 1 } }, 
		JointType: { value: {JOINT_TYPE_NONE: 0, JOINT_TYPE_PIN: 1, JOINT_TYPE_CONE: 2, JOINT_TYPE_HINGE: 3, JOINT_TYPE_SLIDER: 4, JOINT_TYPE_6DOF: 5 } }
	});
	bind(godot.PhysicalSkyMaterial, {});
	bind(godot.PhysicsBody2D, {});
	bind(godot.PhysicsBody3D, {});
	bind(godot.PhysicsDirectBodyState2D, {});
	bind(godot.PhysicsDirectBodyState2DExtension, {});
	bind(godot.PhysicsDirectBodyState3D, {});
	bind(godot.PhysicsDirectBodyState3DExtension, {});
	bind(godot.PhysicsDirectSpaceState2D, {});
	bind(godot.PhysicsDirectSpaceState2DExtension, {});
	bind(godot.PhysicsDirectSpaceState3D, {});
	bind(godot.PhysicsDirectSpaceState3DExtension, {});
	bind(godot.PhysicsMaterial, {});
	bind(godot.PhysicsPointQueryParameters2D, {});
	bind(godot.PhysicsPointQueryParameters3D, {});
	bind(godot.PhysicsRayQueryParameters2D, {});
	bind(godot.PhysicsRayQueryParameters3D, {});
	bind(godot.PhysicsServer2D, {
		SpaceParameter: { value: {SPACE_PARAM_CONTACT_RECYCLE_RADIUS: 0, SPACE_PARAM_CONTACT_MAX_SEPARATION: 1, SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION: 2, SPACE_PARAM_CONTACT_DEFAULT_BIAS: 3, SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD: 4, SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD: 5, SPACE_PARAM_BODY_TIME_TO_SLEEP: 6, SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS: 7, SPACE_PARAM_SOLVER_ITERATIONS: 8 } }, 
		ShapeType: { value: {SHAPE_WORLD_BOUNDARY: 0, SHAPE_SEPARATION_RAY: 1, SHAPE_SEGMENT: 2, SHAPE_CIRCLE: 3, SHAPE_RECTANGLE: 4, SHAPE_CAPSULE: 5, SHAPE_CONVEX_POLYGON: 6, SHAPE_CONCAVE_POLYGON: 7, SHAPE_CUSTOM: 8 } }, 
		AreaParameter: { value: {AREA_PARAM_GRAVITY_OVERRIDE_MODE: 0, AREA_PARAM_GRAVITY: 1, AREA_PARAM_GRAVITY_VECTOR: 2, AREA_PARAM_GRAVITY_IS_POINT: 3, AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE: 4, AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE: 5, AREA_PARAM_LINEAR_DAMP: 6, AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE: 7, AREA_PARAM_ANGULAR_DAMP: 8, AREA_PARAM_PRIORITY: 9 } }, 
		AreaSpaceOverrideMode: { value: {AREA_SPACE_OVERRIDE_DISABLED: 0, AREA_SPACE_OVERRIDE_COMBINE: 1, AREA_SPACE_OVERRIDE_COMBINE_REPLACE: 2, AREA_SPACE_OVERRIDE_REPLACE: 3, AREA_SPACE_OVERRIDE_REPLACE_COMBINE: 4 } }, 
		BodyMode: { value: {BODY_MODE_STATIC: 0, BODY_MODE_KINEMATIC: 1, BODY_MODE_RIGID: 2, BODY_MODE_RIGID_LINEAR: 3 } }, 
		BodyParameter: { value: {BODY_PARAM_BOUNCE: 0, BODY_PARAM_FRICTION: 1, BODY_PARAM_MASS: 2, BODY_PARAM_INERTIA: 3, BODY_PARAM_CENTER_OF_MASS: 4, BODY_PARAM_GRAVITY_SCALE: 5, BODY_PARAM_LINEAR_DAMP_MODE: 6, BODY_PARAM_ANGULAR_DAMP_MODE: 7, BODY_PARAM_LINEAR_DAMP: 8, BODY_PARAM_ANGULAR_DAMP: 9, BODY_PARAM_MAX: 10 } }, 
		BodyDampMode: { value: {BODY_DAMP_MODE_COMBINE: 0, BODY_DAMP_MODE_REPLACE: 1 } }, 
		BodyState: { value: {BODY_STATE_TRANSFORM: 0, BODY_STATE_LINEAR_VELOCITY: 1, BODY_STATE_ANGULAR_VELOCITY: 2, BODY_STATE_SLEEPING: 3, BODY_STATE_CAN_SLEEP: 4 } }, 
		JointType: { value: {JOINT_TYPE_PIN: 0, JOINT_TYPE_GROOVE: 1, JOINT_TYPE_DAMPED_SPRING: 2, JOINT_TYPE_MAX: 3 } }, 
		JointParam: { value: {JOINT_PARAM_BIAS: 0, JOINT_PARAM_MAX_BIAS: 1, JOINT_PARAM_MAX_FORCE: 2 } }, 
		PinJointParam: { value: {PIN_JOINT_SOFTNESS: 0 } }, 
		DampedSpringParam: { value: {DAMPED_SPRING_REST_LENGTH: 0, DAMPED_SPRING_STIFFNESS: 1, DAMPED_SPRING_DAMPING: 2 } }, 
		CCDMode: { value: {CCD_MODE_DISABLED: 0, CCD_MODE_CAST_RAY: 1, CCD_MODE_CAST_SHAPE: 2 } }, 
		AreaBodyStatus: { value: {AREA_BODY_ADDED: 0, AREA_BODY_REMOVED: 1 } }, 
		ProcessInfo: { value: {INFO_ACTIVE_OBJECTS: 0, INFO_COLLISION_PAIRS: 1, INFO_ISLAND_COUNT: 2 } }
	});
	bind(godot.PhysicsServer2DExtension, {});
	bind(godot.PhysicsServer2DManager, {});
	bind(godot.PhysicsServer3D, {
		JointType: { value: {JOINT_TYPE_PIN: 0, JOINT_TYPE_HINGE: 1, JOINT_TYPE_SLIDER: 2, JOINT_TYPE_CONE_TWIST: 3, JOINT_TYPE_6DOF: 4, JOINT_TYPE_MAX: 5 } }, 
		PinJointParam: { value: {PIN_JOINT_BIAS: 0, PIN_JOINT_DAMPING: 1, PIN_JOINT_IMPULSE_CLAMP: 2 } }, 
		HingeJointParam: { value: {HINGE_JOINT_BIAS: 0, HINGE_JOINT_LIMIT_UPPER: 1, HINGE_JOINT_LIMIT_LOWER: 2, HINGE_JOINT_LIMIT_BIAS: 3, HINGE_JOINT_LIMIT_SOFTNESS: 4, HINGE_JOINT_LIMIT_RELAXATION: 5, HINGE_JOINT_MOTOR_TARGET_VELOCITY: 6, HINGE_JOINT_MOTOR_MAX_IMPULSE: 7 } }, 
		HingeJointFlag: { value: {HINGE_JOINT_FLAG_USE_LIMIT: 0, HINGE_JOINT_FLAG_ENABLE_MOTOR: 1 } }, 
		SliderJointParam: { value: {SLIDER_JOINT_LINEAR_LIMIT_UPPER: 0, SLIDER_JOINT_LINEAR_LIMIT_LOWER: 1, SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS: 2, SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION: 3, SLIDER_JOINT_LINEAR_LIMIT_DAMPING: 4, SLIDER_JOINT_LINEAR_MOTION_SOFTNESS: 5, SLIDER_JOINT_LINEAR_MOTION_RESTITUTION: 6, SLIDER_JOINT_LINEAR_MOTION_DAMPING: 7, SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS: 8, SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION: 9, SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING: 10, SLIDER_JOINT_ANGULAR_LIMIT_UPPER: 11, SLIDER_JOINT_ANGULAR_LIMIT_LOWER: 12, SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS: 13, SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION: 14, SLIDER_JOINT_ANGULAR_LIMIT_DAMPING: 15, SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS: 16, SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION: 17, SLIDER_JOINT_ANGULAR_MOTION_DAMPING: 18, SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS: 19, SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION: 20, SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING: 21, SLIDER_JOINT_MAX: 22 } }, 
		ConeTwistJointParam: { value: {CONE_TWIST_JOINT_SWING_SPAN: 0, CONE_TWIST_JOINT_TWIST_SPAN: 1, CONE_TWIST_JOINT_BIAS: 2, CONE_TWIST_JOINT_SOFTNESS: 3, CONE_TWIST_JOINT_RELAXATION: 4 } }, 
		G6DOFJointAxisParam: { value: {G6DOF_JOINT_LINEAR_LOWER_LIMIT: 0, G6DOF_JOINT_LINEAR_UPPER_LIMIT: 1, G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS: 2, G6DOF_JOINT_LINEAR_RESTITUTION: 3, G6DOF_JOINT_LINEAR_DAMPING: 4, G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY: 5, G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT: 6, G6DOF_JOINT_ANGULAR_LOWER_LIMIT: 10, G6DOF_JOINT_ANGULAR_UPPER_LIMIT: 11, G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS: 12, G6DOF_JOINT_ANGULAR_DAMPING: 13, G6DOF_JOINT_ANGULAR_RESTITUTION: 14, G6DOF_JOINT_ANGULAR_FORCE_LIMIT: 15, G6DOF_JOINT_ANGULAR_ERP: 16, G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY: 17, G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT: 18 } }, 
		G6DOFJointAxisFlag: { value: {G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT: 0, G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT: 1, G6DOF_JOINT_FLAG_ENABLE_MOTOR: 4, G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR: 5 } }, 
		ShapeType: { value: {SHAPE_WORLD_BOUNDARY: 0, SHAPE_SEPARATION_RAY: 1, SHAPE_SPHERE: 2, SHAPE_BOX: 3, SHAPE_CAPSULE: 4, SHAPE_CYLINDER: 5, SHAPE_CONVEX_POLYGON: 6, SHAPE_CONCAVE_POLYGON: 7, SHAPE_HEIGHTMAP: 8, SHAPE_SOFT_BODY: 9, SHAPE_CUSTOM: 10 } }, 
		AreaParameter: { value: {AREA_PARAM_GRAVITY_OVERRIDE_MODE: 0, AREA_PARAM_GRAVITY: 1, AREA_PARAM_GRAVITY_VECTOR: 2, AREA_PARAM_GRAVITY_IS_POINT: 3, AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE: 4, AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE: 5, AREA_PARAM_LINEAR_DAMP: 6, AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE: 7, AREA_PARAM_ANGULAR_DAMP: 8, AREA_PARAM_PRIORITY: 9, AREA_PARAM_WIND_FORCE_MAGNITUDE: 10, AREA_PARAM_WIND_SOURCE: 11, AREA_PARAM_WIND_DIRECTION: 12, AREA_PARAM_WIND_ATTENUATION_FACTOR: 13 } }, 
		AreaSpaceOverrideMode: { value: {AREA_SPACE_OVERRIDE_DISABLED: 0, AREA_SPACE_OVERRIDE_COMBINE: 1, AREA_SPACE_OVERRIDE_COMBINE_REPLACE: 2, AREA_SPACE_OVERRIDE_REPLACE: 3, AREA_SPACE_OVERRIDE_REPLACE_COMBINE: 4 } }, 
		BodyMode: { value: {BODY_MODE_STATIC: 0, BODY_MODE_KINEMATIC: 1, BODY_MODE_RIGID: 2, BODY_MODE_RIGID_LINEAR: 3 } }, 
		BodyParameter: { value: {BODY_PARAM_BOUNCE: 0, BODY_PARAM_FRICTION: 1, BODY_PARAM_MASS: 2, BODY_PARAM_INERTIA: 3, BODY_PARAM_CENTER_OF_MASS: 4, BODY_PARAM_GRAVITY_SCALE: 5, BODY_PARAM_LINEAR_DAMP_MODE: 6, BODY_PARAM_ANGULAR_DAMP_MODE: 7, BODY_PARAM_LINEAR_DAMP: 8, BODY_PARAM_ANGULAR_DAMP: 9, BODY_PARAM_MAX: 10 } }, 
		BodyDampMode: { value: {BODY_DAMP_MODE_COMBINE: 0, BODY_DAMP_MODE_REPLACE: 1 } }, 
		BodyState: { value: {BODY_STATE_TRANSFORM: 0, BODY_STATE_LINEAR_VELOCITY: 1, BODY_STATE_ANGULAR_VELOCITY: 2, BODY_STATE_SLEEPING: 3, BODY_STATE_CAN_SLEEP: 4 } }, 
		AreaBodyStatus: { value: {AREA_BODY_ADDED: 0, AREA_BODY_REMOVED: 1 } }, 
		ProcessInfo: { value: {INFO_ACTIVE_OBJECTS: 0, INFO_COLLISION_PAIRS: 1, INFO_ISLAND_COUNT: 2 } }, 
		SpaceParameter: { value: {SPACE_PARAM_CONTACT_RECYCLE_RADIUS: 0, SPACE_PARAM_CONTACT_MAX_SEPARATION: 1, SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION: 2, SPACE_PARAM_CONTACT_DEFAULT_BIAS: 3, SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD: 4, SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD: 5, SPACE_PARAM_BODY_TIME_TO_SLEEP: 6, SPACE_PARAM_SOLVER_ITERATIONS: 7 } }, 
		BodyAxis: { value: {BODY_AXIS_LINEAR_X: 1, BODY_AXIS_LINEAR_Y: 2, BODY_AXIS_LINEAR_Z: 4, BODY_AXIS_ANGULAR_X: 8, BODY_AXIS_ANGULAR_Y: 16, BODY_AXIS_ANGULAR_Z: 32 } }
	});
	bind(godot.PhysicsServer3DExtension, {});
	bind(godot.PhysicsServer3DManager, {});
	bind(godot.PhysicsServer3DRenderingServerHandler, {});
	bind(godot.PhysicsShapeQueryParameters2D, {});
	bind(godot.PhysicsShapeQueryParameters3D, {});
	bind(godot.PhysicsTestMotionParameters2D, {});
	bind(godot.PhysicsTestMotionParameters3D, {});
	bind(godot.PhysicsTestMotionResult2D, {});
	bind(godot.PhysicsTestMotionResult3D, {});
	bind(godot.PinJoint2D, {});
	bind(godot.PinJoint3D, {
		Param: { value: {PARAM_BIAS: 0, PARAM_DAMPING: 1, PARAM_IMPULSE_CLAMP: 2 } }
	});
	bind(godot.PlaceholderCubemap, {});
	bind(godot.PlaceholderCubemapArray, {});
	bind(godot.PlaceholderMaterial, {});
	bind(godot.PlaceholderMesh, {});
	bind(godot.PlaceholderTexture2D, {});
	bind(godot.PlaceholderTexture2DArray, {});
	bind(godot.PlaceholderTexture3D, {});
	bind(godot.PlaceholderTextureLayered, {});
	bind(godot.PlaneMesh, {
		Orientation: { value: {FACE_X: 0, FACE_Y: 1, FACE_Z: 2 } }
	});
	bind(godot.PointLight2D, {});
	bind(godot.PointMesh, {});
	bind(godot.Polygon2D, {});
	bind(godot.PolygonOccluder3D, {});
	bind(godot.PolygonPathFinder, {});
	bind(godot.Popup, {});
	bind(godot.PopupMenu, {});
	bind(godot.PopupPanel, {});
	bind(godot.PortableCompressedTexture2D, {
		CompressionMode: { value: {COMPRESSION_MODE_LOSSLESS: 0, COMPRESSION_MODE_LOSSY: 1, COMPRESSION_MODE_BASIS_UNIVERSAL: 2, COMPRESSION_MODE_S3TC: 3, COMPRESSION_MODE_ETC2: 4, COMPRESSION_MODE_BPTC: 5 } }
	});
	bind(godot.PrimitiveMesh, {});
	bind(godot.PrismMesh, {});
	bind(godot.ProceduralSkyMaterial, {});
	bind(godot.ProgressBar, {
		FillMode: { value: {FILL_BEGIN_TO_END: 0, FILL_END_TO_BEGIN: 1, FILL_TOP_TO_BOTTOM: 2, FILL_BOTTOM_TO_TOP: 3 } }
	});
	bind(godot.PropertyTweener, {});
	bind(godot.QuadMesh, {});
	bind(godot.QuadOccluder3D, {});
	bind(godot.RDAttachmentFormat, {});
	bind(godot.RDFramebufferPass, {});
	bind(godot.RDPipelineColorBlendState, {});
	bind(godot.RDPipelineColorBlendStateAttachment, {});
	bind(godot.RDPipelineDepthStencilState, {});
	bind(godot.RDPipelineMultisampleState, {});
	bind(godot.RDPipelineRasterizationState, {});
	bind(godot.RDPipelineSpecializationConstant, {});
	bind(godot.RDSamplerState, {});
	bind(godot.RDShaderFile, {});
	bind(godot.RDShaderSPIRV, {});
	bind(godot.RDShaderSource, {});
	bind(godot.RDTextureFormat, {});
	bind(godot.RDTextureView, {});
	bind(godot.RDUniform, {});
	bind(godot.RDVertexAttribute, {});
	bind(godot.RandomNumberGenerator, {});
	bind(godot.Range, {});
	bind(godot.RayCast2D, {});
	bind(godot.RayCast3D, {});
	bind(godot.RectangleShape2D, {});
	bind(godot.RefCounted, {});
	bind(godot.ReferenceRect, {});
	bind(godot.ReflectionProbe, {
		UpdateMode: { value: {UPDATE_ONCE: 0, UPDATE_ALWAYS: 1 } }, 
		AmbientMode: { value: {AMBIENT_DISABLED: 0, AMBIENT_ENVIRONMENT: 1, AMBIENT_COLOR: 2 } }
	});
	bind(godot.RegEx, {});
	bind(godot.RegExMatch, {});
	bind(godot.RemoteTransform2D, {});
	bind(godot.RemoteTransform3D, {});
	bind(godot.RenderingDevice, {
		DeviceType: { value: {DEVICE_TYPE_OTHER: 0, DEVICE_TYPE_INTEGRATED_GPU: 1, DEVICE_TYPE_DISCRETE_GPU: 2, DEVICE_TYPE_VIRTUAL_GPU: 3, DEVICE_TYPE_CPU: 4, DEVICE_TYPE_MAX: 5 } }, 
		DriverResource: { value: {DRIVER_RESOURCE_VULKAN_DEVICE: 0, DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE: 1, DRIVER_RESOURCE_VULKAN_INSTANCE: 2, DRIVER_RESOURCE_VULKAN_QUEUE: 3, DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX: 4, DRIVER_RESOURCE_VULKAN_IMAGE: 5, DRIVER_RESOURCE_VULKAN_IMAGE_VIEW: 6, DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT: 7, DRIVER_RESOURCE_VULKAN_SAMPLER: 8, DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET: 9, DRIVER_RESOURCE_VULKAN_BUFFER: 10, DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE: 11, DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE: 12 } }, 
		DataFormat: { value: {DATA_FORMAT_R4G4_UNORM_PACK8: 0, DATA_FORMAT_R4G4B4A4_UNORM_PACK16: 1, DATA_FORMAT_B4G4R4A4_UNORM_PACK16: 2, DATA_FORMAT_R5G6B5_UNORM_PACK16: 3, DATA_FORMAT_B5G6R5_UNORM_PACK16: 4, DATA_FORMAT_R5G5B5A1_UNORM_PACK16: 5, DATA_FORMAT_B5G5R5A1_UNORM_PACK16: 6, DATA_FORMAT_A1R5G5B5_UNORM_PACK16: 7, DATA_FORMAT_R8_UNORM: 8, DATA_FORMAT_R8_SNORM: 9, DATA_FORMAT_R8_USCALED: 10, DATA_FORMAT_R8_SSCALED: 11, DATA_FORMAT_R8_UINT: 12, DATA_FORMAT_R8_SINT: 13, DATA_FORMAT_R8_SRGB: 14, DATA_FORMAT_R8G8_UNORM: 15, DATA_FORMAT_R8G8_SNORM: 16, DATA_FORMAT_R8G8_USCALED: 17, DATA_FORMAT_R8G8_SSCALED: 18, DATA_FORMAT_R8G8_UINT: 19, DATA_FORMAT_R8G8_SINT: 20, DATA_FORMAT_R8G8_SRGB: 21, DATA_FORMAT_R8G8B8_UNORM: 22, DATA_FORMAT_R8G8B8_SNORM: 23, DATA_FORMAT_R8G8B8_USCALED: 24, DATA_FORMAT_R8G8B8_SSCALED: 25, DATA_FORMAT_R8G8B8_UINT: 26, DATA_FORMAT_R8G8B8_SINT: 27, DATA_FORMAT_R8G8B8_SRGB: 28, DATA_FORMAT_B8G8R8_UNORM: 29, DATA_FORMAT_B8G8R8_SNORM: 30, DATA_FORMAT_B8G8R8_USCALED: 31, DATA_FORMAT_B8G8R8_SSCALED: 32, DATA_FORMAT_B8G8R8_UINT: 33, DATA_FORMAT_B8G8R8_SINT: 34, DATA_FORMAT_B8G8R8_SRGB: 35, DATA_FORMAT_R8G8B8A8_UNORM: 36, DATA_FORMAT_R8G8B8A8_SNORM: 37, DATA_FORMAT_R8G8B8A8_USCALED: 38, DATA_FORMAT_R8G8B8A8_SSCALED: 39, DATA_FORMAT_R8G8B8A8_UINT: 40, DATA_FORMAT_R8G8B8A8_SINT: 41, DATA_FORMAT_R8G8B8A8_SRGB: 42, DATA_FORMAT_B8G8R8A8_UNORM: 43, DATA_FORMAT_B8G8R8A8_SNORM: 44, DATA_FORMAT_B8G8R8A8_USCALED: 45, DATA_FORMAT_B8G8R8A8_SSCALED: 46, DATA_FORMAT_B8G8R8A8_UINT: 47, DATA_FORMAT_B8G8R8A8_SINT: 48, DATA_FORMAT_B8G8R8A8_SRGB: 49, DATA_FORMAT_A8B8G8R8_UNORM_PACK32: 50, DATA_FORMAT_A8B8G8R8_SNORM_PACK32: 51, DATA_FORMAT_A8B8G8R8_USCALED_PACK32: 52, DATA_FORMAT_A8B8G8R8_SSCALED_PACK32: 53, DATA_FORMAT_A8B8G8R8_UINT_PACK32: 54, DATA_FORMAT_A8B8G8R8_SINT_PACK32: 55, DATA_FORMAT_A8B8G8R8_SRGB_PACK32: 56, DATA_FORMAT_A2R10G10B10_UNORM_PACK32: 57, DATA_FORMAT_A2R10G10B10_SNORM_PACK32: 58, DATA_FORMAT_A2R10G10B10_USCALED_PACK32: 59, DATA_FORMAT_A2R10G10B10_SSCALED_PACK32: 60, DATA_FORMAT_A2R10G10B10_UINT_PACK32: 61, DATA_FORMAT_A2R10G10B10_SINT_PACK32: 62, DATA_FORMAT_A2B10G10R10_UNORM_PACK32: 63, DATA_FORMAT_A2B10G10R10_SNORM_PACK32: 64, DATA_FORMAT_A2B10G10R10_USCALED_PACK32: 65, DATA_FORMAT_A2B10G10R10_SSCALED_PACK32: 66, DATA_FORMAT_A2B10G10R10_UINT_PACK32: 67, DATA_FORMAT_A2B10G10R10_SINT_PACK32: 68, DATA_FORMAT_R16_UNORM: 69, DATA_FORMAT_R16_SNORM: 70, DATA_FORMAT_R16_USCALED: 71, DATA_FORMAT_R16_SSCALED: 72, DATA_FORMAT_R16_UINT: 73, DATA_FORMAT_R16_SINT: 74, DATA_FORMAT_R16_SFLOAT: 75, DATA_FORMAT_R16G16_UNORM: 76, DATA_FORMAT_R16G16_SNORM: 77, DATA_FORMAT_R16G16_USCALED: 78, DATA_FORMAT_R16G16_SSCALED: 79, DATA_FORMAT_R16G16_UINT: 80, DATA_FORMAT_R16G16_SINT: 81, DATA_FORMAT_R16G16_SFLOAT: 82, DATA_FORMAT_R16G16B16_UNORM: 83, DATA_FORMAT_R16G16B16_SNORM: 84, DATA_FORMAT_R16G16B16_USCALED: 85, DATA_FORMAT_R16G16B16_SSCALED: 86, DATA_FORMAT_R16G16B16_UINT: 87, DATA_FORMAT_R16G16B16_SINT: 88, DATA_FORMAT_R16G16B16_SFLOAT: 89, DATA_FORMAT_R16G16B16A16_UNORM: 90, DATA_FORMAT_R16G16B16A16_SNORM: 91, DATA_FORMAT_R16G16B16A16_USCALED: 92, DATA_FORMAT_R16G16B16A16_SSCALED: 93, DATA_FORMAT_R16G16B16A16_UINT: 94, DATA_FORMAT_R16G16B16A16_SINT: 95, DATA_FORMAT_R16G16B16A16_SFLOAT: 96, DATA_FORMAT_R32_UINT: 97, DATA_FORMAT_R32_SINT: 98, DATA_FORMAT_R32_SFLOAT: 99, DATA_FORMAT_R32G32_UINT: 100, DATA_FORMAT_R32G32_SINT: 101, DATA_FORMAT_R32G32_SFLOAT: 102, DATA_FORMAT_R32G32B32_UINT: 103, DATA_FORMAT_R32G32B32_SINT: 104, DATA_FORMAT_R32G32B32_SFLOAT: 105, DATA_FORMAT_R32G32B32A32_UINT: 106, DATA_FORMAT_R32G32B32A32_SINT: 107, DATA_FORMAT_R32G32B32A32_SFLOAT: 108, DATA_FORMAT_R64_UINT: 109, DATA_FORMAT_R64_SINT: 110, DATA_FORMAT_R64_SFLOAT: 111, DATA_FORMAT_R64G64_UINT: 112, DATA_FORMAT_R64G64_SINT: 113, DATA_FORMAT_R64G64_SFLOAT: 114, DATA_FORMAT_R64G64B64_UINT: 115, DATA_FORMAT_R64G64B64_SINT: 116, DATA_FORMAT_R64G64B64_SFLOAT: 117, DATA_FORMAT_R64G64B64A64_UINT: 118, DATA_FORMAT_R64G64B64A64_SINT: 119, DATA_FORMAT_R64G64B64A64_SFLOAT: 120, DATA_FORMAT_B10G11R11_UFLOAT_PACK32: 121, DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32: 122, DATA_FORMAT_D16_UNORM: 123, DATA_FORMAT_X8_D24_UNORM_PACK32: 124, DATA_FORMAT_D32_SFLOAT: 125, DATA_FORMAT_S8_UINT: 126, DATA_FORMAT_D16_UNORM_S8_UINT: 127, DATA_FORMAT_D24_UNORM_S8_UINT: 128, DATA_FORMAT_D32_SFLOAT_S8_UINT: 129, DATA_FORMAT_BC1_RGB_UNORM_BLOCK: 130, DATA_FORMAT_BC1_RGB_SRGB_BLOCK: 131, DATA_FORMAT_BC1_RGBA_UNORM_BLOCK: 132, DATA_FORMAT_BC1_RGBA_SRGB_BLOCK: 133, DATA_FORMAT_BC2_UNORM_BLOCK: 134, DATA_FORMAT_BC2_SRGB_BLOCK: 135, DATA_FORMAT_BC3_UNORM_BLOCK: 136, DATA_FORMAT_BC3_SRGB_BLOCK: 137, DATA_FORMAT_BC4_UNORM_BLOCK: 138, DATA_FORMAT_BC4_SNORM_BLOCK: 139, DATA_FORMAT_BC5_UNORM_BLOCK: 140, DATA_FORMAT_BC5_SNORM_BLOCK: 141, DATA_FORMAT_BC6H_UFLOAT_BLOCK: 142, DATA_FORMAT_BC6H_SFLOAT_BLOCK: 143, DATA_FORMAT_BC7_UNORM_BLOCK: 144, DATA_FORMAT_BC7_SRGB_BLOCK: 145, DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK: 146, DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK: 147, DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK: 148, DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK: 149, DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK: 150, DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK: 151, DATA_FORMAT_EAC_R11_UNORM_BLOCK: 152, DATA_FORMAT_EAC_R11_SNORM_BLOCK: 153, DATA_FORMAT_EAC_R11G11_UNORM_BLOCK: 154, DATA_FORMAT_EAC_R11G11_SNORM_BLOCK: 155, DATA_FORMAT_ASTC_4x4_UNORM_BLOCK: 156, DATA_FORMAT_ASTC_4x4_SRGB_BLOCK: 157, DATA_FORMAT_ASTC_5x4_UNORM_BLOCK: 158, DATA_FORMAT_ASTC_5x4_SRGB_BLOCK: 159, DATA_FORMAT_ASTC_5x5_UNORM_BLOCK: 160, DATA_FORMAT_ASTC_5x5_SRGB_BLOCK: 161, DATA_FORMAT_ASTC_6x5_UNORM_BLOCK: 162, DATA_FORMAT_ASTC_6x5_SRGB_BLOCK: 163, DATA_FORMAT_ASTC_6x6_UNORM_BLOCK: 164, DATA_FORMAT_ASTC_6x6_SRGB_BLOCK: 165, DATA_FORMAT_ASTC_8x5_UNORM_BLOCK: 166, DATA_FORMAT_ASTC_8x5_SRGB_BLOCK: 167, DATA_FORMAT_ASTC_8x6_UNORM_BLOCK: 168, DATA_FORMAT_ASTC_8x6_SRGB_BLOCK: 169, DATA_FORMAT_ASTC_8x8_UNORM_BLOCK: 170, DATA_FORMAT_ASTC_8x8_SRGB_BLOCK: 171, DATA_FORMAT_ASTC_10x5_UNORM_BLOCK: 172, DATA_FORMAT_ASTC_10x5_SRGB_BLOCK: 173, DATA_FORMAT_ASTC_10x6_UNORM_BLOCK: 174, DATA_FORMAT_ASTC_10x6_SRGB_BLOCK: 175, DATA_FORMAT_ASTC_10x8_UNORM_BLOCK: 176, DATA_FORMAT_ASTC_10x8_SRGB_BLOCK: 177, DATA_FORMAT_ASTC_10x10_UNORM_BLOCK: 178, DATA_FORMAT_ASTC_10x10_SRGB_BLOCK: 179, DATA_FORMAT_ASTC_12x10_UNORM_BLOCK: 180, DATA_FORMAT_ASTC_12x10_SRGB_BLOCK: 181, DATA_FORMAT_ASTC_12x12_UNORM_BLOCK: 182, DATA_FORMAT_ASTC_12x12_SRGB_BLOCK: 183, DATA_FORMAT_G8B8G8R8_422_UNORM: 184, DATA_FORMAT_B8G8R8G8_422_UNORM: 185, DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM: 186, DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM: 187, DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM: 188, DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM: 189, DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM: 190, DATA_FORMAT_R10X6_UNORM_PACK16: 191, DATA_FORMAT_R10X6G10X6_UNORM_2PACK16: 192, DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16: 193, DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16: 194, DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16: 195, DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16: 196, DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16: 197, DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16: 198, DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16: 199, DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16: 200, DATA_FORMAT_R12X4_UNORM_PACK16: 201, DATA_FORMAT_R12X4G12X4_UNORM_2PACK16: 202, DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16: 203, DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16: 204, DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16: 205, DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16: 206, DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16: 207, DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16: 208, DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16: 209, DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16: 210, DATA_FORMAT_G16B16G16R16_422_UNORM: 211, DATA_FORMAT_B16G16R16G16_422_UNORM: 212, DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM: 213, DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM: 214, DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM: 215, DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM: 216, DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM: 217, DATA_FORMAT_MAX: 218 } }, 
		BarrierMask: { value: {BARRIER_MASK_RASTER: 1, BARRIER_MASK_COMPUTE: 2, BARRIER_MASK_TRANSFER: 4, BARRIER_MASK_ALL_BARRIERS: 7, BARRIER_MASK_NO_BARRIER: 8 } }, 
		TextureType: { value: {TEXTURE_TYPE_1D: 0, TEXTURE_TYPE_2D: 1, TEXTURE_TYPE_3D: 2, TEXTURE_TYPE_CUBE: 3, TEXTURE_TYPE_1D_ARRAY: 4, TEXTURE_TYPE_2D_ARRAY: 5, TEXTURE_TYPE_CUBE_ARRAY: 6, TEXTURE_TYPE_MAX: 7 } }, 
		TextureSamples: { value: {TEXTURE_SAMPLES_1: 0, TEXTURE_SAMPLES_2: 1, TEXTURE_SAMPLES_4: 2, TEXTURE_SAMPLES_8: 3, TEXTURE_SAMPLES_16: 4, TEXTURE_SAMPLES_32: 5, TEXTURE_SAMPLES_64: 6, TEXTURE_SAMPLES_MAX: 7 } }, 
		TextureUsageBits: { value: {TEXTURE_USAGE_SAMPLING_BIT: 1, TEXTURE_USAGE_COLOR_ATTACHMENT_BIT: 2, TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT: 4, TEXTURE_USAGE_STORAGE_BIT: 8, TEXTURE_USAGE_STORAGE_ATOMIC_BIT: 16, TEXTURE_USAGE_CPU_READ_BIT: 32, TEXTURE_USAGE_CAN_UPDATE_BIT: 64, TEXTURE_USAGE_CAN_COPY_FROM_BIT: 128, TEXTURE_USAGE_CAN_COPY_TO_BIT: 256, TEXTURE_USAGE_INPUT_ATTACHMENT_BIT: 512 } }, 
		TextureSwizzle: { value: {TEXTURE_SWIZZLE_IDENTITY: 0, TEXTURE_SWIZZLE_ZERO: 1, TEXTURE_SWIZZLE_ONE: 2, TEXTURE_SWIZZLE_R: 3, TEXTURE_SWIZZLE_G: 4, TEXTURE_SWIZZLE_B: 5, TEXTURE_SWIZZLE_A: 6, TEXTURE_SWIZZLE_MAX: 7 } }, 
		TextureSliceType: { value: {TEXTURE_SLICE_2D: 0, TEXTURE_SLICE_CUBEMAP: 1, TEXTURE_SLICE_3D: 2 } }, 
		SamplerFilter: { value: {SAMPLER_FILTER_NEAREST: 0, SAMPLER_FILTER_LINEAR: 1 } }, 
		SamplerRepeatMode: { value: {SAMPLER_REPEAT_MODE_REPEAT: 0, SAMPLER_REPEAT_MODE_MIRRORED_REPEAT: 1, SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE: 2, SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER: 3, SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE: 4, SAMPLER_REPEAT_MODE_MAX: 5 } }, 
		SamplerBorderColor: { value: {SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK: 0, SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK: 1, SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK: 2, SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK: 3, SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE: 4, SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE: 5, SAMPLER_BORDER_COLOR_MAX: 6 } }, 
		VertexFrequency: { value: {VERTEX_FREQUENCY_VERTEX: 0, VERTEX_FREQUENCY_INSTANCE: 1 } }, 
		IndexBufferFormat: { value: {INDEX_BUFFER_FORMAT_UINT16: 0, INDEX_BUFFER_FORMAT_UINT32: 1 } }, 
		StorageBufferUsage: { value: {STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT: 1 } }, 
		UniformType: { value: {UNIFORM_TYPE_SAMPLER: 0, UNIFORM_TYPE_SAMPLER_WITH_TEXTURE: 1, UNIFORM_TYPE_TEXTURE: 2, UNIFORM_TYPE_IMAGE: 3, UNIFORM_TYPE_TEXTURE_BUFFER: 4, UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER: 5, UNIFORM_TYPE_IMAGE_BUFFER: 6, UNIFORM_TYPE_UNIFORM_BUFFER: 7, UNIFORM_TYPE_STORAGE_BUFFER: 8, UNIFORM_TYPE_INPUT_ATTACHMENT: 9, UNIFORM_TYPE_MAX: 10 } }, 
		RenderPrimitive: { value: {RENDER_PRIMITIVE_POINTS: 0, RENDER_PRIMITIVE_LINES: 1, RENDER_PRIMITIVE_LINES_WITH_ADJACENCY: 2, RENDER_PRIMITIVE_LINESTRIPS: 3, RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY: 4, RENDER_PRIMITIVE_TRIANGLES: 5, RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY: 6, RENDER_PRIMITIVE_TRIANGLE_STRIPS: 7, RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY: 8, RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX: 9, RENDER_PRIMITIVE_TESSELATION_PATCH: 10, RENDER_PRIMITIVE_MAX: 11 } }, 
		PolygonCullMode: { value: {POLYGON_CULL_DISABLED: 0, POLYGON_CULL_FRONT: 1, POLYGON_CULL_BACK: 2 } }, 
		PolygonFrontFace: { value: {POLYGON_FRONT_FACE_CLOCKWISE: 0, POLYGON_FRONT_FACE_COUNTER_CLOCKWISE: 1 } }, 
		StencilOperation: { value: {STENCIL_OP_KEEP: 0, STENCIL_OP_ZERO: 1, STENCIL_OP_REPLACE: 2, STENCIL_OP_INCREMENT_AND_CLAMP: 3, STENCIL_OP_DECREMENT_AND_CLAMP: 4, STENCIL_OP_INVERT: 5, STENCIL_OP_INCREMENT_AND_WRAP: 6, STENCIL_OP_DECREMENT_AND_WRAP: 7, STENCIL_OP_MAX: 8 } }, 
		CompareOperator: { value: {COMPARE_OP_NEVER: 0, COMPARE_OP_LESS: 1, COMPARE_OP_EQUAL: 2, COMPARE_OP_LESS_OR_EQUAL: 3, COMPARE_OP_GREATER: 4, COMPARE_OP_NOT_EQUAL: 5, COMPARE_OP_GREATER_OR_EQUAL: 6, COMPARE_OP_ALWAYS: 7, COMPARE_OP_MAX: 8 } }, 
		LogicOperation: { value: {LOGIC_OP_CLEAR: 0, LOGIC_OP_AND: 1, LOGIC_OP_AND_REVERSE: 2, LOGIC_OP_COPY: 3, LOGIC_OP_AND_INVERTED: 4, LOGIC_OP_NO_OP: 5, LOGIC_OP_XOR: 6, LOGIC_OP_OR: 7, LOGIC_OP_NOR: 8, LOGIC_OP_EQUIVALENT: 9, LOGIC_OP_INVERT: 10, LOGIC_OP_OR_REVERSE: 11, LOGIC_OP_COPY_INVERTED: 12, LOGIC_OP_OR_INVERTED: 13, LOGIC_OP_NAND: 14, LOGIC_OP_SET: 15, LOGIC_OP_MAX: 16 } }, 
		BlendFactor: { value: {BLEND_FACTOR_ZERO: 0, BLEND_FACTOR_ONE: 1, BLEND_FACTOR_SRC_COLOR: 2, BLEND_FACTOR_ONE_MINUS_SRC_COLOR: 3, BLEND_FACTOR_DST_COLOR: 4, BLEND_FACTOR_ONE_MINUS_DST_COLOR: 5, BLEND_FACTOR_SRC_ALPHA: 6, BLEND_FACTOR_ONE_MINUS_SRC_ALPHA: 7, BLEND_FACTOR_DST_ALPHA: 8, BLEND_FACTOR_ONE_MINUS_DST_ALPHA: 9, BLEND_FACTOR_CONSTANT_COLOR: 10, BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR: 11, BLEND_FACTOR_CONSTANT_ALPHA: 12, BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA: 13, BLEND_FACTOR_SRC_ALPHA_SATURATE: 14, BLEND_FACTOR_SRC1_COLOR: 15, BLEND_FACTOR_ONE_MINUS_SRC1_COLOR: 16, BLEND_FACTOR_SRC1_ALPHA: 17, BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA: 18, BLEND_FACTOR_MAX: 19 } }, 
		BlendOperation: { value: {BLEND_OP_ADD: 0, BLEND_OP_SUBTRACT: 1, BLEND_OP_REVERSE_SUBTRACT: 2, BLEND_OP_MINIMUM: 3, BLEND_OP_MAXIMUM: 4, BLEND_OP_MAX: 5 } }, 
		PipelineDynamicStateFlags: { value: {DYNAMIC_STATE_LINE_WIDTH: 1, DYNAMIC_STATE_DEPTH_BIAS: 2, DYNAMIC_STATE_BLEND_CONSTANTS: 4, DYNAMIC_STATE_DEPTH_BOUNDS: 8, DYNAMIC_STATE_STENCIL_COMPARE_MASK: 16, DYNAMIC_STATE_STENCIL_WRITE_MASK: 32, DYNAMIC_STATE_STENCIL_REFERENCE: 64 } }, 
		InitialAction: { value: {INITIAL_ACTION_CLEAR: 0, INITIAL_ACTION_CLEAR_REGION: 1, INITIAL_ACTION_CLEAR_REGION_CONTINUE: 2, INITIAL_ACTION_KEEP: 3, INITIAL_ACTION_DROP: 4, INITIAL_ACTION_CONTINUE: 5, INITIAL_ACTION_MAX: 6 } }, 
		FinalAction: { value: {FINAL_ACTION_READ: 0, FINAL_ACTION_DISCARD: 1, FINAL_ACTION_CONTINUE: 2, FINAL_ACTION_MAX: 3 } }, 
		ShaderStage: { value: {SHADER_STAGE_VERTEX: 0, SHADER_STAGE_FRAGMENT: 1, SHADER_STAGE_TESSELATION_CONTROL: 2, SHADER_STAGE_TESSELATION_EVALUATION: 3, SHADER_STAGE_COMPUTE: 4, SHADER_STAGE_MAX: 5, SHADER_STAGE_VERTEX_BIT: 1, SHADER_STAGE_FRAGMENT_BIT: 2, SHADER_STAGE_TESSELATION_CONTROL_BIT: 4, SHADER_STAGE_TESSELATION_EVALUATION_BIT: 8, SHADER_STAGE_COMPUTE_BIT: 16 } }, 
		ShaderLanguage: { value: {SHADER_LANGUAGE_GLSL: 0, SHADER_LANGUAGE_HLSL: 1 } }, 
		PipelineSpecializationConstantType: { value: {PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL: 0, PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT: 1, PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT: 2 } }, 
		Limit: { value: {LIMIT_MAX_BOUND_UNIFORM_SETS: 0, LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS: 1, LIMIT_MAX_TEXTURES_PER_UNIFORM_SET: 2, LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET: 3, LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET: 4, LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET: 5, LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET: 6, LIMIT_MAX_DRAW_INDEXED_INDEX: 7, LIMIT_MAX_FRAMEBUFFER_HEIGHT: 8, LIMIT_MAX_FRAMEBUFFER_WIDTH: 9, LIMIT_MAX_TEXTURE_ARRAY_LAYERS: 10, LIMIT_MAX_TEXTURE_SIZE_1D: 11, LIMIT_MAX_TEXTURE_SIZE_2D: 12, LIMIT_MAX_TEXTURE_SIZE_3D: 13, LIMIT_MAX_TEXTURE_SIZE_CUBE: 14, LIMIT_MAX_TEXTURES_PER_SHADER_STAGE: 15, LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE: 16, LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE: 17, LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE: 18, LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE: 19, LIMIT_MAX_PUSH_CONSTANT_SIZE: 20, LIMIT_MAX_UNIFORM_BUFFER_SIZE: 21, LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET: 22, LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES: 23, LIMIT_MAX_VERTEX_INPUT_BINDINGS: 24, LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE: 25, LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT: 26, LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE: 27, LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X: 28, LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y: 29, LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z: 30, LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS: 31, LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X: 32, LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y: 33, LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z: 34, LIMIT_MAX_VIEWPORT_DIMENSIONS_X: 35, LIMIT_MAX_VIEWPORT_DIMENSIONS_Y: 36 } }, 
		MemoryType: { value: {MEMORY_TEXTURES: 0, MEMORY_BUFFERS: 1, MEMORY_TOTAL: 2 } }
	});
	bind(godot.RenderingServer, {
		TextureLayeredType: { value: {TEXTURE_LAYERED_2D_ARRAY: 0, TEXTURE_LAYERED_CUBEMAP: 1, TEXTURE_LAYERED_CUBEMAP_ARRAY: 2 } }, 
		CubeMapLayer: { value: {CUBEMAP_LAYER_LEFT: 0, CUBEMAP_LAYER_RIGHT: 1, CUBEMAP_LAYER_BOTTOM: 2, CUBEMAP_LAYER_TOP: 3, CUBEMAP_LAYER_FRONT: 4, CUBEMAP_LAYER_BACK: 5 } }, 
		ShaderMode: { value: {SHADER_SPATIAL: 0, SHADER_CANVAS_ITEM: 1, SHADER_PARTICLES: 2, SHADER_SKY: 3, SHADER_FOG: 4, SHADER_MAX: 5 } }, 
		ArrayType: { value: {ARRAY_VERTEX: 0, ARRAY_NORMAL: 1, ARRAY_TANGENT: 2, ARRAY_COLOR: 3, ARRAY_TEX_UV: 4, ARRAY_TEX_UV2: 5, ARRAY_CUSTOM0: 6, ARRAY_CUSTOM1: 7, ARRAY_CUSTOM2: 8, ARRAY_CUSTOM3: 9, ARRAY_BONES: 10, ARRAY_WEIGHTS: 11, ARRAY_INDEX: 12, ARRAY_MAX: 13 } }, 
		ArrayCustomFormat: { value: {ARRAY_CUSTOM_RGBA8_UNORM: 0, ARRAY_CUSTOM_RGBA8_SNORM: 1, ARRAY_CUSTOM_RG_HALF: 2, ARRAY_CUSTOM_RGBA_HALF: 3, ARRAY_CUSTOM_R_FLOAT: 4, ARRAY_CUSTOM_RG_FLOAT: 5, ARRAY_CUSTOM_RGB_FLOAT: 6, ARRAY_CUSTOM_RGBA_FLOAT: 7, ARRAY_CUSTOM_MAX: 8 } }, 
		ArrayFormat: { value: {ARRAY_FORMAT_VERTEX: 1, ARRAY_FORMAT_NORMAL: 2, ARRAY_FORMAT_TANGENT: 4, ARRAY_FORMAT_COLOR: 8, ARRAY_FORMAT_TEX_UV: 16, ARRAY_FORMAT_TEX_UV2: 32, ARRAY_FORMAT_CUSTOM0: 64, ARRAY_FORMAT_CUSTOM1: 128, ARRAY_FORMAT_CUSTOM2: 256, ARRAY_FORMAT_CUSTOM3: 512, ARRAY_FORMAT_BONES: 1024, ARRAY_FORMAT_WEIGHTS: 2048, ARRAY_FORMAT_INDEX: 4096, ARRAY_FORMAT_BLEND_SHAPE_MASK: 7, ARRAY_FORMAT_CUSTOM_BASE: 13, ARRAY_FORMAT_CUSTOM_BITS: 3, ARRAY_FORMAT_CUSTOM0_SHIFT: 13, ARRAY_FORMAT_CUSTOM1_SHIFT: 16, ARRAY_FORMAT_CUSTOM2_SHIFT: 19, ARRAY_FORMAT_CUSTOM3_SHIFT: 22, ARRAY_FORMAT_CUSTOM_MASK: 7, ARRAY_COMPRESS_FLAGS_BASE: 25, ARRAY_FLAG_USE_2D_VERTICES: 33554432, ARRAY_FLAG_USE_DYNAMIC_UPDATE: 67108864, ARRAY_FLAG_USE_8_BONE_WEIGHTS: 134217728, ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY: 268435456 } }, 
		PrimitiveType: { value: {PRIMITIVE_POINTS: 0, PRIMITIVE_LINES: 1, PRIMITIVE_LINE_STRIP: 2, PRIMITIVE_TRIANGLES: 3, PRIMITIVE_TRIANGLE_STRIP: 4, PRIMITIVE_MAX: 5 } }, 
		BlendShapeMode: { value: {BLEND_SHAPE_MODE_NORMALIZED: 0, BLEND_SHAPE_MODE_RELATIVE: 1 } }, 
		MultimeshTransformFormat: { value: {MULTIMESH_TRANSFORM_2D: 0, MULTIMESH_TRANSFORM_3D: 1 } }, 
		LightProjectorFilter: { value: {LIGHT_PROJECTOR_FILTER_NEAREST: 0, LIGHT_PROJECTOR_FILTER_LINEAR: 1, LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS: 2, LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS: 3, LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC: 4, LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC: 5 } }, 
		LightType: { value: {LIGHT_DIRECTIONAL: 0, LIGHT_OMNI: 1, LIGHT_SPOT: 2 } }, 
		LightParam: { value: {LIGHT_PARAM_ENERGY: 0, LIGHT_PARAM_INDIRECT_ENERGY: 1, LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY: 2, LIGHT_PARAM_SPECULAR: 3, LIGHT_PARAM_RANGE: 4, LIGHT_PARAM_SIZE: 5, LIGHT_PARAM_ATTENUATION: 6, LIGHT_PARAM_SPOT_ANGLE: 7, LIGHT_PARAM_SPOT_ATTENUATION: 8, LIGHT_PARAM_SHADOW_MAX_DISTANCE: 9, LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET: 10, LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET: 11, LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET: 12, LIGHT_PARAM_SHADOW_FADE_START: 13, LIGHT_PARAM_SHADOW_NORMAL_BIAS: 14, LIGHT_PARAM_SHADOW_BIAS: 15, LIGHT_PARAM_SHADOW_PANCAKE_SIZE: 16, LIGHT_PARAM_SHADOW_OPACITY: 17, LIGHT_PARAM_SHADOW_BLUR: 18, LIGHT_PARAM_TRANSMITTANCE_BIAS: 19, LIGHT_PARAM_INTENSITY: 20, LIGHT_PARAM_MAX: 21 } }, 
		LightBakeMode: { value: {LIGHT_BAKE_DISABLED: 0, LIGHT_BAKE_STATIC: 1, LIGHT_BAKE_DYNAMIC: 2 } }, 
		LightOmniShadowMode: { value: {LIGHT_OMNI_SHADOW_DUAL_PARABOLOID: 0, LIGHT_OMNI_SHADOW_CUBE: 1 } }, 
		LightDirectionalShadowMode: { value: {LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL: 0, LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS: 1, LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS: 2 } }, 
		LightDirectionalSkyMode: { value: {LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY: 0, LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY: 1, LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY: 2 } }, 
		ShadowQuality: { value: {SHADOW_QUALITY_HARD: 0, SHADOW_QUALITY_SOFT_VERY_LOW: 1, SHADOW_QUALITY_SOFT_LOW: 2, SHADOW_QUALITY_SOFT_MEDIUM: 3, SHADOW_QUALITY_SOFT_HIGH: 4, SHADOW_QUALITY_SOFT_ULTRA: 5, SHADOW_QUALITY_MAX: 6 } }, 
		ReflectionProbeUpdateMode: { value: {REFLECTION_PROBE_UPDATE_ONCE: 0, REFLECTION_PROBE_UPDATE_ALWAYS: 1 } }, 
		ReflectionProbeAmbientMode: { value: {REFLECTION_PROBE_AMBIENT_DISABLED: 0, REFLECTION_PROBE_AMBIENT_ENVIRONMENT: 1, REFLECTION_PROBE_AMBIENT_COLOR: 2 } }, 
		DecalTexture: { value: {DECAL_TEXTURE_ALBEDO: 0, DECAL_TEXTURE_NORMAL: 1, DECAL_TEXTURE_ORM: 2, DECAL_TEXTURE_EMISSION: 3, DECAL_TEXTURE_MAX: 4 } }, 
		DecalFilter: { value: {DECAL_FILTER_NEAREST: 0, DECAL_FILTER_LINEAR: 1, DECAL_FILTER_NEAREST_MIPMAPS: 2, DECAL_FILTER_LINEAR_MIPMAPS: 3, DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC: 4, DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC: 5 } }, 
		VoxelGIQuality: { value: {VOXEL_GI_QUALITY_LOW: 0, VOXEL_GI_QUALITY_HIGH: 1 } }, 
		ParticlesMode: { value: {PARTICLES_MODE_2D: 0, PARTICLES_MODE_3D: 1 } }, 
		ParticlesTransformAlign: { value: {PARTICLES_TRANSFORM_ALIGN_DISABLED: 0, PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD: 1, PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY: 2, PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY: 3 } }, 
		ParticlesDrawOrder: { value: {PARTICLES_DRAW_ORDER_INDEX: 0, PARTICLES_DRAW_ORDER_LIFETIME: 1, PARTICLES_DRAW_ORDER_REVERSE_LIFETIME: 2, PARTICLES_DRAW_ORDER_VIEW_DEPTH: 3 } }, 
		ParticlesCollisionType: { value: {PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT: 0, PARTICLES_COLLISION_TYPE_BOX_ATTRACT: 1, PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT: 2, PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE: 3, PARTICLES_COLLISION_TYPE_BOX_COLLIDE: 4, PARTICLES_COLLISION_TYPE_SDF_COLLIDE: 5, PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE: 6 } }, 
		ParticlesCollisionHeightfieldResolution: { value: {PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256: 0, PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512: 1, PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024: 2, PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048: 3, PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096: 4, PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192: 5, PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX: 6 } }, 
		FogVolumeShape: { value: {FOG_VOLUME_SHAPE_ELLIPSOID: 0, FOG_VOLUME_SHAPE_CONE: 1, FOG_VOLUME_SHAPE_CYLINDER: 2, FOG_VOLUME_SHAPE_BOX: 3, FOG_VOLUME_SHAPE_WORLD: 4, FOG_VOLUME_SHAPE_MAX: 5 } }, 
		ViewportScaling3DMode: { value: {VIEWPORT_SCALING_3D_MODE_BILINEAR: 0, VIEWPORT_SCALING_3D_MODE_FSR: 1, VIEWPORT_SCALING_3D_MODE_MAX: 2 } }, 
		ViewportUpdateMode: { value: {VIEWPORT_UPDATE_DISABLED: 0, VIEWPORT_UPDATE_ONCE: 1, VIEWPORT_UPDATE_WHEN_VISIBLE: 2, VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE: 3, VIEWPORT_UPDATE_ALWAYS: 4 } }, 
		ViewportClearMode: { value: {VIEWPORT_CLEAR_ALWAYS: 0, VIEWPORT_CLEAR_NEVER: 1, VIEWPORT_CLEAR_ONLY_NEXT_FRAME: 2 } }, 
		ViewportEnvironmentMode: { value: {VIEWPORT_ENVIRONMENT_DISABLED: 0, VIEWPORT_ENVIRONMENT_ENABLED: 1, VIEWPORT_ENVIRONMENT_INHERIT: 2, VIEWPORT_ENVIRONMENT_MAX: 3 } }, 
		ViewportSDFOversize: { value: {VIEWPORT_SDF_OVERSIZE_100_PERCENT: 0, VIEWPORT_SDF_OVERSIZE_120_PERCENT: 1, VIEWPORT_SDF_OVERSIZE_150_PERCENT: 2, VIEWPORT_SDF_OVERSIZE_200_PERCENT: 3, VIEWPORT_SDF_OVERSIZE_MAX: 4 } }, 
		ViewportSDFScale: { value: {VIEWPORT_SDF_SCALE_100_PERCENT: 0, VIEWPORT_SDF_SCALE_50_PERCENT: 1, VIEWPORT_SDF_SCALE_25_PERCENT: 2, VIEWPORT_SDF_SCALE_MAX: 3 } }, 
		ViewportMSAA: { value: {VIEWPORT_MSAA_DISABLED: 0, VIEWPORT_MSAA_2X: 1, VIEWPORT_MSAA_4X: 2, VIEWPORT_MSAA_8X: 3, VIEWPORT_MSAA_MAX: 4 } }, 
		ViewportScreenSpaceAA: { value: {VIEWPORT_SCREEN_SPACE_AA_DISABLED: 0, VIEWPORT_SCREEN_SPACE_AA_FXAA: 1, VIEWPORT_SCREEN_SPACE_AA_MAX: 2 } }, 
		ViewportOcclusionCullingBuildQuality: { value: {VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW: 0, VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM: 1, VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH: 2 } }, 
		ViewportRenderInfo: { value: {VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME: 0, VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME: 1, VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME: 2, VIEWPORT_RENDER_INFO_MAX: 3 } }, 
		ViewportRenderInfoType: { value: {VIEWPORT_RENDER_INFO_TYPE_VISIBLE: 0, VIEWPORT_RENDER_INFO_TYPE_SHADOW: 1, VIEWPORT_RENDER_INFO_TYPE_MAX: 2 } }, 
		ViewportDebugDraw: { value: {VIEWPORT_DEBUG_DRAW_DISABLED: 0, VIEWPORT_DEBUG_DRAW_UNSHADED: 1, VIEWPORT_DEBUG_DRAW_LIGHTING: 2, VIEWPORT_DEBUG_DRAW_OVERDRAW: 3, VIEWPORT_DEBUG_DRAW_WIREFRAME: 4, VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER: 5, VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO: 6, VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING: 7, VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION: 8, VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS: 9, VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS: 10, VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE: 11, VIEWPORT_DEBUG_DRAW_SSAO: 12, VIEWPORT_DEBUG_DRAW_SSIL: 13, VIEWPORT_DEBUG_DRAW_PSSM_SPLITS: 14, VIEWPORT_DEBUG_DRAW_DECAL_ATLAS: 15, VIEWPORT_DEBUG_DRAW_SDFGI: 16, VIEWPORT_DEBUG_DRAW_SDFGI_PROBES: 17, VIEWPORT_DEBUG_DRAW_GI_BUFFER: 18, VIEWPORT_DEBUG_DRAW_DISABLE_LOD: 19, VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS: 20, VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS: 21, VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS: 22, VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES: 23, VIEWPORT_DEBUG_DRAW_OCCLUDERS: 24, VIEWPORT_DEBUG_DRAW_MOTION_VECTORS: 25 } }, 
		ViewportVRSMode: { value: {VIEWPORT_VRS_DISABLED: 0, VIEWPORT_VRS_TEXTURE: 1, VIEWPORT_VRS_XR: 2, VIEWPORT_VRS_MAX: 3 } }, 
		SkyMode: { value: {SKY_MODE_AUTOMATIC: 0, SKY_MODE_QUALITY: 1, SKY_MODE_INCREMENTAL: 2, SKY_MODE_REALTIME: 3 } }, 
		EnvironmentBG: { value: {ENV_BG_CLEAR_COLOR: 0, ENV_BG_COLOR: 1, ENV_BG_SKY: 2, ENV_BG_CANVAS: 3, ENV_BG_KEEP: 4, ENV_BG_CAMERA_FEED: 5, ENV_BG_MAX: 6 } }, 
		EnvironmentAmbientSource: { value: {ENV_AMBIENT_SOURCE_BG: 0, ENV_AMBIENT_SOURCE_DISABLED: 1, ENV_AMBIENT_SOURCE_COLOR: 2, ENV_AMBIENT_SOURCE_SKY: 3 } }, 
		EnvironmentReflectionSource: { value: {ENV_REFLECTION_SOURCE_BG: 0, ENV_REFLECTION_SOURCE_DISABLED: 1, ENV_REFLECTION_SOURCE_SKY: 2 } }, 
		EnvironmentGlowBlendMode: { value: {ENV_GLOW_BLEND_MODE_ADDITIVE: 0, ENV_GLOW_BLEND_MODE_SCREEN: 1, ENV_GLOW_BLEND_MODE_SOFTLIGHT: 2, ENV_GLOW_BLEND_MODE_REPLACE: 3, ENV_GLOW_BLEND_MODE_MIX: 4 } }, 
		EnvironmentToneMapper: { value: {ENV_TONE_MAPPER_LINEAR: 0, ENV_TONE_MAPPER_REINHARD: 1, ENV_TONE_MAPPER_FILMIC: 2, ENV_TONE_MAPPER_ACES: 3 } }, 
		EnvironmentSSRRoughnessQuality: { value: {ENV_SSR_ROUGHNESS_QUALITY_DISABLED: 0, ENV_SSR_ROUGHNESS_QUALITY_LOW: 1, ENV_SSR_ROUGHNESS_QUALITY_MEDIUM: 2, ENV_SSR_ROUGHNESS_QUALITY_HIGH: 3 } }, 
		EnvironmentSSAOQuality: { value: {ENV_SSAO_QUALITY_VERY_LOW: 0, ENV_SSAO_QUALITY_LOW: 1, ENV_SSAO_QUALITY_MEDIUM: 2, ENV_SSAO_QUALITY_HIGH: 3, ENV_SSAO_QUALITY_ULTRA: 4 } }, 
		EnvironmentSSILQuality: { value: {ENV_SSIL_QUALITY_VERY_LOW: 0, ENV_SSIL_QUALITY_LOW: 1, ENV_SSIL_QUALITY_MEDIUM: 2, ENV_SSIL_QUALITY_HIGH: 3, ENV_SSIL_QUALITY_ULTRA: 4 } }, 
		EnvironmentSDFGIYScale: { value: {ENV_SDFGI_Y_SCALE_50_PERCENT: 0, ENV_SDFGI_Y_SCALE_75_PERCENT: 1, ENV_SDFGI_Y_SCALE_100_PERCENT: 2 } }, 
		EnvironmentSDFGIRayCount: { value: {ENV_SDFGI_RAY_COUNT_4: 0, ENV_SDFGI_RAY_COUNT_8: 1, ENV_SDFGI_RAY_COUNT_16: 2, ENV_SDFGI_RAY_COUNT_32: 3, ENV_SDFGI_RAY_COUNT_64: 4, ENV_SDFGI_RAY_COUNT_96: 5, ENV_SDFGI_RAY_COUNT_128: 6, ENV_SDFGI_RAY_COUNT_MAX: 7 } }, 
		EnvironmentSDFGIFramesToConverge: { value: {ENV_SDFGI_CONVERGE_IN_5_FRAMES: 0, ENV_SDFGI_CONVERGE_IN_10_FRAMES: 1, ENV_SDFGI_CONVERGE_IN_15_FRAMES: 2, ENV_SDFGI_CONVERGE_IN_20_FRAMES: 3, ENV_SDFGI_CONVERGE_IN_25_FRAMES: 4, ENV_SDFGI_CONVERGE_IN_30_FRAMES: 5, ENV_SDFGI_CONVERGE_MAX: 6 } }, 
		EnvironmentSDFGIFramesToUpdateLight: { value: {ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME: 0, ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES: 1, ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES: 2, ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES: 3, ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES: 4, ENV_SDFGI_UPDATE_LIGHT_MAX: 5 } }, 
		SubSurfaceScatteringQuality: { value: {SUB_SURFACE_SCATTERING_QUALITY_DISABLED: 0, SUB_SURFACE_SCATTERING_QUALITY_LOW: 1, SUB_SURFACE_SCATTERING_QUALITY_MEDIUM: 2, SUB_SURFACE_SCATTERING_QUALITY_HIGH: 3 } }, 
		DOFBokehShape: { value: {DOF_BOKEH_BOX: 0, DOF_BOKEH_HEXAGON: 1, DOF_BOKEH_CIRCLE: 2 } }, 
		DOFBlurQuality: { value: {DOF_BLUR_QUALITY_VERY_LOW: 0, DOF_BLUR_QUALITY_LOW: 1, DOF_BLUR_QUALITY_MEDIUM: 2, DOF_BLUR_QUALITY_HIGH: 3 } }, 
		InstanceType: { value: {INSTANCE_NONE: 0, INSTANCE_MESH: 1, INSTANCE_MULTIMESH: 2, INSTANCE_PARTICLES: 3, INSTANCE_PARTICLES_COLLISION: 4, INSTANCE_LIGHT: 5, INSTANCE_REFLECTION_PROBE: 6, INSTANCE_DECAL: 7, INSTANCE_VOXEL_GI: 8, INSTANCE_LIGHTMAP: 9, INSTANCE_OCCLUDER: 10, INSTANCE_VISIBLITY_NOTIFIER: 11, INSTANCE_FOG_VOLUME: 12, INSTANCE_MAX: 13, INSTANCE_GEOMETRY_MASK: 14 } }, 
		InstanceFlags: { value: {INSTANCE_FLAG_USE_BAKED_LIGHT: 0, INSTANCE_FLAG_USE_DYNAMIC_GI: 1, INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE: 2, INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING: 3, INSTANCE_FLAG_MAX: 4 } }, 
		ShadowCastingSetting: { value: {SHADOW_CASTING_SETTING_OFF: 0, SHADOW_CASTING_SETTING_ON: 1, SHADOW_CASTING_SETTING_DOUBLE_SIDED: 2, SHADOW_CASTING_SETTING_SHADOWS_ONLY: 3 } }, 
		VisibilityRangeFadeMode: { value: {VISIBILITY_RANGE_FADE_DISABLED: 0, VISIBILITY_RANGE_FADE_SELF: 1, VISIBILITY_RANGE_FADE_DEPENDENCIES: 2 } }, 
		BakeChannels: { value: {BAKE_CHANNEL_ALBEDO_ALPHA: 0, BAKE_CHANNEL_NORMAL: 1, BAKE_CHANNEL_ORM: 2, BAKE_CHANNEL_EMISSION: 3 } }, 
		CanvasTextureChannel: { value: {CANVAS_TEXTURE_CHANNEL_DIFFUSE: 0, CANVAS_TEXTURE_CHANNEL_NORMAL: 1, CANVAS_TEXTURE_CHANNEL_SPECULAR: 2 } }, 
		NinePatchAxisMode: { value: {NINE_PATCH_STRETCH: 0, NINE_PATCH_TILE: 1, NINE_PATCH_TILE_FIT: 2 } }, 
		CanvasItemTextureFilter: { value: {CANVAS_ITEM_TEXTURE_FILTER_DEFAULT: 0, CANVAS_ITEM_TEXTURE_FILTER_NEAREST: 1, CANVAS_ITEM_TEXTURE_FILTER_LINEAR: 2, CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: 3, CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: 4, CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC: 5, CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC: 6, CANVAS_ITEM_TEXTURE_FILTER_MAX: 7 } }, 
		CanvasItemTextureRepeat: { value: {CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT: 0, CANVAS_ITEM_TEXTURE_REPEAT_DISABLED: 1, CANVAS_ITEM_TEXTURE_REPEAT_ENABLED: 2, CANVAS_ITEM_TEXTURE_REPEAT_MIRROR: 3, CANVAS_ITEM_TEXTURE_REPEAT_MAX: 4 } }, 
		CanvasGroupMode: { value: {CANVAS_GROUP_MODE_DISABLED: 0, CANVAS_GROUP_MODE_CLIP_ONLY: 1, CANVAS_GROUP_MODE_CLIP_AND_DRAW: 2, CANVAS_GROUP_MODE_TRANSPARENT: 3 } }, 
		CanvasLightMode: { value: {CANVAS_LIGHT_MODE_POINT: 0, CANVAS_LIGHT_MODE_DIRECTIONAL: 1 } }, 
		CanvasLightBlendMode: { value: {CANVAS_LIGHT_BLEND_MODE_ADD: 0, CANVAS_LIGHT_BLEND_MODE_SUB: 1, CANVAS_LIGHT_BLEND_MODE_MIX: 2 } }, 
		CanvasLightShadowFilter: { value: {CANVAS_LIGHT_FILTER_NONE: 0, CANVAS_LIGHT_FILTER_PCF5: 1, CANVAS_LIGHT_FILTER_PCF13: 2, CANVAS_LIGHT_FILTER_MAX: 3 } }, 
		CanvasOccluderPolygonCullMode: { value: {CANVAS_OCCLUDER_POLYGON_CULL_DISABLED: 0, CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE: 1, CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE: 2 } }, 
		GlobalShaderParameterType: { value: {GLOBAL_VAR_TYPE_BOOL: 0, GLOBAL_VAR_TYPE_BVEC2: 1, GLOBAL_VAR_TYPE_BVEC3: 2, GLOBAL_VAR_TYPE_BVEC4: 3, GLOBAL_VAR_TYPE_INT: 4, GLOBAL_VAR_TYPE_IVEC2: 5, GLOBAL_VAR_TYPE_IVEC3: 6, GLOBAL_VAR_TYPE_IVEC4: 7, GLOBAL_VAR_TYPE_RECT2I: 8, GLOBAL_VAR_TYPE_UINT: 9, GLOBAL_VAR_TYPE_UVEC2: 10, GLOBAL_VAR_TYPE_UVEC3: 11, GLOBAL_VAR_TYPE_UVEC4: 12, GLOBAL_VAR_TYPE_FLOAT: 13, GLOBAL_VAR_TYPE_VEC2: 14, GLOBAL_VAR_TYPE_VEC3: 15, GLOBAL_VAR_TYPE_VEC4: 16, GLOBAL_VAR_TYPE_COLOR: 17, GLOBAL_VAR_TYPE_RECT2: 18, GLOBAL_VAR_TYPE_MAT2: 19, GLOBAL_VAR_TYPE_MAT3: 20, GLOBAL_VAR_TYPE_MAT4: 21, GLOBAL_VAR_TYPE_TRANSFORM_2D: 22, GLOBAL_VAR_TYPE_TRANSFORM: 23, GLOBAL_VAR_TYPE_SAMPLER2D: 24, GLOBAL_VAR_TYPE_SAMPLER2DARRAY: 25, GLOBAL_VAR_TYPE_SAMPLER3D: 26, GLOBAL_VAR_TYPE_SAMPLERCUBE: 27, GLOBAL_VAR_TYPE_MAX: 28 } }, 
		RenderingInfo: { value: {RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME: 0, RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME: 1, RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME: 2, RENDERING_INFO_TEXTURE_MEM_USED: 3, RENDERING_INFO_BUFFER_MEM_USED: 4, RENDERING_INFO_VIDEO_MEM_USED: 5 } }, 
		Features: { value: {FEATURE_SHADERS: 0, FEATURE_MULTITHREADED: 1 } }
	});
	bind(godot.Resource, {});
	bind(godot.ResourceFormatLoader, {
		CacheMode: { value: {CACHE_MODE_IGNORE: 0, CACHE_MODE_REUSE: 1, CACHE_MODE_REPLACE: 2 } }
	});
	bind(godot.ResourceFormatSaver, {});
	bind(godot.ResourceImporter, {
		ImportOrder: { value: {IMPORT_ORDER_DEFAULT: 0, IMPORT_ORDER_SCENE: 100 } }
	});
	bind(godot.ResourceLoader, {
		ThreadLoadStatus: { value: {THREAD_LOAD_INVALID_RESOURCE: 0, THREAD_LOAD_IN_PROGRESS: 1, THREAD_LOAD_FAILED: 2, THREAD_LOAD_LOADED: 3 } }, 
		CacheMode: { value: {CACHE_MODE_IGNORE: 0, CACHE_MODE_REUSE: 1, CACHE_MODE_REPLACE: 2 } }
	});
	bind(godot.ResourcePreloader, {});
	bind(godot.ResourceSaver, {
		SaverFlags: { value: {FLAG_NONE: 0, FLAG_RELATIVE_PATHS: 1, FLAG_BUNDLE_RESOURCES: 2, FLAG_CHANGE_PATH: 4, FLAG_OMIT_EDITOR_PROPERTIES: 8, FLAG_SAVE_BIG_ENDIAN: 16, FLAG_COMPRESS: 32, FLAG_REPLACE_SUBRESOURCE_PATHS: 64 } }
	});
	bind(godot.ResourceUID, {});
	bind(godot.RibbonTrailMesh, {
		Shape: { value: {SHAPE_FLAT: 0, SHAPE_CROSS: 1 } }
	});
	bind(godot.RichTextEffect, {});
	bind(godot.RichTextLabel, {
		ListType: { value: {LIST_NUMBERS: 0, LIST_LETTERS: 1, LIST_ROMAN: 2, LIST_DOTS: 3 } }, 
		MenuItems: { value: {MENU_COPY: 0, MENU_SELECT_ALL: 1, MENU_MAX: 2 } }
	});
	bind(godot.RigidBody2D, {
		FreezeMode: { value: {FREEZE_MODE_STATIC: 0, FREEZE_MODE_KINEMATIC: 1 } }, 
		CenterOfMassMode: { value: {CENTER_OF_MASS_MODE_AUTO: 0, CENTER_OF_MASS_MODE_CUSTOM: 1 } }, 
		DampMode: { value: {DAMP_MODE_COMBINE: 0, DAMP_MODE_REPLACE: 1 } }, 
		CCDMode: { value: {CCD_MODE_DISABLED: 0, CCD_MODE_CAST_RAY: 1, CCD_MODE_CAST_SHAPE: 2 } }
	});
	bind(godot.RigidBody3D, {
		FreezeMode: { value: {FREEZE_MODE_STATIC: 0, FREEZE_MODE_KINEMATIC: 1 } }, 
		CenterOfMassMode: { value: {CENTER_OF_MASS_MODE_AUTO: 0, CENTER_OF_MASS_MODE_CUSTOM: 1 } }, 
		DampMode: { value: {DAMP_MODE_COMBINE: 0, DAMP_MODE_REPLACE: 1 } }
	});
	bind(godot.RootMotionView, {});
	bind(godot.SceneMultiplayer, {});
	bind(godot.SceneReplicationConfig, {});
	bind(godot.SceneState, {
		GenEditState: { value: {GEN_EDIT_STATE_DISABLED: 0, GEN_EDIT_STATE_INSTANCE: 1, GEN_EDIT_STATE_MAIN: 2, GEN_EDIT_STATE_MAIN_INHERITED: 3 } }
	});
	bind(godot.SceneTree, {
		GroupCallFlags: { value: {GROUP_CALL_DEFAULT: 0, GROUP_CALL_REVERSE: 1, GROUP_CALL_DEFERRED: 2, GROUP_CALL_UNIQUE: 4 } }
	});
	bind(godot.SceneTreeTimer, {});
	bind(godot.Script, {});
	bind(godot.ScriptCreateDialog, {});
	bind(godot.ScriptEditor, {});
	bind(godot.ScriptEditorBase, {});
	bind(godot.ScriptExtension, {});
	bind(godot.ScriptLanguage, {});
	bind(godot.ScriptLanguageExtension, {
		LookupResultType: { value: {LOOKUP_RESULT_SCRIPT_LOCATION: 0, LOOKUP_RESULT_CLASS: 1, LOOKUP_RESULT_CLASS_CONSTANT: 2, LOOKUP_RESULT_CLASS_PROPERTY: 3, LOOKUP_RESULT_CLASS_METHOD: 4, LOOKUP_RESULT_CLASS_SIGNAL: 5, LOOKUP_RESULT_CLASS_ENUM: 6, LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE: 7, LOOKUP_RESULT_CLASS_ANNOTATION: 8, LOOKUP_RESULT_MAX: 9 } }, 
		CodeCompletionLocation: { value: {LOCATION_LOCAL: 0, LOCATION_PARENT_MASK: 256, LOCATION_OTHER_USER_CODE: 512, LOCATION_OTHER: 1024 } }, 
		CodeCompletionKind: { value: {CODE_COMPLETION_KIND_CLASS: 0, CODE_COMPLETION_KIND_FUNCTION: 1, CODE_COMPLETION_KIND_SIGNAL: 2, CODE_COMPLETION_KIND_VARIABLE: 3, CODE_COMPLETION_KIND_MEMBER: 4, CODE_COMPLETION_KIND_ENUM: 5, CODE_COMPLETION_KIND_CONSTANT: 6, CODE_COMPLETION_KIND_NODE_PATH: 7, CODE_COMPLETION_KIND_FILE_PATH: 8, CODE_COMPLETION_KIND_PLAIN_TEXT: 9, CODE_COMPLETION_KIND_MAX: 10 } }
	});
	bind(godot.ScrollBar, {});
	bind(godot.ScrollContainer, {
		ScrollMode: { value: {SCROLL_MODE_DISABLED: 0, SCROLL_MODE_AUTO: 1, SCROLL_MODE_SHOW_ALWAYS: 2, SCROLL_MODE_SHOW_NEVER: 3 } }
	});
	bind(godot.SegmentShape2D, {});
	bind(godot.SeparationRayShape2D, {});
	bind(godot.SeparationRayShape3D, {});
	bind(godot.Separator, {});
	bind(godot.Shader, {
		Mode: { value: {MODE_SPATIAL: 0, MODE_CANVAS_ITEM: 1, MODE_PARTICLES: 2, MODE_SKY: 3, MODE_FOG: 4 } }
	});
	bind(godot.ShaderGlobalsOverride, {});
	bind(godot.ShaderInclude, {});
	bind(godot.ShaderMaterial, {});
	bind(godot.Shape2D, {});
	bind(godot.Shape3D, {});
	bind(godot.ShapeCast2D, {});
	bind(godot.ShapeCast3D, {});
	bind(godot.Shortcut, {});
	bind(godot.Skeleton2D, {});
	bind(godot.Skeleton3D, {});
	bind(godot.SkeletonIK3D, {});
	bind(godot.SkeletonModification2D, {});
	bind(godot.SkeletonModification2DCCDIK, {});
	bind(godot.SkeletonModification2DFABRIK, {});
	bind(godot.SkeletonModification2DJiggle, {});
	bind(godot.SkeletonModification2DLookAt, {});
	bind(godot.SkeletonModification2DPhysicalBones, {});
	bind(godot.SkeletonModification2DStackHolder, {});
	bind(godot.SkeletonModification2DTwoBoneIK, {});
	bind(godot.SkeletonModificationStack2D, {});
	bind(godot.SkeletonProfile, {
		TailDirection: { value: {TAIL_DIRECTION_AVERAGE_CHILDREN: 0, TAIL_DIRECTION_SPECIFIC_CHILD: 1, TAIL_DIRECTION_END: 2 } }
	});
	bind(godot.SkeletonProfileHumanoid, {});
	bind(godot.Skin, {});
	bind(godot.SkinReference, {});
	bind(godot.Sky, {
		RadianceSize: { value: {RADIANCE_SIZE_32: 0, RADIANCE_SIZE_64: 1, RADIANCE_SIZE_128: 2, RADIANCE_SIZE_256: 3, RADIANCE_SIZE_512: 4, RADIANCE_SIZE_1024: 5, RADIANCE_SIZE_2048: 6, RADIANCE_SIZE_MAX: 7 } }, 
		ProcessMode: { value: {PROCESS_MODE_AUTOMATIC: 0, PROCESS_MODE_QUALITY: 1, PROCESS_MODE_INCREMENTAL: 2, PROCESS_MODE_REALTIME: 3 } }
	});
	bind(godot.Slider, {});
	bind(godot.SliderJoint3D, {
		Param: { value: {PARAM_LINEAR_LIMIT_UPPER: 0, PARAM_LINEAR_LIMIT_LOWER: 1, PARAM_LINEAR_LIMIT_SOFTNESS: 2, PARAM_LINEAR_LIMIT_RESTITUTION: 3, PARAM_LINEAR_LIMIT_DAMPING: 4, PARAM_LINEAR_MOTION_SOFTNESS: 5, PARAM_LINEAR_MOTION_RESTITUTION: 6, PARAM_LINEAR_MOTION_DAMPING: 7, PARAM_LINEAR_ORTHOGONAL_SOFTNESS: 8, PARAM_LINEAR_ORTHOGONAL_RESTITUTION: 9, PARAM_LINEAR_ORTHOGONAL_DAMPING: 10, PARAM_ANGULAR_LIMIT_UPPER: 11, PARAM_ANGULAR_LIMIT_LOWER: 12, PARAM_ANGULAR_LIMIT_SOFTNESS: 13, PARAM_ANGULAR_LIMIT_RESTITUTION: 14, PARAM_ANGULAR_LIMIT_DAMPING: 15, PARAM_ANGULAR_MOTION_SOFTNESS: 16, PARAM_ANGULAR_MOTION_RESTITUTION: 17, PARAM_ANGULAR_MOTION_DAMPING: 18, PARAM_ANGULAR_ORTHOGONAL_SOFTNESS: 19, PARAM_ANGULAR_ORTHOGONAL_RESTITUTION: 20, PARAM_ANGULAR_ORTHOGONAL_DAMPING: 21, PARAM_MAX: 22 } }
	});
	bind(godot.SoftBody3D, {
		DisableMode: { value: {DISABLE_MODE_REMOVE: 0, DISABLE_MODE_KEEP_ACTIVE: 1 } }
	});
	bind(godot.SphereMesh, {});
	bind(godot.SphereOccluder3D, {});
	bind(godot.SphereShape3D, {});
	bind(godot.SpinBox, {});
	bind(godot.SplitContainer, {
		DraggerVisibility: { value: {DRAGGER_VISIBLE: 0, DRAGGER_HIDDEN: 1, DRAGGER_HIDDEN_COLLAPSED: 2 } }
	});
	bind(godot.SpotLight3D, {});
	bind(godot.SpringArm3D, {});
	bind(godot.Sprite2D, {});
	bind(godot.Sprite3D, {});
	bind(godot.SpriteBase3D, {
		DrawFlags: { value: {FLAG_TRANSPARENT: 0, FLAG_SHADED: 1, FLAG_DOUBLE_SIDED: 2, FLAG_DISABLE_DEPTH_TEST: 3, FLAG_FIXED_SIZE: 4, FLAG_MAX: 5 } }, 
		AlphaCutMode: { value: {ALPHA_CUT_DISABLED: 0, ALPHA_CUT_DISCARD: 1, ALPHA_CUT_OPAQUE_PREPASS: 2, ALPHA_CUT_HASH: 3 } }
	});
	bind(godot.SpriteFrames, {});
	bind(godot.StandardMaterial3D, {});
	bind(godot.StaticBody2D, {});
	bind(godot.StaticBody3D, {});
	bind(godot.StreamPeer, {});
	bind(godot.StreamPeerBuffer, {});
	bind(godot.StreamPeerExtension, {});
	bind(godot.StreamPeerGZIP, {});
	bind(godot.StreamPeerTCP, {
		Status: { value: {STATUS_NONE: 0, STATUS_CONNECTING: 1, STATUS_CONNECTED: 2, STATUS_ERROR: 3 } }
	});
	bind(godot.StreamPeerTLS, {
		Status: { value: {STATUS_DISCONNECTED: 0, STATUS_HANDSHAKING: 1, STATUS_CONNECTED: 2, STATUS_ERROR: 3, STATUS_ERROR_HOSTNAME_MISMATCH: 4 } }
	});
	bind(godot.StyleBox, {});
	bind(godot.StyleBoxEmpty, {});
	bind(godot.StyleBoxFlat, {});
	bind(godot.StyleBoxLine, {});
	bind(godot.StyleBoxTexture, {
		AxisStretchMode: { value: {AXIS_STRETCH_MODE_STRETCH: 0, AXIS_STRETCH_MODE_TILE: 1, AXIS_STRETCH_MODE_TILE_FIT: 2 } }
	});
	bind(godot.SubViewport, {
		ClearMode: { value: {CLEAR_MODE_ALWAYS: 0, CLEAR_MODE_NEVER: 1, CLEAR_MODE_ONCE: 2 } }, 
		UpdateMode: { value: {UPDATE_DISABLED: 0, UPDATE_ONCE: 1, UPDATE_WHEN_VISIBLE: 2, UPDATE_WHEN_PARENT_VISIBLE: 3, UPDATE_ALWAYS: 4 } }
	});
	bind(godot.SubViewportContainer, {});
	bind(godot.SurfaceTool, {
		CustomFormat: { value: {CUSTOM_RGBA8_UNORM: 0, CUSTOM_RGBA8_SNORM: 1, CUSTOM_RG_HALF: 2, CUSTOM_RGBA_HALF: 3, CUSTOM_R_FLOAT: 4, CUSTOM_RG_FLOAT: 5, CUSTOM_RGB_FLOAT: 6, CUSTOM_RGBA_FLOAT: 7, CUSTOM_MAX: 8 } }, 
		SkinWeightCount: { value: {SKIN_4_WEIGHTS: 0, SKIN_8_WEIGHTS: 1 } }
	});
	bind(godot.SyntaxHighlighter, {});
	bind(godot.SystemFont, {});
	bind(godot.TCPServer, {});
	bind(godot.TLSOptions, {});
	bind(godot.TabBar, {
		AlignmentMode: { value: {ALIGNMENT_LEFT: 0, ALIGNMENT_CENTER: 1, ALIGNMENT_RIGHT: 2, ALIGNMENT_MAX: 3 } }, 
		CloseButtonDisplayPolicy: { value: {CLOSE_BUTTON_SHOW_NEVER: 0, CLOSE_BUTTON_SHOW_ACTIVE_ONLY: 1, CLOSE_BUTTON_SHOW_ALWAYS: 2, CLOSE_BUTTON_MAX: 3 } }
	});
	bind(godot.TabContainer, {});
	bind(godot.TextEdit, {
		MenuItems: { value: {MENU_CUT: 0, MENU_COPY: 1, MENU_PASTE: 2, MENU_CLEAR: 3, MENU_SELECT_ALL: 4, MENU_UNDO: 5, MENU_REDO: 6, MENU_SUBMENU_TEXT_DIR: 7, MENU_DIR_INHERITED: 8, MENU_DIR_AUTO: 9, MENU_DIR_LTR: 10, MENU_DIR_RTL: 11, MENU_DISPLAY_UCC: 12, MENU_SUBMENU_INSERT_UCC: 13, MENU_INSERT_LRM: 14, MENU_INSERT_RLM: 15, MENU_INSERT_LRE: 16, MENU_INSERT_RLE: 17, MENU_INSERT_LRO: 18, MENU_INSERT_RLO: 19, MENU_INSERT_PDF: 20, MENU_INSERT_ALM: 21, MENU_INSERT_LRI: 22, MENU_INSERT_RLI: 23, MENU_INSERT_FSI: 24, MENU_INSERT_PDI: 25, MENU_INSERT_ZWJ: 26, MENU_INSERT_ZWNJ: 27, MENU_INSERT_WJ: 28, MENU_INSERT_SHY: 29, MENU_MAX: 30 } }, 
		EditAction: { value: {ACTION_NONE: 0, ACTION_TYPING: 1, ACTION_BACKSPACE: 2, ACTION_DELETE: 3 } }, 
		SearchFlags: { value: {SEARCH_MATCH_CASE: 1, SEARCH_WHOLE_WORDS: 2, SEARCH_BACKWARDS: 4 } }, 
		CaretType: { value: {CARET_TYPE_LINE: 0, CARET_TYPE_BLOCK: 1 } }, 
		SelectionMode: { value: {SELECTION_MODE_NONE: 0, SELECTION_MODE_SHIFT: 1, SELECTION_MODE_POINTER: 2, SELECTION_MODE_WORD: 3, SELECTION_MODE_LINE: 4 } }, 
		LineWrappingMode: { value: {LINE_WRAPPING_NONE: 0, LINE_WRAPPING_BOUNDARY: 1 } }, 
		GutterType: { value: {GUTTER_TYPE_STRING: 0, GUTTER_TYPE_ICON: 1, GUTTER_TYPE_CUSTOM: 2 } }
	});
	bind(godot.TextLine, {});
	bind(godot.TextMesh, {});
	bind(godot.TextParagraph, {});
	bind(godot.TextServer, {
		FontAntialiasing: { value: {FONT_ANTIALIASING_NONE: 0, FONT_ANTIALIASING_GRAY: 1, FONT_ANTIALIASING_LCD: 2 } }, 
		FontLCDSubpixelLayout: { value: {FONT_LCD_SUBPIXEL_LAYOUT_NONE: 0, FONT_LCD_SUBPIXEL_LAYOUT_HRGB: 1, FONT_LCD_SUBPIXEL_LAYOUT_HBGR: 2, FONT_LCD_SUBPIXEL_LAYOUT_VRGB: 3, FONT_LCD_SUBPIXEL_LAYOUT_VBGR: 4, FONT_LCD_SUBPIXEL_LAYOUT_MAX: 5 } }, 
		Direction: { value: {DIRECTION_AUTO: 0, DIRECTION_LTR: 1, DIRECTION_RTL: 2, DIRECTION_INHERITED: 3 } }, 
		Orientation: { value: {ORIENTATION_HORIZONTAL: 0, ORIENTATION_VERTICAL: 1 } }, 
		JustificationFlag: { value: {JUSTIFICATION_NONE: 0, JUSTIFICATION_KASHIDA: 1, JUSTIFICATION_WORD_BOUND: 2, JUSTIFICATION_TRIM_EDGE_SPACES: 4, JUSTIFICATION_AFTER_LAST_TAB: 8, JUSTIFICATION_CONSTRAIN_ELLIPSIS: 16, JUSTIFICATION_SKIP_LAST_LINE: 32, JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS: 64, JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE: 128 } }, 
		AutowrapMode: { value: {AUTOWRAP_OFF: 0, AUTOWRAP_ARBITRARY: 1, AUTOWRAP_WORD: 2, AUTOWRAP_WORD_SMART: 3 } }, 
		LineBreakFlag: { value: {BREAK_NONE: 0, BREAK_MANDATORY: 1, BREAK_WORD_BOUND: 2, BREAK_GRAPHEME_BOUND: 4, BREAK_ADAPTIVE: 8, BREAK_TRIM_EDGE_SPACES: 16 } }, 
		VisibleCharactersBehavior: { value: {VC_CHARS_BEFORE_SHAPING: 0, VC_CHARS_AFTER_SHAPING: 1, VC_GLYPHS_AUTO: 2, VC_GLYPHS_LTR: 3, VC_GLYPHS_RTL: 4 } }, 
		OverrunBehavior: { value: {OVERRUN_NO_TRIMMING: 0, OVERRUN_TRIM_CHAR: 1, OVERRUN_TRIM_WORD: 2, OVERRUN_TRIM_ELLIPSIS: 3, OVERRUN_TRIM_WORD_ELLIPSIS: 4 } }, 
		TextOverrunFlag: { value: {OVERRUN_NO_TRIM: 0, OVERRUN_TRIM: 1, OVERRUN_TRIM_WORD_ONLY: 2, OVERRUN_ADD_ELLIPSIS: 4, OVERRUN_ENFORCE_ELLIPSIS: 8, OVERRUN_JUSTIFICATION_AWARE: 16 } }, 
		GraphemeFlag: { value: {GRAPHEME_IS_VALID: 1, GRAPHEME_IS_RTL: 2, GRAPHEME_IS_VIRTUAL: 4, GRAPHEME_IS_SPACE: 8, GRAPHEME_IS_BREAK_HARD: 16, GRAPHEME_IS_BREAK_SOFT: 32, GRAPHEME_IS_TAB: 64, GRAPHEME_IS_ELONGATION: 128, GRAPHEME_IS_PUNCTUATION: 256, GRAPHEME_IS_UNDERSCORE: 512, GRAPHEME_IS_CONNECTED: 1024, GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL: 2048, GRAPHEME_IS_EMBEDDED_OBJECT: 4096 } }, 
		Hinting: { value: {HINTING_NONE: 0, HINTING_LIGHT: 1, HINTING_NORMAL: 2 } }, 
		SubpixelPositioning: { value: {SUBPIXEL_POSITIONING_DISABLED: 0, SUBPIXEL_POSITIONING_AUTO: 1, SUBPIXEL_POSITIONING_ONE_HALF: 2, SUBPIXEL_POSITIONING_ONE_QUARTER: 3, SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE: 20, SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE: 16 } }, 
		Feature: { value: {FEATURE_SIMPLE_LAYOUT: 1, FEATURE_BIDI_LAYOUT: 2, FEATURE_VERTICAL_LAYOUT: 4, FEATURE_SHAPING: 8, FEATURE_KASHIDA_JUSTIFICATION: 16, FEATURE_BREAK_ITERATORS: 32, FEATURE_FONT_BITMAP: 64, FEATURE_FONT_DYNAMIC: 128, FEATURE_FONT_MSDF: 256, FEATURE_FONT_SYSTEM: 512, FEATURE_FONT_VARIABLE: 1024, FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION: 2048, FEATURE_USE_SUPPORT_DATA: 4096, FEATURE_UNICODE_IDENTIFIERS: 8192, FEATURE_UNICODE_SECURITY: 16384 } }, 
		ContourPointTag: { value: {CONTOUR_CURVE_TAG_ON: 1, CONTOUR_CURVE_TAG_OFF_CONIC: 0, CONTOUR_CURVE_TAG_OFF_CUBIC: 2 } }, 
		SpacingType: { value: {SPACING_GLYPH: 0, SPACING_SPACE: 1, SPACING_TOP: 2, SPACING_BOTTOM: 3, SPACING_MAX: 4 } }, 
		FontStyle: { value: {FONT_BOLD: 1, FONT_ITALIC: 2, FONT_FIXED_WIDTH: 4 } }, 
		StructuredTextParser: { value: {STRUCTURED_TEXT_DEFAULT: 0, STRUCTURED_TEXT_URI: 1, STRUCTURED_TEXT_FILE: 2, STRUCTURED_TEXT_EMAIL: 3, STRUCTURED_TEXT_LIST: 4, STRUCTURED_TEXT_GDSCRIPT: 5, STRUCTURED_TEXT_CUSTOM: 6 } }
	});
	bind(godot.TextServerAdvanced, {});
	bind(godot.TextServerDummy, {});
	bind(godot.TextServerExtension, {});
	bind(godot.TextServerFallback, {});
	bind(godot.TextServerManager, {});
	bind(godot.Texture, {});
	bind(godot.Texture2D, {});
	bind(godot.Texture2DArray, {});
	bind(godot.Texture3D, {});
	bind(godot.TextureButton, {
		StretchMode: { value: {STRETCH_SCALE: 0, STRETCH_TILE: 1, STRETCH_KEEP: 2, STRETCH_KEEP_CENTERED: 3, STRETCH_KEEP_ASPECT: 4, STRETCH_KEEP_ASPECT_CENTERED: 5, STRETCH_KEEP_ASPECT_COVERED: 6 } }
	});
	bind(godot.TextureLayered, {
		LayeredType: { value: {LAYERED_TYPE_2D_ARRAY: 0, LAYERED_TYPE_CUBEMAP: 1, LAYERED_TYPE_CUBEMAP_ARRAY: 2 } }
	});
	bind(godot.TextureProgressBar, {
		FillMode: { value: {FILL_LEFT_TO_RIGHT: 0, FILL_RIGHT_TO_LEFT: 1, FILL_TOP_TO_BOTTOM: 2, FILL_BOTTOM_TO_TOP: 3, FILL_CLOCKWISE: 4, FILL_COUNTER_CLOCKWISE: 5, FILL_BILINEAR_LEFT_AND_RIGHT: 6, FILL_BILINEAR_TOP_AND_BOTTOM: 7, FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE: 8 } }
	});
	bind(godot.TextureRect, {
		ExpandMode: { value: {EXPAND_KEEP_SIZE: 0, EXPAND_IGNORE_SIZE: 1, EXPAND_FIT_WIDTH: 2, EXPAND_FIT_WIDTH_PROPORTIONAL: 3, EXPAND_FIT_HEIGHT: 4, EXPAND_FIT_HEIGHT_PROPORTIONAL: 5 } }, 
		StretchMode: { value: {STRETCH_SCALE: 0, STRETCH_TILE: 1, STRETCH_KEEP: 2, STRETCH_KEEP_CENTERED: 3, STRETCH_KEEP_ASPECT: 4, STRETCH_KEEP_ASPECT_CENTERED: 5, STRETCH_KEEP_ASPECT_COVERED: 6 } }
	});
	bind(godot.Theme, {
		DataType: { value: {DATA_TYPE_COLOR: 0, DATA_TYPE_CONSTANT: 1, DATA_TYPE_FONT: 2, DATA_TYPE_FONT_SIZE: 3, DATA_TYPE_ICON: 4, DATA_TYPE_STYLEBOX: 5, DATA_TYPE_MAX: 6 } }
	});
	bind(godot.ThemeDB, {});
	bind(godot.TileData, {});
	bind(godot.TileMap, {
		VisibilityMode: { value: {VISIBILITY_MODE_DEFAULT: 0, VISIBILITY_MODE_FORCE_HIDE: 2, VISIBILITY_MODE_FORCE_SHOW: 1 } }
	});
	bind(godot.TileMapPattern, {});
	bind(godot.TileSet, {
		TileShape: { value: {TILE_SHAPE_SQUARE: 0, TILE_SHAPE_ISOMETRIC: 1, TILE_SHAPE_HALF_OFFSET_SQUARE: 2, TILE_SHAPE_HEXAGON: 3 } }, 
		TileLayout: { value: {TILE_LAYOUT_STACKED: 0, TILE_LAYOUT_STACKED_OFFSET: 1, TILE_LAYOUT_STAIRS_RIGHT: 2, TILE_LAYOUT_STAIRS_DOWN: 3, TILE_LAYOUT_DIAMOND_RIGHT: 4, TILE_LAYOUT_DIAMOND_DOWN: 5 } }, 
		TileOffsetAxis: { value: {TILE_OFFSET_AXIS_HORIZONTAL: 0, TILE_OFFSET_AXIS_VERTICAL: 1 } }, 
		CellNeighbor: { value: {CELL_NEIGHBOR_RIGHT_SIDE: 0, CELL_NEIGHBOR_RIGHT_CORNER: 1, CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE: 2, CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER: 3, CELL_NEIGHBOR_BOTTOM_SIDE: 4, CELL_NEIGHBOR_BOTTOM_CORNER: 5, CELL_NEIGHBOR_BOTTOM_LEFT_SIDE: 6, CELL_NEIGHBOR_BOTTOM_LEFT_CORNER: 7, CELL_NEIGHBOR_LEFT_SIDE: 8, CELL_NEIGHBOR_LEFT_CORNER: 9, CELL_NEIGHBOR_TOP_LEFT_SIDE: 10, CELL_NEIGHBOR_TOP_LEFT_CORNER: 11, CELL_NEIGHBOR_TOP_SIDE: 12, CELL_NEIGHBOR_TOP_CORNER: 13, CELL_NEIGHBOR_TOP_RIGHT_SIDE: 14, CELL_NEIGHBOR_TOP_RIGHT_CORNER: 15 } }, 
		TerrainMode: { value: {TERRAIN_MODE_MATCH_CORNERS_AND_SIDES: 0, TERRAIN_MODE_MATCH_CORNERS: 1, TERRAIN_MODE_MATCH_SIDES: 2 } }
	});
	bind(godot.TileSetAtlasSource, {});
	bind(godot.TileSetScenesCollectionSource, {});
	bind(godot.TileSetSource, {});
	bind(godot.Time, {
		Month: { value: {MONTH_JANUARY: 1, MONTH_FEBRUARY: 2, MONTH_MARCH: 3, MONTH_APRIL: 4, MONTH_MAY: 5, MONTH_JUNE: 6, MONTH_JULY: 7, MONTH_AUGUST: 8, MONTH_SEPTEMBER: 9, MONTH_OCTOBER: 10, MONTH_NOVEMBER: 11, MONTH_DECEMBER: 12 } }, 
		Weekday: { value: {WEEKDAY_SUNDAY: 0, WEEKDAY_MONDAY: 1, WEEKDAY_TUESDAY: 2, WEEKDAY_WEDNESDAY: 3, WEEKDAY_THURSDAY: 4, WEEKDAY_FRIDAY: 5, WEEKDAY_SATURDAY: 6 } }
	});
	bind(godot.Timer, {
		TimerProcessCallback: { value: {TIMER_PROCESS_PHYSICS: 0, TIMER_PROCESS_IDLE: 1 } }
	});
	bind(godot.TorusMesh, {});
	bind(godot.TouchScreenButton, {
		VisibilityMode: { value: {VISIBILITY_ALWAYS: 0, VISIBILITY_TOUCHSCREEN_ONLY: 1 } }
	});
	bind(godot.Translation, {});
	bind(godot.TranslationServer, {});
	bind(godot.Tree, {
		SelectMode: { value: {SELECT_SINGLE: 0, SELECT_ROW: 1, SELECT_MULTI: 2 } }, 
		DropModeFlags: { value: {DROP_MODE_DISABLED: 0, DROP_MODE_ON_ITEM: 1, DROP_MODE_INBETWEEN: 2 } }
	});
	bind(godot.TreeItem, {
		TreeCellMode: { value: {CELL_MODE_STRING: 0, CELL_MODE_CHECK: 1, CELL_MODE_RANGE: 2, CELL_MODE_ICON: 3, CELL_MODE_CUSTOM: 4 } }
	});
	bind(godot.TriangleMesh, {});
	bind(godot.TubeTrailMesh, {});
	bind(godot.Tween, {
		TweenProcessMode: { value: {TWEEN_PROCESS_PHYSICS: 0, TWEEN_PROCESS_IDLE: 1 } }, 
		TweenPauseMode: { value: {TWEEN_PAUSE_BOUND: 0, TWEEN_PAUSE_STOP: 1, TWEEN_PAUSE_PROCESS: 2 } }, 
		TransitionType: { value: {TRANS_LINEAR: 0, TRANS_SINE: 1, TRANS_QUINT: 2, TRANS_QUART: 3, TRANS_QUAD: 4, TRANS_EXPO: 5, TRANS_ELASTIC: 6, TRANS_CUBIC: 7, TRANS_CIRC: 8, TRANS_BOUNCE: 9, TRANS_BACK: 10, TRANS_SPRING: 11 } }, 
		EaseType: { value: {EASE_IN: 0, EASE_OUT: 1, EASE_IN_OUT: 2, EASE_OUT_IN: 3 } }
	});
	bind(godot.Tweener, {});
	bind(godot.UDPServer, {});
	bind(godot.UPNP, {
		UPNPResult: { value: {UPNP_RESULT_SUCCESS: 0, UPNP_RESULT_NOT_AUTHORIZED: 1, UPNP_RESULT_PORT_MAPPING_NOT_FOUND: 2, UPNP_RESULT_INCONSISTENT_PARAMETERS: 3, UPNP_RESULT_NO_SUCH_ENTRY_IN_ARRAY: 4, UPNP_RESULT_ACTION_FAILED: 5, UPNP_RESULT_SRC_IP_WILDCARD_NOT_PERMITTED: 6, UPNP_RESULT_EXT_PORT_WILDCARD_NOT_PERMITTED: 7, UPNP_RESULT_INT_PORT_WILDCARD_NOT_PERMITTED: 8, UPNP_RESULT_REMOTE_HOST_MUST_BE_WILDCARD: 9, UPNP_RESULT_EXT_PORT_MUST_BE_WILDCARD: 10, UPNP_RESULT_NO_PORT_MAPS_AVAILABLE: 11, UPNP_RESULT_CONFLICT_WITH_OTHER_MECHANISM: 12, UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING: 13, UPNP_RESULT_SAME_PORT_VALUES_REQUIRED: 14, UPNP_RESULT_ONLY_PERMANENT_LEASE_SUPPORTED: 15, UPNP_RESULT_INVALID_GATEWAY: 16, UPNP_RESULT_INVALID_PORT: 17, UPNP_RESULT_INVALID_PROTOCOL: 18, UPNP_RESULT_INVALID_DURATION: 19, UPNP_RESULT_INVALID_ARGS: 20, UPNP_RESULT_INVALID_RESPONSE: 21, UPNP_RESULT_INVALID_PARAM: 22, UPNP_RESULT_HTTP_ERROR: 23, UPNP_RESULT_SOCKET_ERROR: 24, UPNP_RESULT_MEM_ALLOC_ERROR: 25, UPNP_RESULT_NO_GATEWAY: 26, UPNP_RESULT_NO_DEVICES: 27, UPNP_RESULT_UNKNOWN_ERROR: 28 } }
	});
	bind(godot.UPNPDevice, {
		IGDStatus: { value: {IGD_STATUS_OK: 0, IGD_STATUS_HTTP_ERROR: 1, IGD_STATUS_HTTP_EMPTY: 2, IGD_STATUS_NO_URLS: 3, IGD_STATUS_NO_IGD: 4, IGD_STATUS_DISCONNECTED: 5, IGD_STATUS_UNKNOWN_DEVICE: 6, IGD_STATUS_INVALID_CONTROL: 7, IGD_STATUS_MALLOC_ERROR: 8, IGD_STATUS_UNKNOWN_ERROR: 9 } }
	});
	bind(godot.UndoRedo, {
		MergeMode: { value: {MERGE_DISABLE: 0, MERGE_ENDS: 1, MERGE_ALL: 2 } }
	});
	bind(godot.VBoxContainer, {});
	bind(godot.VFlowContainer, {});
	bind(godot.VScrollBar, {});
	bind(godot.VSeparator, {});
	bind(godot.VSlider, {});
	bind(godot.VSplitContainer, {});
	bind(godot.VehicleBody3D, {});
	bind(godot.VehicleWheel3D, {});
	bind(godot.VideoStream, {});
	bind(godot.VideoStreamPlayback, {});
	bind(godot.VideoStreamPlayer, {});
	bind(godot.VideoStreamTheora, {});
	bind(godot.Viewport, {
		PositionalShadowAtlasQuadrantSubdiv: { value: {SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED: 0, SHADOW_ATLAS_QUADRANT_SUBDIV_1: 1, SHADOW_ATLAS_QUADRANT_SUBDIV_4: 2, SHADOW_ATLAS_QUADRANT_SUBDIV_16: 3, SHADOW_ATLAS_QUADRANT_SUBDIV_64: 4, SHADOW_ATLAS_QUADRANT_SUBDIV_256: 5, SHADOW_ATLAS_QUADRANT_SUBDIV_1024: 6, SHADOW_ATLAS_QUADRANT_SUBDIV_MAX: 7 } }, 
		Scaling3DMode: { value: {SCALING_3D_MODE_BILINEAR: 0, SCALING_3D_MODE_FSR: 1, SCALING_3D_MODE_MAX: 2 } }, 
		MSAA: { value: {MSAA_DISABLED: 0, MSAA_2X: 1, MSAA_4X: 2, MSAA_8X: 3, MSAA_MAX: 4 } }, 
		ScreenSpaceAA: { value: {SCREEN_SPACE_AA_DISABLED: 0, SCREEN_SPACE_AA_FXAA: 1, SCREEN_SPACE_AA_MAX: 2 } }, 
		RenderInfo: { value: {RENDER_INFO_OBJECTS_IN_FRAME: 0, RENDER_INFO_PRIMITIVES_IN_FRAME: 1, RENDER_INFO_DRAW_CALLS_IN_FRAME: 2, RENDER_INFO_MAX: 3 } }, 
		RenderInfoType: { value: {RENDER_INFO_TYPE_VISIBLE: 0, RENDER_INFO_TYPE_SHADOW: 1, RENDER_INFO_TYPE_MAX: 2 } }, 
		DebugDraw: { value: {DEBUG_DRAW_DISABLED: 0, DEBUG_DRAW_UNSHADED: 1, DEBUG_DRAW_LIGHTING: 2, DEBUG_DRAW_OVERDRAW: 3, DEBUG_DRAW_WIREFRAME: 4, DEBUG_DRAW_NORMAL_BUFFER: 5, DEBUG_DRAW_VOXEL_GI_ALBEDO: 6, DEBUG_DRAW_VOXEL_GI_LIGHTING: 7, DEBUG_DRAW_VOXEL_GI_EMISSION: 8, DEBUG_DRAW_SHADOW_ATLAS: 9, DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS: 10, DEBUG_DRAW_SCENE_LUMINANCE: 11, DEBUG_DRAW_SSAO: 12, DEBUG_DRAW_SSIL: 13, DEBUG_DRAW_PSSM_SPLITS: 14, DEBUG_DRAW_DECAL_ATLAS: 15, DEBUG_DRAW_SDFGI: 16, DEBUG_DRAW_SDFGI_PROBES: 17, DEBUG_DRAW_GI_BUFFER: 18, DEBUG_DRAW_DISABLE_LOD: 19, DEBUG_DRAW_CLUSTER_OMNI_LIGHTS: 20, DEBUG_DRAW_CLUSTER_SPOT_LIGHTS: 21, DEBUG_DRAW_CLUSTER_DECALS: 22, DEBUG_DRAW_CLUSTER_REFLECTION_PROBES: 23, DEBUG_DRAW_OCCLUDERS: 24, DEBUG_DRAW_MOTION_VECTORS: 25 } }, 
		DefaultCanvasItemTextureFilter: { value: {DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST: 0, DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR: 1, DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS: 2, DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS: 3, DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX: 4 } }, 
		DefaultCanvasItemTextureRepeat: { value: {DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED: 0, DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED: 1, DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR: 2, DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX: 3 } }, 
		SDFOversize: { value: {SDF_OVERSIZE_100_PERCENT: 0, SDF_OVERSIZE_120_PERCENT: 1, SDF_OVERSIZE_150_PERCENT: 2, SDF_OVERSIZE_200_PERCENT: 3, SDF_OVERSIZE_MAX: 4 } }, 
		SDFScale: { value: {SDF_SCALE_100_PERCENT: 0, SDF_SCALE_50_PERCENT: 1, SDF_SCALE_25_PERCENT: 2, SDF_SCALE_MAX: 3 } }, 
		VRSMode: { value: {VRS_DISABLED: 0, VRS_TEXTURE: 1, VRS_XR: 2, VRS_MAX: 3 } }
	});
	bind(godot.ViewportTexture, {});
	bind(godot.VisibleOnScreenEnabler2D, {
		EnableMode: { value: {ENABLE_MODE_INHERIT: 0, ENABLE_MODE_ALWAYS: 1, ENABLE_MODE_WHEN_PAUSED: 2 } }
	});
	bind(godot.VisibleOnScreenEnabler3D, {
		EnableMode: { value: {ENABLE_MODE_INHERIT: 0, ENABLE_MODE_ALWAYS: 1, ENABLE_MODE_WHEN_PAUSED: 2 } }
	});
	bind(godot.VisibleOnScreenNotifier2D, {});
	bind(godot.VisibleOnScreenNotifier3D, {});
	bind(godot.VisualInstance3D, {});
	bind(godot.VisualShader, {
		Type: { value: {TYPE_VERTEX: 0, TYPE_FRAGMENT: 1, TYPE_LIGHT: 2, TYPE_START: 3, TYPE_PROCESS: 4, TYPE_COLLIDE: 5, TYPE_START_CUSTOM: 6, TYPE_PROCESS_CUSTOM: 7, TYPE_SKY: 8, TYPE_FOG: 9, TYPE_MAX: 10 } }, 
		VaryingMode: { value: {VARYING_MODE_VERTEX_TO_FRAG_LIGHT: 0, VARYING_MODE_FRAG_TO_LIGHT: 1, VARYING_MODE_MAX: 2 } }, 
		VaryingType: { value: {VARYING_TYPE_FLOAT: 0, VARYING_TYPE_INT: 1, VARYING_TYPE_UINT: 2, VARYING_TYPE_VECTOR_2D: 3, VARYING_TYPE_VECTOR_3D: 4, VARYING_TYPE_VECTOR_4D: 5, VARYING_TYPE_BOOLEAN: 6, VARYING_TYPE_TRANSFORM: 7, VARYING_TYPE_MAX: 8 } }
	});
	bind(godot.VisualShaderNode, {
		PortType: { value: {PORT_TYPE_SCALAR: 0, PORT_TYPE_SCALAR_INT: 1, PORT_TYPE_SCALAR_UINT: 2, PORT_TYPE_VECTOR_2D: 3, PORT_TYPE_VECTOR_3D: 4, PORT_TYPE_VECTOR_4D: 5, PORT_TYPE_BOOLEAN: 6, PORT_TYPE_TRANSFORM: 7, PORT_TYPE_SAMPLER: 8, PORT_TYPE_MAX: 9 } }
	});
	bind(godot.VisualShaderNodeBillboard, {
		BillboardType: { value: {BILLBOARD_TYPE_DISABLED: 0, BILLBOARD_TYPE_ENABLED: 1, BILLBOARD_TYPE_FIXED_Y: 2, BILLBOARD_TYPE_PARTICLES: 3, BILLBOARD_TYPE_MAX: 4 } }
	});
	bind(godot.VisualShaderNodeBooleanConstant, {});
	bind(godot.VisualShaderNodeBooleanParameter, {});
	bind(godot.VisualShaderNodeClamp, {
		OpType: { value: {OP_TYPE_FLOAT: 0, OP_TYPE_INT: 1, OP_TYPE_UINT: 2, OP_TYPE_VECTOR_2D: 3, OP_TYPE_VECTOR_3D: 4, OP_TYPE_VECTOR_4D: 5, OP_TYPE_MAX: 6 } }
	});
	bind(godot.VisualShaderNodeColorConstant, {});
	bind(godot.VisualShaderNodeColorFunc, {
		Function: { value: {FUNC_GRAYSCALE: 0, FUNC_HSV2RGB: 1, FUNC_RGB2HSV: 2, FUNC_SEPIA: 3, FUNC_MAX: 4 } }
	});
	bind(godot.VisualShaderNodeColorOp, {
		Operator: { value: {OP_SCREEN: 0, OP_DIFFERENCE: 1, OP_DARKEN: 2, OP_LIGHTEN: 3, OP_OVERLAY: 4, OP_DODGE: 5, OP_BURN: 6, OP_SOFT_LIGHT: 7, OP_HARD_LIGHT: 8, OP_MAX: 9 } }
	});
	bind(godot.VisualShaderNodeColorParameter, {});
	bind(godot.VisualShaderNodeComment, {});
	bind(godot.VisualShaderNodeCompare, {
		ComparisonType: { value: {CTYPE_SCALAR: 0, CTYPE_SCALAR_INT: 1, CTYPE_SCALAR_UINT: 2, CTYPE_VECTOR_2D: 3, CTYPE_VECTOR_3D: 4, CTYPE_VECTOR_4D: 5, CTYPE_BOOLEAN: 6, CTYPE_TRANSFORM: 7, CTYPE_MAX: 8 } }, 
		Function: { value: {FUNC_EQUAL: 0, FUNC_NOT_EQUAL: 1, FUNC_GREATER_THAN: 2, FUNC_GREATER_THAN_EQUAL: 3, FUNC_LESS_THAN: 4, FUNC_LESS_THAN_EQUAL: 5, FUNC_MAX: 6 } }, 
		Condition: { value: {COND_ALL: 0, COND_ANY: 1, COND_MAX: 2 } }
	});
	bind(godot.VisualShaderNodeConstant, {});
	bind(godot.VisualShaderNodeCubemap, {
		Source: { value: {SOURCE_TEXTURE: 0, SOURCE_PORT: 1, SOURCE_MAX: 2 } }, 
		TextureType: { value: {TYPE_DATA: 0, TYPE_COLOR: 1, TYPE_NORMAL_MAP: 2, TYPE_MAX: 3 } }
	});
	bind(godot.VisualShaderNodeCubemapParameter, {});
	bind(godot.VisualShaderNodeCurveTexture, {});
	bind(godot.VisualShaderNodeCurveXYZTexture, {});
	bind(godot.VisualShaderNodeCustom, {});
	bind(godot.VisualShaderNodeDerivativeFunc, {
		OpType: { value: {OP_TYPE_SCALAR: 0, OP_TYPE_VECTOR_2D: 1, OP_TYPE_VECTOR_3D: 2, OP_TYPE_VECTOR_4D: 3, OP_TYPE_MAX: 4 } }, 
		Function: { value: {FUNC_SUM: 0, FUNC_X: 1, FUNC_Y: 2, FUNC_MAX: 3 } }, 
		Precision: { value: {PRECISION_NONE: 0, PRECISION_COARSE: 1, PRECISION_FINE: 2, PRECISION_MAX: 3 } }
	});
	bind(godot.VisualShaderNodeDeterminant, {});
	bind(godot.VisualShaderNodeDistanceFade, {});
	bind(godot.VisualShaderNodeDotProduct, {});
	bind(godot.VisualShaderNodeExpression, {});
	bind(godot.VisualShaderNodeFaceForward, {});
	bind(godot.VisualShaderNodeFloatConstant, {});
	bind(godot.VisualShaderNodeFloatFunc, {
		Function: { value: {FUNC_SIN: 0, FUNC_COS: 1, FUNC_TAN: 2, FUNC_ASIN: 3, FUNC_ACOS: 4, FUNC_ATAN: 5, FUNC_SINH: 6, FUNC_COSH: 7, FUNC_TANH: 8, FUNC_LOG: 9, FUNC_EXP: 10, FUNC_SQRT: 11, FUNC_ABS: 12, FUNC_SIGN: 13, FUNC_FLOOR: 14, FUNC_ROUND: 15, FUNC_CEIL: 16, FUNC_FRACT: 17, FUNC_SATURATE: 18, FUNC_NEGATE: 19, FUNC_ACOSH: 20, FUNC_ASINH: 21, FUNC_ATANH: 22, FUNC_DEGREES: 23, FUNC_EXP2: 24, FUNC_INVERSE_SQRT: 25, FUNC_LOG2: 26, FUNC_RADIANS: 27, FUNC_RECIPROCAL: 28, FUNC_ROUNDEVEN: 29, FUNC_TRUNC: 30, FUNC_ONEMINUS: 31, FUNC_MAX: 32 } }
	});
	bind(godot.VisualShaderNodeFloatOp, {
		Operator: { value: {OP_ADD: 0, OP_SUB: 1, OP_MUL: 2, OP_DIV: 3, OP_MOD: 4, OP_POW: 5, OP_MAX: 6, OP_MIN: 7, OP_ATAN2: 8, OP_STEP: 9, OP_ENUM_SIZE: 10 } }
	});
	bind(godot.VisualShaderNodeFloatParameter, {
		Hint: { value: {HINT_NONE: 0, HINT_RANGE: 1, HINT_RANGE_STEP: 2, HINT_MAX: 3 } }
	});
	bind(godot.VisualShaderNodeFresnel, {});
	bind(godot.VisualShaderNodeGlobalExpression, {});
	bind(godot.VisualShaderNodeGroupBase, {});
	bind(godot.VisualShaderNodeIf, {});
	bind(godot.VisualShaderNodeInput, {});
	bind(godot.VisualShaderNodeIntConstant, {});
	bind(godot.VisualShaderNodeIntFunc, {
		Function: { value: {FUNC_ABS: 0, FUNC_NEGATE: 1, FUNC_SIGN: 2, FUNC_BITWISE_NOT: 3, FUNC_MAX: 4 } }
	});
	bind(godot.VisualShaderNodeIntOp, {
		Operator: { value: {OP_ADD: 0, OP_SUB: 1, OP_MUL: 2, OP_DIV: 3, OP_MOD: 4, OP_MAX: 5, OP_MIN: 6, OP_BITWISE_AND: 7, OP_BITWISE_OR: 8, OP_BITWISE_XOR: 9, OP_BITWISE_LEFT_SHIFT: 10, OP_BITWISE_RIGHT_SHIFT: 11, OP_ENUM_SIZE: 12 } }
	});
	bind(godot.VisualShaderNodeIntParameter, {
		Hint: { value: {HINT_NONE: 0, HINT_RANGE: 1, HINT_RANGE_STEP: 2, HINT_MAX: 3 } }
	});
	bind(godot.VisualShaderNodeIs, {
		Function: { value: {FUNC_IS_INF: 0, FUNC_IS_NAN: 1, FUNC_MAX: 2 } }
	});
	bind(godot.VisualShaderNodeLinearSceneDepth, {});
	bind(godot.VisualShaderNodeMix, {
		OpType: { value: {OP_TYPE_SCALAR: 0, OP_TYPE_VECTOR_2D: 1, OP_TYPE_VECTOR_2D_SCALAR: 2, OP_TYPE_VECTOR_3D: 3, OP_TYPE_VECTOR_3D_SCALAR: 4, OP_TYPE_VECTOR_4D: 5, OP_TYPE_VECTOR_4D_SCALAR: 6, OP_TYPE_MAX: 7 } }
	});
	bind(godot.VisualShaderNodeMultiplyAdd, {
		OpType: { value: {OP_TYPE_SCALAR: 0, OP_TYPE_VECTOR_2D: 1, OP_TYPE_VECTOR_3D: 2, OP_TYPE_VECTOR_4D: 3, OP_TYPE_MAX: 4 } }
	});
	bind(godot.VisualShaderNodeOuterProduct, {});
	bind(godot.VisualShaderNodeOutput, {});
	bind(godot.VisualShaderNodeParameter, {
		Qualifier: { value: {QUAL_NONE: 0, QUAL_GLOBAL: 1, QUAL_INSTANCE: 2, QUAL_MAX: 3 } }
	});
	bind(godot.VisualShaderNodeParameterRef, {});
	bind(godot.VisualShaderNodeParticleAccelerator, {
		Mode: { value: {MODE_LINEAR: 0, MODE_RADIAL: 1, MODE_TANGENTIAL: 2, MODE_MAX: 3 } }
	});
	bind(godot.VisualShaderNodeParticleBoxEmitter, {});
	bind(godot.VisualShaderNodeParticleConeVelocity, {});
	bind(godot.VisualShaderNodeParticleEmit, {
		EmitFlags: { value: {EMIT_FLAG_POSITION: 1, EMIT_FLAG_ROT_SCALE: 2, EMIT_FLAG_VELOCITY: 4, EMIT_FLAG_COLOR: 8, EMIT_FLAG_CUSTOM: 16 } }
	});
	bind(godot.VisualShaderNodeParticleEmitter, {});
	bind(godot.VisualShaderNodeParticleMeshEmitter, {});
	bind(godot.VisualShaderNodeParticleMultiplyByAxisAngle, {});
	bind(godot.VisualShaderNodeParticleOutput, {});
	bind(godot.VisualShaderNodeParticleRandomness, {
		OpType: { value: {OP_TYPE_SCALAR: 0, OP_TYPE_VECTOR_2D: 1, OP_TYPE_VECTOR_3D: 2, OP_TYPE_VECTOR_4D: 3, OP_TYPE_MAX: 4 } }
	});
	bind(godot.VisualShaderNodeParticleRingEmitter, {});
	bind(godot.VisualShaderNodeParticleSphereEmitter, {});
	bind(godot.VisualShaderNodeProximityFade, {});
	bind(godot.VisualShaderNodeRandomRange, {});
	bind(godot.VisualShaderNodeRemap, {});
	bind(godot.VisualShaderNodeResizableBase, {});
	bind(godot.VisualShaderNodeSDFRaymarch, {});
	bind(godot.VisualShaderNodeSDFToScreenUV, {});
	bind(godot.VisualShaderNodeSample3D, {
		Source: { value: {SOURCE_TEXTURE: 0, SOURCE_PORT: 1, SOURCE_MAX: 2 } }
	});
	bind(godot.VisualShaderNodeScreenUVToSDF, {});
	bind(godot.VisualShaderNodeSmoothStep, {
		OpType: { value: {OP_TYPE_SCALAR: 0, OP_TYPE_VECTOR_2D: 1, OP_TYPE_VECTOR_2D_SCALAR: 2, OP_TYPE_VECTOR_3D: 3, OP_TYPE_VECTOR_3D_SCALAR: 4, OP_TYPE_VECTOR_4D: 5, OP_TYPE_VECTOR_4D_SCALAR: 6, OP_TYPE_MAX: 7 } }
	});
	bind(godot.VisualShaderNodeStep, {
		OpType: { value: {OP_TYPE_SCALAR: 0, OP_TYPE_VECTOR_2D: 1, OP_TYPE_VECTOR_2D_SCALAR: 2, OP_TYPE_VECTOR_3D: 3, OP_TYPE_VECTOR_3D_SCALAR: 4, OP_TYPE_VECTOR_4D: 5, OP_TYPE_VECTOR_4D_SCALAR: 6, OP_TYPE_MAX: 7 } }
	});
	bind(godot.VisualShaderNodeSwitch, {
		OpType: { value: {OP_TYPE_FLOAT: 0, OP_TYPE_INT: 1, OP_TYPE_UINT: 2, OP_TYPE_VECTOR_2D: 3, OP_TYPE_VECTOR_3D: 4, OP_TYPE_VECTOR_4D: 5, OP_TYPE_BOOLEAN: 6, OP_TYPE_TRANSFORM: 7, OP_TYPE_MAX: 8 } }
	});
	bind(godot.VisualShaderNodeTexture, {
		Source: { value: {SOURCE_TEXTURE: 0, SOURCE_SCREEN: 1, SOURCE_2D_TEXTURE: 2, SOURCE_2D_NORMAL: 3, SOURCE_DEPTH: 4, SOURCE_PORT: 5, SOURCE_3D_NORMAL: 6, SOURCE_ROUGHNESS: 7, SOURCE_MAX: 8 } }, 
		TextureType: { value: {TYPE_DATA: 0, TYPE_COLOR: 1, TYPE_NORMAL_MAP: 2, TYPE_MAX: 3 } }
	});
	bind(godot.VisualShaderNodeTexture2DArray, {});
	bind(godot.VisualShaderNodeTexture2DArrayParameter, {});
	bind(godot.VisualShaderNodeTexture2DParameter, {});
	bind(godot.VisualShaderNodeTexture3D, {});
	bind(godot.VisualShaderNodeTexture3DParameter, {});
	bind(godot.VisualShaderNodeTextureParameter, {
		TextureType: { value: {TYPE_DATA: 0, TYPE_COLOR: 1, TYPE_NORMAL_MAP: 2, TYPE_ANISOTROPY: 3, TYPE_MAX: 4 } }, 
		ColorDefault: { value: {COLOR_DEFAULT_WHITE: 0, COLOR_DEFAULT_BLACK: 1, COLOR_DEFAULT_TRANSPARENT: 2, COLOR_DEFAULT_MAX: 3 } }, 
		TextureFilter: { value: {FILTER_DEFAULT: 0, FILTER_NEAREST: 1, FILTER_LINEAR: 2, FILTER_NEAREST_MIPMAP: 3, FILTER_LINEAR_MIPMAP: 4, FILTER_NEAREST_MIPMAP_ANISOTROPIC: 5, FILTER_LINEAR_MIPMAP_ANISOTROPIC: 6, FILTER_MAX: 7 } }, 
		TextureRepeat: { value: {REPEAT_DEFAULT: 0, REPEAT_ENABLED: 1, REPEAT_DISABLED: 2, REPEAT_MAX: 3 } }, 
		TextureSource: { value: {SOURCE_NONE: 0, SOURCE_SCREEN: 1, SOURCE_DEPTH: 2, SOURCE_NORMAL_ROUGHNESS: 3, SOURCE_MAX: 4 } }
	});
	bind(godot.VisualShaderNodeTextureParameterTriplanar, {});
	bind(godot.VisualShaderNodeTextureSDF, {});
	bind(godot.VisualShaderNodeTextureSDFNormal, {});
	bind(godot.VisualShaderNodeTransformCompose, {});
	bind(godot.VisualShaderNodeTransformConstant, {});
	bind(godot.VisualShaderNodeTransformDecompose, {});
	bind(godot.VisualShaderNodeTransformFunc, {
		Function: { value: {FUNC_INVERSE: 0, FUNC_TRANSPOSE: 1, FUNC_MAX: 2 } }
	});
	bind(godot.VisualShaderNodeTransformOp, {
		Operator: { value: {OP_AxB: 0, OP_BxA: 1, OP_AxB_COMP: 2, OP_BxA_COMP: 3, OP_ADD: 4, OP_A_MINUS_B: 5, OP_B_MINUS_A: 6, OP_A_DIV_B: 7, OP_B_DIV_A: 8, OP_MAX: 9 } }
	});
	bind(godot.VisualShaderNodeTransformParameter, {});
	bind(godot.VisualShaderNodeTransformVecMult, {
		Operator: { value: {OP_AxB: 0, OP_BxA: 1, OP_3x3_AxB: 2, OP_3x3_BxA: 3, OP_MAX: 4 } }
	});
	bind(godot.VisualShaderNodeUIntConstant, {});
	bind(godot.VisualShaderNodeUIntFunc, {
		Function: { value: {FUNC_NEGATE: 0, FUNC_BITWISE_NOT: 1, FUNC_MAX: 2 } }
	});
	bind(godot.VisualShaderNodeUIntOp, {
		Operator: { value: {OP_ADD: 0, OP_SUB: 1, OP_MUL: 2, OP_DIV: 3, OP_MOD: 4, OP_MAX: 5, OP_MIN: 6, OP_BITWISE_AND: 7, OP_BITWISE_OR: 8, OP_BITWISE_XOR: 9, OP_BITWISE_LEFT_SHIFT: 10, OP_BITWISE_RIGHT_SHIFT: 11, OP_ENUM_SIZE: 12 } }
	});
	bind(godot.VisualShaderNodeUIntParameter, {});
	bind(godot.VisualShaderNodeUVFunc, {
		Function: { value: {FUNC_PANNING: 0, FUNC_SCALING: 1, FUNC_MAX: 2 } }
	});
	bind(godot.VisualShaderNodeUVPolarCoord, {});
	bind(godot.VisualShaderNodeVarying, {});
	bind(godot.VisualShaderNodeVaryingGetter, {});
	bind(godot.VisualShaderNodeVaryingSetter, {});
	bind(godot.VisualShaderNodeVec2Constant, {});
	bind(godot.VisualShaderNodeVec2Parameter, {});
	bind(godot.VisualShaderNodeVec3Constant, {});
	bind(godot.VisualShaderNodeVec3Parameter, {});
	bind(godot.VisualShaderNodeVec4Constant, {});
	bind(godot.VisualShaderNodeVec4Parameter, {});
	bind(godot.VisualShaderNodeVectorBase, {
		OpType: { value: {OP_TYPE_VECTOR_2D: 0, OP_TYPE_VECTOR_3D: 1, OP_TYPE_VECTOR_4D: 2, OP_TYPE_MAX: 3 } }
	});
	bind(godot.VisualShaderNodeVectorCompose, {});
	bind(godot.VisualShaderNodeVectorDecompose, {});
	bind(godot.VisualShaderNodeVectorDistance, {});
	bind(godot.VisualShaderNodeVectorFunc, {
		Function: { value: {FUNC_NORMALIZE: 0, FUNC_SATURATE: 1, FUNC_NEGATE: 2, FUNC_RECIPROCAL: 3, FUNC_ABS: 4, FUNC_ACOS: 5, FUNC_ACOSH: 6, FUNC_ASIN: 7, FUNC_ASINH: 8, FUNC_ATAN: 9, FUNC_ATANH: 10, FUNC_CEIL: 11, FUNC_COS: 12, FUNC_COSH: 13, FUNC_DEGREES: 14, FUNC_EXP: 15, FUNC_EXP2: 16, FUNC_FLOOR: 17, FUNC_FRACT: 18, FUNC_INVERSE_SQRT: 19, FUNC_LOG: 20, FUNC_LOG2: 21, FUNC_RADIANS: 22, FUNC_ROUND: 23, FUNC_ROUNDEVEN: 24, FUNC_SIGN: 25, FUNC_SIN: 26, FUNC_SINH: 27, FUNC_SQRT: 28, FUNC_TAN: 29, FUNC_TANH: 30, FUNC_TRUNC: 31, FUNC_ONEMINUS: 32, FUNC_MAX: 33 } }
	});
	bind(godot.VisualShaderNodeVectorLen, {});
	bind(godot.VisualShaderNodeVectorOp, {
		Operator: { value: {OP_ADD: 0, OP_SUB: 1, OP_MUL: 2, OP_DIV: 3, OP_MOD: 4, OP_POW: 5, OP_MAX: 6, OP_MIN: 7, OP_CROSS: 8, OP_ATAN2: 9, OP_REFLECT: 10, OP_STEP: 11, OP_ENUM_SIZE: 12 } }
	});
	bind(godot.VisualShaderNodeVectorRefract, {});
	bind(godot.VoxelGI, {
		Subdiv: { value: {SUBDIV_64: 0, SUBDIV_128: 1, SUBDIV_256: 2, SUBDIV_512: 3, SUBDIV_MAX: 4 } }
	});
	bind(godot.VoxelGIData, {});
	bind(godot.WeakRef, {});
	bind(godot.WebRTCDataChannel, {
		WriteMode: { value: {WRITE_MODE_TEXT: 0, WRITE_MODE_BINARY: 1 } }, 
		ChannelState: { value: {STATE_CONNECTING: 0, STATE_OPEN: 1, STATE_CLOSING: 2, STATE_CLOSED: 3 } }
	});
	bind(godot.WebRTCDataChannelExtension, {});
	bind(godot.WebRTCMultiplayerPeer, {});
	bind(godot.WebRTCPeerConnection, {
		ConnectionState: { value: {STATE_NEW: 0, STATE_CONNECTING: 1, STATE_CONNECTED: 2, STATE_DISCONNECTED: 3, STATE_FAILED: 4, STATE_CLOSED: 5 } }, 
		GatheringState: { value: {GATHERING_STATE_NEW: 0, GATHERING_STATE_GATHERING: 1, GATHERING_STATE_COMPLETE: 2 } }, 
		SignalingState: { value: {SIGNALING_STATE_STABLE: 0, SIGNALING_STATE_HAVE_LOCAL_OFFER: 1, SIGNALING_STATE_HAVE_REMOTE_OFFER: 2, SIGNALING_STATE_HAVE_LOCAL_PRANSWER: 3, SIGNALING_STATE_HAVE_REMOTE_PRANSWER: 4, SIGNALING_STATE_CLOSED: 5 } }
	});
	bind(godot.WebRTCPeerConnectionExtension, {});
	bind(godot.WebSocketMultiplayerPeer, {});
	bind(godot.WebSocketPeer, {
		WriteMode: { value: {WRITE_MODE_TEXT: 0, WRITE_MODE_BINARY: 1 } }, 
		State: { value: {STATE_CONNECTING: 0, STATE_OPEN: 1, STATE_CLOSING: 2, STATE_CLOSED: 3 } }
	});
	bind(godot.WebXRInterface, {
		TargetRayMode: { value: {TARGET_RAY_MODE_UNKNOWN: 0, TARGET_RAY_MODE_GAZE: 1, TARGET_RAY_MODE_TRACKED_POINTER: 2, TARGET_RAY_MODE_SCREEN: 3 } }
	});
	bind(godot.Window, {
		Mode: { value: {MODE_WINDOWED: 0, MODE_MINIMIZED: 1, MODE_MAXIMIZED: 2, MODE_FULLSCREEN: 3, MODE_EXCLUSIVE_FULLSCREEN: 4 } }, 
		Flags: { value: {FLAG_RESIZE_DISABLED: 0, FLAG_BORDERLESS: 1, FLAG_ALWAYS_ON_TOP: 2, FLAG_TRANSPARENT: 3, FLAG_NO_FOCUS: 4, FLAG_POPUP: 5, FLAG_EXTEND_TO_TITLE: 6, FLAG_MOUSE_PASSTHROUGH: 7, FLAG_MAX: 8 } }, 
		ContentScaleMode: { value: {CONTENT_SCALE_MODE_DISABLED: 0, CONTENT_SCALE_MODE_CANVAS_ITEMS: 1, CONTENT_SCALE_MODE_VIEWPORT: 2 } }, 
		ContentScaleAspect: { value: {CONTENT_SCALE_ASPECT_IGNORE: 0, CONTENT_SCALE_ASPECT_KEEP: 1, CONTENT_SCALE_ASPECT_KEEP_WIDTH: 2, CONTENT_SCALE_ASPECT_KEEP_HEIGHT: 3, CONTENT_SCALE_ASPECT_EXPAND: 4 } }, 
		LayoutDirection: { value: {LAYOUT_DIRECTION_INHERITED: 0, LAYOUT_DIRECTION_LOCALE: 1, LAYOUT_DIRECTION_LTR: 2, LAYOUT_DIRECTION_RTL: 3 } }, 
		WindowInitialPosition: { value: {WINDOW_INITIAL_POSITION_ABSOLUTE: 0, WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN: 1, WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN: 2, WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN: 3, WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS: 4, WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS: 5 } }
	});
	bind(godot.WorkerThreadPool, {});
	bind(godot.World2D, {});
	bind(godot.World3D, {});
	bind(godot.WorldBoundaryShape2D, {});
	bind(godot.WorldBoundaryShape3D, {});
	bind(godot.WorldEnvironment, {});
	bind(godot.X509Certificate, {});
	bind(godot.XMLParser, {
		NodeType: { value: {NODE_NONE: 0, NODE_ELEMENT: 1, NODE_ELEMENT_END: 2, NODE_TEXT: 3, NODE_COMMENT: 4, NODE_CDATA: 5, NODE_UNKNOWN: 6 } }
	});
	bind(godot.XRAnchor3D, {});
	bind(godot.XRCamera3D, {});
	bind(godot.XRController3D, {});
	bind(godot.XRInterface, {
		Capabilities: { value: {XR_NONE: 0, XR_MONO: 1, XR_STEREO: 2, XR_QUAD: 4, XR_VR: 8, XR_AR: 16, XR_EXTERNAL: 32 } }, 
		TrackingStatus: { value: {XR_NORMAL_TRACKING: 0, XR_EXCESSIVE_MOTION: 1, XR_INSUFFICIENT_FEATURES: 2, XR_UNKNOWN_TRACKING: 3, XR_NOT_TRACKING: 4 } }, 
		PlayAreaMode: { value: {XR_PLAY_AREA_UNKNOWN: 0, XR_PLAY_AREA_3DOF: 1, XR_PLAY_AREA_SITTING: 2, XR_PLAY_AREA_ROOMSCALE: 3, XR_PLAY_AREA_STAGE: 4 } }, 
		EnvironmentBlendMode: { value: {XR_ENV_BLEND_MODE_OPAQUE: 0, XR_ENV_BLEND_MODE_ADDITIVE: 1, XR_ENV_BLEND_MODE_ALPHA_BLEND: 2 } }
	});
	bind(godot.XRInterfaceExtension, {});
	bind(godot.XRNode3D, {});
	bind(godot.XROrigin3D, {});
	bind(godot.XRPose, {
		TrackingConfidence: { value: {XR_TRACKING_CONFIDENCE_NONE: 0, XR_TRACKING_CONFIDENCE_LOW: 1, XR_TRACKING_CONFIDENCE_HIGH: 2 } }
	});
	bind(godot.XRPositionalTracker, {
		TrackerHand: { value: {TRACKER_HAND_UNKNOWN: 0, TRACKER_HAND_LEFT: 1, TRACKER_HAND_RIGHT: 2 } }
	});
	bind(godot.XRServer, {
		TrackerType: { value: {TRACKER_HEAD: 1, TRACKER_CONTROLLER: 2, TRACKER_BASESTATION: 4, TRACKER_ANCHOR: 8, TRACKER_ANY_KNOWN: 127, TRACKER_UNKNOWN: 128, TRACKER_ANY: 255 } }, 
		RotationMode: { value: {RESET_FULL_ROTATION: 0, RESET_BUT_KEEP_TILT: 1, DONT_RESET_ROTATION: 2 } }
	});
	bind(godot.ZIPPacker, {
		ZipAppend: { value: {APPEND_CREATE: 0, APPEND_CREATEAFTER: 1, APPEND_ADDINZIP: 2 } }
	});
	bind(godot.ZIPReader, {});
	bind(godot.ProjectSettings, {});
	bind(godot.Vector2i, {});
	bind(godot.Rect2i, {});
	bind(godot.Vector3i, {});
	bind(godot.Vector4, {});
	bind(godot.Vector4i, {});
	bind(godot.Projection, {});
	bind(godot.StringName, {});
	bind(godot.Callable, {});
	bind(godot.Signal, {});
	bind(godot.PackedInt64Array, {});
	bind(godot.PackedFloat64Array, {});
	bind(godot, {});
}
export default class extends godot.Node {};
