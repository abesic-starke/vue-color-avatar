import { WidgetType } from '@/enums'

export default {
  action: {
    undo: 'rückgangig machen',
    redo: 'wiederholen',
    flip: 'umdrehen',
    code: 'code',
    randomize: 'Zufallsauswahl',
    download: 'Herunterladen',
    downloadMultiple: 'Generate multiple',
    copyCode: 'Kopieren',
    copied: 'Kopiert!',
    downloading: 'Wird herundergeladen',
    close: 'Schließen',
  },
  label: {
    wrapperShape: 'Avatar Form',
    backgroundColor: 'Hintergrundfarbe',
    colors: 'farben',
  },
  widgetType: {
    [WidgetType.Face]: 'Gesicht',
    [WidgetType.Tops]: 'Haar',
    [WidgetType.Ear]: 'Ohr',
    [WidgetType.Earrings]: 'Ohrringe',
    [WidgetType.Eyebrows]: 'Augenbrauen',
    [WidgetType.Eyes]: 'Augen',
    [WidgetType.Nose]: 'Nasen',
    [WidgetType.Glasses]: 'Gläser',
    [WidgetType.Mouth]: 'Mund',
    [WidgetType.Beard]: 'Bard',
    [WidgetType.Clothes]: 'Klamotten',
  },
  wrapperShape: {
    circle: 'Kreis',
    square: 'Viereck',
    squircle: 'Squircle',
  },
  text: {
    codeModalTitle: 'Code',
    downloadTip: 'LONG PRESS or RIGHT CLICK to save',
    downloadMultiple: 'Download All',
    downloadingMultiple: 'Downloading',
    downloadMultipleTip: 'Automatically generated',
    regenerate: 'Regenerieren',
  },
}
