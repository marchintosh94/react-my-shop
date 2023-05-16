export const useCloudinary = () => {

  const openWidget = (): Promise<{ img: string, tmb: string }> => {
    return new Promise((resolve, reject) => {
      const uploadWidget = window.cloudinary.openUploadWidget(
        {
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUDNAME,
          uploadPreset: import.meta.env.VITE_CLOUDINARY_PRESET,
          sources: ['local', 'camera', 'url']
        },
        function(error: any, result: any) {
          if (!error && result.event === 'success') {
            const img = result.info.url;
            const tmb = result.info.thumbnail_url;
            resolve({ img, tmb })
          }
        }
      )

      uploadWidget.open();
    })

  }

  return {
    openWidget
  }
}