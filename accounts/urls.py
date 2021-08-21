from django.urls import path
from .views import (MyTokenObtainPairView,
                    registerUser,
                    users,
                    userDetails,
                    )


urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view()),
    path('register/', registerUser),
    path('', users),
    path('<str:pk>/', userDetails),
]
