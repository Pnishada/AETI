from rest_framework import routers
from .views import DownloadViewSet

router = routers.DefaultRouter()
router.register(r'downloads', DownloadViewSet, basename='download')

urlpatterns = router.urls
